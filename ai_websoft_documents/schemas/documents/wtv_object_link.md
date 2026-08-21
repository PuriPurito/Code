# Схема: wtv_object_link.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID |  |  |
| recommender_algorithm_id | integer | ##'Рекомендательный алгоритм'## |  | recommender_algorithms |
| state_id | string | const=vppb_state |  | common.status_in_knowledge_map_types |
| links | string | const=c_object |  |  |
| id | string |  |  |  |
| comment | string | const=c_comment |  |  |
| calc_date | date | ##'Дата расчета'## |  |  |
| comment | string | const=c_comment |  |  |
| doc_info | doc_info_base |  |  |  |
