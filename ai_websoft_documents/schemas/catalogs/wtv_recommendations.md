# Схема: wtv_recommendations.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID | ✅ |  |
| code | string | const=c_code |  |  |
| fullname | string | const=c_fio | ✅ |  |
| phone | string | const=uf_phone |  |  |
| email | string | E-mail |  |  |
| work_phone | string | const=dd2zo2k2mj |  |  |
| mobile_phone | string | const=emoqzexw7p |  |  |
| status | string | const=c_status | ✅ | common.vacancy_response_status_types |
| vacancy_id | integer | const=idvakansii | ✅ | vacancys |
| vacancy_name | string | const=nazvanievakans |  |  |
| src_person_id | integer | const=c_person_send_recommendation | ✅ | collaborators |
| src_person_fullname | string | const=lhbyv18qkm |  |  |
| modification_date | date | const=n6k2nxsxx4 |  |  |
| app_instance_id | string | const=8qorpy64yd |  |  |
