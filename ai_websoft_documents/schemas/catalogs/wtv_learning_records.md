# Схема: wtv_learning_records.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID | ✅ |  |
| code | string | const=c_code |  |  |
| object_type | string | const=c_object_type |  | common.exchange_object_types |
| object_id | integer | const=c_object |  | DefaultDb.GetOptCatalog( object_type + 's' ) |
| object_name | string | const=c_object_name |  |  |
| event_id | integer | const=c_event | ✅ | events |
| proctoring_object_type | string | const=c_object_type |  | common.exchange_object_types |
| proctoring_object_id | integer | const=c_object |  | DefaultDb.GetOptCatalog( proctoring_object_type + 's' ) |
| proctoring_object_name | string | const=c_object_name |  |  |
| proctoring_system_id | integer | ##'Система прокторинга'## |  | proctoring_systems |
| person_id | integer | const=wrm4ebg7c9 | ✅ | collaborators |
| person_fullname | string | const=x33edt559z | ✅ |  |
| person_position_name | string | const=c_position |  |  |
| person_subdivision_name | string | const=c_position |  |  |
| create_date | date | const=c_create_date |  |  |
| state_id | string | const=c_status |  | common.learning_record_statuss |
| start_date | date | const=c_start_date |  |  |
| finish_date | date | const=c_finish_date | ✅ |  |
| is_finish_record | bool | ##'Запись закончена'## |  |  |
| num_failed_checked_foto | integer | ##'Количество фото не прошедших проверку'## |  |  |
| check_foto_state_id | string | ##'Статус проверки фото'## |  | common.learning_record_statuss |
| download_materials | bool | ##'Скачаны материалы прокторинга'## |  |  |
| active_session_id | string | Session ID |  |  |
| active_session_finish_date | date | const=c_finish_date | ✅ |  |
| proctors_id | integer | ##'Прокторы'## |  | collaborators |
| archive_proctors_id | integer | ##'Все прокторы'## |  | collaborators |
| is_prefer_proctor | bool | ##'Предпочтительный проктор'## |  |  |
| modification_date | date | const=n6k2nxsxx4 | ✅ |  |
| app_instance_id | string | const=8qorpy64yd |  |  |
