# Схема: wtv_bonus_item.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| name | string | const=c_name |  |  |
| assessment_appraise_id | integer | const=vppb_procedure |  | assessment_appraises |
| budget_period_id | integer |  |  | budget_periods |
| person_id | integer |  |  | collaborators |
| period_start | date |  |  |  |
| period_end | date |  |  |  |
| pa_id | integer |  |  | pas |
| bonus_profile_id | integer | const=629saq8h6f |  | bonus_profiles |
| value | real |  |  |  |
| boss_treat | real |  |  |  |
| overall | real |  |  |  |
| result | real | const=c_result |  |  |
| comment | string | const=vkpb_comment |  |  |
| doc_info | doc_info_base |  |  |  |
| selector | string |  |  |  |
| is_edit_mode | bool |  |  |  |
