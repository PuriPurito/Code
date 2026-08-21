# Схема: wtv_mobile_app_config.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer |  |  | DefaultDb.GetOptCatalog( catalog + 's' ) |
| catalog | string |  |  |  |
| uid | integer |  |  |  |
| title | string |  |  |  |
| parent_section_id | integer |  |  | Child(0).Parent.Parent.Parent.documents |
| is_default | bool |  |  |  |
| is_menu | bool |  |  |  |
| is_offline | bool |  |  |  |
| hidden | bool |  |  |  |
| id | string |  |  |  |
| value | string |  |  |  |
| tag | string |  |  |  |
| id | integer | ID | ✅ |  |
| code | string | const=c_code |  |  |
| name | string | const=c_name |  |  |
| type | string | const=c_type |  |  |
| search_on | bool |  |  |  |
| favorites_on | bool |  |  |  |
| id | integer |  |  | documents |
| is_default | bool |  |  |  |
| is_menu | bool |  |  |  |
| partial | bool |  |  |  |
| cf | integer |  |  |  |
| hidden | bool |  |  |  |
| id | integer |  |  | document |
| included | bool |  |  |  |
| cf | integer |  |  |  |
| id | integer |  |  | documents |
| display_mode | integer |  |  |  |
| bottom_bar_headers | bool |  |  |  |
| zone | string |  |  |  |
| html | string |  |  |  |
| show_header | bool |  |  |  |
| use_update_stamp | bool |  |  |  |
| use_offline_scorm | bool |  |  |  |
| display_scorm_in_menu | bool |  |  |  |
| use_chat | bool |  |  |  |
| login_question | string |  |  |  |
| days_credentials_update | real |  |  |  |
| css_template | integer |  |  | custom_web_templates |
| js_template | integer |  |  | custom_web_templates |
| logo | integer |  |  | resources |
| can_create_project_task | bool | ##'Разрешить создавать задачи в рамках проектов'## |  |  |
| can_create_task | bool | ##'Разрешить создавать задачи себе'## |  |  |
| can_create_sub_task | bool | ##'Разрешить создавать задачи своим подчиненным'## |  |  |
| can_edit_boss_task | bool | ##'Разрешить редактировать задачу, созданную руководителем'## |  |  |
| can_edit_task | bool | ##'Разрешить редактировать свои задачи'## |  |  |
| can_edit_sub_task | bool | ##'Разрешить редактировать задачи подчиненных'## |  |  |
| can_edit_schedule | bool | ##'Разрешить редактировать свой график'## |  |  |
| can_edit_sub_schedule | bool | ##'Разрешить редактировать график подчиненного'## |  |  |
| can_create_weekend_schedule | bool | ##'Разрешить создавать документы в выходные дни'## |  |  |
| can_edit_with_interval | bool | ##'Разрешить редактировать дату с запланированным отсутствием'## |  |  |
| engine | integer |  |  |  |
| id | string |  |  |  |
| value | string |  |  |  |
| comment | string | const=vkpb_comment |  |  |
| doc_info | doc_info_base | const=dseglc23jx |  |  |
| show_messaging | bool | ##'Enable custom messaging settings'## |  |  |
| access | string | const=bmlkskx7us |  |  |
| selector | string |  |  |  |
| object_to_select | string |  |  |  |
| target_list | bool |  |  |  |
| id | string |  |  |  |
| id | string |  |  |  |
| val | string |  |  |  |
| uid | integer |  |  |  |
| real_id | integer |  |  |  |
| target | string |  |  |  |
| targetName | string |  |  |  |
| title | string |  |  |  |
