# Схема: wtv_absence_reserve.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID |  |  |
| person_id | integer | const=c_coll |  | collaborators |
| budget_period_id | integer | const=c_period |  | budget_periods |
| presence_state_id | integer | ##'Тип присутствия/отсутствия'## |  | presence_states |
| num_days | integer | ##'Количество дней'## |  |  |
| calculation_date | date | ##'Дата вычисления'## |  |  |
| comment | string | const=c_comment |  |  |
| doc_info | doc_info_base |  |  |  |
