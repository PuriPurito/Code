# Схема: wtv_acquaint_assign.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| code | string | const=c_code |  |  |
| object_type | string | const=c_object_type |  | common.exchange_object_types |
| object_id | integer | const=c_object |  | DefaultDb.GetOptCatalog( object_type + 's' ) |
| object_name | string | const=c_object_name |  |  |
| normative_date | date | const=trebuemayadatao |  |  |
| finish_date | date | const=trebuemayadatao |  |  |
| reacquaintance_period | integer | const=b9p9b5iva9 |  |  |
| person_id | integer | const=c_coll |  | collaborators |
| acquaint_id | integer | const=vmkpb_acquaint |  | acquaints |
| state_id | string | const=vppb_state |  | common.acquaint_states |
| attempt_num | integer | const=c_attempt_num |  |  |
| questions | string | const=c_questions |  |  |
| id | string | const=c_question |  |  |
| answer | string | const=vieb_correct |  |  |
| comment | string | const=vkpb_comment |  |  |
| acquaint_id | integer | const=vmkpb_acquaint |  |  |
| person_id | integer | const=c_coll |  |  |
| doc_info | doc_info_base | const=dseglc23jx |  |  |
