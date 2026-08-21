# Схема: wtv_vacancys.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| source_id | string | const=idispolzuemyyv |  |  |
| profession_id | integer | const=lm51bjphsh |  | professional_areas |
| profession_area_id | string | const=vrb_professional_field |  | lists.professional_areas |
| region_id | integer | const=vrb_region |  | regions |
| schedule_work_id | string | const=ibcxjyydad |  | common.employment_kinds |
| schedule_id | integer | const=grafikraboty | ✅ | work_schedules |
| educ_type_id | string | const=c_educ_type |  | common.educ_types |
| employment_type_id | string | const=c_employment_type |  | common.employment_types |
| work_condition_id | integer | Условия труда |  | work_conditions |
| work_mode_id | integer | Режим работы |  | work_modes |
| wage_system_id | integer | Система оплаты труда |  | wage_systems |
| material_liability_id | integer | Материальная ответственность |  | material_liabilitys |
| vacancy_reason_id | integer | Причина вакансии |  | vacancy_reasons |
| work_experience_id | integer | const=opytraboty |  | work_experiences |
| min_age | integer | const=c_min_age |  |  |
| max_age | integer | const=c_max_age |  |  |
| min_wage | integer | const=c_min_wage |  |  |
| max_wage | integer | const=c_max_wage |  |  |
| avg_wage | integer | const=sredniyurovenz |  |  |
| currency_type_id | string | const=c_currency_type |  | lists.currency_types |
| min_budget | integer | const=byudzhetot |  |  |
| max_budget | integer | const=byudzhetdo |  |  |
| budget_currency_type_id | string | const=c_currency_type |  | lists.currency_types |
| position_common_id | integer | const=c_position_common |  | position_commons |
| subordination | string | const=podchinenie |  |  |
| pub_date | date | const=datapublikacii |  |  |
| edit_date | date | const=dataizmeneniya |  |  |
| pub_period | integer | const=srokpublikacii |  |  |
| close_date | date | const=c_close_date |  |  |
| is_closed | bool | const=9msvrstjo3 | ✅ |  |
| collaborator_id | integer | const=vakansiyurazmes | ✅ | collaborators |
| org_id | integer | const=organizaciyaizb | ✅ | orgs |
| org_name | string | const=rne3a8laso |  |  |
| sub_id | integer | const=podrazdeleniei | ✅ | subdivisions |
| sub_name | string | const=uf_depart_name |  |  |
| recruiter_id | integer | const=fiorekrutera |  | collaborators |
| site_id | integer | const=sayt | ✅ | sites |
| url | string | const=q0laxmdm5w |  |  |
| comment | string | const=vkpb_comment |  |  |
| creation_date | date | const=c_create_date | ✅ |  |
| modification_date | date | const=n6k2nxsxx4 | ✅ |  |
| app_instance_id | string | const=8qorpy64yd |  |  |
