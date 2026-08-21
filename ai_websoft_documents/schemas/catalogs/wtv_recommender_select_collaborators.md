# Схема: wtv_recommender_select_collaborators.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID |  |  |
| person_id | integer | const=c_coll |  | collaborators |
| recommender_algorithm_id | integer | ##'Рекомендательный алгоритм'## |  | recommender_algorithms |
| base_object_id | integer | ##'Базовый объект'## |  | DefaultDb.GetOptCatalog( base_object_type + 's' ) |
| base_object_type | string | ##'Тип базового объект'## |  | common.exchange_object_types |
| base_object_name | string | ##'Базовый объект'## |  |  |
| selected_object_id | integer | ##'Выбранный объект'## |  | DefaultDb.GetOptCatalog( selected_object_type + 's' ) |
| selected_object_type | string | ##'Тип выбранного объект'## |  | common.exchange_object_types |
| selected_object_name | string | ##'Выбранный объект'## |  |  |
| created_object_id | integer | ##'Созданный объект'## |  | DefaultDb.GetOptCatalog( created_object_type + 's' ) |
| created_object_type | string | ##'Тип созданного объект'## |  | common.exchange_object_types |
| created_object_name | string | ##'Созданный объект'## |  |  |
| implemented | bool | ##'Реализовано'## |  |  |
| selected_date | date | ##'Дата выбора'## |  |  |
| implemented_date | date | ##'Дата реализации'## |  |  |
| modification_date | date | const=n6k2nxsxx4 |  |  |
| app_instance_id | string | const=8qorpy64yd |  |  |
