# Схема: wtv_library_material_items.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID | ✅ |  |
| code | string | const=c_code |  |  |
| name | string | const=c_name |  |  |
| material_id | integer | const=materialbiblio | ✅ | library_materials |
| number | string | const=fnxaxirsmo |  |  |
| person_id | integer | const=c_coll | ✅ | collaborators |
| format_id | integer | const=formatmateriala |  | library_material_formats |
| state_id | string | const=c_status |  | common.availability_states |
| issue_date | date | const=c_delivery_date |  |  |
| return_plan_date | date | const=dataplaniruemo_4 |  |  |
| creation_date | date | const=c_create_date | ✅ |  |
| creation_user_id | integer | const=wrm4ebg7c9 |  |  |
| modification_date | date | const=n6k2nxsxx4 | ✅ |  |
| modification_user_id | integer | const=wrm4ebg7c9 |  |  |
| app_instance_id | string | const=8qorpy64yd |  |  |
