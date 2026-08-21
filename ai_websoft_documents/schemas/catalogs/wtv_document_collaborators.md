# Схема: wtv_document_collaborators.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID | ✅ |  |
| parent_object_type | string | const=c_object_type |  | common.exchange_object_types |
| parent_object_id | integer | const=c_object | ✅ | DefaultDb.GetOptCatalog( parent_object_type + 's' ) |
| parent_object_name | string | const=c_object_name |  |  |
| site_id | integer | const=sayt | ✅ | sites |
| document_id | integer | const=c_document | ✅ | documents |
| code | string | const=c_code |  |  |
| name | string | const=c_name |  |  |
| person_id | integer | const=c_coll | ✅ | collaborators |
| person_fullname | string | const=xwyxbks6xk |  |  |
| can_create | bool | const=707ffuj4r7 |  |  |
| can_edit | bool | const=253zxi2unm |  |  |
| can_delete | bool | const=npobpnmteh |  |  |
