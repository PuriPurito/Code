# Схема: wtv_dn_student.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| code | string | const=c_code |  |  |
| type | string | const=c_type |  | common.stud_types |
| person_id | integer | const=c_coll |  | collaborators |
| person_fullname | string | const=lhbyv18qkm |  |  |
| mod_name | person_name_base | const=doyosspr5v |  |  |
| region | string | const=vrb_region |  |  |
| adress_fact_live | string |  |  |  |
| need_conduct | bool | ms_tools.get_const('neobhodimostob') |  |  |
| is_conduct | bool | ms_tools.get_const('obshezhitiepredo') |  |  |
| is_benefits | bool | ms_tools.get_const('lgoty') |  |  |
| special_id | integer | ms_tools.get_const('specialnost') |  | dn_specials |
| specialization_id | integer | ms_tools.get_const('specializaciya') |  | dn_specializations |
| educat_form_id | string | ms_tools.get_const('formyobucheniya') |  | dn_educat_forms |
| edu_condition_id | string | ms_tools.get_const('usloviyaobucheniya') |  | dn_edu_conditions |
| qualification_id | integer | const=c_qualification |  | qualifications |
| status_id | string | const=2uivot368w |  | common.student_states |
| main_group_id | integer | ms_tools.get_const('osnovnayaakadem') |  | dn_stud_groups |
| educat_groups | string | const=urrno1dqhy |  |  |
| edu_group_id | integer | const=xg7kvxmhyi |  | dn_stud_groups |
| stud_dt_id | string | const=49k8p9ildr |  | common.stud_doc_types |
| educat_institution | string | ms_tools.get_const('uchebnoezaveden') |  |  |
| doc_series | string | const=6px8b1t11c |  |  |
| doc_number | string | const=fnxaxirsmo |  |  |
| doc_year | string | ms_tools.get_const('godvydachi') |  |  |
| is_excellent | bool | ms_tools.get_const('sotlichiem') |  |  |
| lng_id | string | const=p6rt8epp12 |  | lngs |
| location_id | string | const=2oe3g1tyyn |  | lists.locations |
| web_design_id | string | const=jkmkd02mw9 |  | global_settings.settings.web_designs |
| pict_url | string | const=y4e57allmv |  |  |
| web_enter_date | date | const=zvitm42m3d |  |  |
| faculty_id | integer | const=shy9bk42vy |  | subdivisions |
| chair_id | integer |  |  | subdivisions |
| scient_adviser_id | integer |  |  | lectors |
| subject | string |  |  |  |
| doc_info | doc_info_base | const=dseglc23jx |  |  |
| educat_groups | string | const=urrno1dqhy |  |  |
| edu_group_id | integer | const=xg7kvxmhyi |  | dn_stud_groups |
