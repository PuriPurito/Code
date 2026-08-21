# Схема: wtv_dn_specialization.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| code | string | const=c_code |  |  |
| name | string | const=c_name |  |  |
| speciality_id | integer | ms_tools.get_const('specialnost') |  | dn_specials |
| desc | string | const=c_desc |  |  |
| doc_info | doc_info_base |  |  |  |
