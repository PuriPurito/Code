# Схема: wtv_responses.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID | ✅ |  |
| code | string | const=c_code | ✅ |  |
| status | string | const=c_status |  | common.response_status_types |
| type | string | const=c_object_type | ✅ | common.exchange_object_types |
| response_type_id | integer | const=7t6iv3kt7t | ✅ | response_types |
| person_id | integer | const=c_coll | ✅ | collaborators |
| person_fullname | string | const=lhbyv18qkm | ✅ |  |
| person_org_name | string | const=kyvtanhi3r |  |  |
| owner_person_id | integer | const=vrb_initiator |  | collaborators |
| object_id | integer | const=c_object | ✅ | DefaultDb.GetOptCatalog( type + 's' ) |
| object_name | string | const=c_object_name | ✅ |  |
| basic_score | real | ##'Оценка'## |  |  |
| basic_desc | string | ##'Описание'## |  |  |
| create_date | date | const=c_create_date | ✅ |  |
| plan_date | date | const=u6lvp7f029 |  |  |
| done_date | date | const=c_fact_date |  |  |
| is_public | bool | const=publichnyyotzyv |  |  |
| modification_date | date | const=n6k2nxsxx4 | ✅ |  |
| app_instance_id | string | const=8qorpy64yd |  |  |
