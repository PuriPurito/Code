# Схема: wtv_education_methods.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID | ✅ |  |
| code | string | const=c_code | ✅ |  |
| name | string | const=c_name | ✅ |  |
| resource_id | integer | const=c_resource |  | resources |
| type | string | const=vemeb_org_type |  | common.education_method_types |
| state_id | string | const=c_status |  | common.education_method_states |
| education_org_id | integer | const=c_org | ✅ | education_orgs |
| course_id | integer | const=mak5wn2e6o |  | courses |
| is_open | bool | const=sdfh3p89ns |  |  |
| duration | real | const=8ft1cueqer |  |  |
| duration_days | integer | const=a8qymj2t90 |  |  |
| person_num | integer | const=vocwacfpan |  |  |
| workflow_id | integer | const=7vineqt05q |  | workflows |
| modification_date | date | const=n6k2nxsxx4 | ✅ |  |
| app_instance_id | string | const=8qorpy64yd |  |  |
| knowledge_parts | string | const=vkpb_knowledge_parts_title |  |  |
| tags | string | ##'ID тегов'## |  |  |
| experts | string | const=vkpb_experts |  |  |
| event_form | string | const=c_event_form |  | lists.event_forms |
| event_type_id | integer | const=Тип мероприятия |  | event_types |
| role_id | integer | const=4egocnh7uc | ✅ | roles |
