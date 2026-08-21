# Схема: wtv_covenants.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID | ✅ |  |
| code | string | const=c_code | ✅ |  |
| date | date | const=vdb_aim_date | ✅ |  |
| close_date | date | const=c_close_date | ✅ |  |
| period_work | integer | const=qa3dj788ih |  |  |
| proc_pay_bank | integer | const=ep0zow9oaq |  |  |
| proc_pay_collab | integer | const=o0o9mnq2yt |  |  |
| proc_deduct | integer | const=i761pj5cfw |  |  |
| person_id | integer | const=c_coll | ✅ | collaborators |
| person_fullname | string | const=lhbyv18qkm | ✅ |  |
| education_method_id | integer | const=c_edu_method | ✅ | education_methods |
| event_id | integer | const=c_event | ✅ | events |
| status_id | string | const=2uivot368w |  | common.covenant_status_types |
| modification_date | date | const=n6k2nxsxx4 |  |  |
| app_instance_id | string | const=8qorpy64yd |  |  |
