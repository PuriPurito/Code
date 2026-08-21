# Схема: wtv_application.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| type | string | const=c_type |  | common.application_types |
| disp_type | string | const=vceb_view_type |  |  |
| use_instances | bool | Использовать процессы |  |  |
| version | string | const=0zwsfpu9kg |  |  |
| prev_version | string | const=vkmb_previous_version |  |  |
| server_version | string | const=0zwsfpu9kg |  |  |
| vendor | string | Вендор |  |  |
| vendor_library | string | Библиотека |  |  |
| release_date | date | Дата релиза |  |  |
| lic_type | string | Тип лицензии |  |  |
| list_xms_url | string | Форма списка |  |  |
| default_xms_url | string | Форма страницы по умолчанию |  |  |
| library_url | string | const=ssylkanafaylbi |  |  |
| desc | string | const=c_desc |  |  |
| comment | string | const=vkpb_comment |  |  |
| doc_info | doc_info_base | const=dseglc23jx |  |  |
| changed | bool | const=izmenennyy |  |  |
| is_std | bool | const=rnya4h6g63 |  |  |
| access_blocks | string | Модули |  |  |
| id | string | Модуль |  | common.access_block_types |
| can_read | bool | const=l9aubfbw3i |  |  |
| can_write | bool | const=vthkyrri4o |  |  |
| can_delete | bool | const=sxser5cyb3 |  |  |
| access_level_id | integer | const=ela6vna8le |  | BaseMultipleElem.Parent.Parent.access_levels |
| access_levels | string | Уровни доступа |  |  |
| id | integer | const=ela6vna8le |  |  |
| name | string | const=c_name |  |  |
| view_configurations | string | Представления |  |  |
| id | string |  |  |  |
| view_configuration_id | integer |  |  | view_configurations |
| name | string |  |  |  |
| resource_id | integer |  |  | resources |
| comment | string |  |  |  |
| disp_role_selector | bool |  |  |  |
| can_create_roles | bool |  |  |  |
| config_set | bool |  |  |  |
| access_levels | string | Уровни доступа |  |  |
| access_level_id | integer | const=ela6vna8le |  | BaseMultipleElem.Parent.BaseMultipleElem.Parent.Parent.access_levels |
| can_create_roles | bool |  |  |  |
| can_create_root_roles | bool |  |  |  |
| can_edit_roles | bool |  |  |  |
| can_delete_roles | bool |  |  |  |
| can_move_to_role | bool |  |  |  |
| can_exclude_from_role | bool |  |  |  |
| is_custom_menu | bool | Свое меню |  |  |
| remote_actions | string | Действия |  |  |
| id | string |  |  | BaseMultipleElem.Parent.BaseMultipleElem.Parent.Parent.remote_actions |
| is_custom_panel | bool | Настраиваемая панель кнопок |  |  |
| id | string |  |  |  |
| code | string |  |  |  |
| name | string |  |  |  |
| id | string |  |  |  |
| parent_id | string |  |  | BaseMultipleElem.Parent |
| name | string |  |  |  |
| type | string |  |  |  |
| list_object_id | string |  |  |  |
| color | string |  |  |  |
| image_url | string |  |  |  |
| resource_id | integer |  |  | resources |
| is_dialog | bool |  |  |  |
| view_type | string |  |  |  |
| is_custom_filters | bool | Настраиваемые фмльтры из выборки |  |  |
| api_filters | string | const=filtry |  |  |
| id | string | ID |  |  |
| title | string | const=c_heading |  |  |
| remote_actions | string | Действия |  |  |
| id | string |  |  |  |
| remote_action_id | integer |  |  | remote_actions |
| name | string |  |  |  |
| code | string |  |  |  |
| resource_id | integer |  |  | resources |
| comment | string |  |  |  |
| access_levels | string | Уровни доступа |  |  |
| access_level_id | integer | const=ela6vna8le |  | BaseMultipleElem.Parent.BaseMultipleElem.Parent.Parent.access_levels |
| menu_id | string |  |  | BaseMultipleElem.Parent.Parent.action_menus |
| ignore_catalog | bool | Все каталоги |  |  |
| report_templates | string | Отчеты |  |  |
| id | string |  |  |  |
| report_template_id | integer |  |  |  |
| report_template_url | string |  |  |  |
| report_template_type | string |  |  |  |
| name | string |  |  |  |
| resource_id | integer |  |  | resources |
| comment | string |  |  |  |
| access_levels | string | Уровни доступа |  |  |
| access_level_id | integer | const=ela6vna8le |  | BaseMultipleElem.Parent.BaseMultipleElem.Parent.Parent.access_levels |
| id | string |  |  |  |
| title | string |  |  |  |
| image_url | string |  |  |  |
| resource_id | integer |  |  | resources |
| id | string |  |  |  |
| name | string |  |  |  |
| type | string |  |  |  |
| color | string |  |  |  |
| resource_id | integer |  |  | resources |
| image_url | string |  |  |  |
| is_dialog | bool |  |  |  |
| id | string |  |  |  |
| code | string |  |  |  |
| name | string |  |  |  |
| id | string |  |  |  |
| parent_id | string |  |  | BaseMultipleElem.Parent |
| name | string |  |  |  |
| type | string |  |  |  |
| list_object_id | string |  |  |  |
| color | string |  |  |  |
| image_url | string |  |  |  |
| resource_id | integer |  |  | resources |
| is_dialog | bool |  |  |  |
| view_type | string |  |  |  |
| access_level_id | integer | const=ela6vna8le |  | BaseMultipleElem.Parent.Parent.Parent.access_levels |
| object_id | integer | Библиотека |  | code_librarys |
| element_code | string | Метод |  |  |
| role_id | integer | const=4egocnh7uc |  | roles |
| web_mode_id | integer | Тип страницы |  | web_modes |
| file_url | string |  |  |  |
| file_name | string |  |  |  |
| file_size | integer |  |  |  |
| run_code | string |  |  |  |
| unit_item_id | string |  |  |  |
