# Схема: wtv_traning_orders.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID | ✅ |  |
| number | string | const=fnxaxirsmo |  |  |
| date | date | const=vdb_aim_date |  |  |
| signing_person_fullname | string | const=v3b5zqzoxo |  |  |
| responsible_person_fullname | string | const=nbiuuy76cx |  |  |
| performer_person_fullname | string | const=ejesi4ejmh |  |  |
| order_type_id | integer | const=810n0mbvkn |  | order_types |
| event_id | integer | const=c_event | ✅ | events |
| education_org_id | integer | const=8ep5fzi6uu | ✅ | education_orgs |
| pay_phase_id | integer | const=cnzi2pfasc |  | pay_phases |
| cost | real | const=p4yd3d3yoa |  |  |
| currency | string | const=c_currency_type |  | lists.currency_types |
| status | string | const=c_status |  | common.traning_order_states |
| modification_date | date | const=n6k2nxsxx4 |  |  |
| app_instance_id | string | const=8qorpy64yd |  |  |
