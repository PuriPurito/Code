# Схема: wtv_personnel_event.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID | ✅ |  |
| code | string | const=c_code |  |  |
| name | string | const=c_name |  |  |
| event_status | string | const=statussobytiya |  | common.personnel_event_status_types |
| personnel_event_type_id | integer | const=c_personnel_event_type | ✅ | personnel_event_types |
| creation_date | date | const=c_create_date_event |  |  |
| date_processed | date | const=c_process_date_event |  |  |
| date_cancel | date | const=c_cancel_date_event |  |  |
| date_delete | date | const=78j2v2xgru |  |  |
| person_id | integer | const=c_coll |  | collaborators |
| person_fullname | string | const=lhbyv18qkm |  |  |
| state_id | string | const=vppb_state |  | lists.person_states |
| dismiss_date | date | const=datazaversheniya_1 |  |  |
| absence_start_date | date | const=c_start_date_absence |  |  |
| absence_finish_date | date | const=c_finish_date_absence |  |  |
| subdivision_id | integer | const=c_subd |  | subdivisions |
| subdivision_name | string | const=uf_depart_name |  |  |
| formed_date | date | const=dataformirovan |  |  |
| disbanded_date | date | const=datarasformiro |  |  |
| staff_position_id | integer | const=c_staff_position |  | staff_positions |
| start_date | date | const=c_approval_date |  |  |
| staff_num | real | const=c_count_staff_units |  |  |
| finish_date | date | const=c_close_date |  |  |
| position_id | integer | const=c_position |  | positions |
| position_name | string | const=g89skt4yui |  |  |
| position_code | string | const=c_code_position |  |  |
| position_date | date | const=datavstupleniya |  |  |
| position_common_id | integer | const=c_position_common |  | position_commons |
| position_appointment_type_id | integer | const=tipnaznacheniya |  | appointment_types |
| basic_rate | real | const=p7kssz5oz1 |  |  |
| move_position_code | string | const=c_code_target_position |  |  |
| move_position_name | string | const=brka0kruvo |  |  |
| move_position_appointment_type_id | integer | const=c_target_position_appointment_type |  | appointment_types |
| move_position_basic_rate | real | const=p7kssz5oz1 |  |  |
| move_staff_position_id | integer | const=c_target_staff_position |  | staff_positions |
| move_position_common_id | integer | const=c_target_position_common |  | position_commons |
| move_date | date | const=c_date_move |  |  |
| move_subdivision_id | integer | const=c_target_subdivison |  | subdivisions |
| document | string | const=c_regulatory_document |  |  |
| comment | string | const=vkpb_comment |  |  |
| doc_info | doc_info_base |  |  |  |
