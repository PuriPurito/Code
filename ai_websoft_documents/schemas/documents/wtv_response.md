# Схема: wtv_response.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID |  |  |
| code | string | const=c_code |  |  |
| status | string | const=c_status |  | common.response_status_types |
| response_type_id | integer | const=7t6iv3kt7t |  | response_types |
| type | string | const=c_object_type |  | common.exchange_object_types |
| create_date | date | const=c_create_date |  |  |
| plan_date | date | const=u6lvp7f029 |  |  |
| done_date | date | const=c_fact_date |  |  |
| person_id | integer | const=c_coll |  | collaborators |
| owner_person_id | integer | const=vrb_initiator |  | collaborators |
| object_id | integer | const=c_object |  | DefaultDb.GetOptCatalog( type + 's' ) |
| object_name | string | const=c_object_name |  |  |
| object_code | string | const=oemfe2rslq |  |  |
| object_start_date | date | const=vdb_aim_date |  |  |
| is_public | bool |  |  |  |
| comment | string | const=vkpb_comment |  |  |
| doc_info | doc_info_base | const=dseglc23jx |  |  |
| basic_score | real | ##'Оценка'## |  |  |
| basic_desc | string | ##'Описание'## |  |  |
