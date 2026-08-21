# Схема: wtv_cl_course.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| start_date | date | const=c_start_date |  |  |
| end_date | date | const=c_finish_date |  |  |
| state_id | integer |  |  | common.cl_states |
| platform | string |  |  |  |
| id | integer |  |  | cl_modules |
| path_id | string |  |  |  |
| folder_id | integer |  |  | id.Parent.Parent.Parent.folders |
| module_id | integer |  |  | cl_modules |
| zoom | integer |  |  |  |
| active | bool |  |  |  |
| slide_id | integer |  |  | cl_slides |
| id | integer |  |  |  |
| name | string |  |  |  |
| parent_id | integer |  |  | parent_id.Parent.Parent.Parent.folders |
| person_id | integer |  |  | collaborators |
| type_id | integer |  |  | common.cl_author_types |
| repositorium_id | integer |  |  | repositoriums |
| id | string |  |  |  |
| start_date | date |  |  |  |
| plan_date | date |  |  |  |
| fact_date | date |  |  |  |
| completion | integer |  |  |  |
| name | string |  |  |  |
| responsible_id | integer |  |  | collaborators |
| responsible_fullname | string |  |  |  |
| description | string |  |  |  |
| req_plan_row_id | string |  |  | req_plan_row_id.Parent.Parent |
| code | string |  |  |  |
| cl_const_id | integer |  |  | cl_consts |
| desc | string | const=vkpb_comment |  |  |
| comment | string | const=vkpb_comment |  |  |
| forum_id | integer |  |  | forums |
| role_id | integer | const=4egocnh7uc |  | roles |
| doc_info | doc_info_base | const=dseglc23jx |  |  |
| access | string | const=bmlkskx7us |  |  |
| selector | string |  |  |  |
| view_part_selector | integer |  |  |  |
| module_href | string |  |  |  |
| module_view_selector | integer |  |  |  |
| id | integer |  |  |  |
