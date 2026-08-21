# Схема: wtv_qualification_assignment.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| assignment_date | date | ms_tools.get_const('c_qualif_ass_date') |  |  |
| expiration_date | date | ms_tools.get_const('c_qualif_end_date') |  |  |
| plan_end_date | date | ms_tools.get_const('planiruemayadat_1') |  |  |
| reason | string | ms_tools.get_const('kc32vvfwg2') |  |  |
| status | string | ms_tools.get_const('c_state) |  | common.qualification_assignment_states |
| qualification_id | integer | ms_tools.get_const('c_qualification') |  | qualifications |
| person_id | integer |  |  | collaborators |
| event_id | integer | ms_tools.get_const('c_event) |  | events |
| sender_id | integer | const=otpravitel |  | collaborators |
| competence_id | integer | const=ass_competence |  | competences |
| is_reward | bool |  |  |  |
| learning_id | integer |  |  | learnings |
| test_learning_id | integer |  |  | test_learnings |
| education_method_id | integer |  |  | education_methods |
| desc | string | const=c_desc |  |  |
| comment | string | const=vkpb_comment |  |  |
| doc_info | doc_info_base |  |  |  |
| never_saved | bool |  |  |  |
