# Схема: wtv_qualification_assignments.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID | ✅ |  |
| assignment_date | date | const=c_qualif_ass_date | ✅ |  |
| expiration_date | date | const=c_qualif_end_date | ✅ |  |
| status | string | const=c_status |  | common.qualification_assignment_states |
| qualification_id | integer | const=c_qualification | ✅ | qualifications |
| person_id | integer | const=c_coll | ✅ | collaborators |
| sender_id | integer | const=otpravitel | ✅ | collaborators |
| competence_id | integer | const=ass_competence | ✅ | competences |
| reason | string | const=kc32vvfwg2 |  |  |
| event_id | integer | const=c_event |  | events |
| is_reward | bool | ##'Является наградой'## |  |  |
| modification_date | date | const=n6k2nxsxx4 | ✅ |  |
| app_instance_id | string | const=8qorpy64yd | ✅ |  |
