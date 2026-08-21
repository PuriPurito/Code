# Схема: wtv_custom_report.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID |  |  |
| code | string | const=c_code |  |  |
| name | string | const=c_name |  |  |
| block | string | const=c_section |  | access_blocks |
| connect_2_object | string |  |  | common.Child(object_name_type) |
| mode_selector | integer |  |  |  |
| source_binding_object | string |  |  |  |
| table_height | integer |  |  |  |
| default_mode | string |  |  |  |
| on | bool |  |  |  |
| days_period | integer |  |  |  |
| format | string |  |  |  |
| comment | string | const=vkpb_comment |  |  |
| doc_info | doc_info_base | const=dseglc23jx |  |  |
| binding_selection | integer |  |  |  |
| initiator_person_id | integer |  |  | collaborators |
| perfomance_cutoff | integer |  |  |  |
| selector | string |  |  |  |
| id | integer |  |  | subs |
| type | string |  |  |  |
| name | string |  |  |  |
| parent_id | integer |  |  | subs |
