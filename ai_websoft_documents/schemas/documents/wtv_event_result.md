# Схема: wtv_event_result.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID |  |  |
| code | string | const=c_code |  |  |
| event_id | integer | const=c_event |  | events |
| event_name | string | const=e5i74i7omp |  |  |
| event_start_date | date | const=laddyafkjs |  |  |
| status_id | string | const=c_status |  | common.event_result_status_types |
| person_id | integer | const=c_coll |  | collaborators |
| event_result_type_id | integer | const=7et28oz1aj |  | event_result_types |
| is_assist | bool | const=veresb_exist |  |  |
| is_confirm | bool | const=veb_tip_exist_confirm |  |  |
| is_banned | bool | const=dostupzapreshen |  |  |
| not_participate | bool | const=otkazalsyaotucha |  |  |
| last_sending_date | date | ms_tools.get_const('dataotpravleni') |  |  |
| last_webinar_activity_date | date | ms_tools.get_const('vremyaposledney') |  |  |
| webinar_activity_time | integer | ms_tools.get_const('vremyaprovedenn') |  |  |
| is_open | bool |  |  |  |
| score | real | const=c_score |  |  |
| tutor_comment | string | const=veresb_t_comment |  |  |
| collaborator_comment | string | const=veresb_p_comment |  |  |
| not_pay | bool | const=b6wluuw7az |  |  |
| default_cost_center_id | integer | const=6cpficjr42 |  | cost_centers |
| cost_center_id | integer |  |  | cost_centers |
| budget_period_id | integer |  |  | budget_periods |
| object_resource_id | integer | const=lmitz32f0b |  | object_resources |
| certificate_id | integer | const=rgz474h7xe |  | certificates |
| guest | bool | ##'Используется гостевой вход'## |  |  |
| comment | string | const=vkpb_comment |  |  |
| doc_info | doc_info_base | const=dseglc23jx |  |  |
