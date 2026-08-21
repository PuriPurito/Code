# Схема: wtv_personal_data_processing_consent.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID |  |  |
| person_id | integer | const=c_coll |  | collaborators |
| person_fullname | string | const=c_fio |  |  |
| consent_date | date | ##'Дата и время согласия'## |  |  |
| person_type | string | const=c_type |  |  |
| org_id | integer | const=c_org |  | orgs |
| site_id | integer | const=sayt |  | sites |
| is_candidate | bool |  |  |  |
| doc_info | doc_info_base | const=dseglc23jx |  |  |
| access | string | const=bmlkskx7us |  |  |
