# Test Cases: Примеры кода для Websoft HCM (Эвола)

Этот файл содержит тест-кейсы, на основе которых необходимо создать файлы в `code_examples/`.
Каждый кейс описывает: задачу, каталоги/контексты, ключевую логику, ожидаемый результат.

---

## Структура файлов (куда класть)

```
code_examples/
├── agents/
│   ├── Агент напоминания о незавершённых курсах.js
│   ├── Агент уведомления о просроченных тестах.js
│   └── Агент синхронизации данных объектов.js
├── collections/
│   ├── Выборка сотрудников по подразделению и должности.js
│   ├── Выборка завершённых курсов по подразделению.js
│   ├── Выборка планов оценки по процедуре.js
│   ├── Выборка анкет по сотруднику.js
│   └── Выборка сотрудников по организации и типовой должности.js
├── remote_actions/
│   ├── Удалённое действие обновление данных объекта.js
│   ├── Удалённое действие назначение курса сотрудникам.js
│   └── Удалённое действие установка отметки на плане оценки.js
├── code_libraries/
│   ├── Библиотека работы с иерархией подразделений.js
│   └── Библиотека вспомогательных функций для сотрудников.js
└── reports/
    ├── Отчёт по завершённым курсам по подразделениям.js
    ├── Отчёт по прохождению тестов.js
    ├── Отчёт по штатному расписанию (ПШР).js
    └── Отчёт по планам оценки.js
```

---

## 1. АГЕНТЫ

### TC-AGT-01: Агент напоминания о незавершённых курсах

**Файл**: `agents/Агент напоминания о незавершённых курсах.js`

**Назначение**: Ежедневно проверяет незавершённые курсы (`active_learnings`), у которых до дедлайна осталось ≤ N дней (задаётся параметром `Param.iDaysBeforeDeadline`). Отправляет уведомление сотруднику и его непосредственному руководителю.

**Каталоги**:
- `active_learnings` — выборка незавершённых курсов с `person_id`, `course_id`, `learning_end_date`
- `collaborators` — пакетная загрузка для получения `position_parent_id` (подразделение)
- `courses` — пакетная загрузка для получения названия курса

**Параметры агента** (через `Param`):
- `Param.iDaysBeforeDeadline` — количество дней до дедлайна (по умолчанию: 7)
- `Param.sNotifCode` — код шаблона уведомления

**Логика**:
1. Считать параметр `iDaysBeforeDeadline` через `OptInt(Param.iDaysBeforeDeadline, 7)`.
2. Вычислить пороговую дату: `DateOffset(DateNewTime(Date()), iDaysBeforeDeadline * 86400)`.
3. XQuery в `active_learnings`: `learning_end_date <= пороговаяДата AND learning_end_date > сегодня`.
4. Собрать `person_id` → пакетный запрос в `collaborators` → `position_parent_id`.
5. Для каждого: найти руководителя через `tools.get_main_boss_by_person_id(iPersonID)`.
6. Отправить уведомления сотруднику и руководителю через `tools.create_notification`.
7. Логировать каждую отправку и итог.

**Флаги уже отправленных уведомлений**: хранятся в `custom_elems` записи `active_learning` (поле `notif_sent`), чтобы не дублировать.

**Ожидаемый результат**: Файл агента с функцией `main()`, оборачивающей всей логикой; вызов `main()` в стандартном шаблоне с `EnableLog`.

---

### TC-AGT-02: Агент уведомления о просроченных незавершённых тестах

**Файл**: `agents/Агент уведомления о просроченных тестах.js`

**Назначение**: Находит незавершённые тесты (`active_test_learnings`), у которых дедлайн уже прошёл, и уведомляет HR-менеджера подразделения.

**Каталоги**:
- `active_test_learnings` — поля: `person_id`, `test_id`, `end_learning_date`, `score`
- `collaborators` — пакетная загрузка: `id`, `position_parent_id`, `fullname`
- `subdivisions` — получить `parent_object_id` для рекурсивного поиска HR

**Параметры агента**:
- `Param.sHRBossTypeCode` — код типа руководителя HR (например, `'hrbp'`)
- `Param.sNotifCode` — код шаблона уведомления об истечении срока теста

**Логика**:
1. XQuery в `active_test_learnings`: `end_learning_date < сегодня`.
2. Пакетная загрузка `collaborators` по собранным `person_id` (поля `id`, `position_parent_id`).
3. Найти ID `boss_type` для HR через `boss_types where code = Param.sHRBossTypeCode`.
4. Для каждого просроченного теста — использовать функцию `GetHRForPerson` (рекурсия по иерархии подразделений, как в агенте по планам оценки).
5. Отправить уведомление HR. Записать флаг в `custom_elems` записи active_test_learning — `overdue_notif_sent = true`.
6. Сохранить документ `active_test_learning`.

**Ожидаемый результат**: Агент с функцией поиска HR по иерархии, пакетной загрузкой данных, флагами идемпотентности.

---

### TC-AGT-03: Агент синхронизации данных объектов (object_datas)

**Файл**: `agents/Агент синхронизации данных объектов.js`

**Назначение**: Перебирает сотрудников, у которых нет записи в `object_datas` определённого типа (`object_data_type_id`), и создаёт пустую запись-заглушку для последующего заполнения.

**Каталоги**:
- `collaborators` — все активные сотрудники (фильтр `is_dismissed = 0`), поля `id`
- `object_datas` — проверить наличие записи по `person_id` и `object_data_type_id`
- `object_data_types` — найти нужный тип по коду

**Параметры агента**:
- `Param.sObjectDataTypeCode` — код типа данных объекта

**Логика**:
1. Найти `object_data_type_id` по коду: XQuery в `object_data_types`.
2. Выбрать всех активных сотрудников из `collaborators` (поле `id`).
3. Пакетный запрос в `object_datas`: `MatchSome($elem/person_id, (ids...)) and $elem/object_data_type_id = iTypeID` — получить уже существующие `person_id`.
4. Вычислить разницу: сотрудники без записи = все_сотрудники - имеющие_запись.
5. Для каждого «нового» сотрудника: `tools.new_doc_by_name('object_data')` → заполнить `person_id`, `object_data_type_id` → `BindToDb()` → `Save()`.
6. Логировать количество созданных записей.

**Ожидаемый результат**: Агент с антипаттерном «не создавать дубли», правильным BindToDb, пакетной проверкой существования.

---

## 2. ВЫБОРКИ (COLLECTIONS)

> Выборки — это скрипты, возвращающие массив данных через объект `Parameters`. Параметры доступны через `Parameters.ИмяПараметра`.

### TC-COL-01: Выборка сотрудников по подразделению и должности

**Файл**: `collections/Выборка сотрудников по подразделению и должности.js`

**Назначение**: Возвращает список сотрудников с фильтрацией по подразделению (`subdivision_id`) и/или типовой должности (`appointment_type_id`). Оба фильтра опциональны.

**Каталоги**:
- `collaborators` — `id`, `fullname`, `position_name`, `position_parent_id`, `org_name`
- `appointment_types` — для валидации/отображения типовой должности

**Параметры** (через `Parameters`):
- `Parameters.iSubdivisionID` — ID подразделения (опционально)
- `Parameters.iAppointmentTypeID` — ID типовой должности (опционально)
- `Parameters.bIncludeDismissed` — включать уволенных (по умолчанию `false`)

**Логика**:
1. Считать параметры через `OptInt(Parameters.iSubdivisionID)`.
2. Динамически собрать условия XQuery (через конкатенацию строки `sWhere`).
3. Если `iSubdivisionID` задан: добавить `$elem/position_parent_id = iSubdivisionID`.
4. Если `iAppointmentTypeID` задан: добавить `$elem/appointment_type_id = iAppointmentTypeID`.
5. Если `!bIncludeDismissed`: добавить `$elem/is_dismissed = 0`.
6. Выполнить XQuery с `return $elem/Fields('id', 'fullname', 'position_name', 'position_parent_id', 'org_name', 'hire_date')`.
7. Вернуть результат.

**Ожидаемый результат**: Файл выборки с динамической сборкой условий, без XQuery внутри цикла.

---

### TC-COL-02: Выборка завершённых курсов по подразделению

**Файл**: `collections/Выборка завершённых курсов по подразделению.js`

**Назначение**: Для отчётности — возвращает завершённые курсы (`learnings`) по сотрудникам заданного подразделения с указанием оценки и даты завершения.

**Каталоги**:
- `learnings` — `id`, `person_id`, `person_fullname`, `course_id`, `course_name`, `score`, `last_usage_date`, `is_passed`
- `collaborators` — пакетная загрузка для фильтрации по `position_parent_id`

**Параметры**:
- `Parameters.iSubdivisionID` — ID подразделения (обязательный)
- `Parameters.dDateFrom` — начало периода (опционально)
- `Parameters.dDateTo` — конец периода (опционально)

**Логика**:
1. Считать `iSubdivisionID` — если пусто, вернуть пустой массив и залогировать.
2. XQuery в `collaborators where $c/position_parent_id = iSubdivisionID` → список `person_id`.
3. Если список пуст — вернуть пустой массив.
4. Собрать строку ID через `ArrayMerge`.
5. XQuery в `learnings where MatchSome($l/person_id, (ids...))` + фильтр по датам.
6. Вернуть поля: `id`, `person_fullname`, `course_name`, `score`, `last_usage_date`, `is_passed`.

**Ожидаемый результат**: Выборка с двухступенчатым запросом (сначала сотрудники, потом обучения), без XQuery в цикле.

---

### TC-COL-03: Выборка планов оценки по процедуре

**Файл**: `collections/Выборка планов оценки по процедуре.js`

**Назначение**: Возвращает планы оценки (`assessment_plans`) по заданной оценочной процедуре (`assessment_appraises`) с фильтрацией по статусу workflow.

**Каталоги**:
- `assessment_plans` — `id`, `person_id`, `assessment_appraise_id`, `workflow_state`, `start_date`, `end_date`
- `assessment_appraises` — для получения названия процедуры

**Параметры**:
- `Parameters.iAssessmentAppraiseID` — ID оценочной процедуры (обязательный)
- `Parameters.sWorkflowState` — фильтр по статусу (опционально, например `'active'`)

**Логика**:
1. Считать `iAssessmentAppraiseID` — обязательный параметр, без него вернуть пусто.
2. Получить название процедуры из `assessment_appraises` — один запрос.
3. XQuery в `assessment_plans where $ap/assessment_appraise_id = iAssessmentAppraiseID`.
4. Если `sWorkflowState` задан — добавить условие `and $ap/workflow_state = 'sWorkflowState'`.
5. Вернуть: `id`, `person_id`, `workflow_state`, `start_date`, `end_date`.

**Ожидаемый результат**: Аккуратная динамическая сборка условий, проверка параметров через `IsEmptyValue`.

---

### TC-COL-04: Выборка анкет (PAS) по сотруднику

**Файл**: `collections/Выборка анкет по сотруднику.js`

**Назначение**: Возвращает список анкет (`pas`), связанных с конкретным сотрудником, с указанием даты заполнения и статуса.

**Каталоги**:
- `pas` — `id`, `name`, `person_id`, `assessment_appraise_id`, `workflow_state`, `create_date`
- `assessment_appraises` — пакетная загрузка для получения названий оценочных процедур

**Параметры**:
- `Parameters.iPersonID` — ID сотрудника (обязательный)
- `Parameters.iAssessmentAppraiseID` — фильтр по процедуре (опционально)

**Логика**:
1. Считать и проверить `iPersonID`.
2. XQuery в `pas where $p/person_id = iPersonID` + опциональный фильтр по процедуре.
3. Из результата собрать уникальные `assessment_appraise_id`.
4. Пакетный запрос в `assessment_appraises` через `MatchSome` → получить названия процедур.
5. Обогатить результат названием процедуры через `ArrayOptFindByKey`.

**Ожидаемый результат**: Двухступенчатое обогащение данных без XQuery в цикле.

---

### TC-COL-05: Выборка сотрудников по организации и типовой должности

**Файл**: `collections/Выборка сотрудников по организации и типовой должности.js`

**Назначение**: Возвращает сотрудников, отфильтрованных по организации (`orgs`) и типовой должности (`appointment_types`). Дополнительно отображает название должности из ПШР (`staff_positions`).

**Каталоги**:
- `collaborators` — `id`, `fullname`, `org_id`, `appointment_type_id`, `staff_position_id`, `position_name`
- `orgs` — проверка/получение названия организации
- `appointment_types` — проверка типовой должности
- `staff_positions` — пакетная загрузка названий штатных позиций

**Параметры**:
- `Parameters.iOrgID` — ID организации (обязательный)
- `Parameters.iAppointmentTypeID` — ID типовой должности (опционально)

**Логика**:
1. Проверить `iOrgID` — обязательный.
2. Получить название организации из `orgs` (один запрос).
3. XQuery в `collaborators where $c/org_id = iOrgID and $c/is_dismissed = 0`.
4. Если задан `iAppointmentTypeID` — добавить `and $c/appointment_type_id = iAppointmentTypeID`.
5. Пакетная загрузка `staff_positions` по `staff_position_id` из результата.
6. Обогатить каждую запись названием штатной позиции.

**Ожидаемый результат**: Многоступенчатая выборка с MatchSome, без XQuery в цикле.

---

## 3. УДАЛЁННЫЕ ДЕЙСТВИЯ (REMOTE ACTIONS)

> В удалённых действиях параметры доступны напрямую по именам (WVARS).
> `OBJECT_ID` — ID текущего объекта, `SELECTED_OBJECT_IDS` — список ID через `;`.

### TC-RA-01: Обновление данных объекта (object_datas)

**Файл**: `remote_actions/Удалённое действие обновление данных объекта.js`

**Назначение**: Открывается на карточке сотрудника. По `OBJECT_ID` (ID сотрудника) обновляет или создаёт запись в `object_datas` для заданного типа данных.

**Параметры (WVARS)**:
- `OBJECT_ID` — ID сотрудника
- `sObjectDataTypeCode` — код типа данных объекта
- `sValue` — новое значение для записи

**Логика**:
1. Считать `iPersonID = OptInt(OBJECT_ID)` — если пусто, завершить с ошибкой.
2. Найти `object_data_type_id` по `sObjectDataTypeCode` из `object_data_types`.
3. Найти существующую запись в `object_datas where person_id = iPersonID and object_data_type_id = iTypeID`.
4. Если найдена — открыть через `tools.open_doc(iExistingID)`, обновить значение, `Save()`.
5. Если не найдена — создать новую через `tools.new_doc_by_name('object_data')`, заполнить поля, `BindToDb()`, `Save()`.
6. Вернуть результат операции (создана/обновлена).

**Ожидаемый результат**: Паттерн upsert (создать или обновить), правильная работа с BindToDb.

---

### TC-RA-02: Назначение курса выбранным сотрудникам

**Файл**: `remote_actions/Удалённое действие назначение курса сотрудникам.js`

**Назначение**: Действие вызывается из списка сотрудников. По `SELECTED_OBJECT_IDS` назначает выбранным сотрудникам курс (создаёт записи в `active_learnings`).

**Параметры (WVARS)**:
- `SELECTED_OBJECT_IDS` — ID сотрудников через `;`
- `iCourseID` — ID курса для назначения
- `dEndDate` — дата окончания обучения (опционально)

**Логика**:
1. Разбить `SELECTED_OBJECT_IDS` по `;` → получить массив ID сотрудников.
2. Проверить `iCourseID` — обязательный.
3. Проверить, что курс существует: XQuery в `courses where id = iCourseID`.
4. Пакетная загрузка уже существующих назначений: XQuery в `active_learnings where MatchSome($al/person_id, (ids...)) and $al/course_id = iCourseID` — чтобы не создавать дубли.
5. Для каждого сотрудника без существующего назначения: создать запись `active_learning` через `tools.new_doc_by_name`, заполнить `person_id`, `course_id`, `learning_end_date` → `BindToDb()` → `Save()`.
6. Логировать: сколько назначено, сколько уже было.

**Ожидаемый результат**: Корректная обработка `SELECTED_OBJECT_IDS`, проверка дублей через MatchSome, BindToDb.

---

### TC-RA-03: Установка отметки на плане оценки

**Файл**: `remote_actions/Удалённое действие установка отметки на плане оценки.js`

**Назначение**: Вызывается на карточке плана оценки (`assessment_plans`). Устанавливает кастомный флаг в `custom_elems` и отправляет уведомление сотруднику.

**Параметры (WVARS)**:
- `OBJECT_ID` — ID плана оценки
- `sFlag` — имя флага в `custom_elems`
- `sNotifCode` — код уведомления для отправки

**Логика**:
1. Считать `iPlanID = OptInt(OBJECT_ID)`.
2. Открыть план: `tools.open_doc(iPlanID)` в try-catch.
3. Получить `iPersonID` из `tePlan.person_id`.
4. Установить флаг: `tePlan.custom_elems.ObtainChildByKey(sFlag).value = true`.
5. Если задан `sNotifCode` и `iPersonID` — создать уведомление через `tools.create_notification`.
6. `docPlan.Save()`.

**Ожидаемый результат**: Минимальное действие на карточке, работа с custom_elems, уведомления.

---

## 4. БИБЛИОТЕКИ ПРОГРАММНОГО КОДА

> В библиотеках параметры получаются через `tools.get_params_code_library('код_библиотеки')`.
> Библиотека экспортирует функции, доступные другим скриптам.

### TC-LIB-01: Библиотека работы с иерархией подразделений

**Файл**: `code_libraries/Библиотека работы с иерархией подразделений.js`

**Назначение**: Набор утилит для работы с деревом подразделений — получение всех дочерних подразделений, поиск руководителя по типу, получение полного пути.

**Параметры библиотеки** (`tools.get_params_code_library`):
- `maxRecursionDepth` — максимальная глубина рекурсии (по умолчанию 50)

**Каталоги**:
- `subdivisions` — `id`, `name`, `parent_object_id`, `org_id`
- `func_managers` — `person_id`, `boss_type_id`, `object_id`, `catalog`
- `boss_types` — `id`, `code`, `name`
- `orgs` — для получения названия организации

**Экспортируемые функции**:

1. `GetAllChildSubdivisions(iSubdivisionID)` — возвращает массив всех дочерних ID (рекурсивно).
   - Получить детей через XQuery в `subdivisions where parent_object_id = iSubdivisionID`.
   - Рекурсивно собрать все дочерние.

2. `GetManagersByBossType(iSubdivisionID, sBossTypeCode)` — возвращает массив `person_id` руководителей заданного типа.
   - Найти `boss_type_id` по коду из `boss_types`.
   - XQuery в `func_managers where catalog='subdivision' and object_id=iSubdivisionID and boss_type_id=iBossTypeID`.

3. `GetSubdivisionPath(iSubdivisionID)` — возвращает строку вида «Орг / Департамент / Отдел».
   - Рекурсивно подниматься по `parent_object_id` до корня.
   - Собирать массив имён, перевернуть, соединить через ` / `.

4. `FindHRInHierarchy(iSubdivisionID, iBossTypeID, iDepth)` — рекурсивный поиск HR вверх по иерархии (аналог функции из агента по планам оценки, но обобщённый).

**Ожидаемый результат**: Чистая библиотека с функциями, читающими параметры из `tools.get_params_code_library`, без XQuery в циклах (используются рекурсия с пакетной проверкой).

---

### TC-LIB-02: Библиотека вспомогательных функций для сотрудников

**Файл**: `code_libraries/Библиотека вспомогательных функций для сотрудников.js`

**Назначение**: Утилиты для получения данных о сотруднике — должность, организация, подразделение, тип должности. Также функции для проверки статусов обучений.

**Каталоги**:
- `collaborators` — основные данные
- `positions` — детали должности
- `staff_positions` — ПШР (штатное расписание)
- `appointment_types` — типовая должность
- `orgs` — организация
- `subdivisions` — подразделение
- `learnings` — завершённые курсы
- `test_learnings` — завершённые тесты

**Экспортируемые функции**:

1. `GetCollaboratorInfo(iPersonID)` — возвращает объект с полной информацией о сотруднике (должность, орг, подразделение, тип должности, ПШР).
   - XQuery по ID из `collaborators`.
   - Затем через `.ForeignElem` или дополнительные запросы обогатить данными.

2. `GetPassedCourses(iPersonID, iCourseID)` — проверяет, прошёл ли сотрудник конкретный курс (поиск в `learnings`).
   - Возвращает объект записи или `undefined`.

3. `GetPassedTests(iPersonID, iTestID)` — аналог для тестов (`test_learnings`).

4. `GetActiveCoursesCount(iPersonID)` — считает незавершённые курсы сотрудника из `active_learnings`.

5. `GetActiveTestsCount(iPersonID)` — считает незавершённые тесты из `active_test_learnings`.

6. `GetAppointmentTypeByStaffPosition(iStaffPositionID)` — через `staff_positions` получить `appointment_type_id`, затем из `appointment_types` вернуть объект типовой должности.

**Ожидаемый результат**: Библиотека с функциями для переиспользования в агентах и отчётах. Каждая функция — отдельный изолированный XQuery, без вложенных запросов.

---

## 5. ОТЧЁТЫ

> Отчёты — скрипты, формирующие данные для визуализации. Возвращают структурированный массив строк.

### TC-REP-01: Отчёт по завершённым курсам по подразделениям

**Файл**: `reports/Отчёт по завершённым курсам по подразделениям.js`

**Назначение**: Показывает статистику прохождения курсов по подразделениям — количество завершивших, средний балл, % сдавших.

**Каталоги**:
- `learnings` — `id`, `person_id`, `course_id`, `course_name`, `score`, `is_passed`, `last_usage_date`, `person_subdivision_id`, `person_subdivision_name`
- `subdivisions` — для группировки и фильтрации
- `courses` — для фильтра по курсу

**Параметры**:
- `Parameters.iCourseID` — ID курса (обязательный)
- `Parameters.dDateFrom` / `Parameters.dDateTo` — период
- `Parameters.iSubdivisionID` — фильтр по конкретному подразделению (опционально)

**Логика**:
1. XQuery в `learnings where course_id = iCourseID` + фильтры по дате и подразделению.
2. Группировка по `person_subdivision_id` в JS через `ArrayOptFindByKey`.
3. Для каждой группы: count, avg score, count is_passed, % passed.
4. Вернуть массив объектов: `{subdivision_name, total, passed, avg_score, pass_rate}`.

**Ожидаемый результат**: Отчёт без XQuery в цикле, с JS-группировкой по результатам единого запроса.

---

### TC-REP-02: Отчёт по прохождению тестов

**Файл**: `reports/Отчёт по прохождению тестов.js`

**Назначение**: Детальный отчёт о завершённых тестах (`test_learnings`) по заданному тесту или подразделению.

**Каталоги**:
- `test_learnings` — `id`, `person_id`, `person_fullname`, `test_id`, `test_name`, `score`, `is_passed`, `last_usage_date`, `person_subdivision_id`, `person_subdivision_name`, `person_org_id`
- `active_test_learnings` — для подсчёта ещё не завершивших
- `collaborators` — пакетная загрузка для обогащения данными о должности

**Параметры**:
- `Parameters.iTestID` — ID теста (обязательный)
- `Parameters.iSubdivisionID` — фильтр по подразделению (опционально)
- `Parameters.dDateFrom` / `Parameters.dDateTo` — период

**Логика**:
1. XQuery в `test_learnings where test_id = iTestID` + дополнительные фильтры.
2. Пакетная загрузка должностей: собрать `person_id`, XQuery в `collaborators`, получить `position_name`.
3. Обогатить каждую запись `position_name` через `ArrayOptFindByKey`.
4. Посчитать итого: всего, сдали, не сдали, средний балл.
5. Отдельным запросом — сколько ещё не завершили тест (из `active_test_learnings`).

**Ожидаемый результат**: Детальный отчёт с обогащением данных, подсчётом итогов.

---

### TC-REP-03: Отчёт по штатному расписанию (ПШР)

**Файл**: `reports/Отчёт по штатному расписанию (ПШР).js`

**Назначение**: Показывает все штатные позиции (`staff_positions`) с указанием занятости — сколько сотрудников на каждой позиции и есть ли вакансии.

**Каталоги**:
- `staff_positions` — `id`, `name`, `position_id`, `org_id`, `subdivision_id`, `count` (кол-во ставок), `appointment_type_id`
- `collaborators` — пакетная загрузка для подсчёта занятых ставок
- `positions` — для получения названия должности
- `appointment_types` — для типовой должности
- `subdivisions` — для группировки по подразделению
- `orgs` — фильтр по организации

**Параметры**:
- `Parameters.iOrgID` — ID организации (обязательный)
- `Parameters.iSubdivisionID` — фильтр по подразделению (опционально)
- `Parameters.bShowVacanciesOnly` — показывать только с вакансиями

**Логика**:
1. XQuery в `staff_positions where org_id = iOrgID` + опциональный фильтр по подразделению.
2. Собрать все `staff_position_id` → XQuery в `collaborators where MatchSome($c/staff_position_id, (ids...)) and $c/is_dismissed = 0` → сгруппировать по `staff_position_id`.
3. Для каждой позиции вычислить: `occupied = кол-во сотрудников`, `vacancies = count - occupied`.
4. Если `bShowVacanciesOnly` — оставить только записи где `vacancies > 0`.
5. Вернуть: `{staff_position_name, position_name, appointment_type_name, subdivision_name, total_count, occupied, vacancies}`.

**Ожидаемый результат**: Правильный подсчёт занятости без XQuery в цикле, JS-группировка.

---

### TC-REP-04: Отчёт по планам оценки

**Файл**: `reports/Отчёт по планам оценки.js`

**Назначение**: Сводный отчёт по планам оценки (`assessment_plans`) в рамках оценочной процедуры — распределение по статусам, сотрудники, сроки.

**Каталоги**:
- `assessment_plans` — `id`, `person_id`, `assessment_appraise_id`, `workflow_state`, `start_date`, `end_date`
- `assessment_appraises` — `id`, `name`, `code` — для отображения названия процедуры
- `collaborators` — пакетная загрузка: `fullname`, `position_name`, `org_name`, `position_parent_id`
- `subdivisions` — для названия подразделения
- `pas` — подсчёт связанных анкет на каждый план

**Параметры**:
- `Parameters.iAssessmentAppraiseID` — ID оценочной процедуры (обязательный)
- `Parameters.sWorkflowState` — фильтр по статусу (опционально)
- `Parameters.dDateFrom` / `Parameters.dDateTo` — период по `start_date`

**Логика**:
1. Получить название процедуры из `assessment_appraises` (один запрос).
2. XQuery в `assessment_plans where assessment_appraise_id = iID` + фильтры.
3. Пакетная загрузка данных сотрудников (`collaborators`) через `MatchSome` по `person_id`.
4. Подсчёт анкет: XQuery в `pas where MatchSome($p/assessment_plan_id, (planIds...))` → группировать по `assessment_plan_id`.
5. Обогатить каждый план: ФИО, должность, подразделение, орг, кол-во анкет.
6. Итого по статусам: сгруппировать в JS.

**Ожидаемый результат**: Многоступенчатое обогащение данных, сводка по статусам, без XQuery в цикле.

---

## Сводная таблица тест-кейсов

| ID | Тип | Файл | Каталоги | Сложность |
|----|-----|------|----------|-----------|
| TC-AGT-01 | Агент | `agents/Агент напоминания о незавершённых курсах.js` | active_learnings, collaborators, courses | Средняя |
| TC-AGT-02 | Агент | `agents/Агент уведомления о просроченных тестах.js` | active_test_learnings, collaborators, subdivisions, boss_types | Высокая |
| TC-AGT-03 | Агент | `agents/Агент синхронизации данных объектов.js` | collaborators, object_datas, object_data_types | Средняя |
| TC-COL-01 | Выборка | `collections/Выборка сотрудников по подразделению и должности.js` | collaborators, appointment_types | Низкая |
| TC-COL-02 | Выборка | `collections/Выборка завершённых курсов по подразделению.js` | learnings, collaborators | Средняя |
| TC-COL-03 | Выборка | `collections/Выборка планов оценки по процедуре.js` | assessment_plans, assessment_appraises | Низкая |
| TC-COL-04 | Выборка | `collections/Выборка анкет по сотруднику.js` | pas, assessment_appraises | Средняя |
| TC-COL-05 | Выборка | `collections/Выборка сотрудников по организации и типовой должности.js` | collaborators, orgs, appointment_types, staff_positions | Средняя |
| TC-RA-01 | Удалённое действие | `remote_actions/Удалённое действие обновление данных объекта.js` | object_datas, object_data_types | Средняя |
| TC-RA-02 | Удалённое действие | `remote_actions/Удалённое действие назначение курса сотрудникам.js` | collaborators, courses, active_learnings | Средняя |
| TC-RA-03 | Удалённое действие | `remote_actions/Удалённое действие установка отметки на плане оценки.js` | assessment_plans | Низкая |
| TC-LIB-01 | Библиотека | `code_libraries/Библиотека работы с иерархией подразделений.js` | subdivisions, func_managers, boss_types, orgs | Высокая |
| TC-LIB-02 | Библиотека | `code_libraries/Библиотека вспомогательных функций для сотрудников.js` | collaborators, positions, staff_positions, appointment_types, learnings, test_learnings, active_learnings, active_test_learnings | Высокая |
| TC-REP-01 | Отчёт | `reports/Отчёт по завершённым курсам по подразделениям.js` | learnings, subdivisions, courses | Средняя |
| TC-REP-02 | Отчёт | `reports/Отчёт по прохождению тестов.js` | test_learnings, active_test_learnings, collaborators | Средняя |
| TC-REP-03 | Отчёт | `reports/Отчёт по штатному расписанию (ПШР).js` | staff_positions, collaborators, positions, appointment_types, subdivisions, orgs | Высокая |
| TC-REP-04 | Отчёт | `reports/Отчёт по планам оценки.js` | assessment_plans, assessment_appraises, collaborators, subdivisions, pas | Высокая |

---

## Покрытие каталогов

| Каталог | TC-AGT | TC-COL | TC-RA | TC-LIB | TC-REP |
|---------|--------|--------|-------|--------|--------|
| `collaborators` | 01, 02, 03 | 01, 02, 05 | 02 | 02 | 02, 03, 04 |
| `courses` | 01 | — | 02 | — | 01 |
| `active_learnings` | 01 | — | 02 | 02 | — |
| `learnings` | — | 02 | — | 02 | 01 |
| `active_test_learnings` | 02 | — | — | 02 | 02 |
| `test_learnings` | — | — | — | 02 | 02 |
| `assessment_appraises` | — | 03 | — | — | 04 |
| `assessment_plans` | — | 03 | 03 | — | 04 |
| `pas` | — | 04 | — | — | 04 |
| `positions` | — | — | — | 02 | 03 |
| `staff_positions` | — | 05 | — | 02 | 03 |
| `subdivisions` | 02 | — | — | 01 | 04 |
| `orgs` | — | 05 | — | 01 | 03 |
| `appointment_types` | — | 01, 05 | — | 02 | 03 |
| `object_datas` | 03 | — | 01 | — | — |
| `object_data_types` | 03 | — | 01 | — | — |
