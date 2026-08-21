# Схема: wtv_estaff_events.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID | ✅ |  |
| code_event | string | const=kodsobytiya |  |  |
| event_name | string |  |  |  |
| start_date | date | const=c_start_date |  |  |
| vacancy_id | integer | const=c_vacancy |  | vacancys |
| vacancy_name | string | const=nazvanievakans |  |  |
| vacancy_code | string | const=kodvakansii |  |  |
| request_id | integer | const=c_request |  | requests |
| person_id | integer | const=c_coll |  | collaborators |
| person_fullname | string | const=lhbyv18qkm |  |  |
| estaff_event_type_id | integer | const=tipsobytiyaesta |  | estaff_event_types |
| estaff_event_type_name | string | const=tipsobytiyaesta |  |  |
| object_type | string | const=c_object_type |  | common.exchange_object_types |
| objects | string | const=prikreplennyeo |  |  |
| object_id | integer | const=svyazannyyobekt |  | DefaultDb.GetOptCatalog( object_type + 's' ) |
| object_name | string | const=c_object_name |  |  |
| linked_object_url | string |  |  |  |
| event_status_id | string | const=c_status |  | common.estaff_event_status_types |
| estaff_event_eid | integer |  |  |  |
| modification_date | date | const=n6k2nxsxx4 | ✅ |  |
| app_instance_id | string | const=8qorpy64yd | ✅ |  |
