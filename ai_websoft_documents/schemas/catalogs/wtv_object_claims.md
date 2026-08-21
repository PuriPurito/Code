# Схема: wtv_object_claims.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID | ✅ |  |
| code | string | const=c_code |  |  |
| name | string | const=c_name |  |  |
| source_type | string | Тип источника | ✅ |  |
| source_id | integer | Источник-ID | ✅ |  |
| source_name | string | Источник-название |  |  |
| source_code | string | Источник-код |  |  |
| source_role | string | Источник-роль | ✅ |  |
| object_type | string | Тип объекта | ✅ |  |
| object_id | integer | Объект-ID | ✅ |  |
| object_name | string | Объект-название |  |  |
| object_code | string | Объект-код | ✅ |  |
| element_type | string | Тип элемента | ✅ |  |
| element_id | integer | Элемент-ID | ✅ |  |
| element_name | string | Элемент-название |  |  |
| element_code | string | Элемент-код | ✅ |  |
| read | bool | Чтение |  |  |
| write | bool | Запись |  |  |
| delete | bool | Удаление |  |  |
| list | bool | Список |  |  |
| execute | bool | Запуск |  |  |
| access_level | integer | ##'Роль'## |  |  |
| value | string | Значение доступа |  |  |
| is_active | bool | Действует |  |  |
| start_date | date | const=c_start_date |  |  |
| finish_date | date | const=c_finish_date |  |  |
| is_manual | bool | Не обновлять автоматически |  |  |
| data_str | string | Нестандартные права |  |  |
| is_std | bool | const=rnya4h6g63 |  |  |
| changed | bool | const=izmenennyy |  |  |
| modification_date | date | const=n6k2nxsxx4 | ✅ |  |
| app_instance_id | string | const=8qorpy64yd |  |  |
