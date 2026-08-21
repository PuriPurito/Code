# Схема: wtv_func_managers.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID | ✅ |  |
| catalog | string | const=c_object_type | ✅ | common.exchange_object_types |
| object_id | integer | const=c_object | ✅ | DefaultDb.GetOptCatalog( catalog + 's' ) |
| object_name | string | const=c_object_name | ✅ |  |
| subordinate_position_id | integer | ##'Должность подчиненного'## |  | positions |
| person_id | integer | const=c_coll | ✅ | collaborators |
| person_fullname | string | const=lhbyv18qkm | ✅ |  |
| person_position_id | integer | const=eli0ttzxol |  | positions |
| staff_object_type | string | const=c_object_type | ✅ | common.exchange_object_types |
| staff_object_id | integer | const=c_object | ✅ | DefaultDb.GetOptCatalog( catalog + 's' ) |
| staff_object_name | string | const=c_object_name | ✅ |  |
| is_native | bool | const=func_is_native |  |  |
| boss_type_id | integer | const=bzl22hevr5 | ✅ | boss_types |
| start_date | date | const=vkmb_start_action_date |  |  |
| end_date | date | const=dataokonchaniyad |  |  |
| is_finished | bool | const=deystvienaznach |  |  |
| parent_id | integer | const=bmqfpg1jbr | ✅ | subdivisions |
| org_id | integer | const=c_org |  | orgs |
