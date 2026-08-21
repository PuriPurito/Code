# Схема: wtv_recruitment_event.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID |  |  |
| person_id | integer | const=c_candidate |  | collaborators |
| person_fullname | string | const=c_fio |  |  |
| start_date | date | ##'Дата и время начала'## |  |  |
| finish_date | date | ##'Дата и время окончания'## |  |  |
| vacancy_id | integer | const=c_vacancy |  | vacancys |
| estaff_event_type_id | integer | const=tipsobytiya |  | estaff_event_types |
| estaff_event_type_status_id | integer | const=c_status |  | estaff_event_types |
| site_id | integer | const=sayt |  | sites |
| recruitment_system_id | integer | ##'Система подбора персонала'## |  | recruitment_systems |
| comment | string | const=vkpb_comment |  |  |
| access | string | const=bmlkskx7us |  |  |
| doc_info | doc_info_base | const=dseglc23jx |  |  |
