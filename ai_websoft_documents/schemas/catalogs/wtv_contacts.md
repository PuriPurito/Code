# Схема: wtv_contacts.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID | ✅ |  |
| code | string | const=c_code |  |  |
| project_id | integer | const=c_project |  | projects |
| type_id | integer | const=tipkontakta |  | contact_types |
| status_id | string | const=c_status |  | common.contact_status_types |
| result_id | integer | const=rezultatkontak |  | contact_results |
| initiator_person_id | integer | const=vrb_initiator | ✅ | collaborators |
| initiator_person_fullname | string | const=c3gsppu8ck | ✅ |  |
| contact_person_id | integer | const=kontaktnoelico | ✅ | collaborators |
| contact_person_fullname | string | const=kontaktnoelico | ✅ |  |
| contact_org_name | string | const=c_org | ✅ |  |
| contact_position_name | string | const=c_position | ✅ |  |
| contact_org_id | integer | const=c_org | ✅ | orgs |
| previous_contact_id | integer | const=predydushiykont |  | contacts |
| contact_date | date | const=datakontakta | ✅ |  |
| modification_date | date | const=n6k2nxsxx4 | ✅ |  |
| app_instance_id | string | const=8qorpy64yd |  |  |
