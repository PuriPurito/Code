# Схема: wtv_working_condition.xmd

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
| tariff_rate | string | ##'Тарифная ставка'## |  |  |
| tariff_rate_value | integer | ##'Тарифная ставка'## |  |  |
| currency_type_id | string | const=c_currency_type |  | lists.currency_types |
| tariff_rate_type_id | string | ##'Тип тарифной ставки'## | ✅ | common.tariff_rate_types |
| vacation_duration | integer | ##'Ежегодный оплачиваемый отпуск (дней)'## |  |  |
| additional_payments | string | ##'Дополнительные выплаты'## |  |  |
| id | string |  |  |  |
| payment_type_id | integer | ##'Тип выплат'## |  | payment_types |
| value | integer | ##'Размер выплаты'## |  |  |
| currency_type_id | string | const=c_currency_type |  | lists.currency_types |
| comment | string | const=vkpb_comment |  |  |
| benefits | string | const=pi9p90977k |  |  |
| benefit_id | integer | ##'Тип привилегии'## |  | DefaultDb.GetOptCatalog( 'benefits' ) |
| comment | string | const=vkpb_comment |  |  |
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
| desc | string | const=c_desc |  |  |
| comment | string | const=vkpb_comment |  |  |
| doc_info | doc_info_base |  |  |  |
