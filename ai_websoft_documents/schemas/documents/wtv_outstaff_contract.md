# Схема: wtv_outstaff_contract.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID |  |  |
| code | string |  |  |  |
| name | string | const=c_name |  |  |
| status | string | const=c_status |  | common.order_status_types |
| type_id | string | const=c_type |  | common.outstaff_contract_types |
| date | date |  |  |  |
| number | string |  |  |  |
| start_date | date |  |  |  |
| finish_date | date |  |  |  |
| outstaff_provider_id | integer | const=provaydervreme |  | outstaff_providers |
| disp_name | string | const=org_disp_name |  |  |
| id | string |  |  |  |
| region_id | integer | const=vrb_region |  | XQuery( 'regions' ) |
| subdivision_id | integer | const=c_subd |  | subdivisions |
| subdivision_name | string | const=c_subd |  |  |
| start_date | date |  |  |  |
| finish_date | date |  |  |  |
| all_period | bool |  |  |  |
| position_common_id | integer | const=c_position_common |  | XQuery( 'position_commons' ) |
| preferable | bool |  |  |  |
| material_type_id | integer | const=tipmateriala |  | XQuery( 'outstaff_type_materials' ) |
| access | string | const=bmlkskx7us |  |  |
| desc | string | const=c_desc |  |  |
| comment | string | const=vkpb_comment |  |  |
| doc_info | doc_info_base | const=dseglc23jx |  |  |
