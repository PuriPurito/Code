# Схема: wtv_person_object_links.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID |  |  |
| person_id | integer | const=c_coll |  | collaborators |
| person_fullname | string | const=lhbyv18qkm |  |  |
| subject_id | integer |  | ✅ | DefaultDb.GetOptCatalog(subject_type + 's') |
| subject_type | string |  |  | common.exchange_object_types |
| object_catalog | string | const=ek7h8du0of |  | common.exchange_object_types |
| title | string | const=c_heading |  |  |
| all_can_create | bool | const=707ffuj4r7 |  |  |
| all_can_edit | bool | const=253zxi2unm |  |  |
| all_can_delete | bool | const=npobpnmteh |  |  |
| modification_date | date | const=n6k2nxsxx4 |  |  |
