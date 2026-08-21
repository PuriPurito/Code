# Схема: wtv_efficiency_grade.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID |  |  |
| code | string | const=c_code |  |  |
| name | string |  |  |  |
| efficiency_estimation_id | integer | const=ocenkaeffektiv |  | efficiency_estimations |
| assessment_source | string | ##'Источник оценки'## |  |  |
| person_id | integer | const=c_coll |  | collaborators |
| successor_id | integer | const=preemnik |  | successors |
| personnel_reserve_id | integer | ##'Резервист'## |  | personnel_reserves |
| assessor_id | integer | const=ass_estimating_person |  | collaborators |
| assessment_date | date | ##'Дата оценки'## |  |  |
| assessment_appraise_id | integer | const=c_ass_appraise |  | assessment_appraises |
| budget_period_id | integer | const=c_budget_period |  | budget_periods |
| comment | string | const=vkpb_comment |  |  |
| doc_info | doc_info_base | const=dseglc23jx |  |  |
| access | string | const=bmlkskx7us |  |  |
