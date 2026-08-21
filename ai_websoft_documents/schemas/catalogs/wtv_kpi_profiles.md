# Схема: wtv_kpi_profiles.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID | ✅ |  |
| code | string | const=c_code |  |  |
| name | string | const=c_name |  |  |
| competence_profile_family_id | integer | const=a3ys523cg4 | ✅ | competence_profile_familys |
| role_id | integer | const=4egocnh7uc | ✅ | roles |
| parent_kpi_profile_id | integer | const=ass_kpi_profileparent |  | kpi_profiles |
| kpi_id | integer | const=kpe |  | kpis |
| knowledge_parts | string | const=vkpb_knowledge_parts_title |  |  |
| tags | string | ##'ID тегов'## |  |  |
| experts | string | const=vkpb_experts |  |  |
| workflow_id | integer | const=vw_title |  | workflows |
| workflow_state | string | const=c136i4h31p | ✅ |  |
| workflow_state_name | string | const=ld9m4gsmfn | ✅ |  |
| workflow_person_id | integer | const=c_coll | ✅ | collaborators |
| workflow_matching_type | string | const=c136i4h31q |  |  |
| workflow_main_person_id | integer | const=c_coll | ✅ | collaborators |
| modification_date | date | const=n6k2nxsxx4 |  |  |
| app_instance_id | string | const=8qorpy64yd |  |  |
