# Схема: wtv_remote_collection.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID |  |  |
| code | string | const=c_code |  |  |
| name | string | const=c_name |  |  |
| category | string | const=vkpb_comment |  |  |
| cache_vars | string |  |  |  |
| url | string |  |  |  |
| script | string | const=c_code |  |  |
| catalog_name | string | const=c_object_type |  | common.exchange_object_types |
| api_ver | string | ##'Версия API'## |  |  |
| has_fulltext | bool | ##'Возможен полнотекстовый поиск'## |  |  |
| names | string | ##'Допустимые имена полей для поиска'## |  |  |
| api_filters | string | const=filtry |  |  |
| id | string | ID |  |  |
| name | string | ##'Имя поля фильтра'## |  |  |
| type | string | const=c_type |  | common.filter_types |
| title | string | const=c_heading |  |  |
| ready_to_analytics | bool | ##'Выборка готова к использованию в \'Центре аналитики\''## |  |  |
| wvar_id | string | ##'Переменные (модификаторы) выборки для \'Центра аналитики\''## |  | Doc.TopElem.wvars |
| filter_start_date | string | ##'Поле отбора - дата начала периода'## |  |  |
| filter_finish_date | string | ##'Поле отбора - дата конца периода'## |  |  |
| filter_person_ids | string | ##'Поле отбора - ID сотрудников'## |  |  |
| field_name | string | ##'Наименования ряда'## |  | Doc.TopElem.result_fields |
| field_timestamp | string | ##'Дата таймлайна'## |  | Doc.TopElem.result_fields |
| comment | string | const=vkpb_comment |  |  |
| start_index | integer |  |  |  |
| page_index | integer |  |  |  |
| page_size | integer |  |  |  |
| use_cache | integer |  |  |  |
| sort_field_name | string |  |  |  |
| sort_direction | string |  |  |  |
| columns_white_list | string |  |  |  |
| tree_node_id | string |  |  |  |
| use | bool |  |  |  |
| object_name | string |  |  |  |
| access | string | const=bmlkskx7us |  |  |
| default_for_portal | bool | ##'По умолчанию на портале'## |  |  |
| default_for_admin | bool | ##'По умолчанию в приложениях'## |  |  |
| is_std | bool | const=rnya4h6g63 |  |  |
| changed | bool | const=izmenennyy |  |  |
| doc_info | doc_info_base | const=dseglc23jx |  |  |
| test_format | string |  |  |  |
| test_destination | string |  |  |  |
| person_id | integer |  |  | collaborators |
| test_result_obj | variant |  |  |  |
| referer_url | string |  |  |  |
| converter | bool |  |  |  |
| role_id | integer | const=4egocnh7uc |  | roles |
