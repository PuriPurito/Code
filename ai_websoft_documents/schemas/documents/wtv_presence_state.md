# Схема: wtv_presence_state.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID |  |  |
| code | string | const=c_code |  |  |
| name | string | const=c_name |  |  |
| state_id | string | const=vppb_state |  | lists.person_states |
| state_name | string | const=vppb_state |  |  |
| accessible | bool | ##'Доступно для выбора пользователем'## |  |  |
| is_absence | bool | ##'Отсутствие'## |  |  |
| workflow_id | integer | const=o1ivkrztmb |  | workflows |
| can_cancel | bool | ##'Можно отменить'## |  |  |
| can_change | bool | ##'Можно изменять'## |  |  |
| cancel_workflow_id | integer | ##'Документооборот для отмены'## |  | workflows |
| change_workflow_id | integer | ##'Документооборот для изменения'## |  | workflows |
| position | integer | const=7kjcb43w9b |  |  |
| style_css | string | ##'Стиль CSS'## |  |  |
| all_day | bool | const=8tk7u0cq8n |  |  |
| is_sub_work_time | bool | ##'Ограничено временем работы подразделения'## |  |  |
| display_fields | string | ##'Отображаемые поля графика сотрудника'## |  |  |
| value | string | const=c_value |  |  |
| comment | string | const=c_comment |  |  |
| required_fields | string | ##'Обязательные поля графика сотрудника'## |  |  |
| value | string | const=c_value |  |  |
| comment | string | const=c_comment |  |  |
| doc_info | doc_info_base |  |  |  |
| is_std | bool | const=rnya4h6g63 |  |  |
| changed | bool | const=izmenennyy |  |  |
