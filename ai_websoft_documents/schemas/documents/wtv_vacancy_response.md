# Схема: wtv_vacancy_response.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID |  |  |
| code | string | const=c_code |  |  |
| name | string | const=c_name |  |  |
| vacancy_id | integer | const=c_vacancy |  | vacancys |
| vacancy_name | string | const=nazvanievakans |  |  |
| recruiter_person_id | integer | const=rekruter |  | collaborators |
| comment_recruiter | string | const=kommentariyrek |  |  |
| response_author_person_id | integer | const=avtorotklika |  | collaborators |
| resume_id | integer | const=c_resume |  | resumes |
| date | date | const=dataotklika |  |  |
| date_invitation | date | const=datapriglasheniya |  |  |
| desc | string | const=soprovoditelno |  |  |
| status | string | const=c_status |  | common.vacancy_response_status_types |
| employer_answer | string | const=otvetrabotodat |  |  |
| career_reserve_id | integer | const=vcrb_adaptation |  | career_reserves |
| doc_info | doc_info_base | const=dseglc23jx |  |  |
