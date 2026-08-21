# Схема: wtv_position_assessment_forms.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID | ✅ |  |
| code | string | const=c_code |  |  |
| name | string | const=c_name |  |  |
| person_id | integer | const=m243omwfqr |  | collaborators |
| position_common_id | integer | const=vpaab_ass_position |  | position_commons |
| is_done | bool | const=xvgwmop0bf |  |  |
| assessment_appraise_id | integer | const=c_ass_appraise | ✅ | assessment_appraises |
| scale | integer | const=vpaab_sum_score |  |  |
| grade_id | integer | const=vpaab_grade |  | grades |
| modification_date | date | const=n6k2nxsxx4 |  |  |
| app_instance_id | string | const=8qorpy64yd |  |  |
