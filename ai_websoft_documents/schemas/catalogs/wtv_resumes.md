# Схема: wtv_resumes.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID | ✅ |  |
| code | string | const=c_code |  |  |
| name | string | const=c_name | ✅ |  |
| sex | string | const=vpb_sex |  |  |
| email | string | Email | ✅ |  |
| family_status | string | const=vrb_family_status | ✅ |  |
| birth_date | date | const=vpb_birthday |  |  |
| person_id | integer | const=c_coll |  | collaborators |
| person_fullname | string | const=lhbyv18qkm |  |  |
| person_org_name | string | const=uwvr88idx8 |  |  |
| person_subdivision | string | const=r6vtcn1lvk |  |  |
| person_position | string | const=eli0ttzxol |  |  |
| creator_person_id | integer | const=idcotrudnikaza |  | collaborators |
| creator_person_fullname | string | const=sotrudnikzapol |  |  |
| forbid_portal_delete | bool | const=zapretitudalen |  |  |
| filling_type | string | const=tipzapolneniya |  |  |
| min_wage | integer | const=c_min_wage | ✅ |  |
| max_wage | integer | const=c_max_wage | ✅ |  |
| currency_type_id | string | const=c_currency_type | ✅ | lists.currency_types |
| profession_id | integer | const=lm51bjphsh |  | professional_areas |
| profession_area_id | string | const=lm51bjphsh | ✅ | lists.professional_areas |
| profession_area | string | const=vrb_professional_field |  |  |
| region_id | integer | const=vrb_region | ✅ | regions |
| employment_type_id | string | const=c_employment_type | ✅ | common.employment_types |
| schedule_work_id | string | const=ibcxjyydad | ✅ | common.employment_kinds |
| schedule_id | integer | const=grafikraboty | ✅ | work_schedules |
| vacancy_source_id | integer | const=istochnikvakans | ✅ | vacancy_sources |
| exp_years | real | const=81f666btcv | ✅ |  |
| willingness_travel_type_id | string | ##'Готовность к командировкам'## |  | common.willingness_travel_types |
| is_willing_relocate | bool | ##'Готовность к переезду'## |  |  |
| main_educ_type_id | string | const=mi84j4l04x | ✅ | common.educ_types |
| education | string | const=4ptakjx1to |  |  |
| is_archive | bool | const=vmkpb_archive |  |  |
| is_candidate | bool | const=4pft7z99y2 |  |  |
| lng_id | string |  |  | common.languages |
| educ_type_id | string |  |  | common.expended_educ_types |
| education_type_id | integer | const=vrb_education |  | education_types |
| creation_date | date | const=c_create_date | ✅ |  |
| modification_date | date | const=n6k2nxsxx4 | ✅ |  |
| app_instance_id | string | const=8qorpy64yd |  |  |
