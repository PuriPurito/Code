# Схема: wtv_recommender_select_collaborator.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID |  |  |
| person_id | integer | const=c_coll |  | collaborators |
| recommender_algorithm_id | integer | ##'Рекомендательный алгоритм'## |  | recommender_algorithms |
| base_object | string | ##'Базовый объект'## |  |  |
| selected_object | string | ##'Выбранный объект'## |  |  |
| created_object | string | ##'Созданный объект'## |  |  |
| implemented | bool | ##'Реализовано'## |  |  |
| selected_date | date | ##'Дата выбора'## |  |  |
| implemented_date | date | ##'Дата реализации'## |  |  |
| comment | string | const=c_comment |  |  |
| doc_info | doc_info_base |  |  |  |
