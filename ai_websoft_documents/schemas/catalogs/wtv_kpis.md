# Схема: wtv_kpis.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID | ✅ |  |
| parent_object_id | integer | const=vkb_kpi | ✅ | kpis |
| code | string | const=c_code |  |  |
| name | string | const=c_name |  |  |
| type | string | const=c_type |  | common.kpi_types |
| status | string | const=c_status |  | common.kpi_states |
| is_kpi | bool | KPI |  |  |
| kpi_group_id | integer | const=c_group | ✅ | kpi_groups |
| range_min | integer | const=ht1rxphn56 |  |  |
| range_max | integer | const=ywcib7im60 |  |  |
| owners_ids | string | const=dank_owners |  |  |
| formula_id | integer | const=dank_formula |  | formulas |
| scale_id | integer | const=ass_scale |  | scales |
| role_id | integer | const=4egocnh7uc | ✅ | roles |
| modification_date | date | const=n6k2nxsxx4 |  |  |
| app_instance_id | string | const=8qorpy64yd |  |  |
| access_block_type | string | const=c_block |  | access_blocks |
| knowledge_parts | string | const=vkpb_knowledge_parts_title |  |  |
| tags | string | ##'ID тегов'## |  |  |
| experts | string | const=vkpb_experts |  |  |
| previous_version_object_id | integer | const=vkmb_previous_version |  | kpis |
