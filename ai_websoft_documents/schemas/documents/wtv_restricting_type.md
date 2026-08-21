# Схема: wtv_restricting_type.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID |  |  |
| object_type | string | const=c_object_type |  | common.exchange_object_types |
| object_id | integer | const=c_object |  | DefaultDb.GetOptCatalog( object_type + 's' ) |
| object_name | string | const=c_object_name |  |  |
| period_type_id | string | ##'Тип периода'## |  |  |
| state_id | string | const=vppb_state |  | common.agreement_status_types |
| restrictings | string | ##'Ограничения'## |  |  |
| id | string |  |  |  |
| presence_state_id | integer | ##'Тип присутствия/отсутствия'## |  | presence_states |
| start_time_from | string | ##'Время начала от'## |  |  |
| start_time_to | string | ##'Время начала по'## |  |  |
| end_time_from | string | ##'Время окончания от'## |  |  |
| end_time_to | string | ##'Время окончания по'## |  |  |
| min_work_days | integer | ##'Количество рабочих дней min'## |  |  |
| max_work_days | integer | ##'Количество рабочих дней max'## |  |  |
| min_hours | integer | ##'Min часов'## |  |  |
| max_hours | integer | ##'Max часов'## |  |  |
| comment | string | const=c_comment |  |  |
| comment | string | const=c_comment |  |  |
| doc_info | doc_info_base |  |  |  |
