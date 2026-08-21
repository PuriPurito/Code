## activate_course_to_person

Назначение курса сотруднику или вывод ID курса (см. раздел _"Возвращаемое значение"_ ниже).

_Синтаксис:_  
      **tools.activate\_course\_to\_person (<personID>, <course\_id>\[,<event\_id>\]\[, <person\_doc>\]\[, <education\_plan\_id>\]\[, <duration>\]\[, <start\_learning\_date>\]\[, <dtLastLearningDateParam>\]\[, <group\_id>\]\[, <sEIDParam>\]\[, <bSkipDismissedParam>\])**  
      или  
      **tools.activate\_course\_to\_person (<oPersonID>)**

_Аргументы:_  
  
При вызове функции могут быть использованы два варианта аргументов:  
1) _список аргументов_, часть которых обязательные, а остальные – нет.  
2) _один аргумент – объект JavaScript_, у которого имеются обязательные и необязательные свойства.

**Примечание** – Если в качестве первого аргумента функции указывается _целое число (ID сотрудника, которому назначается курс)_, то система распознает использование первого варианта, а если - _объект JavaScript_, то предполагается использование второго варианта. 

**Первый вариант (список аргументов)**  
  
      _<personID> (обязательный)_  
      Тип: **Целое число**. ID сотрудника, которому назначается курс.  
      _<course\_id> (обязательный)_  
      Тип: **Целое число**. ID курса, который необходимо назначить.  
      _<event\_id> (необязательный)_  
      Тип: **Целое число**. ID мероприятия, участникам которого назначается курс.  
      _<person\_doc> (необязательный)_  
      Тип: **TopElem объекта XmlDoc**. TopElem карточки сотрудника, которому назначается курс.  
      _<education\_plan\_id> (необязательный)_  
      Тип: **Целое число**. ID плана обучения, в рамках которого назначен курс.  
      _<duration> (необязательный)_  
      Тип: **Целое число**. Длительность курса в днях. Определяет дату планируемого завершения.  
      _<start\_learning\_date> (необязательный)_  
      Тип: **Дата**. Дата начала обучения. Если данный аргумент задан, то обучение невозможно будет начать раньше указанной даты.  
      _<dtLastLearningDateParam> (необязательный)_  
      Тип: **Дата**. Контрольная дата завершения предыдущего обучения. Если параметр задан, то при назначении курса, проверяется, существует ли в каталоге learnings курс, завершенный после указанной даты. Если такой курс существует, то ID соответствующей записи из каталога learnings возвращается как результат работы функции.  
      _<group\_id> (необязательный)_  
      Тип: **Целое число**. ID группы, которой назначен курс.  
      _<sEIDParam> (необязательный)_  
      Тип: **Строка**. Код записи в каталоге active\_learnings. Если он указан, то при назначении курса, когда производится проверка на уже существующий активный курс данного сотрудника в каталоге active\_learnings, проверяется также, что у данной записи должен быть указанный в параметре код.  
      _<bSkipDismissedParam> (необязательный)_  
      Тип: **Булево**. Аргумент, указывающий на необходимость пропускать уволенных сотрудников (_true_ – пропускать, _false_ –не пропускать). По умолчанию _true_.

**Примечание** – Принципы указания отсутствующих необязательных аргументов при вызове функции описан в статье **Библиотека Tools**. 

**Второй вариант (один аргумент – объект)**

      <oPerson> (обязательный)  
      Тип: **Объект JavaScript (Структура параметров)**.   
Пример описания объекта:

oPerson = {  
                iPersonID: <ID collaborator> (обязательный),  
                iCourseID: <ID course> (обязательный),  
                sEID: Код записи в каталоге незаконченных электронных курсов active\_learnings (необязательный),  
                iEventID: ID мероприятия (необязательный),  
                teCollaborator: Карточка сотрудника (необязательный),  
                teCourse: Карточка курса (необязательный),  
                iDuration: Длительность в днях (необязательный),  
                dtLastLearningDate: Дата последнего обучения (необязательный),  
                dtStartLearningDate: Дата начала прохождения курса (необязательный),  
                iEducationPlanID: ID плана обучения (необязательный),  
                iGroupID: ID группы (необязательный),  
                bCommenting: Возможность комментировать (необязательный),  
                bLogging: Ведение подробного лога (журнала) курса (необязательный)  
                bSkipDismissed: Не назначать уволенным (необязательный),  
                bMissOnlySuccessLearning: Не назначать повторно успешно прошедшим курс (с учетом даты последнего обучения) (необязательный),  
                teEvent: Карточка мероприятия (необязательный),  
                bSelfEnrolled: Признак самоактивации (необязательный),  
                sComment: Комментарий назначившего (записывается в карточку незаконченного/законченного курса) (необязательный),  
                bUseProctoring: Использовать прокторинг (необязательный)  
}

**Примечание** – В структуре объекта _oPerson_ обязательны только первые два свойства.

_Возвращаемое значение:_  
      Тип: **Объект XMLDoc** или **Целое число**. Если курс назначен при выполнении функции, то возвращается ссылка на вновь созданный документ обучения. Если курс был назначен ранее, но не завершен, или завершен, но не прошло еще время, указанное в атрибуте _dtLastLearningDateParam,_ то возвращается ID карточки ранее назначенного курса (из каталога _active\_learning_).

_Пример 1:_      

      `_// Пусть в системе имеется сотрудник Васильева Людмила Петровна         // и курс «Эффективные переговоры»                 // Находим сотрудника Васильеву Л.П.         _query_str = "for $elem in collaborators where contains($elem/fullname, 'Васильева') return $elem";         personArray = XQuery(_query_str);         // personArray является массивом объектов Сотрудник, отобранных запросом. Запрос отбирает всех сотрудников, в состав ФИО которых входит подстрока 'Васильева'         A1 = ArrayFirstElem ( personArray ); // функция возвращает первый элемент массива сотрудников personArray         alert ('Найден сотрудник: ' + A1.fullname); // на экран выводится полное имя отобранного сотрудника_`

      `_// Находим курс «Эффективные переговоры»         _query_str = "for $elem in courses where contains($elem/name, 'переговоры') return $elem";         courseArray = XQuery(_query_str);         // courseArray является массивом объектов Курс, отобранных запросом. Запрос отбирает все курсы, в состав названий которых входит подстрока 'переговоры'         A2 = ArrayFirstElem (courseArray ); // функция возвращает первый элемент массива курсов courseArray         alert ('Найден курс: ' + A2.name); // на экран выводится полное название отобранного курса                 // Назначаем сотруднику отобранный курс         A3 = tools.activate_course_to_person ( A1.id, A2.id );          // Если данный курс не был ранее назначен, то возвращается ссылка на вновь созданный документ обучения.         // Если данный курс был уже назначен ранее, то возвращается ID незаконченного курса.         if ( OptInt ( A3, 0) == 0) {                 alert ('Сотруднику ' + A1.fullname + ' назначен курс ' + A3.TopElem.course_name + '. Id незаконченного курса: ' + A3.DocID);          }          else {                 alert ('Курс был назначен ранее! Id незаконченного курса: ' + A3 );          }_` 

_Пример 2:_  
      `_res = tools.activate_course_to_person ( personID, courseID );         R02847 = tools.activate_course_to_person ( oPerson );         docLearning = tools.activate_course_to_person ( fldPerson.PrimaryKey, teEvent.course_id, fldPerson );                 result = tools.activate_course_to_person ( ( {               'iPersonID': iPersonID,               'iCourseID': iObjectID,               'teCourse': teObject,               'iEventID': iEventID,               'iDuration': oDuration,               'dtStartLearningDate': dtStartLearningDate,               'dtLastLearningDate': dtLastLearningDate,               'iGroupID': iGroupID,               'bCommenting': fldOptionChild.commenting.Value,               'bLogging': fldOptionChild.logging.Value,               'AuthUserID': AuthUserID,               'AuthUserLogin': AuthUserLogin,               'bSkipDismissed': fldOptionChild.skip_dismissed.Value,               'sComment': fldOptionChild.comment.Value         }) );                 _course_learning = tools.activate_course_to_person ( person_id, child.object_id, null, null, null, task.duration_days, child.start_date );         var iLearning = tools.activate_course_to_person(Child(0).Parent.id.Value, iCourseIDPARAM, iEventIDPARAM, Child(0).Parent, null, null, dStartPARAM, dEndPARAM);         _course_learning = tools.activate_course_to_person( TopElem.person_id, Ps.object_id );_`

---

