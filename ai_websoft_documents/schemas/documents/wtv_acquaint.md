# Схема: wtv_acquaint.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| code | string | const=c_code |  |  |
| name | string | const=c_name |  |  |
| object_type | string | const=c_object_type |  | common.exchange_object_types |
| object_id | integer | const=c_object |  | DefaultDb.GetOptCatalog( object_type + 's' ) |
| object_name | string | const=c_object_name |  |  |
| normative_date | date | const=trebuemayadatao |  |  |
| reacquaintance_period | integer | const=b9p9b5iva9 |  |  |
| collaborators | string | const=c_collaborators |  |  |
| collaborator_id | integer | const=c_coll |  | DefaultDb.GetOptCatalog( 'collaborators' ) |
| collaborator_fullname | string | const=lhbyv18qkm |  |  |
| date | date | const=vdb_aim_date |  |  |
| acquaint | bool | const=sajgjv1xmw |  |  |
| bcreateaa | bool | const=nesozdavatozna |  |  |
| bonlydelaa | bool | const=tolkoudalitizm |  |  |
| assessments | string | const=c_tests |  |  |
| assessment_id | integer | const=c_test |  | DefaultDb.GetOptCatalog( 'assessments' ) |
| groups | string | const=c_group |  |  |
| group_id | integer | const=c_group |  | DefaultDb.GetOptCatalog( 'groups' ) |
| eval_code | string | const=hqyb5zxwgv |  |  |
| status | bool | const=c_status |  |  |
| questions | string | const=c_questions |  |  |
| id | string | const=c_question |  |  |
| is_custom | bool |  |  |  |
| item_id | integer | const=c_question |  | items |
| type_id | string | const=wn6qh2maou |  | common.acquaint_question_types |
| title | string | const=c_heading |  |  |
| correct_answer | string | const=vieb_correct |  |  |
| grading_option_id | string |  |  | common.grading_option_types |
| sentence_option_id | string |  |  | common.sentence_option_types |
| value | string |  |  |  |
| entries | string | const=5ed2971r62 |  |  |
| id | string |  |  |  |
| value | string | const=c_value |  |  |
| is_correct | bool | const=vieb_correct |  |  |
| tab_select | string |  |  |  |
| select_type_id | string |  |  |  |
| access | string | const=bmlkskx7us |  |  |
| role_id | integer | const=4egocnh7uc |  | roles |
| comment | string | const=vkpb_comment |  |  |
| doc_info | doc_info_base | const=dseglc23jx |  |  |
