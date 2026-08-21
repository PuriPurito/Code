# Схема: wtv_submissions.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID | ✅ |  |
| code | string | const=c_code |  |  |
| name | string | const=c_name |  |  |
| submission_type_id | integer | const=c_submission_type | ✅ | submission_types |
| submission_type_name | string | const=bpqjaq06wv |  |  |
| period_date_start | date | const=c_period_date_start |  |  |
| period_date_finish | date | const=c_period_date_finish |  |  |
| phase_name | string | const=c_phase |  |  |
| phase_id | integer | const=c_phase |  |  |
| status_id | string | const=c_status |  | common.submission_states |
| person_id | integer | const=c_coll | ✅ | collaborators |
| modification_date | date | const=n6k2nxsxx4 |  |  |
| app_instance_id | string | const=8qorpy64yd |  |  |
