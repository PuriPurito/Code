# Схема: wtv_resources.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID | ✅ |  |
| code | string | const=c_code |  |  |
| name | string | const=c_name | ✅ |  |
| type | string | const=x91r5l546f |  | common.resource_types |
| status | string | const=c_status | ✅ | common.course_test_states |
| resource_id | integer | const=c_resource |  | resources |
| resource_type_id | integer | const=tipresursabazy |  | resource_types |
| allow_download | bool | Разрешить доступ с портала |  |  |
| allow_search | bool | const=razreshitpoisk |  |  |
| allow_unauthorized_download | bool | Разрешить скачивание файла без авторизации |  |  |
| comment | string | const=vkpb_comment |  |  |
| use_count | integer | const=c_num |  |  |
| file_name | string | const=vrb_file_name |  |  |
| size | integer | const=6t6e9751fk |  |  |
| role_id | integer | const=4egocnh7uc | ✅ | roles |
| person_id | integer | const=vladelecresursa | ✅ | collaborators |
| person_fullname | string | const=lhbyv18qkm | ✅ |  |
| file_path | string | Путь |  |  |
| checksum | string | Checksum |  |  |
| knowledge_parts | string | const=vkpb_knowledge_parts_title |  |  |
| tags | string | ID тегов |  |  |
| experts | string | const=vkpb_experts |  |  |
| creation_date | date | const=c_create_date | ✅ |  |
| modification_date | date | const=n6k2nxsxx4 | ✅ |  |
| app_instance_id | string | const=8qorpy64yd |  |  |
