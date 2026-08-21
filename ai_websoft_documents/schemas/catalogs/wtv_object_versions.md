# Схема: wtv_object_versions.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID | ✅ |  |
| code | string | const=c_code | ✅ |  |
| name | string | const=c_name |  |  |
| status | string | const=c_status |  | common.agreement_status_types |
| catalog_name | string | const=s5j056rnbt | ✅ | common.exchange_object_types |
| object_id | integer | const=c_object | ✅ | DefaultDb.GetOptCatalog( catalog_name + 's' ) |
| object_modification_date | date | const=datamodifikaci | ✅ |  |
| person_id | integer | const=c_coll | ✅ | collaborators |
| person_fullname | string | const=x33edt559z |  |  |
| creation_date | date | const=c_create_date | ✅ |  |
| creation_user_id | integer | const=wrm4ebg7c9 |  |  |
| modification_date | date | const=n6k2nxsxx4 |  |  |
| app_instance_id | string | const=8qorpy64yd |  |  |
