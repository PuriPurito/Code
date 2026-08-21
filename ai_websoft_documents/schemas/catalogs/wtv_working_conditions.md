# Схема: wtv_working_conditions.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID |  |  |
| code | string | const=c_code |  |  |
| name | string | const=c_name |  |  |
| person_id | integer | const=c_coll |  | collaborators |
| is_model | bool | ##'Эталонное условие работы'## |  |  |
| state_id | string | const=vppb_state | ✅ | common.working_condition_states |
| start_date | date | const=c_start_date | ✅ |  |
| finish_date | date | const=3bywib72ya | ✅ |  |
| probationary_duration | integer | ##'Длительность испытательного срока (месяцев)'## |  |  |
| position_name | string | const=g89skt4yui |  |  |
| place_name | string | ##'Место работы'## |  |  |
| place_id | integer | const=c_place |  | places |
| working_condition_type_id | integer | ##'Тип условиий труда'## |  | working_condition_types |
| salary_payment_type_id | integer | ##'Тип графика выплат заработной платы'## |  | salary_payment_types |
| work_form_id | integer | ##'Форма работы'## |  | work_forms |
| payment_remuneration | string | ##'Выплата вознаграждения'## |  |  |
| salary | integer | const=oklad |  |  |
| currency_type_id | string | const=c_currency_type |  | lists.currency_types |
| work_schedule_type_id | integer | ##'Тип графика работы'## |  | work_schedule_types |
| daily_duration | integer | ##'Продолжительность ежедневной работы (смены) в часах'## |  |  |
| weekly_duration | integer | ##'Продолжительность рабочей недели (в часах)'## |  |  |
| start_work_type | string | ##'Время начала работы'## |  |  |
| start_work_time | string | ##'Время начала работы'## |  |  |
| end_work_time | string | ##'Время окончания работы'## |  |  |
| lunch_break_duration | real | ##'Длительность обеденного перерыва'## |  |  |
| lunch_break_type | string | ##'Тип обеденного перерыва'## |  |  |
| start_lunch_break_time | string | ##'Время начала обеденного перерыва'## |  |  |
| end_lunch_break_time | string | ##'Время окончания обеденного перерыва'## |  |  |
| shifts_number | integer | ##'Число смен в сутки'## |  |  |
| modification_date | date | const=n6k2nxsxx4 |  |  |
| app_instance_id | string | const=8qorpy64yd |  |  |
