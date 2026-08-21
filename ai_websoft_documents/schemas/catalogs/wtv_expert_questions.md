# Схема: wtv_expert_questions.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID | ✅ |  |
| code | string | const=c_code |  |  |
| date | date | const=vdb_aim_date |  |  |
| normative_date | date | const=vmeq_normative_date |  |  |
| answer_date | date |  |  |  |
| question | string | const=c_question |  |  |
| person_id | integer | const=c_coll | ✅ | collaborators |
| person_fullname | string | const=lhbyv18qkm |  |  |
| expert_id | integer | const=vkpb_expert | ✅ | experts |
| status | bool | const=c_status |  |  |
| is_faq | bool | const=c89ml8lbyf |  |  |
| is_disclosed | bool | const=jjrti5a8lz |  |  |
| question_file_id | integer | const=c_file |  | resources |
| answer_file_id | integer | const=c_file |  | resources |
| knowledge_parts | string | const=vkpb_knowledge_parts_title |  |  |
| tags | string | ##'ID тегов'## |  |  |
| modification_date | date | const=n6k2nxsxx4 |  |  |
| app_instance_id | string | const=8qorpy64yd |  |  |
