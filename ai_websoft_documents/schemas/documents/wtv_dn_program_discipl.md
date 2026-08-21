# Схема: wtv_dn_program_discipl.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| code | string | const=c_code |  |  |
| name | string | const=c_name |  |  |
| status_id | string | const=2uivot368w |  | common.prog_discipl_states |
| faculty_id | integer | const=shy9bk42vy |  | subdivisions |
| chair_id | integer |  |  | subdivisions |
| discipline_id | integer |  |  | dn_disciplines |
| academ_year_id | integer |  |  | dn_academ_years |
| educat_form_id | integer |  |  | dn_educat_forms |
| control_form | integer |  |  | dn_control_forms |
| all_laboriousn_audit | integer |  |  |  |
| all_laboriousn_indep | integer |  |  |  |
| term_id | integer |  |  | dn_terms |
| laboriousn_all_term | integer |  |  |  |
| laboriousn_audit_term | integer |  |  |  |
| laboriousn_indep_term | integer |  |  |  |
| id_subj | integer |  |  |  |
| theme | string | const=vfb_subject |  |  |
| number_week | string |  |  |  |
| hours_audit | integer |  |  |  |
| hours_independ | integer |  |  |  |
| educat_event_id | integer | const=c_event_form |  | dn_educat_events |
| name_educat_event | string |  |  |  |
| desc | string | const=c_desc |  |  |
| discipline_id | integer |  |  | dn_disciplines |
| subject_id | integer |  |  | dn_disciplines |
| special_id | integer |  |  | dn_specials |
| specializat_id | integer |  |  | dn_specializations |
| doc_info | doc_info_base |  |  |  |
