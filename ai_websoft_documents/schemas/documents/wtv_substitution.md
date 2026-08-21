# Схема: wtv_substitution.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer |  |  |  |
| code | string | const=c_code |  |  |
| status | string |  |  | common.substitution_status_types |
| substitution_type_id | integer | Тип замещения |  | substitution_types |
| target_object_type | string | Тип целевого объекта |  |  |
| target_object_selector | string | Список целевых объектов |  |  |
| target_objects | string | Целевые объекты |  |  |
| target_object_id | integer |  |  | DefaultDb.GetOptCatalog( Parent.Parent.target_object_type + 's' ) |
| data_str | string | ##'Нестандартные права (строка или JSON с информацией о правах)'## |  |  |
| create_date | date | const=c_create_date |  |  |
| start_date | date | const=c_start_date |  |  |
| finish_date | date | const=c_finish_date |  |  |
| person_selector | string | Выбор сотрудников |  |  |
| person_id | integer | const=c_coll |  | collaborators |
| comment | string | const=vkpb_comment |  |  |
| doc_info | doc_info_base | const=dseglc23jx |  |  |
