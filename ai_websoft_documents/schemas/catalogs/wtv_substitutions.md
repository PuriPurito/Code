# Схема: wtv_substitutions.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID | ✅ |  |
| code | string | const=c_code | ✅ |  |
| status | string | const=c_status |  | common.substitution_status_types |
| substitution_type_id | integer | Тип замещения |  | substitution_types |
| target_object_type | string | Тип целевого объекта | ✅ |  |
| target_object_selector | string | Список целевых объектов |  |  |
| target_object_id | integer |  | ✅ |  |
| data_str | string | ##'Нестандартные права (строка или JSON с информацией о правах)'## |  |  |
| person_selector | string | Выбор сотрудников |  |  |
| person_id | integer | const=c_coll | ✅ | collaborators |
| person_fullname | string | const=lhbyv18qkm | ✅ |  |
| person_org_name | string | const=kyvtanhi3r |  |  |
| create_date | date | const=c_create_date | ✅ |  |
| start_date | date | const=c_start_date |  |  |
| finish_date | date | const=c_finish_date |  |  |
| modification_date | date | const=n6k2nxsxx4 | ✅ |  |
| app_instance_id | string | const=8qorpy64yd |  |  |
