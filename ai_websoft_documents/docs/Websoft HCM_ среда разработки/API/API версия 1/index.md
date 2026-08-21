## API версия 1

## Список методов, доступных через API версии 1

Service endpoint:   https://<имя вашего сервера>/api\_wsdl.xml?wsdl

integer active\_learning\_complete ( object\_id )

Завершить активный электронный курс. Возвращает ID завершенного курса

string

object\_id

ID объекта Незаконченный электронный курс

integer active\_test\_learning\_complete ( object\_id )

Завершить активный тест. Возвращает ID завершенного теста

string

object\_id

ID объекта Незаконченный тест

string create\_collaborator ( lastname, firstname, middlename, birthdate, sex, email, login, password, subdivision\_id, position\_name, hire\_date, return\_id )

Создание сотрудника. Возвращает значения 1 или 0, в случае успешного создания пользователя и неуспеха соответственно

string

lastname

Фамилия

string

firstname

Имя

string

middlename

Отчество

date

birthdate

Дата рождения

string

sex

Пол (m - мужской, w - женский)

string

email

Email

string

login

Логин

string

password

Пароль

integer

subdivision\_id

ID подразделения, в котором будет создан новый сотрудник

string

position\_name

Название должности

date

hire\_date

Дата приема сотрудника на работу

bool

return\_id

Возвращать в результате ID сотрудника

integer check\_collaborator ( id )

Проверяет существует ли в БД сотрудник с заданным ID

integer

id

ID

integer upload\_file ( file, curUserID )

Загрузить файл

binary

file

file

array get\_all\_courses ( )

Получить список электронных курсов

array get\_all\_tests ( )

Получить список тестов

array get\_all\_groups ( )

Получить список групп

array collaborator\_get\_courses ( object\_id, return\_objects\_type )

Возвращает список электронных курсов сотрудника с указанным ID

string

object\_id

ID объекта Сотрудник

string

return\_objects\_type

Тип курсов (all - все, active - активные, completed - завершенные)

array collaborator\_get\_tests ( object\_id, return\_objects\_type )

Возвращает список тестов сотрудника с указанным ID

string

object\_id

ID объекта Сотрудник

string

return\_objects\_type

Тип тестов (all - все, active - активные, completed - завершенные)

integer collaborator\_assign\_course ( object\_id, course\_id, start\_date, end\_date, event\_id )

Назначение курса с ид. course\_id указанному сотруднику. Возвращает ID созданного курса

string

object\_id

ID объекта Сотрудник

integer

course\_id

ID курса

dateTime

start\_date

Дата начала обучения

dateTime

end\_date

Дата завершения обучения

integer

event\_id

ID мероприятия

integer collaborator\_assign\_test ( object\_id, assessment\_id, start\_date, end\_date, event\_id )

Назначение теста с ид. assessment\_id указанному сотруднику. Возвращает ID созданного теста

string

object\_id

ID объекта Сотрудник

integer

assessment\_id

ID теста

dateTime

start\_date

Дата начала обучения

dateTime

end\_date

Дата завершения обучения

integer

event\_id

ID мероприятия

object collaborator\_get\_info ( object\_id )

Информация о сотруднике. Возвращает объект с параметрами указанного сотрудника

string

object\_id

ID объекта Сотрудник

array collaborator\_get\_events ( object\_id, type\_event, status\_event, role\_collaborator )

Возвращает список мероприятий с участием указанного сотрудника

string

object\_id

ID объекта Сотрудник

string

type\_event

Тип мероприятия (real\_time - событие реального времени, compound\_program - модульная программа, compound\_program\_elem - элемент модульной программы, education\_method - учебная программа, education\_method\_from\_program - элемент из набора программ, one\_time - разовое мероприятие, dist\_test - дистанционное обучение, assessment - тестирование, case - кейс, webinar - вебинар, all - все)

string

status\_event

Статус мероприятия (project - проект, plan - планируется, active - проводится, close - завершено, cancel -отменено, all - все)

string

role\_collaborator

Роль сотрудника в мероприятии (collaborator - сотрудник, tutor - ответственный за проведение, preparation - подготовка мероприятия, all - все)

array collaborator\_get\_groups ( object\_id )

Возвращает список групп, в состав которых входит указанный сотрудник

string

object\_id

ID объекта Сотрудник

object collaborator\_update ( object\_id, lastname, firstname, middlename, address, phone, email, login, password )

Обновление информации о сотруднике. Возвращает объект с параметрами указанного сотрудника

string

object\_id

ID объекта Сотрудник

string

lastname

Фамилия сотрудника

string

firstname

Имя сотрудника

string

middlename

Отчество сотрудника

string

address

Адрес сотрудника

string

phone

Телефон сотрудника

string

email

Email сотрудника

string

login

Логин сотрудника

string

password

Пароль сотрудника

array collaborator\_get\_event\_results ( object\_id )

Возвращает список результатов мероприятия сотрудника

string

object\_id

ID объекта Сотрудник

object connection\_get\_info ( object\_id )

Информация об учебной сессии. Возвращает объект с праметрами указанной учебной сессии

string

object\_id

ID объекта Сессия обучения

object course\_get\_info ( object\_id )

Информация об электронном курсе. Возвращает объект с параметрами указанного электронного курса

string

object\_id

ID объекта Электронный курс

object event\_add\_user ( object\_id, collaborator\_id )

Добавление указанного сотрудника в список участников мероприятия. Возвращает объект со всеми параметрами добавленного сотрудника

string

object\_id

ID объекта Мероприятие

integer

collaborator\_id

ID добавляемого сотрудника

object event\_get\_info ( object\_id )

Информация о мероприятии. Возвращает объект с параметрами указанного мероприятия

string

object\_id

ID объекта Мероприятие

string event\_get\_custom\_data ( object\_id, element\_name )

Получение пользовательских данных мероприятия с указанным ID. Возвращает значение указанного элемента

string

object\_id

ID объекта Мероприятие

string

element\_name

Имя элемента

bool event\_set\_custom\_data ( object\_id, element\_name, element\_value )

Запись пользовательских данных в мероприятие с указанным ID. Возвращает значения 1 или 0, в случае успешного результата и неуспеха соответственно

string

object\_id

ID объекта Мероприятие

string

element\_name

Имя элемента

string

element\_value

Значение элемента

array event\_get\_chat\_messages ( object\_id, last\_message\_date )

Возвращает список сообщений чата указанного мероприятия

string

object\_id

ID объекта Мероприятие

date

last\_message\_date

Дата последнего сообщения

bool event\_send\_chat\_message ( object\_id, text\_message, sender\_fullname )

Отправить сообщение в чат указанного мероприятия. Возвращает значения 1 или 0, в случае успешного результата и неуспеха соответственно

string

object\_id

ID объекта Мероприятие

string

text\_message

Текст сообщения

string

sender\_fullname

ФИО отправителя

bool event\_change\_status ( object\_id, status )

Изменить статус мероприятия с ид. object\_id на указанный в соответствующем параметре. Возвращает значения 1 или 0, в случае успешного измененния статуса и неуспеха соответственно

string

object\_id

ID объекта Мероприятие

string

status

Статус мероприятия (project - проект, plan - планируется, active - проводится, close - завершено, cancel -отменено)

bool event\_remove\_user ( object\_id, collaborator\_id )

Удаление указанного сотрудника из списка участников мероприятия. Возвращает значения 1 или 0, в случае успешного удаления и неуспеха соответственно

string

object\_id

ID объекта Мероприятие

integer

collaborator\_id

ID удаляемого сотрудника

string event\_result\_get\_custom\_data ( object\_id, sNameParam )

Получение пользовательских данных результата мероприятия с указанным ID. Возвращает значение указанного элемента

string

object\_id

ID объекта Результат мероприятия

string

sNameParam

Имя элемента

bool event\_result\_set\_custom\_data ( object\_id, sNameParam, sValueParam )

Запись пользовательских данных в результат мероприятия с указанным ID. Возвращает значения 1 или 0, в случае успешного результата и неуспеха соответственно

string

object\_id

ID объекта Результат мероприятия

string

sNameParam

Имя элемента

string

sValueParam

Значение элемента

object group\_add\_collaborator ( object\_id, collaborator\_id )

Добавление указанного сотрудника в группу. Возвращает объект со всеми параметрами добавленного сотрудника

string

object\_id

ID объекта Группа

integer

collaborator\_id

ID добавляемого сотрудника

bool group\_remove\_collaborator ( object\_id, collaborator\_id )

Удаление указанного сотрудника из группы. Возвращает значения 1 или 0, в случае успешного удаления и неуспеха соответственно

string

object\_id

ID объекта Группа

integer

collaborator\_id

ID удаляемого сотрудника

object assessment\_get\_info ( object\_id )

Информация о тесте. Возвращает объект с параметрами указанного теста

string

object\_id

ID объекта Тест

---

