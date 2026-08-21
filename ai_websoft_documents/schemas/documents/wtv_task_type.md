# Схема: wtv_task_type.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID |  |  |
| code | string | const=c_code |  |  |
| name | string | const=c_name |  |  |
| workflow_id | integer | const=o1ivkrztmb |  | workflows |
| comment | string | const=vkpb_comment |  |  |
| eval_code_for_url | string | ##'Код получения Url для перехода в задачу'## |  |  |
| id | string | ID |  |  |
| name | string | const=c_name |  |  |
| code | string | ID |  |  |
| name | string | const=c_name |  |  |
| workflow_state | string | ##'Связанный этап документооборота'## |  |  |
| workflow_action_id | string | ##'Связанный этап документооборота'## |  |  |
| state_id | string | ##'Связанный системный статус'## |  | common.task_statuses |
| create_task_type_id | string | ##'Можно создавать задачи'## |  | common.create_task_types |
| edit_task_type_id | string | ##'Можно изменять задачи'## |  | common.edit_task_types |
| view_task_type_id | string | ##'Можно просматривать задачи'## |  | common.view_task_types |
| show_in_workspace | bool | ##'Показывать в WorkSpace'## |  |  |
| cannot_create_tt_less_minute | bool | ##'Нельзя создавать записи учета времени меньше минуты'## |  |  |
| related_to_projects | bool | ##'Задачи связаны с проектами'## |  |  |
| related_object_type | string | ##'Тип связанного объекта'## |  | common.exchange_object_types |
| virtual | bool | ##'Настраиваемый тип задачи'## |  |  |
| virtual_remote_collection_id | integer | ##'Выборка для типа задач'## |  | remote_collections |
| use_custom_wvars | bool | ##'Переопределить переменные для типа задачи'## |  |  |
| consider_time_in_workspace | bool | ##'Учитывать время выполнения задачи (в интерфейсе WorkSpace)'## |  |  |
| mandatory_project | bool | ##'Выбор проекта обязателен'## |  |  |
| parent_task_type_id | integer | ##'Тип родительской задачи'## |  | task_types |
| mandatory_parent_task | bool | ##'Родительская задача обязательна'## |  |  |
| state_id | string | ID |  | common.task_statuses |
| virtual_remote_action_id | integer | ##'Удаленное действие для создания и редактирования задачи'## |  | remote_actions |
| workflow_remote_action_id | integer | ##'Удаленное действие для документооборота'## |  | remote_actions |
| can_change_status | bool | ##'Можно изменять статус задач'## |  |  |
| can_change_task | bool | ##'Можно изменять поля задачи (кроме статуса)'## |  |  |
| can_delete_task | bool | ##'Можно удалять задачи'## |  |  |
| related_conversation_type_id | integer | ##'Связанный тип разговора'## |  | conversation_types |
| field_id | string | ID |  |  |
| default_display_mode | string | ##'Способ отображения по умолчанию'## |  |  |
| can_change_view | bool | ##'Разрешать переключение способа отображения'## |  |  |
| doc_info | doc_info_base | const=dseglc23jx |  |  |
| is_std | bool | const=rnya4h6g63 |  |  |
| changed | bool | const=izmenennyy |  |  |
| access | string | const=bmlkskx7us |  |  |
| selector | string |  |  |  |
