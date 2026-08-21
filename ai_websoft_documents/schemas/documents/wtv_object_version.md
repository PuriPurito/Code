# Схема: wtv_object_version.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| code | string | const=c_code |  |  |
| name | string | const=c_name |  |  |
| status | string | const=c_status |  | common.agreement_status_types |
| catalog_name | string | const=s5j056rnbt |  | common.exchange_object_types |
| object_id | integer | const=c_object |  | DefaultDb.GetOptCatalog( catalog_name + 's' ) |
| object_modification_date | date | const=n6k2nxsxx4 |  |  |
| person_id | integer | const=c_coll |  | collaborators |
| object_xml | string |  |  |  |
| doc_info | doc_info_base |  |  |  |
