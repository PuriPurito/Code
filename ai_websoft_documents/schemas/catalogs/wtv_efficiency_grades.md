# Схема: wtv_efficiency_grades.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID | ✅ |  |
| code | string | const=c_code |  |  |
| name | string | const=c_name |  |  |
| efficiency_estimation_id | integer | const=ocenkaeffektiv | ✅ | efficiency_estimations |
| assessment_source | string | ##'Источник оценки'## |  |  |
| person_id | integer | const=c_coll | ✅ | collaborators |
| successor_id | integer | const=preemnik | ✅ | successors |
| personnel_reserve_id | integer | ##'Резервист'## | ✅ | personnel_reserves |
| assessor_id | integer | const=ass_estimating_person | ✅ | collaborators |
| assessment_date | date | ##'Дата оценки'## |  |  |
| assessment_appraise_id | integer | const=c_ass_appraise | ✅ | assessment_appraises |
| budget_period_id | integer | const=c_budget_period | ✅ | budget_periods |
| modification_date | date | const=n6k2nxsxx4 | ✅ |  |
| app_instance_id | string | const=8qorpy64yd | ✅ |  |
