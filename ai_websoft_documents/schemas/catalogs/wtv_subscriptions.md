# Схема: wtv_subscriptions.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID | ✅ |  |
| type | string | const=c_object_type |  | common.exchange_object_types |
| create_date | date | const=c_create_date | ✅ |  |
| date_to | date | ##'Действует до'## |  |  |
| person_id | integer | const=c_coll | ✅ | collaborators |
| person_fullname | string | const=lhbyv18qkm | ✅ |  |
| person_org_name | string | const=rne3a8laso |  |  |
| document_id | integer | const=c_object | ✅ | DefaultDb.GetOptCatalog( type + 's' ) |
| include_subdocs | bool | const=taf046flri |  |  |
| date_last_action | date | const=dataposlednego_5 |  |  |
| modification_date | date | const=n6k2nxsxx4 | ✅ |  |
| app_instance_id | string | const=8qorpy64yd |  |  |
