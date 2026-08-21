# Схема: wtv_acquaint_assigns.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID | ✅ |  |
| code | string | const=c_code |  |  |
| object_id | integer | const=c_object |  | DefaultDb.GetOptCatalog( object_type + 's' ) |
| object_type | string | const=c_object_type |  | common.exchange_object_types |
| object_name | string | const=c_object_name |  |  |
| normative_date | date | const=trebuemayadatao |  |  |
| finish_date | date | const=vmkpb_acquaint_date |  |  |
| reacquaintance_period | integer | const=b9p9b5iva9 |  |  |
| person_id | integer | const=c_coll |  | collaborators |
| acquaint_id | integer | const=vmkpb_acquaint |  | acquaints |
| state_id | string | const=vppb_state |  | common.acquaint_states |
| attempt_num | integer | const=c_attempt_num |  |  |
| modification_date | date | const=n6k2nxsxx4 |  |  |
