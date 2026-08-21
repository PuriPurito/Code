# Схема: wtv_kpi.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID |  |  |
| code | string | const=c_code |  |  |
| name | string | const=c_name |  |  |
| type | string | const=c_type |  | common.kpi_types |
| status | string |  |  | common.kpi_states |
| is_kpi | bool | KPI |  |  |
| parent_object_id | integer | const=vkb_kpi |  | kpis |
| kpi_group_id | integer | const=c_group |  | kpi_groups |
| range_min | integer | const=ht1rxphn56 |  |  |
| range_max | integer | const=ywcib7im60 |  |  |
| norma | integer |  |  |  |
| calc_type | string |  |  | common.kpi_calc_types |
| formula_id | integer | const=dank_formula |  | formulas |
| scale_id | integer | const=ass_scale |  | scales |
| scales | string | const=ass_scale |  |  |
| id | string |  |  |  |
| name | string | const=c_name |  |  |
| percent | integer | const=c_percent |  |  |
| desc | string | const=c_desc |  |  |
| owners | string | const=dank_owners |  |  |
| person_id | integer |  |  | collaborators |
| responsible_persons | string | const=dank_responsibles |  |  |
| person_id | integer |  |  | collaborators |
| is_native | bool | const=gbw97zyx5g |  |  |
| boss_type_id | integer | const=c_manager_type |  | boss_types |
| responsible_groups | string | ##'Группы...'## |  |  |
| group_id | integer |  |  | groups |
| group_name | string | const=c_name |  |  |
| is_native | bool | const=gbw97zyx5g |  |  |
| boss_type_id | integer | const=c_manager_type |  | boss_types |
| responsible_staffs | string | ##'Позиции штатного расписания...'## |  |  |
| staff_position_id | integer |  |  | staff_positions |
| staff_position_name | string | const=c_name |  |  |
| is_native | bool | const=gbw97zyx5g |  |  |
| boss_type_id | integer | const=c_manager_type |  | boss_types |
| auto_formula | string | const=dank_formula |  |  |
| load_formula | string |  |  |  |
| is_bonus_source | bool | const=8h1jgf8wm7 |  |  |
| is_global | bool | const=kqbkknvomw |  |  |
| unit_of_measurement | string | const=dank_unit |  |  |
| period_type | string |  |  | common.perioditys |
| workflow_id | integer | const=o1ivkrztmb |  | workflows |
| on | bool |  |  |  |
| title | string |  |  |  |
| type | string |  |  | common.spxml_types |
| custom_data_formula | string |  |  |  |
| comment | string | const=vkpb_comment |  |  |
| desc | string |  |  |  |
| doc_info | doc_info_base | const=dseglc23jx |  |  |
| selector | string |  |  |  |
| flag_bad_formula | bool |  |  |  |
| role_id | integer | const=4egocnh7uc |  | roles |
