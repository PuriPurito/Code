# Схема: wtv_statement.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| actor | actor_base | Агент |  |  |
| id | string |  |  |  |
| display | string |  |  |  |
| id | integer | ID |  |  |
| code | string | const=c_code |  |  |
| name | string | const=c_name |  |  |
| voited | bool |  |  |  |
| voided | bool |  |  |  |
| json_str | string |  |  |  |
| agent_json_str | string |  |  |  |
| timestamp | date |  |  |  |
| id | string |  |  |  |
| objectType | string |  |  |  |
| name | string |  |  |  |
| description | string |  |  |  |
| id | string |  |  |  |
| objectType | string |  |  |  |
| name | string |  |  |  |
| description | string |  |  |  |
| registration | string | ##'ID регистрации'## |  |  |
| instructor | string | ##'Инструктор'## |  |  |
| team | string | ##'Команда'## |  |  |
| revision | string | ##'Редакция'## |  |  |
| platform | string | ##'Платформа'## |  |  |
| language | string | ##'Код языка'## |  |  |
| statement | string | ##'Запись'## |  |  |
| max | real | ##'Максимальный балл'## |  |  |
| min | real | ##'Минимальный балл'## |  |  |
| raw | real | ##'Необработанный балл'## |  |  |
| scaled | real | ##'Обработанный балл'## |  |  |
| success | bool | ##'Пройдено'## |  |  |
| completion | bool | ##'Завершено'## |  |  |
| response | string | ##'Ответ'## |  |  |
| duration | string | ##'Продолжительность'## |  |  |
| id | string |  |  |  |
| value | string |  |  |  |
| attachments | string | Приложения |  |  |
| sha2 | string | Хеш |  |  |
| usageType | string | Тип |  |  |
| display | string | Название |  |  |
| description | string | Описание |  |  |
| contentType | string | Тип даных |  |  |
| length | integer | Длинна |  |  |
| fileUrl | string | Файл |  |  |
| resource_id | integer | Ресурс базы |  | resources |
| learning_storage_id | integer | const=c_learning_storage |  | learning_storages |
| person_id | integer | const=c_coll |  | collaborators |
| activity_id | integer | const=tipuchebnoyakti |  | activitys |
| activity_code | string |  |  |  |
| activity_name | string |  |  |  |
| object_id | integer | const=c_object |  | DefaultDb.GetOptCatalog( object_type + 's' ) |
| object_type | string | const=c_object_type |  | common.exchange_object_types |
| object_name | string | const=j2xkyixyrs |  |  |
| verb_name | string | const=c_status |  |  |
| success | bool |  |  |  |
| completion | bool |  |  |  |
| response | string |  |  |  |
| duration | string |  |  |  |
| processed | bool | ##'Обработано'## |  |  |
| create_date | date | const=c_create_date |  |  |
| create_ticks | integer |  |  |  |
| version | string |  |  |  |
| doc_info | doc_info_base | const=dseglc23jx |  |  |
