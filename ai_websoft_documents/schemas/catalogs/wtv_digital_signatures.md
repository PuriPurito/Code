# Схема: wtv_digital_signatures.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID | ✅ |  |
| code | string | const=c_code | ✅ |  |
| name | string | const=c_name | ✅ |  |
| person_id | integer | const=c_coll | ✅ | collaborators |
| person_fullname | string | const=preemnik | ✅ |  |
| person_position_name | string | const=eli0ttzxol |  |  |
| object_type | string | const=c_object_type | ✅ | common.exchange_object_types |
| object_id | integer | const=c_object | ✅ | DefaultDb.GetOptCatalog( object_type + 's' ) |
| object_name | string | const=c_object_name | ✅ |  |
| create_date | date | const=c_create_date | ✅ |  |
| sign_date | date | const=datapodpisaniya | ✅ |  |
| is_signed | bool | const=podpisana | ✅ |  |
| custom_web_template_id | integer | const=doc_template | ✅ | custom_web_templates |
| modification_date | date | const=n6k2nxsxx4 | ✅ |  |
| app_instance_id | string | const=8qorpy64yd | ✅ |  |
