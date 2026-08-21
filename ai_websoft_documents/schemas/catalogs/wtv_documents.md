# Схема: wtv_documents.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID | ✅ |  |
| code | string | const=c_code | ✅ |  |
| name | string | const=c_name | ✅ |  |
| resource_id | integer | const=c_resource |  | resources |
| parent_document_id | integer | const=sut3fkfm10 | ✅ | documents |
| site_id | integer | const=sayt | ✅ | sites |
| custom_template_type | integer | const=eeqw1cgwd6 |  | custom_web_templates |
| access_exists | bool | const=ustanovlenypra |  |  |
| catalog_list_desc | string | const=prikreplennyeo |  |  |
| parent_object_type | string | const=c_object_type |  | common.exchange_object_types |
| parent_object_id | integer | const=c_object | ✅ | DefaultDb.GetOptCatalog( object_type + 's' ) |
| parent_object_name | string | const=c_object_name |  |  |
| status_in_knowledge_map | string | const=c_status |  | common.status_in_knowledge_map_types |
| kp_start_date | date | const=vkmb_start_action_date |  |  |
| kp_end_date | date | const=dataokonchaniyad |  |  |
| create_date | date | const=c_create_date |  |  |
| modification_date | date | const=n6k2nxsxx4 | ✅ |  |
| app_instance_id | string | const=8qorpy64yd | ✅ |  |
| invariable | bool | const=uhn99agyhd |  |  |
| knowledge_parts | string | const=vkpb_knowledge_parts_title |  |  |
| tags | string | ##'ID тегов'## |  |  |
| experts | string | const=vkpb_experts |  |  |
