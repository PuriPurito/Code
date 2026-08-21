# Схема: wtv_vacancy_responses.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID | ✅ |  |
| code | string | const=c_code |  |  |
| name | string | const=c_name |  |  |
| vacancy_id | integer | const=c_vacancy | ✅ | vacancys |
| vacancy_name | string | const=nazvanievakans |  |  |
| person_id | integer | const=c_coll | ✅ | collaborators |
| person_fullname | string | const=lhbyv18qkm |  |  |
| recruiter_person_id | integer | const=rekruter | ✅ | collaborators |
| recruiter_person_fullname | string | const=fiorekrutera |  |  |
| response_author_person_id | integer | const=avtorotklika | ✅ | collaborators |
| response_author_fullname | string | const=fioavtoraotkli |  |  |
| resume_id | integer | const=c_resume | ✅ | resumes |
| career_reserve_id | integer | const=vcrb_adaptation | ✅ | career_reserves |
| date | date | const=dataotklika |  |  |
| date_invitation | date | const=datapriglasheniya |  |  |
| status | string | const=c_status | ✅ | common.vacancy_response_status_types |
| creation_date | date | const=c_create_date | ✅ |  |
| modification_date | date | const=n6k2nxsxx4 | ✅ |  |
| app_instance_id | string | const=8qorpy64yd |  |  |
