# Схема: wtv_digital_signature.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| name | string | const=c_name |  |  |
| person_id | integer | const=c_coll |  | collaborators |
| object_type | string | const=c_object_type |  | common.exchange_object_types |
| object_id | integer | const=c_object |  | DefaultDb.GetOptCatalog( object_type + 's' ) |
| object_name | string | const=c_object_name |  |  |
| create_date | date | const=c_create_date |  |  |
| sign_date | date | const=datapodpisaniya |  |  |
| is_signed | bool | const=podpisana |  |  |
| custom_web_template_id | integer | const=doc_template |  | custom_web_templates |
| sign_open | string | const=podpisannyydok |  |  |
| sign_encrypted | string | const=cifrovayapodpis |  |  |
| desc | string | const=c_desc |  |  |
| comment | string | const=vkpb_comment |  |  |
| doc_info | doc_info_base |  |  |  |
| access | string | const=bmlkskx7us |  |  |
