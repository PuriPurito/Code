# Схема: wtv_resume.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID |  |  |
| code | string | const=c_code |  |  |
| name | string | const=c_name |  |  |
| resource_id | integer | const=c_resource |  | resources |
| is_candidate | bool | const=4pft7z99y2 |  |  |
| creator_person_id | integer | const=ass_estimating_person |  | collaborators |
| forbid_portal_delete | bool | const=zapretitudalen |  |  |
| filling_type | string | const=tipzapolneniya |  |  |
| sex | string | const=vpb_sex |  |  |
| family_status | string | const=vrb_family_status |  |  |
| birth_date | date | const=vpb_birthday |  |  |
| academic_degree | string | ms_tools.get_const('uchenayastepen') |  |  |
| academic_heading | string | ms_tools.get_const('uchenoezvanie') |  |  |
| location_id | string | const=vrb_region |  |  |
| address | string | const=uf_address |  |  |
| region | string | ms_tools.get_const('vrb_region') |  |  |
| city | string | ms_tools.get_const('titf5lz1t9') |  |  |
| phone | string | const=npvhp1hfm0 |  |  |
| work_phone | string | const=dd2zo2k2mj |  |  |
| mobile_phone | string | const=emoqzexw7p |  |  |
| min_wage | integer | const=c_min_wage |  |  |
| max_wage | integer | const=c_max_wage |  |  |
| currency_type_id | string | const=c_currency_type |  | lists.currency_types |
| email | string | E-mail |  |  |
| inet_uid | string |  |  |  |
| profession_area_id | string | const=vrb_professional_field |  | lists.professional_areas |
| profession_id | integer | const=vrb_professional_field |  | professional_areas |
| professional_area_type_id | string | Специальность по диплому |  | professional_area_types |
| region_id | integer | const=vrb_region |  | regions |
| employment_type_id | string | const=c_employment_type |  | common.employment_types |
| schedule_work_id | string | const=ibcxjyydad |  | common.employment_kinds |
| schedule_id | integer | const=grafikraboty |  | work_schedules |
| vacancy_source_id | integer | const=istochnikvakans |  | vacancy_sources |
| exp_years | real | const=81f666btcv |  |  |
| willingness_travel_type_id | string | ##'Готовность к командировкам'## |  | common.willingness_travel_types |
| is_willing_relocate | bool | ##'Готовность к переезду'## |  |  |
| relocate_name | string | ##'Предпочтительные регионы переезда'## |  |  |
| children_num | integer |  |  |  |
| educ_type_id | string | const=vrb_education |  | common.educ_types |
| education_type_id | integer | const=vrb_education |  | education_types |
| skills | string | const=trebuemyenavyk |  |  |
| id | string |  |  |  |
| skill_id | integer | const=idnavyka |  | skills |
| skill_parent_id | integer | const=roditelskiyele |  | skills |
| skill_name | string | const=nazvanienavyka |  |  |
| skill_id_with_levels | integer | const=idzaglavnogona |  | skills |
| level_id | string | const=idurovnya |  |  |
| level_name | string | const=nazvanieurovnya |  |  |
| is_archive | bool | const=vmkpb_archive |  |  |
| work_experiences | string | const=vrb_experience |  |  |
| id | string |  |  |  |
| start_date | date | const=c_begin |  |  |
| finish_date | date | const=atonlbxumv |  |  |
| org_name | string | const=c_org |  |  |
| profession_area_id | string | const=vrb_professional_field |  | lists.professional_areas |
| profession_id | integer | const=vrb_professional_field |  | professional_areas |
| region_id | integer | const=vrb_region |  | regions |
| org_phone | string | ms_tools.get_const('rabochiytelefon') |  |  |
| org_fax | string | ms_tools.get_const('faksorganizacii') |  |  |
| org_email | string | ms_tools.get_const('emailorganizac') |  |  |
| org_address | string | ms_tools.get_const('pochtovyyadreso') |  |  |
| org_site | string | ms_tools.get_const('saytorganizacii') |  |  |
| position_name | string | const=c_position |  |  |
| desc | string | const=z3phecnpaf |  |  |
| comment | string | const=vkpb_comment |  |  |
| educations | string | const=vrb_education |  |  |
| id | string |  |  |  |
| name | string | const=c_name |  |  |
| type | string | const=c_type |  | common.expended_educ_types |
| education_type_id | integer | const=c_type |  | education_types |
| form | integer | const=formaobucheniya |  | education_forms |
| mode | integer | Способ получения образования |  | education_modes |
| date | integer | const=3bywib72ya |  |  |
| professional_area_type_id | integer | Тип профессиональной области |  | professional_area_types |
| professional_area_id | integer | Специальность по диплому |  | professional_areas |
| parent_id | integer | const=roditelskiyele |  | professional_areas |
| specialisation | string | const=shy9bk42vy |  |  |
| result | string | const=c_result |  |  |
| site | string | ms_tools.get_const('saytvuza') |  |  |
| desc | string |  |  |  |
| comment | string | const=vkpb_comment |  |  |
| projects | string | ms_tools.get_const('nauchnyeraboty') |  |  |
| id | string |  |  |  |
| sphere | string | ms_tools.get_const('predmetnayaobla') |  |  |
| type | string | ms_tools.get_const('tipproekta') |  |  |
| examination_year | integer | ms_tools.get_const('godprovedeniyae') |  |  |
| year | integer | ms_tools.get_const('godprovedeniya') |  |  |
| desc | string | ms_tools.get_const('opisanieproekta') |  |  |
| comment | string | const=vkpb_comment |  |  |
| publications | string | ms_tools.get_const('publikacii') |  |  |
| id | string |  |  |  |
| name | string | ms_tools.get_const('c_name') |  |  |
| publisher | string | ms_tools.get_const('izdanie') |  |  |
| date | date | ms_tools.get_const('datapublikacii') |  |  |
| link | string | ms_tools.get_const('q0laxmdm5w') |  |  |
| comment | string | const=vkpb_comment |  |  |
| citizenship | string |  |  |  |
| main_lng | string | const=vrb_lng_my |  | common.languages |
| lngs | string | const=vrb_lng_is |  |  |
| id | string |  |  |  |
| lng_id | string | const=vrb_lng_foreign |  | common.languages |
| level | integer | const=vrb_lng_level |  | common.language_levels |
| dominant_skills | string | const=abjn0mispr |  |  |
| access | string | const=bmlkskx7us |  |  |
| desc | string | const=c_desc |  |  |
| html_resume | string | const=htmlopisaniere |  |  |
| comment | string | const=vkpb_comment |  |  |
| doc_info | doc_info_base | const=dseglc23jx |  |  |
| person_id | integer |  |  |  |
