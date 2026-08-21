# Схема: wtv_expert_question.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID | ✅ |  |
| code | string | const=c_code |  |  |
| question | string | const=c_question |  |  |
| answer | string | const=c_answer |  |  |
| date | date | const=vdb_aim_date |  |  |
| normative_date | date | const=vmeq_normative_date |  |  |
| answer_date | date |  |  |  |
| expert_id | integer | const=vkpb_expert |  | DefaultDb.GetOptCatalog( 'experts' ) |
| status | bool | const=c_status |  |  |
| is_faq | bool | const=c89ml8lbyf |  |  |
| is_disclosed | bool | const=jjrti5a8lz |  |  |
| access | string | const=bmlkskx7us |  |  |
| comment | string | const=vkpb_comment |  |  |
| doc_info | doc_info_base | const=dseglc23jx |  |  |
| knowledge_classifier_id | integer | const=vkpb_classifier |  |  |
| knowledge_sort_type_id | string | const=szmrdieib8 |  |  |
| question_file_id | integer | const=c_file |  | resources |
| answer_file_id | integer | const=c_file |  | resources |
