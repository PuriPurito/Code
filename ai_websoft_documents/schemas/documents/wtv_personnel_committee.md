# Схема: wtv_personnel_committee.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID |  |  |
| code | string | const=c_code |  |  |
| name | string | const=c_name |  |  |
| org_id | integer | const=c_org |  | orgs |
| subdivision_id | integer | const=c_subd |  | subdivisions |
| group_id | integer | const=c_group |  | groups |
| career_reserve_type_id | integer | const=tipkadrovogore |  | career_reserve_types |
| status | string | const=c_status |  | common.personnel_committee_status_types |
| participants_status | string | const=Статус состава участников |  | common.committee_member_status_types |
| creation_date | date | const=c_create_date |  |  |
| committee_date | date | const=dataprovedeniya |  |  |
| end_date | date | const=c_finish_date |  |  |
| desc | string | const=c_desc |  |  |
| comment | string | const=vkpb_comment |  |  |
| doc_info | doc_info_base |  |  |  |
| role_id | integer | const=4egocnh7uc |  | roles |
| access | string | const=bmlkskx7us |  |  |
| participant_catalog | string |  |  | common.exchange_object_types |
| candidate_catalog | string |  |  | common.exchange_object_types |
| rows | variant |  |  |  |
| row_disp_elem | string |  |  |  |
| row_list_field | string |  |  |  |
| row_key_field | string |  |  |  |
| list_variant | variant |  |  |  |
