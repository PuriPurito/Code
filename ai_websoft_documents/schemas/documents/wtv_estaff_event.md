# Схема: wtv_estaff_event.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID |  |  |
| vacancy_id | integer | const=c_vacancy |  | vacancys |
| vacancy_name | string | const=nazvanievakans |  |  |
| vacancy_code | string | const=kodvakansii |  |  |
| request_id | integer | const=c_request |  | requests |
| code_event | string | const=kodsobytiya |  |  |
| event_name | string |  |  |  |
| start_date | date | const=c_start_date |  |  |
| estaff_event_type_id | integer | const=tipsobytiyaesta |  | estaff_event_types |
| estaff_event_type_name | string | const=tipsobytiyaesta |  |  |
| desc | string | const=c_desc |  |  |
| object_type | string | const=c_object_type |  | common.exchange_object_types |
| object_id | integer |  |  | DefaultDb.GetOptCatalog( object_type + 's' ) |
| object_id | integer | const=c_object |  | DefaultDb.GetOptCatalog( object_type + 's' ) |
| object_name | string | const=c_object_name |  |  |
| linked_object_url | string |  |  |  |
| event_status_id | string | const=c_status |  | common.estaff_event_status_types |
| estaff_event_eid | integer |  |  |  |
| members | string | const=veb_tutors |  |  |
| collaborator_id | integer | const=97m1vc5abp |  | collaborators |
| doc_info | doc_info_base | const=dseglc23jx |  |  |
