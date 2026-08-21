# Схема: wtv_event_object_resources.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID | ✅ |  |
| event_id | integer | const=c_events | ✅ | events |
| code | string | const=c_code |  |  |
| name | string | const=c_name |  |  |
| type_id | string | const=c_type |  | common.event_types |
| start_date | date | const=c_start_date | ✅ |  |
| finish_date | date | const=c_finish_date |  |  |
| status_id | string | const=c_status |  | common.event_status_types |
| person_num | integer | const=vocwacfpan |  |  |
| place_id | integer | const=c_place | ✅ | places |
| object_resource_id | integer | const=lmitz32f0b | ✅ | object_resources |
| object_resource_name | string | const=u7en2bk4eh |  |  |
| object_resource_type | string | const=x91r5l546f |  | lists.object_resource_types |
