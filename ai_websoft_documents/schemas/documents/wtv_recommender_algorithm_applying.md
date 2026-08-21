# Схема: wtv_recommender_algorithm_applying.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID |  |  |
| person_id | integer | const=c_coll |  | collaborators |
| recommender_algorithm_id | integer | ##'Рекомендательный алгоритм'## |  | recommender_algorithms |
| base_object | string | ##'Базовый объект'## |  |  |
| context_object | string | ##'Контекстный объект'## |  |  |
| count | integer | ##'Количество'## |  |  |
| applying_date | date | ##'Дата применения'## |  |  |
| apply_dates | string | ##'Дата применения'## |  |  |
| date | date | ##'Дата применения'## |  |  |
| comment | string | const=c_comment |  |  |
| doc_info | doc_info_base |  |  |  |
