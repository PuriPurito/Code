# Схема: wtv_web_modes.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID | ✅ |  |
| code | string | const=c_code | ✅ |  |
| name | string | const=c_name | ✅ |  |
| is_default | bool | По умолчанию для портала |  |  |
| is_default_admin | bool | По умолчанию для администратора |  |  |
| catalog_name | string | const=c_object_type | ✅ | common.exchange_object_types |
| placeholder_template_id | integer | Шаблон разметки |  | custom_web_templates |
| web_design_id | integer | const=k26170zag7 | ✅ | web_designs |
| site_id | integer | const=sayt | ✅ | sites |
| use_fcache | bool | ##'Кеширование структуры'## |  |  |
| searchable_portal | bool | ##'Доступна для поиска на портале'## |  |  |
| is_std | bool | const=rnya4h6g63 |  |  |
| changed | bool | const=izmenennyy |  |  |
| modification_date | date | const=n6k2nxsxx4 |  |  |
| app_instance_id | string | const=8qorpy64yd |  |  |
| role_id | integer | const=4egocnh7uc | ✅ | roles |
