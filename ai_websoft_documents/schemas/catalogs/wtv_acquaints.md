# Схема: wtv_acquaints.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID | ✅ |  |
| code | string | const=c_code |  |  |
| name | string | const=c_name |  |  |
| object_type | string | const=c_object_type |  | common.exchange_object_types |
| object_id | integer | const=c_object |  | DefaultDb.GetOptCatalog( object_type + 's' ) |
| object_name | string | const=c_object_name |  |  |
| normative_date | date | const=trebuemayadatao |  |  |
| acquaint_num | integer | const=kolichestvosotr |  |  |
| acquainted_num | integer | const=kolichestvoozna |  |  |
| collaborators | string | const=c_collaborators |  |  |
| status | bool | const=c_status |  |  |
| reacquaintance_period | integer | const=b9p9b5iva9 |  |  |
| assessments_id | integer | const=c_tests |  | assessments |
| role_id | integer | const=4egocnh7uc |  | roles |
| modification_date | date | const=n6k2nxsxx4 |  |  |
| app_instance_id | string | const=8qorpy64yd |  |  |
