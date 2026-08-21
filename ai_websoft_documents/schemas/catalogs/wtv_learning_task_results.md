# Схема: wtv_learning_task_results.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID | ✅ |  |
| code | string | const=c_code | ✅ |  |
| learning_task_id | integer | Задание |  | learning_tasks |
| learning_task_name | string | Название задания |  |  |
| person_id | integer | const=c_coll |  | collaborators |
| person_fullname | string | const=x33edt559z | ✅ |  |
| expert_id | integer | const=vkpb_expert |  | collaborators |
| event_id | integer | const=c_event | ✅ | events |
| status_id | string | const=c_status | ✅ | common.learning_task_status_types |
| mark | integer | const=ass_mark |  |  |
| start_date | date | const=datanaznacheniya |  |  |
| finish_date | date | const=c_finish_date |  |  |
| start_execution_date | date | Дата/время начала выполнения |  |  |
| finish_execution_date | date | Дата/время завершения выполнения |  |  |
| plan_start_date | date | const=planiruemayadat_4 |  |  |
| plan_end_date | date | const=planiruemayadat_1 |  |  |
| duration | integer | Продолжительность выполнения |  |  |
| expired | bool | Просрочено |  |  |
| education_plan_id | integer | const=je8frfv2u9 | ✅ | education_plans |
| active_learning_id | integer | const=s6zzm6z621 | ✅ | active_learnings |
| modification_date | date | const=n6k2nxsxx4 | ✅ |  |
| app_instance_id | string | const=8qorpy64yd |  |  |
