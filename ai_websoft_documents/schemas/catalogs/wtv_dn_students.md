# Схема: wtv_dn_students.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID |  |  |
| code | string | const=c_code |  |  |
| type | string | const=c_type |  | common.stud_types |
| person_id | integer | const=c_coll |  | collaborators |
| person_fullname | string | const=lhbyv18qkm |  |  |
| email | string | Email | ✅ |  |
| phone | string | const=uf_phone |  |  |
| region | string | const=vrb_region |  |  |
| adress_fact_live | string |  |  |  |
| special_id | integer | ms_tools.get_const('specialnost') |  | dn_specials |
| specialization_id | integer | ms_tools.get_const('specializaciya') |  | dn_specializations |
| educat_form_id | string | ms_tools.get_const('formyobucheniya') |  | dn_educat_forms |
| edu_condition_id | string | ms_tools.get_const('usloviyaobucheniya') |  | dn_edu_conditions |
| qualification_id | integer | const=c_qualification |  | qualifications |
| status_id | string | const=2uivot368w |  | common.student_states |
| main_group_id | integer | ms_tools.get_const('osnovnayaakadem') |  | dn_stud_groups |
| educat_groups | string | const=xg7kvxmhyi |  |  |
| stud_dt_id | string | const=49k8p9ildr |  | common.stud_doc_types |
| educat_institution | string | ms_tools.get_const('uchebnoezaveden') |  |  |
| is_excellent | bool | ms_tools.get_const('sotlichiem') |  |  |
| faculty_id | integer | const=shy9bk42vy |  | subdivisions |
| chair_id | integer |  |  | subdivisions |
| scient_adviser_id | integer |  |  | lectors |
| subject | string |  |  |  |
| file_name | string | const=c_file |  |  |
| modification_date | date | const=n6k2nxsxx4 |  |  |
| app_instance_id | string | const=8qorpy64yd |  |  |
