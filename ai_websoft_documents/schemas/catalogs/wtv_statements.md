# Схема: wtv_statements.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID |  |  |
| code | string | const=c_code | ✅ |  |
| name | string | const=c_name |  |  |
| create_date | date | const=c_create_date | ✅ |  |
| create_ticks | integer | Миллисекунды создания |  |  |
| timestamp | date | Timestamp | ✅ |  |
| statement_ref_id | string | Учебная активность | ✅ |  |
| voided | bool | Аннулировано |  |  |
| processed | bool | Обработано |  |  |
| learning_storage_id | integer | const=c_learning_storage |  | learning_storages |
| person_id | integer | const=c_coll | ✅ | collaborators |
| person_fullname | string | const=lhbyv18qkm |  |  |
| object_id | integer | const=c_object | ✅ | DefaultDb.GetOptCatalog( object_type + 's' ) |
| object_type | string | const=c_object_type |  | common.exchange_object_types |
| object_name | string | const=j2xkyixyrs |  |  |
| activity_id | integer | const=tipuchebnoyakti | ✅ | activitys |
| activity_code | string | const=tipuchebnoyakti | ✅ |  |
| verb_id | string | const=c_status | ✅ |  |
| verb_name | string | const=c_status |  |  |
| agent_json_str | string | Текст Агента | ✅ |  |
| registration | string | Строка регистрации |  |  |
| context_registration | string | ID регистрации | ✅ |  |
| context_instructor | string | Инструктор |  |  |
| context_team | string | Команда |  |  |
| context_revision | string | Редакция |  |  |
| context_platform | string | Платформа |  |  |
| context_language | string | Код языка |  |  |
| context_statement | string | Запись |  |  |
| result_score_max | real | Максимальный балл |  |  |
| result_score_min | real | Минимальный балл |  |  |
| result_score_raw | real | Необработанный балл |  |  |
| result_score_scaled | real | Обработанный балл |  |  |
| result_success | bool | Пройдено |  |  |
| result_completion | bool | Завершено |  |  |
| result_response | string | Ответ |  |  |
| result_duration | string | Продолжительность |  |  |
| modification_date | date | const=n6k2nxsxx4 |  |  |
| app_instance_id | string | const=8qorpy64yd |  |  |
