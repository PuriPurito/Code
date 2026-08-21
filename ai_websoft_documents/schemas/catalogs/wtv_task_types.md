# Схема: wtv_task_types.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID | ✅ |  |
| code | string | const=c_code |  |  |
| name | string | const=c_name |  |  |
| workflow_id | integer | const=o1ivkrztmb |  | workflows |
| create_task_type_id | string | ##'Можно создавать задачи'## |  | common.create_task_types |
| edit_task_type_id | string | ##'Можно изменять задачи'## |  | common.edit_task_types |
| view_task_type_id | string | ##'Можно просматривать задачи'## |  | common.view_task_types |
| show_in_workspace | bool | ##'Показывать в WorkSpace'## |  |  |
| cannot_create_tt_less_minute | bool | ##'Нельзя создавать записи учета времени меньше минуты'## |  |  |
| related_to_projects | bool | ##'Задачи связаны с проектами'## |  |  |
| related_object_type | string | ##'Тип связанного объекта'## |  | common.exchange_object_types |
| virtual | bool | ##'Настраиваемый тип задачи'## |  |  |
| virtual_remote_collection_id | integer | ##'Выборка для типа задач'## |  | remote_collections |
| virtual_remote_action_id | integer | ##'Удаленное действие для создания и редактирования задачи'## |  | remote_actions |
| workflow_remote_action_id | integer | ##'Удаленное действие для документооборота'## |  | remote_actions |
| can_change_status | bool | ##'Разрешено изменение статуса'## |  |  |
| can_change_task | bool | ##'Разрешено изменение задачи'## |  |  |
| can_delete_task | bool | ##'Разрешено удаление задачи'## |  |  |
| related_conversation_type_id | integer | ##'Связанный тип разговора'## |  | conversation_types |
| use_custom_wvars | bool | ##'Использовать кастомные переменные'## |  |  |
| consider_time_in_workspace | bool | ##'Учитывать время выполнения задачи (в интерфейсе WorkSpace)'## |  |  |
| default_display_mode | string | ##'Способ отображения по умолчанию'## |  |  |
| can_change_view | bool | ##'Разрешать переключение способа отображения'## |  |  |
| modification_date | date | const=n6k2nxsxx4 |  |  |
| app_instance_id | string | const=8qorpy64yd |  |  |
| is_std | bool | const=rnya4h6g63 |  |  |
| changed | bool | const=izmenennyy |  |  |
