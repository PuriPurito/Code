# Схема: wtv_user_recommendation.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID |  |  |
| objects | string | const=c_object |  |  |
| id | string |  |  |  |
| comment | string | const=c_comment |  |  |
| recommender_algorithm_id | integer | ##'Рекомендательный алгоритм'## |  | recommender_algorithms |
| calculate_dates | string | ##'Дата расчета'## |  |  |
| date | date | ##'Дата расчета'## |  |  |
| context_object | string | ##'Контекст'## |  |  |
| calc_date | date | ##'Дата расчета'## |  |  |
| comment | string | const=c_comment |  |  |
| doc_info | doc_info_base |  |  |  |
