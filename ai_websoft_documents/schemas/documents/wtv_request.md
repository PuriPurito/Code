# Схема: wtv_request.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID |  |  |
| code | string | const=c_code |  |  |
| name | string | const=c_name |  |  |
| request_type_id | integer | const=5rrpn7n7gm |  | request_types |
| budget_period_id | integer | const=c_budget_period |  | budget_periods |
| type | string | const=c_object_type |  | common.exchange_object_types |
| status_id | string | const=c_status |  | common.request_status_types |
| create_date | date | const=c_create_date |  |  |
| close_date | date | const=c_close_date |  |  |
| plan_close_date | date | const=pd7ymthqwd |  |  |
| person_id | integer | const=c_coll |  | collaborators |
| object_id | integer | const=c_object |  | DefaultDb.GetOptCatalog( type + 's' ) |
| object_name | string | const=c_object_name |  |  |
| object_code | string | const=oemfe2rslq |  |  |
| object_start_date | date | const=vdb_aim_date |  |  |
| object_type | string |  |  |  |
| is_group | bool | const=vrb_is_group |  |  |
| persons | string | const=c_collaborators |  |  |
| person_id | integer |  |  | collaborators |
| groups | string | const=c_le_groups |  |  |
| group_id | integer |  |  | groups |
| id | string |  |  |  |
| person_id | integer | const=c_coll |  | collaborators |
| type | string |  |  |  |
| is_main | bool |  |  |  |
| workflow_matching_type | string |  |  |  |
| doc_info | doc_info_base | const=dseglc23jx |  |  |
| comment | string | const=vkpb_comment |  |  |
| is_create_init | bool |  |  |  |
| name | string |  |  |  |
| title | string |  |  |  |
| value | string |  |  |  |
| access | string | const=bmlkskx7us |  |  |
| selector | string |  |  |  |
| workflow_state | string |  |  |  |
| workflow_action_result | variant |  |  |  |
| workflow_create_break | bool |  |  |  |
| list_variant | variant |  |  |  |
| rows | variant |  |  |  |
| row_disp_elem | string |  |  |  |
| row_list_field | string |  |  |  |
| row_key_field | string |  |  |  |
