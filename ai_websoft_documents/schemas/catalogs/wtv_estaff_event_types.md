# Схема: wtv_estaff_event_types.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID | ✅ |  |
| code | string | const=c_code | ✅ |  |
| name | string | const=c_name | ✅ |  |
| status | string | const=c_status |  |  |
| event_type_estaff_id | string | const=tipsobytiyaesta |  | Doc.TopElem.event_types |
| org_id | integer | const=c_org |  | orgs |
| recruitment_system_id | integer | Система подбора персонала |  | recruitment_systems |
| position_commons | string | const=q9lwz1kebb |  |  |
| modification_date | date | const=n6k2nxsxx4 | ✅ |  |
| app_instance_id | string | const=8qorpy64yd | ✅ |  |
