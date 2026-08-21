## 7. AddVacancy

Метод добавляет в систему новую или обновляет существующую вакансию.

**Входные параметры:**

**Параметр**

**Тип**

**Описание**

**Обязат.**

vacancy

object

Структура с описанием вакансии (см. ниже)

Да

options

object

Структура с параметрами создания вакансии (см. ниже)

Нет

embedded

object

Структура с перечнем кандидатов на вакансию (см. ниже)

Нет

Описание структуры _vacancy_:

**Параметр**

**Тип**

**Описание**

**Обязат.**

vacancy\_name

string

Наименование вакансии

Да

name

string

Наименование вакансии

Да

code

string

Код вакансии

Нет

eid

string

Идентификатор вакансии. Задается здесь или в поле opt\_eid. Если задан здесь, то отсутствие в системе вакансии с таким идентификатором приведет к ошибке. Используется для обновления существующих вакансий

Нет

opt\_eid

string

Идентификатор вакансии. Если задан здесь, то при отсутствии в системе вакансии с таким идентификатором будет создана новая вакансия.

Нет

position\_id

integer

Ссылка на должность

Нет

position\_eid

string

Идентификатор должности

Нет

position\_code

string

Код должности

Нет

position\_type\_eid

string

Идентификатор типовой должности

Нет

position\_type\_id

integer

Ссылка на типовую должность

Нет

division\_id

integer

Ссылка на подразделение

Нет

division\_eid

string

Идентификатор подразделения

Нет

division\_code

string

Код подразделения

Нет

division\_full\_path

string

Подразделение с вышестоящими подразделениями

Нет

is\_confidential

bool

Признак конфиденциальной вакансии

Нет

orig\_rr\_person\_id

integer

Ссылка на инициатора

Нет

orig\_rr\_person\_eid

string

Идентификатор инициатора

Нет

orig\_rr\_person\_code

string

Код инициатора

Нет

orig\_rr\_person\_email

string

Адрес электронной почты инициатора

Нет

profession\_id

integer

Ссылка на специальность

Нет

location\_id

string

Ссылка на регион

Нет

location\_name

string

Название региона

Нет

rr\_persons

object

Структура, описывающая список контактных лиц

Нет

start\_date

date

Дата открытия вакансии

Нет

req\_close\_date

date

Требуемая дата закрытия вакансии

Нет

state\_date

date

Дата присвоения текущего статуса

Нет

req\_empl\_start\_date

date

Дата, когда сотрудник должен приступить к работе

Нет

req\_quantity

integer

Количество открытых позиций

Нет

reason\_id

string

Причина появления вакансии

Нет

state\_id

string

Текущий статус

Нет

final\_candidate\_id

integer

Идентификатор кандидата

Нет

salary

integer

Заработная плата

Нет

min\_salary

integer

Минимальная заработная плата

Нет

max\_salary

integer

Максимальная заработная плата

Нет

salary\_currency\_id

string

Валюта исчисления заработной платы

Нет

work\_type\_id

integer

Ссылка на тип занятости

Нет

work\_type\_name

string

Название типа занятости

Нет

work\_schedule\_type\_id

integer

Ссылка на график работы

Нет

work\_schedule\_type\_name

string

Наименование графика работы

Нет

req\_info

object

Структура с описанием требований к кандидату (см. ниже)

Нет

description

string

Описание вакансии (многострочное)

Нет

description\_html

string

Описание вакансии в формате HTML

Нет

inet\_data

object

Структура с описанием вакансии для публикации в Интернете (см. ниже)

Нет

comment

string

Комментарий к вакансии (многострочный)

Нет

recruiter\_person\_id

integer

Ссылка на рекрутера

Нет

recruiter\_person\_eid

string

Идентификатор рекрутера

Нет

recruiter\_person\_code

string

Код рекрутера

Нет

recruiter\_person\_email

string

Адрес электронной почты рекрутера

Нет

Описание структуры rr\_persons:

**Параметр**

**Тип**

**Описание**

**Обязат.**

person\_id

integer

Ссылка на сотрудника

Нет

person\_eid

string

Идентификатор сотрудника

Нет

person\_email

string

Адрес электронной почты сотрудника

Нет

Описание структуры _req\_info_:

**Параметр**

**Тип**

**Описание**

**Обязат.**

educ\_type\_id

integer

Ссылка на уровень образования

Нет

min\_exp\_years

integer

Требуемый опыт работы

Нет

min\_age

integer

Минимальный возраст

Нет

max\_age

integer

Максимальный возраст

Нет

gender\_id

integer

Ссылка на требуемый пол

Нет

Описание структуры _inet\_data_:

**Параметр**

**Тип**

**Описание**

**Обязат.**

position\_name

string

Наименование

Нет

min\_salary

integer

Минимальная заработная плата

Нет

max\_salary

integer

Максимальная заработная плата

Нет

comment

string

Описание

Нет

html\_comment

string

Описание в формате HTML

Нет

comment\_req

string

Описание рекомендаций

Нет

comment\_duty

string

Описание требований к вакансии

Нет

comment\_cond

string

Описание условий работы

Нет

Описание структуры _options_:

**Параметр**

**Тип**

**Описание**

**Обязат.**

full\_path\_delim

string

Символ-разделитель, используемый в поле division\_full\_path (значение по умолчанию - _""_)

Нет

divisions\_auto\_create

bool

Признак автоматического создания подразделения, если указанное в вакансии подразделение отсутствует (значение по умолчанию - false)

Нет

submit\_request

bool

Признак необходимости запроса на вакансию (значение по умолчанию - false)

Нет

supress\_notification

bool

Признак запрета отправки уведомлений (значение по умолчанию - false)

Нет

handle\_set\_vacancy\_state\_options

string

Устанавливаемые статусы вакансии

Нет

Описание структуры _embedded_:

**Параметр**

**Тип**

**Описание**

**Обязат.**

persons

object

Структура, содержащая перечень кандидатов

Да

Описание структуры _persons_:

**Параметр**

**Тип**

**Описание**

**Обязат.**

eid

string

Идентификатор кандидата

Нет

lastname

string

Фамилия кандидата

Да

firstname

string

Имя кандидата

Да

middlename

string

Отчество кандидата

Нет

email

string

Адрес электронной почты кандидата

Нет

phone

string

Номер телефона кандидата

Нет

position\_name

string

Должность кандидата

Нет

division\_full\_path

string

Ветка подразделения, к которой прикрепляется вакансия. Ненайденные подразделения создаются, если _divisions\_auto\_create_ имеет значение _true_

Нет

**Выходные параметры:**

**Параметр**

**Тип**

**Описание**

**Обязат.**

vacancy\_id

integer

Идентификатор вакансии

Нет

vacancy\_request\_id

integer

Идентификатор запроса на вакансию

Нет

vacancy\_name

string

Название вакансии

Нет

---

