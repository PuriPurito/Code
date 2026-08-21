# Схема: wtv_person_object_link_objects.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID | ✅ |  |
| person_object_id | integer |  | ✅ | DefaultDb.GetOptCatalog(person_object_type + 's') |
| person_object_type | string |  |  |  |
| object_catalog | string |  | ✅ | common.exchange_object_types |
| person_id | integer |  | ✅ | collaborators |
| person_fullname | string |  |  |  |
| subject_id | integer |  | ✅ | DefaultDb.GetOptCatalog(subject_type + 's') |
| subject_type | string |  |  | common.exchange_object_types |
| object_id | integer |  | ✅ | DefaultDb.GetOptCatalog(object_catalog + 's') |
| object_name | string |  |  |  |
| can_edit | bool |  |  |  |
| can_delete | bool |  |  |  |
| access_level | integer | const=c_access_level |  |  |
