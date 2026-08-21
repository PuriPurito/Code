# Схема: wtv_dn_work_curriculum.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| code | string | const=c_code |  |  |
| name | string | const=c_name |  |  |
| status_id | string | const=2uivot368w |  | common.prog_discipl_states |
| type | string | const=c_type |  | common.curriculum_types |
| student_id | integer | ms_tools.get_const('siwbxij6vi') |  | dn_students |
| academ_year_id | integer |  |  | dn_academ_years |
| faculty_id | integer | const=shy9bk42vy |  | subdivisions |
| chair_id | integer | ms_tools.get_const('kafedra') |  | subdivisions |
| special_id | integer | ms_tools.get_const('specialnost') |  | dn_specials |
| specialization_id | integer | ms_tools.get_const('specializaciya') |  | dn_specializations |
| qualification_id | integer | const=c_qualification |  | qualifications |
| educat_form_id | integer |  |  | dn_educat_forms |
| comment | string | const=vkpb_comment |  |  |
| id_block | integer |  |  | dn_block_disciplines |
| name | string | const=c_name |  |  |
| load_block | integer |  |  |  |
| all_auditor | integer |  |  |  |
| all_independ | integer |  |  |  |
| load_cred_block | integer |  |  |  |
| all_cred_auditor | integer |  |  |  |
| all_cred_indep | integer |  |  |  |
| discipl_id | integer |  |  | dn_disciplines |
| loading | integer |  |  |  |
| auditor | integer |  |  |  |
| independ | integer |  |  |  |
| load_credit | integer |  |  |  |
| audit_credit | integer |  |  |  |
| independ_credit | integer |  |  |  |
| term_id | integer | ms_tools.get_const('semestr') |  | dn_terms |
| control_form_id | integer |  |  | dn_control_forms |
| name_control_form | string |  |  |  |
| is_choice | bool |  |  |  |
| id_term | integer |  |  | dn_terms |
| term_hours | integer |  |  |  |
| doc_info | doc_info_base | const=dseglc23jx |  |  |
| part_index | integer |  |  |  |
