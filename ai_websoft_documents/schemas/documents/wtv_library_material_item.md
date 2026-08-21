# Схема: wtv_library_material_item.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID |  |  |
| code | string | const=c_code |  |  |
| name | string | const=c_name |  |  |
| material_id | integer | const=materialbiblio |  | library_materials |
| person_id | integer | const=c_coll |  | collaborators |
| number | string | const=fnxaxirsmo |  |  |
| location | string | const=polozhenie |  |  |
| format_id | string | const=formatmateriala |  | common.material_format_types |
| state_id | string | const=c_status |  | common.availability_states |
| current_page_id | string | const=tekushayastranica |  |  |
| doc_info | doc_info_base | const=dseglc23jx |  |  |
| issue_date | date | const=c_delivery_date |  |  |
| return_plan_date | date | const=planiruemayadat |  |  |
| return_date | date | const=c_return_date |  |  |
| id | string | ID |  |  |
| person_id | integer | const=c_coll |  | collaborators |
| state_id | string | const=vppb_state |  | lists.availability_states |
| issue_date | date | const=c_delivery_date |  |  |
| return_plan_date | date | const=planiruemayadat |  |  |
| return_date | date | const=c_return_date |  |  |
| date | date | const=vdb_aim_date |  |  |
