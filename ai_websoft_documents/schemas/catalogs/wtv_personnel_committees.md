# Схема: wtv_personnel_committees.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID | ✅ |  |
| code | string | const=c_code | ✅ |  |
| name | string | const=c_name | ✅ |  |
| org_id | integer | const=c_org | ✅ | orgs |
| subdivision_id | integer | const=c_subd | ✅ | subdivisions |
| group_id | integer | const=c_group | ✅ | groups |
| career_reserve_type_id | integer | const=tipkadrovogore |  | career_reserve_types |
| status | string | const=c_status | ✅ | common.personnel_committee_status_types |
| participants_status | string | const=Статус состава участников |  | common.committee_member_status_types |
| creation_date | date | const=c_create_date | ✅ |  |
| committee_date | date | const=dataprovedeniya | ✅ |  |
| end_date | date | const=c_finish_date | ✅ |  |
| modification_date | date | const=n6k2nxsxx4 | ✅ |  |
| app_instance_id | string | const=8qorpy64yd | ✅ |  |
| role_id | integer | const=4egocnh7uc | ✅ | roles |
