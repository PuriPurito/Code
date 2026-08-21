# Схема: wtv_workflow.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID |  |  |
| code | string |  |  |  |
| name | string |  |  |  |
| code | string |  |  |  |
| name | string |  |  |  |
| code | string |  |  |  |
| name | string |  |  |  |
| is_trigger | bool | явл¤етс¤ триггером |  |  |
| use_triggers | string | Содержит триггеры |  |  |
| escalations | string | const=eskalaciizayavki |  |  |
| code | string |  |  |  |
| name | string |  |  |  |
| workflow_state_id | string |  |  | Parent.Parent.states |
| auto_escalation | bool |  |  |  |
| auto_escalation_by_end_date | bool |  |  |  |
| auto_escalation_days | integer |  |  |  |
| auto_escalation_repeat | bool |  |  |  |
| escalation_eval_str | string |  |  |  |
| escalation_eval_negative | bool |  |  |  |
| courses | string | const=c_courses |  |  |
| course_id | integer | const=c_course |  | DefaultDb.GetOptCatalog( 'courses' ) |
| state_id | integer | const=vppb_state | ✅ | common.learning_states |
| assessments | string | const=c_tests |  |  |
| assessment_id | integer | const=c_test |  | DefaultDb.GetOptCatalog( 'assessments' ) |
| state_id | integer | const=vppb_state | ✅ | common.learning_states |
| polls | string | const=6ppx1gd76t |  |  |
| poll_id | integer | const=c_poll |  | DefaultDb.GetOptCatalog( 'polls' ) |
| status | integer | const=vppb_state | ✅ | common.learning_states |
| default_state | string |  |  | states |
| default_action | string |  |  | actions |
| auto_submit_fields | bool |  |  |  |
| comment | string |  |  |  |
| destination_object_name | string |  |  | common.exchange_object_types |
| name | string |  |  |  |
| path | string |  |  |  |
| catalog_name | string |  |  |  |
| type | string |  |  |  |
| is_multiple | bool |  |  |  |
| pk | string |  |  |  |
| value | string |  |  |  |
| is_std | bool | const=rnya4h6g63 |  |  |
| changed | bool | const=izmenennyy |  |  |
| doc_info | doc_info_base |  |  |  |
| disp_add | bool |  |  |  |
| role_id | integer | const=4egocnh7uc |  | roles |
