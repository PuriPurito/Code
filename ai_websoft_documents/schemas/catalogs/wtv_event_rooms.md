# Схема: wtv_event_rooms.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID | ✅ |  |
| is_model | bool | const=etalonnoemerop |  |  |
| use_vclass | bool | ##'Использовать виртуальный класс'## |  |  |
| vclass_setting_id | integer | ##'Виртуальный класс'## |  | vclass_setting |
| conversation_id | integer | ##'Разговор'## |  | conversation |
| compound_program_id | integer | const=c_compound_prog | ✅ | compound_programs |
| education_program_id | integer | const=c_edu_prog | ✅ | education_programs |
| education_method_id | integer | const=c_edu_method | ✅ | education_methods |
| create_compound_program_id | integer | const=npumdjtqei | ✅ | compound_programs |
| place_id | integer | const=c_place | ✅ | places |
| vclass_host | string | const=veb_webinar_url |  |  |
| record_exists | bool | const=5q8zw63uhk |  |  |
| show_record | bool | const=veb_mess_rec_view |  |  |
| parent_event_id | integer | const=zc767kbfut | ✅ | events |
| course_finished | integer | const=c_course_finished | ✅ |  |
| course_process | integer | const=c_course_process | ✅ |  |
| course_started | integer | const=eopb3p8ic6 | ✅ |  |
| course_began | integer | const=bl8qy3k0q6 | ✅ |  |
| test_finished | integer | const=lo4hdorbke | ✅ |  |
| test_process | integer | const=s0itjo8la8 | ✅ |  |
| test_started | integer | const=vvi3ubvwey | ✅ |  |
| test_began | integer | const=xyfv1jddma | ✅ |  |
| group_formed | bool | const=veb_group_formed |  |  |
| course_id | integer | const=mak5wn2e6o | ✅ | courses |
| training_plan_id | integer | const=h1pcny33vq | ✅ | training_plans |
| is_public | bool | const=wxfirxmmgx |  |  |
| is_open | bool | const=yfv43186yj |  |  |
| cost | real | const=c_cost |  |  |
| cost_type | string | const=bfy1uczm90 |  | common.cost_types |
| budget_period_id | integer | const=c_budget_period | ✅ | budget_periods |
| distribute_cost_type | string | const=w3p4h7mdxc |  |  |
| duration_fact | real | const=m2h18pymef |  |  |
| duration_days_fact | real | const=0pa8v8ho46 |  |  |
| mandatory_fill_response | bool | const=veb_mandatory_fill_response |  |  |
| event_form | string | const=c_event_form |  | lists.event_forms |
| subdivision_id | integer | const=uf_main_subdivision | ✅ | subdivisions |
| org_id | integer | const=uf_main_org | ✅ | orgs |
| send_type | string | const=tipotpravkiuve |  |  |
| send_persons_types | string | const=tipypoluchatele |  |  |
| group_educ_group_id | string | const=gruppaobucheniya | ✅ |  |
| webinar_system_id | integer | const=sistemavebinar_1 |  | webinar_systems |
| tutor_main | string | const=c_tutor_main |  |  |
| poll_id | integer | const=c_poll |  | polls |
| role_id | integer | const=4egocnh7uc | ✅ | roles |
| modification_date | date | const=n6k2nxsxx4 | ✅ |  |
| app_instance_id | string | const=8qorpy64yd |  |  |
