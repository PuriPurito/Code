# Схема: wtv_staff_position.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID | ✅ |  |
| code | string | const=c_code |  |  |
| name | string | const=c_name |  |  |
| status | string | const=c_status |  | common.project_status_types |
| start_date | date | Дата утверждения |  |  |
| finish_date | date | const=c_close_date |  |  |
| org_name | string | const=c_org |  |  |
| org_id | integer | const=c_org |  | orgs |
| subdivision_id | integer | const=c_subd |  | subdivisions |
| subdivision_name | string | const=uf_depart_name |  |  |
| position_common_id | integer | const=c_position_common |  | position_commons |
| profession_id | integer | Профессия |  | professions |
| profession_category_id | integer | Разряд профессии |  | profession_categorys |
| bonus_profile_id | integer | const=629saq8h6f |  | bonus_profiles |
| staff_num | real | Количество штатных единиц |  |  |
| kpi_profile_id | integer | const=ass_kpi_profile |  | kpi_profiles |
| id | integer | const=ass_kpi_profile |  | kpi_profiles |
| period_type_id | string |  |  | common.perioditys |
| obligatory | bool | const=7df3q17dhk |  |  |
| knowledge_profile_id | integer | const=syqx4l4uo1 |  | knowledge_profiles |
| competence_profile_id | integer | const=ass_competence_profile |  | competence_profiles |
| competence_profiles | string | const=ass_competence_profiles |  |  |
| id | integer | const=ass_competence_profile |  | competence_profiles |
| comment | string | const=vkpb_comment |  |  |
| doc_info | doc_info_base |  |  |  |
