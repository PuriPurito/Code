# Схема: wtv_contact.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID |  |  |
| code | string | const=c_code |  |  |
| project_id | integer | const=c_project |  | projects |
| type_id | integer | const=tipkontakta |  | contact_types |
| initiator_person_id | integer | const=vrb_initiator |  | collaborators |
| contact_person_id | integer | const=kontaktnoelico |  | collaborators |
| contact_org_id | integer | const=c_org |  | orgs |
| status_id | string | const=c_status |  | common.contact_status_types |
| contact_date | date | const=datakontakta |  |  |
| previous_contact_id | integer | const=predydushiykont |  | contacts |
| result_id | integer | const=rezultatkontak |  | contact_results |
| comment | string | const=vkpb_comment |  |  |
| doc_info | doc_info_base | const=dseglc23jx |  |  |
| poll_result_id | integer |  |  | poll_results |
| desc | string |  |  |  |
