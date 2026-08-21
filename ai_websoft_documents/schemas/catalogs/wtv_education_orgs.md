# Схема: wtv_education_orgs.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID | ✅ |  |
| code | string | const=c_code |  |  |
| name | string | const=c_name | ✅ |  |
| disp_name | string | const=org_disp_name | ✅ |  |
| resource_id | integer | const=c_resource |  | resources |
| contact_main | string | const=f0blhs9yml |  |  |
| telephone_work | string | const=dd2zo2k2mj |  |  |
| telephone_mobile | string | const=emoqzexw7p |  |  |
| fax | string | const=org_fax |  |  |
| email | string | E-mail |  |  |
| is_provider_courses | bool | const=yavlyaetsyapostav | ✅ |  |
| provider_course_type_id | integer | ##'Тип провайдера курсов'## |  | provider_course_types |
| role_id | integer | const=4egocnh7uc | ✅ | roles |
| modification_date | date | const=n6k2nxsxx4 |  |  |
| app_instance_id | string | const=8qorpy64yd |  |  |
