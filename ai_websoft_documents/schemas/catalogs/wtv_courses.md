# Схема: wtv_courses.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID | ✅ |  |
| code | string | const=cz4823o9d1 | ✅ |  |
| name | string | const=a74bhtte55 | ✅ |  |
| resource_id | integer | const=c_resource |  | resources |
| status | string | const=c_status |  | common.course_test_states |
| price | real | const=7yuo1ns6yf |  |  |
| mastery_score | real | const=c_pass_score |  |  |
| max_score | real | const=c_max_score |  |  |
| yourself_start | bool | const=221qd1jnb6 |  |  |
| duration | integer | const=grs8t4g2f3 |  |  |
| role_id | integer | const=4egocnh7uc | ✅ | roles |
| person_id | integer | const=89zr2o04pa | ✅ | collaborators |
| cl_course_id | integer | const=c_course |  | cl_courses |
| education_org_id | integer | const=8ep5fzi6uu | ✅ | education_orgs |
| base_url | string | const=ff58twxqbg |  |  |
| default_response_type_id | integer | const=veb_response_default_type |  | response_types |
| mandatory_fill_response | bool | const=veb_mandatory_fill_response |  |  |
| allow_disp_response | bool | const=otobrazhatotzyv |  |  |
| pwt_disp | bool | const=s48xh8z9u6 |  |  |
| view_type | string | Тип плеера курсов |  |  |
| modification_date | date | const=n6k2nxsxx4 |  |  |
| creation_date | date | const=c_create_date |  |  |
| app_instance_id | string | const=8qorpy64yd |  |  |
| knowledge_parts | string | const=vkpb_knowledge_parts_title |  |  |
| tags | string | ##'ID тегов'## |  |  |
| experts | string | const=vkpb_experts |  |  |
| use_proctoring | bool | Использовать прокторинг |  |  |
