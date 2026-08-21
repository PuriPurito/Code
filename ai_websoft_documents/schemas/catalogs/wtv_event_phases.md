# Схема: wtv_event_phases.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID | ✅ |  |
| event_id | integer | const=c_event | ✅ | events |
| code | string | const=c_code |  |  |
| name | string | const=c_name |  |  |
| type_id | string | const=c_type |  | common.event_types |
| status_id | string | const=c_status |  | common.event_status_types |
| is_public | bool | const=wxfirxmmgx |  |  |
| is_open | bool | const=yfv43186yj |  |  |
| place_id | integer | const=c_place | ✅ | places |
| lector_id | integer | const=c_lector | ✅ | lectors |
| person_fullname | string | const=6c249e7sqx |  |  |
| start_date | date | const=c_start_date | ✅ |  |
| finish_date | date | const=c_finish_date | ✅ |  |
| object_resource_id | integer | const=lmitz32f0b | ✅ | object_resources |
