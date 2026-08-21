# Схема: wtv_subdivisions.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| org_id | integer | const=c_org | ✅ | orgs |
| parent_object_id | integer | const=c_subd | ✅ | subdivisions |
| status | string | const=c_status |  | common.subdivision_statuses |
| is_disbanded | bool | const=podrazdelenier | ✅ |  |
| knowledge_parts | string | const=vkpb_knowledge_parts_title |  |  |
| tags | string | ##'ID тегов'## |  |  |
| experts | string | const=vkpb_experts |  |  |
| place_id | integer | const=c_place |  | places |
| region_id | integer | const=vrb_region |  | regions |
| kpi_profile_id | integer | const=ass_kpi_profile |  | kpi_profiles |
| kpi_profiles_id | integer | const=ass_kpi_profiles |  | kpi_profiles |
| bonus_profile_id | integer | const=629saq8h6f |  | bonus_profiles |
| cost_center_id | integer | const=c_cost_center | ✅ | cost_centers |
| is_faculty | bool | const=shy9bk42vy |  |  |
| modification_date | date | const=n6k2nxsxx4 | ✅ |  |
| app_instance_id | string | const=8qorpy64yd | ✅ |  |
