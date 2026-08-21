# Схема: wtv_learning_record.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID |  |  |
| code | string | const=c_code |  |  |
| object_type | string | const=c_object_type |  | common.exchange_object_types |
| object_id | integer | const=c_object |  | DefaultDb.GetOptCatalog( object_type + 's' ) |
| object_name | string | const=c_object_name |  |  |
| proctoring_object_type | string | const=c_object_type |  | common.exchange_object_types |
| proctoring_object_id | integer | const=c_object |  | DefaultDb.GetOptCatalog( proctoring_object_type + 's' ) |
| proctoring_object_name | string | const=c_object_name |  |  |
| state_id | string | const=c_status |  | common.learning_record_statuss |
| start_date | date | const=c_start_date |  |  |
| finish_date | date | const=c_finish_date | ✅ |  |
| is_finish_record | bool | ##'Запись закончена'## |  |  |
| check_foto_state_id | string | ##'Статус проверки фото'## |  | common.learning_record_statuss |
| num_failed_checked_foto | integer | ##'Количество фото не прошедших проверку'## |  |  |
| result_comment | string | const=vkpb_comment |  |  |
| person_id | integer | const=c_coll |  | collaborators |
| proctoring_system_id | integer | ##'Система прокторинга'## |  | proctoring_systems |
| event_id | integer | const=c_event |  | event |
| download_materials | bool | ##'Скачаны материалы прокторинга'## |  |  |
| record_num | integer | ##'Количество запусков записи'## |  |  |
| start_record_date | date | ##'Дата запуска последней записи'## | ✅ |  |
| media_records | string | ##'Записи медиа потока'## |  |  |
| id | string | ID |  |  |
| media_url | string | ##'Url'## |  |  |
| stream_number | integer | ##'Номер потока'## |  |  |
| type_id | string | ##'Тип медиа потока'## |  |  |
| logs | string | ##'Логирование'## |  |  |
| id | string | ID |  |  |
| date | date | const=c_date |  |  |
| person_id | integer | const=c_coll |  | collaborators |
| person_fullname | string | const=c_coll |  |  |
| text | string | const=07ouhm5mfz |  |  |
| result_comments | string | ##'Комментирование результатов'## |  |  |
| id | integer | ID |  | resources |
| comment | string | const=07ouhm5mfz |  |  |
| result_comment | string | const=vkpb_comment |  |  |
| state_id | string | const=c_status |  | common.learning_record_statuss |
| violations | string | ##'Нарушения'## |  |  |
| id | string | ID |  |  |
| comment | string | const=07ouhm5mfz |  |  |
| date | date |  |  |  |
| person_id | integer | const=c_coll |  | collaborators |
| type_id | string | const=c_type |  | common.violation_types |
| state_id | string | const=c_status |  | common.violation_states |
| stream_number | integer | ##'Номер потока'## |  |  |
| media_id | integer | ##'Медиа поток'## |  |  |
| start_time | string | const=c_start_time |  |  |
| finish_time | string | const=rxvbavpep1 |  |  |
| proctors | string | ##'Прокторы'## |  |  |
| proctor_id | integer | const=c_coll |  | collaborators |
| state_id | string | const=c_status |  | common.proctor_states |
| is_prefer | bool | ##'Предпочтительный проктор'## |  |  |
| last_activity_date | date | ##'Время последней активности'## |  |  |
| sessions | string | ##'Сессии прокторинга'## |  |  |
| id | string | ID |  |  |
| state_id | string | const=c_status |  | common.proctoring_session_states |
| start_date | date | const=c_start_date |  |  |
| finish_date | date | const=3bywib72ya |  |  |
| comment | string | const=vkpb_comment |  |  |
| doc_info | doc_info_base | const=dseglc23jx |  |  |
