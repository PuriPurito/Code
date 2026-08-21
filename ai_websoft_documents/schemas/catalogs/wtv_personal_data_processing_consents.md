# Схема: wtv_personal_data_processing_consents.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID | ✅ |  |
| person_id | integer | c_coll | ✅ | collaborators |
| person_fullname | string | c_fio |  |  |
| consent_date | date | ##'Дата и время согласия'## |  |  |
| person_type | string | c_type |  |  |
| org_id | integer | c_org | ✅ | orgs |
| site_id | integer | const=sayt | ✅ | sites |
| modification_date | date | const=n6k2nxsxx4 |  |  |
| app_instance_id | string | const=8qorpy64yd |  |  |
