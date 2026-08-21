# Схема: wtv_recruitment_events.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID | ✅ |  |
| person_id | integer | c_candidate | ✅ | collaborators |
| person_fullname | string | c_fio |  |  |
| start_date | date | ##'Дата и время начала'## |  |  |
| finish_date | date | ##'Дата и время окончания'## |  |  |
| vacancy_id | integer | const=c_vacancy | ✅ | vacancys |
| estaff_event_type_id | integer | const=tipsobytiya | ✅ | estaff_event_types |
| estaff_event_type_status_id | integer | const=c_status |  | estaff_event_types |
| recruitment_system_id | integer | ##'Система подбора персонала'## | ✅ | recruitment_systems |
| site_id | integer | const=sayt | ✅ | sites |
| modification_date | date | const=n6k2nxsxx4 |  |  |
| app_instance_id | string | const=8qorpy64yd |  |  |
