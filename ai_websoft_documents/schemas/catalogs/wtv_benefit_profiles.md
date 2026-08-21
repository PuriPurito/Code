# Схема: wtv_benefit_profiles.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| status | string | const=c_status | ✅ | common.benefit_statuses |
| position_family_id | integer | const=re7n9mti11 | ✅ | position_familys |
| subdivision_group_id | integer | const=jreol5ji23 | ✅ | subdivision_groups |
| person_region_id | integer | ##'Регион сотрудника'## | ✅ | regions |
| subdivision_region_id | integer | ##'Регион подразделения сотрудника'## | ✅ | regions |
| person_place_id | integer | ##'Расположение сотрудника'## | ✅ | places |
| subdivision_place_id | integer | ##'Расположение подразделения сотрудника'## | ✅ | places |
| work_form_id | integer | ##'Форма работы'## | ✅ | work_forms |
| working_condition_type_id | integer | ##'Тип условий труда'## | ✅ | working_condition_types |
| work_experience | integer | const=81f666btcv |  |  |
| position_commons_ids | integer | ##'ID типовых должностей'## |  | position_commons |
| grades_ids | integer | ##'ID грейдов'## |  | grades |
| benefits_ids | integer | ##'ID типов привилегий'## |  | benefits |
| modification_date | date | const=n6k2nxsxx4 | ✅ |  |
| app_instance_id | string | const=8qorpy64yd |  |  |
