# Схема: wtv_web_mode.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID |  |  |
| code | string | const=c_code |  |  |
| name | string | const=c_name |  |  |
| is_default | bool | По умолчанию для портала |  |  |
| is_default_admin | bool | По умолчанию для администратора |  |  |
| catalog_name | string | const=c_object_type |  | common.exchange_object_types |
| placeholder_template_id | integer | Шаблон разметки |  | custom_web_templates |
| web_design_id | integer | const=k26170zag7 |  | web_designs |
| site_id | integer | const=sayt |  | sites |
| access | string | const=bmlkskx7us |  |  |
| template_links | string | Связи шаблонов |  |  |
| id | string | ID |  |  |
| type | string | const=c_type |  |  |
| source_template_id | integer | Элемент шаблона |  | override_web_templates |
| target_template_id | integer | Элемент шаблона |  | override_web_templates |
| statistic_recs | string | const=kaleydoskoppok |  |  |
| statistic_rec_id | integer | ID |  | statistic_recs |
| is_std | bool | const=rnya4h6g63 |  |  |
| changed | bool | const=izmenennyy |  |  |
| comment | string | const=vkpb_comment |  |  |
| postloading | bool | ##'Постзагрузка контента'## |  |  |
| loading_instruction | string | ##'Инструкции загрузки'## |  |  |
| use_fcache | bool | ##'Кеширование структуры'## |  |  |
| searchable_portal | bool | ##'Доступна для поиска на портале'## |  |  |
| doc_info | doc_info_base |  |  |  |
| sel_statistic_recs_id | string |  |  |  |
| role_id | integer | const=4egocnh7uc |  | roles |
