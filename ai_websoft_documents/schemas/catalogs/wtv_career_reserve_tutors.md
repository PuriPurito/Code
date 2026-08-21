# Схема: wtv_career_reserve_tutors.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID | ✅ |  |
| career_reserve_id | integer | const=razvitiekarery | ✅ | career_reserves |
| start_date | date | const=y6ls8xn0ca |  |  |
| plan_readiness_date | date | const=c_plan_readiness_date |  |  |
| finish_date | date | const=datafaktichesko |  |  |
| readiness_percent | integer | const=c_readiness_percent | ✅ |  |
| code | string | const=c_code |  |  |
| name | string | const=c_name |  |  |
| status | string | const=c_status |  | common.career_reserve_status_types |
| person_id | integer | const=c_coll | ✅ | collaborators |
| person_fullname | string | const=lhbyv18qkm |  |  |
| tutor_id | integer | const=c_mentor | ✅ | collaborators |
| tutor_type | string | const=c_type |  |  |
| is_responsible | bool | const=41yw4tp759 |  |  |
| tutor_fullname | string | const=psjxs1t7on |  |  |
