# Схема: wtv_custom_reports.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID | ✅ |  |
| code | string | const=c_code |  |  |
| name | string | const=c_name |  |  |
| object_name_type | string | const=c_type |  |  |
| object_name | string | const=c_object | ✅ | common.Child(object_name_type) |
| connect_2_object | string | const=c_object_type | ✅ | common.Child(object_name_type) |
| block | string | const=4egocnh7uc |  | access_blocks |
| access_block_type | string | const=c_block |  | access_blocks |
| subscription | bool | const=7l2ay999s2 |  |  |
| modification_date | date | const=n6k2nxsxx4 |  |  |
| app_instance_id | string | const=8qorpy64yd |  |  |
