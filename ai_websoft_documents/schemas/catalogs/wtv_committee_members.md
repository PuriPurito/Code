# Схема: wtv_committee_members.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID | ✅ |  |
| code | string | const=c_code | ✅ |  |
| catalog | string | const=c_object_type | ✅ | common.exchange_object_types |
| object_id | integer | const=c_object | ✅ | DefaultDb.GetOptCatalog( catalog + 's' ) |
| object_name | string | const=c_object_name | ✅ |  |
| boss_type_id | integer | const=tipuchastnikapr | ✅ | boss_types |
| personnel_committee_id | integer | Кадровый комитет | ✅ | personnel_committees |
| status | string | const=c_status |  | common.committee_member_status_types |
| committee_member_type | string | const=tipuchastnikapr |  | common.committee_member_types |
| modification_date | date | const=n6k2nxsxx4 | ✅ |  |
| app_instance_id | string | const=8qorpy64yd | ✅ |  |
