# Схема: wtv_estaff_event_type.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID |  |  |
| code | string | const=c_code |  |  |
| name | string | const=c_name |  |  |
| status | string | const=c_status |  |  |
| position_commons | string | const=q9lwz1kebb |  |  |
| position_common_id | integer |  |  | position_commons |
| id | string |  |  |  |
| name | string |  |  |  |
| id | integer |  |  | estaff_event_types |
| event_type_estaff_id | string | const=tipsobytiyaesta |  | Doc.TopElem.event_types |
| event_type_estaff_name | string |  |  |  |
| org_id | integer | const=c_org |  | orgs |
| recruitment_system_id | integer | ##'Система подбора персонала'## |  | recruitment_systems |
| visibility_condition | string | const=uslovievidimos |  |  |
| run_visibility_condition_url | string | const=uslovievidimos |  |  |
| action_event_occurs | string | const=deystvieprinas |  |  |
| run_action_event_occurs_url | string | const=deystvieprinas |  |  |
| check_event_processing | string | const=proverkapriobr |  |  |
| run_check_event_processing_url | string | const=proverkapriobr |  |  |
| desc | string | const=c_desc |  |  |
| doc_info | doc_info_base | const=dseglc23jx |  |  |
