# Схема: wtv_recommender_algorithm_applyings.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID |  |  |
| person_id | integer | const=c_coll |  | collaborators |
| recommender_algorithm_id | integer | ##'Рекомендательный алгоритм'## |  | recommender_algorithms |
| context_object_type | string | ##'Тип контекстного объекта'## |  | common.exchange_object_types |
| context_object_id | integer | ##'Контекстный объект'## | ✅ | DefaultDb.GetOptCatalog( object_type + 's' ) |
| context_object_name | string | ##'Название контекстного объекта'## | ✅ |  |
| count | integer | ##'Количество'## |  |  |
| applying_date | date | ##'Дата применения'## |  |  |
| creation_date | date | const=c_create_date | ✅ |  |
| modification_date | date | const=n6k2nxsxx4 |  |  |
| app_instance_id | string | const=8qorpy64yd |  |  |
