# Схема: wtv_event.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| type_id | string | const=c_type |  | common.event_types |
| event_type_id | integer | const=c_type |  | event_types |
| start_date | date | const=c_start_date |  |  |
| finish_date | date | const=c_finish_date |  |  |
| is_model | bool | const=etalonnoemerop |  |  |
| is_room | bool | ##'Is room'## |  |  |
| place_id | integer |  |  | places |
| place | string | const=c_action_place |  |  |
| vclass_host | string | const=veb_webinar_url |  |  |
| use_camera_capture | bool |  |  |  |
| login_with_camera_only | bool |  |  |  |
| capture_rate | integer |  |  |  |
| record_status | string | const=statuszapisi |  |  |
| record_exists | bool | const=5q8zw63uhk |  |  |
| record_id | integer |  |  | resources |
| record_date | date | const=datazapisi |  |  |
| record_download_count | integer | const=kolichestvoskach |  |  |
| record_view_count | integer | const=kolichestvopros |  |  |
| bandwidth | integer | const=shirinakanaladl |  |  |
| use_record_camera_capture | bool | const=delatsnimkiska_2 |  |  |
| view_with_camera_only | bool | const=razreshitprosmo_1 |  |  |
| record_capture_rate | integer | const=record_capture_rate |  |  |
| current_presentation_id | integer | const=tekushayaprezent |  |  |
| webinar_system_id | integer | const=sistemavebinar_1 |  | webinar_systems |
| class | attr |  |  |  |
| id | integer | const=tekushiytest |  | assessments |
| title | string | const=6b8507f6b3 |  |  |
| state | string |  |  |  |
| start_time | string |  |  |  |
| duration | integer |  |  |  |
| class | string |  |  |  |
| status | string |  |  |  |
| start_time | string |  |  |  |
| recorder_id | integer |  |  | collaborators |
| width | string |  |  |  |
| height | string |  |  |  |
| name | string |  |  |  |
| type | string |  |  |  |
| value | string |  |  |  |
| name | string |  |  |  |
| value | string |  |  |  |
| use_vclass | bool | ##'Использовать виртуальный класс'## |  |  |
| vclass_setting_id | integer | ##'Виртуальный класс'## |  | vclass_setting |
| conversation_id | integer | ##'Разговор'## |  | conversation |
| show_record | bool | const=veb_mess_rec_view |  |  |
| allow_record_download | bool |  |  |  |
| use_reserve_server | bool | const=1wgrauz139 |  |  |
| compound_program_id | integer | const=c_compound_prog |  | compound_programs |
| education_program_id | integer | const=c_edu_prog |  | education_programs |
| education_method_id | integer | const=c_edu_method |  | education_methods |
| program_id | integer | const=1wgrauz139 |  |  |
| create_compound_program_id | integer |  |  | compound_programs |
| training_plan_id | integer |  |  | training_plans |
| education_org_id | integer | const=c_org |  | education_orgs |
| education_org_type | string |  |  |  |
| education_org_name | string | const=rne3a8laso |  |  |
| course_id | integer | const=c_course |  | courses |
| forum_id | integer | const=vfb_forum |  | forums |
| chat_id | integer | const=c_chat |  | chats |
| poll_id | integer | const=c_poll |  | polls |
| status_id | string | const=c_status |  | common.event_status_types |
| is_public | bool | const=szufofxtc6 |  |  |
| is_open | bool | const=kskzum01nm |  |  |
| allow_guest_login | bool | ms_tools.get_const('razreshitvhodbe') |  |  |
| guest_restrictions | integer | ##'Ограничения для гостевого входа'## |  |  |
| is_open_case | bool |  |  |  |
| public_answers | bool |  |  |  |
| duration_plan | real | const=rrd8ora4vr |  |  |
| duration_days_plan | real | const=xkvj3soq2g |  |  |
| duration_fact | real | const=m2h18pymef |  |  |
| duration_days_fact | real | const=0pa8v8ho46 |  |  |
| max_person_num | integer | const=veb_max_person_num |  |  |
| min_person_num | integer | const=o37af2zthb |  |  |
| course_finished | integer | const=c_course_finished |  |  |
| course_process | integer | const=c_course_process |  |  |
| course_started | integer | const=eopb3p8ic6 |  |  |
| course_began | integer | const=bl8qy3k0q6 |  |  |
| test_finished | integer | const=lo4hdorbke |  |  |
| test_process | integer | const=s0itjo8la8 |  |  |
| test_started | integer | const=vvi3ubvwey |  |  |
| test_began | integer | const=xyfv1jddma |  |  |
| tutor_main | string | const=c_tutor_main |  |  |
| contract_id | integer |  |  | contracts |
| organizational_form | string | const=c_org_form |  | lists.organizational_forms |
| event_form | string | const=c_event_form |  | lists.event_forms |
| event_forms | string | const=j7ojc6ykta |  |  |
| form_id | string |  |  | lists.event_forms |
| stages | string | const=5xzjewli36 |  |  |
| stage_id | integer | ID |  |  |
| parent_id | integer | parent_id |  |  |
| name | string | const=c_name |  |  |
| start_date | date | const=c_start_date |  |  |
| finish_date | date | const=3bywib72ya |  |  |
| is_active | bool | const=filecorereourceisavailable |  |  |
| org_id | integer |  |  | orgs |
| subdivision_id | integer |  |  | subdivisions |
| collaborators | string | const=c_collaborators |  |  |
| collaborator_id | integer |  |  | collaborators |
| last_exist_date | date |  |  |  |
| education_plan_id | integer |  |  | education_plans |
| request_person_id | integer |  |  | collaborators |
| active_test_learning_id | integer |  |  | active_test_learnings |
| controller_code | string |  |  | lists.hitt_controllers |
| webinar_url | string |  |  |  |
| participation_id | string |  |  |  |
| expense_item_id | integer |  |  | expense_items |
| sum | real |  |  |  |
| cost_center_id | integer |  |  | cost_centers |
| total_sum | real |  |  |  |
| not_pay | bool |  |  |  |
| can_use_camera | bool |  |  |  |
| can_use_microphone | bool |  |  |  |
| id | integer |  |  |  |
| is_assist | string |  |  |  |
| is_confirm | string |  |  |  |
| is_banned | string |  |  |  |
| not_participate | string |  |  |  |
| score | real |  |  |  |
| column_name | string |  |  |  |
| column_value | string |  |  |  |
| current_state | string |  |  |  |
| edu_group_name | string |  |  |  |
| group_educ_group_id | string | const=gruppaobucheniya |  |  |
| unnamed_person_by_orgs | string | const=3fag5jx69u |  |  |
| org_id | integer |  |  | orgs |
| org_name | string |  |  |  |
| unnamed_person_num | integer | const=veb_unnamed_person_num |  |  |
| collaborator_id | integer | const=c_tutor_main |  | collaborators |
| person_fullname | string | const=lhbyv18qkm |  |  |
| unnamed_person_num | integer | const=veb_unnamed_person_num |  |  |
| unnamed_person_sum | real |  |  |  |
| group_formed | bool | const=veb_group_formed |  |  |
| quota_org | integer | const=16b6qaktdp |  |  |
| quota_subdivision | integer | const=y3lun8bccu |  |  |
| quota_person | integer | const=6lq015ck3m |  |  |
| even_preparations | string | const=veb_preparation |  |  |
| even_preparation_id | string |  |  |  |
| person_id | integer | const=ouyldduby1 |  | collaborators |
| person_fullname | string | const=04c9fb17ay |  |  |
| plan_date | date | const=c_plan_date |  |  |
| fact_date | date | const=c_fact_date |  |  |
| status_id | string | const=c_status |  | common.event_status_types |
| comment | string | const=vkpb_comment |  |  |
| comment_person | string | const=veb_preparation_comment |  |  |
| webinar_url | string |  |  |  |
| participation_id | string |  |  |  |
| hitt | string | const=g1bgkbzakm |  |  |
| assessment_id | integer | const=c_test |  | assessments |
| tutor_controller_code | string | const=ni1i7h4szd |  | lists.hitt_controllers |
| instruction | string | const=1n67rnd596 |  |  |
| auto_next_all_answer | bool | const=2mwxls9ee3 |  |  |
| auto_finish_test | bool | const=5folkyrv7d |  |  |
| use_activated_test | bool | const=cnljgmf7oe |  |  |
| port_num | integer | const=l1dyx37zfv |  |  |
| column_num | integer | const=lmg1y3dna8 |  |  |
| font_size | integer | const=ivenp35npx |  |  |
| groups | string | const=c_le_groups |  |  |
| group_id | integer |  |  | groups |
| tutors | string | const=veb_tutors |  |  |
| collaborator_id | integer | const=97m1vc5abp |  | collaborators |
| telephone_out | string |  |  |  |
| telephone_in | string |  |  |  |
| main | bool | const=f0blhs9yml |  |  |
| webinar_url | string |  |  |  |
| participation_id | string |  |  |  |
| object_resources | string | const=c_object_resource |  |  |
| object_resource_id | integer |  |  | object_resources |
| name | string | const=u7en2bk4eh |  |  |
| type | string | const=x91r5l546f |  | lists.object_resource_types |
| total_cost | real | const=63f56qb92a |  |  |
| total_cost_plan | real | const=zts9iz92tw |  |  |
| contracts | string | const=uggyn8pk1m |  |  |
| code | string | const=c_code |  |  |
| date | date | const=vdb_aim_date |  |  |
| legal_entity_name | string | const=sp8efkgbu3 |  |  |
| legal_entity_code | string | const=yzo2ikbtm9 |  |  |
| desc | string | const=c_desc |  |  |
| cost_center_id | integer | const=c_cost_center |  | cost_centers |
| cost_center_type | string |  |  |  |
| distribute_cost_type | string | const=w3p4h7mdxc |  |  |
| expense_items | string | const=ijnxuq22zc |  |  |
| expense_item_id | integer | const=c_expense_item |  | expense_items |
| sum | real | const=c_sum |  |  |
| unnamed_person_sum | real |  |  |  |
| total_sum | real |  |  |  |
| budget_period_id | integer | const=c_budget_period |  | budget_periods |
| presentation_id | integer |  |  |  |
| visibility | string |  |  | common.event_file_visibility_types |
| library_material_id | integer |  |  | library_materials |
| learning_task_id | integer |  |  | learning_tasks |
| default_response_type_id | integer | const=veb_response_default_type |  | response_types |
| mandatory_fill_response | bool | const=veb_mandatory_fill_response |  |  |
| default_request_type_id | integer | const=veb_default_request_type |  | request_types |
| use_object_workflow | bool | const=veb_use_object_workflow |  |  |
| default_event_result_type_id | integer | const=veb_default_result_type |  | event_result_types |
| main_material_url | string | const=yfader1p98 |  |  |
| main_material_width | string | const=veb_mat_w |  |  |
| main_material_height | string | const=veb_mat_h |  |  |
| use_video | bool | const=veb_video_disp |  |  |
| video_url | string | const=veb_video_url |  |  |
| video_login | string | const=uf_login |  |  |
| video_password | string | const=veb_pass |  |  |
| use_audio | bool | const=veb_audio_disp |  |  |
| audio_url | string | const=veb_audio_url |  |  |
| audio_channel_login | string | const=649jcyxknx |  |  |
| audio_channel_password | string | const=6mz3mb3nq7 |  |  |
| audio_login | string | const=nj0m7mt6ld |  |  |
| audio_password | string | const=4my1390axa |  |  |
| date_request_begin | date | const=veb_date_request_begin |  |  |
| date_request_over | date | const=qb0mtcsfez |  |  |
| date_request_rejection_over | date | const=fbugobnr9i |  |  |
| parent_event_id | integer |  |  | events |
| regular_schedule | string | const=3g9pnfspl4 |  |  |
| start_date | date | const=8g2lb8w0b0 |  |  |
| finish_date | date | const=7p3uecpp4k |  |  |
| expense_items | string | const=ijnxuq22zc |  |  |
| expense_item_id | integer |  |  | expense_items |
| sum | real | const=c_sum |  |  |
| expense_sum | real | const=cbhx4bti5d |  |  |
| cost_center_id | integer | const=c_cost_center |  | cost_centers |
| cost_center_type | string |  |  |  |
| total_cost | real | const=c9fyd1euxh |  |  |
| phases_num | integer |  |  |  |
| access | string | const=bmlkskx7us |  |  |
| desc | string | const=c_desc |  |  |
| comment | string | const=vkpb_comment |  |  |
| doc_info | doc_info_base | const=dseglc23jx |  |  |
| id | string |  |  |  |
| lector_id | integer |  |  | lectors |
| object_resource_id | integer |  |  | object_resources |
| start_date | date |  |  |  |
| finish_date | date |  |  |  |
| comment | string |  |  |  |
| reserve_desc | string |  |  |  |
| collaborator_id | integer |  |  | BaseMultipleElem.Parent.BaseMultipleElem.Parent.Parent.collaborators |
| is_assist | bool |  |  |  |
| disp_collaborator_phase_presence | bool |  |  |  |
| disp_persons_for_all | bool |  |  |  |
| has_lector_appraise | bool |  |  |  |
| has_lector_comp | bool |  |  |  |
| has_lector_quest | bool |  |  |  |
| lector_restype | integer |  |  | event_result_types |
| lector_date_start | date |  |  |  |
| has_self_appraise | bool |  |  |  |
| has_self_comp | bool |  |  |  |
| has_self_quest | bool |  |  |  |
| self_restype | integer |  |  | event_result_types |
| self_date_start | date |  |  |  |
| has_manager_appraise | bool |  |  |  |
| has_manager_comp | bool |  |  |  |
| has_manager_quest | bool |  |  |  |
| manager_restype | integer |  |  | event_result_types |
| manager_date_start | date |  |  |  |
| disp_all_assessment_plan | bool |  |  |  |
| name | string |  |  |  |
| start_date | date |  |  |  |
| finish_date | date |  |  |  |
| webinar_system_id | integer |  |  | webinar_systems |
| status_id | string |  |  | common.event_status_types |
| selector | string |  |  |  |
| total_sum | real |  |  |  |
| unnamed_person_total_sum | real |  |  |  |
| is_load_results | bool |  |  |  |
| show_result_fields | bool |  |  |  |
| changed | bool |  |  |  |
| checked_fields | bool |  |  |  |
| sort_type_id | string |  |  |  |
| collaborator_id | integer |  |  | collaborators |
| lector_id | integer |  |  | lectors |
| collaborator_id | integer |  |  | collaborators |
| person_id | integer |  |  | collaborators |
| assessment_plan_id | integer |  |  | event_assessment_plans |
| loop_date | date |  |  |  |
| loop_index | integer |  |  |  |
| last_start_date | date |  |  |  |
| last_finish_date | date |  |  |  |
| last_distribute_cost_type | string |  |  |  |
| last_default_event_result_type_id | integer |  |  |  |
| recource_selector | string |  |  |  |
| recource_tab_selector | string |  |  |  |
| result_array | variant |  |  |  |
| collaborator_array | variant |  |  |  |
| collaborator_id | integer |  |  | collaborators |
| is_participant | bool |  |  |  |
| id | integer |  |  |  |
| is_assist | string |  |  |  |
| is_confirm | string |  |  |  |
| not_participate | string |  |  |  |
| score | real |  |  |  |
| course_id | integer |  |  | courses |
| active_learning_num | integer |  |  |  |
| active_learning_state_id | integer |  |  | common.learning_states |
| learning_num | integer |  |  |  |
| learning_state_id | integer |  |  | common.learning_states |
| active_learning_state_name | string |  |  |  |
| learning_num | integer |  |  |  |
| learning_state_name | string |  |  |  |
| bk_color | string |  |  |  |
| course_id | integer |  |  | courses |
| course_id | integer |  |  | XQuery( 'courses' ) |
| person_filter | string |  |  |  |
| flag_open_org_sub_group_section | bool |  |  |  |
| need_create_results | bool |  |  |  |
| rows | variant |  |  |  |
| row_disp_elem | string |  |  |  |
| row_list_field | string |  |  |  |
| row_key_field | string |  |  |  |
| list_variant | variant |  |  |  |
| notification_reminders | string | ##'Настройки уведомлений до начала мероприятия'## |  |  |
| id | string |  |  |  |
| minutes | integer | ##'Минут до начала мероприятия'## |  |  |
| sended | bool | ##'Напоминания отправлены'## |  |  |
| role_id | integer | const=4egocnh7uc |  | roles |
