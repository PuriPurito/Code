# Схема: wtv_benefit_profile.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| status | string | const=c_status |  | common.benefit_statuses |
| id | integer |  |  | position_commons |
| id | integer |  |  | grades |
| benefits | string | Типы привилегий |  |  |
| id | integer |  |  | benefits |
| position_family_id | integer | const=re7n9mti11 |  | position_familys |
| subdivision_group_id | integer | const=jreol5ji23 |  | subdivision_groups |
| person_region_id | integer | ##'Регион сотрудника'## |  | regions |
| subdivision_region_id | integer | ##'Регион подразделения сотрудника'## |  | regions |
| person_place_id | integer | ##'Расположение сотрудника'## |  | places |
| subdivision_place_id | integer | ##'Расположение подразделения сотрудника'## |  | places |
| work_form_id | integer | ##'Форма работы'## |  | work_forms |
| working_condition_type_id | integer | ##'Тип условий труда'## |  | working_condition_types |
| work_experience | integer | const=81f666btcv |  |  |
| desc | string | const=c_desc |  |  |
| comment | string | const=vkpb_comment |  |  |
| doc_info | doc_info_base |  |  |  |
| access | string | const=bmlkskx7us |  |  |
