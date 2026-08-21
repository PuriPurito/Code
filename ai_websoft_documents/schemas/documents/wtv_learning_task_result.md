# Схема: wtv_learning_task_result.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID |  |  |
| code | string | const=c_code |  |  |
| learning_task_id | integer | Задание |  | learning_tasks |
| learning_task_name | string | Название задания |  |  |
| person_id | integer | const=c_coll |  | collaborators |
| status_id | string | const=c_status |  | common.learning_task_status_types |
| answer | string | const=c_answer |  |  |
| expert_id | integer | const=vkpb_expert |  | collaborators |
| event_id | integer | const=c_event | ✅ | events |
| expert_comment | string | const=kommentariyeks |  |  |
| mark | integer | const=ass_mark |  |  |
| start_date | date | const=datanaznacheniya |  |  |
| finish_date | date | const=c_finish_date |  |  |
| plan_start_date | date | const=planiruemayadat_4 |  |  |
| plan_end_date | date | const=planiruemayadat_1 |  |  |
| education_plan_id | integer | const=je8frfv2u9 |  | education_plans |
| active_learning_id | integer |  |  | active_learnings |
| duration | integer | ##'Продолжительность выполнения'## |  |  |
| expired | bool | ##'Просрочено'## |  |  |
| start_execution_date | date | ##'Дата/время начала выполнения'## |  |  |
| finish_execution_date | date | ##'Дата/время завершения выполнения'## |  |  |
| is_expert | bool | ##'Файл эксперта'## |  |  |
| comment | string | const=vkpb_comment |  |  |
| desc | string | const=c_desc |  |  |
| doc_info | doc_info_base | const=dseglc23jx |  |  |
| duration | string | ##'Продолжительность выполнения'## |  |  |
| hour | integer |  |  |  |
| minute | integer |  |  |  |
| second | integer |  |  |  |
