# Схема: wtv_form_event_regular.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| type_id | string |  |  | common.event_types |
| event_type_id | integer |  |  | event_types |
| place_id | integer |  |  | places |
| place | string |  |  |  |
| compound_program_id | integer |  |  | compound_programs |
| education_program_id | integer |  |  | education_programs |
| education_method_id | integer |  |  | education_methods |
| program_id | integer |  |  |  |
| education_org_id | integer |  |  | education_orgs |
| education_org_type | string |  |  |  |
| education_org_name | string |  |  |  |
| course_id | integer |  |  | courses |
| forum_id | integer |  |  | forums |
| chat_id | integer |  |  | chats |
| is_public | bool |  |  |  |
| is_open | bool |  |  |  |
| max_person_num | integer |  |  |  |
| min_person_num | integer |  |  |  |
| contract_id | integer |  |  | contracts |
| organizational_form | string |  |  | lists.organizational_forms |
| event_form | string |  |  | lists.event_forms |
| subdivision_id | integer |  |  | subdivisions |
| collaborator_id | integer |  |  | collaborators |
| education_plan_id | integer |  |  | education_plans |
| request_person_id | integer |  |  | collaborators |
| expense_item_id | integer |  |  | expense_items |
| sum | real |  |  |  |
| cost_center_id | integer |  |  | cost_centers |
| total_sum | real |  |  |  |
| not_pay | bool |  |  |  |
| can_use_camera | bool |  |  |  |
| can_use_microphone | bool |  |  |  |
| unnamed_person_num | integer |  |  |  |
| unnamed_person_sum | real |  |  |  |
| quota_org | integer |  |  |  |
| quota_subdivision | integer |  |  |  |
| quota_person | integer |  |  |  |
| even_preparation_id | string |  |  |  |
| person_id | integer |  |  | collaborators |
| person_fullname | string |  |  |  |
| plan_date | date |  |  |  |
| fact_date | date |  |  |  |
| status_id | string |  |  | common.event_status_types |
| comment | string |  |  |  |
| comment_person | string |  |  |  |
| group_id | integer |  |  | groups |
| collaborator_id | integer |  |  | collaborators |
| object_resource_id | integer |  |  | object_resources |
| name | string | const=u7en2bk4eh |  |  |
| type | string | const=x91r5l546f |  | lists.object_resource_types |
| total_cost | real |  |  |  |
| code | string |  |  |  |
| date | date |  |  |  |
| legal_entity_name | string |  |  |  |
| legal_entity_code | string |  |  |  |
| desc | string |  |  |  |
| cost_center_id | integer |  |  | cost_centers |
| cost_center_type | string |  |  |  |
| expense_item_id | integer |  |  | expense_items |
| sum | real |  |  |  |
| unnamed_person_sum | real |  |  |  |
| total_sum | real |  |  |  |
| budget_period_id | integer |  |  | budget_periods |
| default_response_type_id | integer |  |  | response_types |
| mandatory_fill_response | bool |  |  |  |
| default_request_type_id | integer |  |  | request_types |
| default_event_result_type_id | integer |  |  | event_result_types |
| main_material_url | string |  |  |  |
| main_material_width | string |  |  |  |
| main_material_height | string |  |  |  |
| use_video | bool |  |  |  |
| video_url | string |  |  |  |
| video_login | string |  |  |  |
| video_password | string |  |  |  |
| use_audio | bool |  |  |  |
| audio_url | string |  |  |  |
| audio_channel_login | string |  |  |  |
| audio_channel_password | string |  |  |  |
| audio_login | string |  |  |  |
| audio_password | string |  |  |  |
| date_request_begin | date |  |  |  |
| date_request_over | date |  |  |  |
| date_request_rejection_over | date |  |  |  |
| id | string |  |  |  |
| start_time | string |  |  |  |
| finish_time | string |  |  |  |
| start_date | date |  |  |  |
| finish_date | date |  |  |  |
| desc | string |  |  |  |
| comment | string |  |  |  |
| disp_persons_for_all | bool |  |  |  |
| access | string | const=bmlkskx7us |  |  |
