# Схема: wtv_requests.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID | ✅ |  |
| code | string | const=5uitfcok9y | ✅ |  |
| type | string | const=s5j056rnbt | ✅ | common.exchange_object_types |
| request_type_id | integer | const=5rrpn7n7gm | ✅ | request_types |
| status_id | string | const=vppb_state |  | common.request_status_types |
| person_id | integer | const=c_coll | ✅ | collaborators |
| person_fullname | string | const=lhbyv18qkm | ✅ |  |
| person_org_name | string | const=c_org | ✅ |  |
| person_subdivision_name | string | Название подразделения сотрудника |  |  |
| is_group | bool | const=o9gfk5lenw |  |  |
| person_num | integer | const=vocwacfpan |  |  |
| object_id | integer | const=c_object | ✅ | DefaultDb.GetOptCatalog( type + 's' ) |
| object_name | string | const=c_object_name | ✅ |  |
| budget_period_id | integer | const=c_budget_period |  | budget_periods |
| workflow_id | integer | const=vw_title |  | workflows |
| workflow_state | string | const=c136i4h31p | ✅ |  |
| workflow_state_name | string | const=ld9m4gsmfn | ✅ |  |
| create_date | date | const=c_create_date | ✅ |  |
| close_date | date | const=c_close_date | ✅ |  |
| tag_id | integer | const=pe82k7en9s | ✅ | tags |
| workflow_person_id | integer | const=c_coll | ✅ | collaborators |
| workflow_matching_type | string | const=c136i4h31q |  |  |
| workflow_main_person_id | integer | const=c_coll | ✅ | collaborators |
| knowledge_parts | string | const=vkpb_knowledge_parts_title |  |  |
| tags | string | ##'ID тегов'## |  |  |
| experts | string | const=vkpb_experts |  |  |
| modification_date | date | const=n6k2nxsxx4 | ✅ |  |
| app_instance_id | string | const=8qorpy64yd |  |  |
