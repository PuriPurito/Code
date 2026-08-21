# Схема: wtv_cl_video_courses.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID |  |  |
| code | string | const=c_code | ✅ |  |
| name | string | const=c_name | ✅ |  |
| resource_id | integer | const=c_resource |  | resources |
| last_compile_date | date | ##'Дата последней компиляции курса'## | ✅ |  |
| media_file_id | integer | ##'Результирующий медиа-файл'## |  | resources |
| simple_media_file_id | integer | ##'Упрощенный результирующий медиа-файл'## |  | resources |
| authors_id | integer | ##'Авторы'## |  | collaborators |
| modification_date | date | const=n6k2nxsxx4 |  |  |
| creation_date | date | const=c_create_date | ✅ |  |
