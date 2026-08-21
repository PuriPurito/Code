# Схема: wtv_request_type.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| object_type | string | const=c_object_type |  | common.exchange_object_types |
| object_query_qual | string | ##'Условия для отбора объекта'## |  |  |
| is_group | bool | const=u1ggxbmbhc |  |  |
| is_can_be_group | bool | const=uzqly2umzj |  |  |
| is_can_be_add_youself | bool | const=7n5qpnus9e |  |  |
| hide_portal_comment | bool | const=nepokazyvatpol |  |  |
| forbid_rejection | bool | const=zapretitotklon |  |  |
| forbid_copy | bool | const=zapretitavtoru |  |  |
| boss_only | bool | const=podavatzayavkum |  |  |
| show_all | bool | Отображать всех сотрудников при выборе группы |  |  |
| ignore_black_list | bool | Не учитывать черный список при создании и обработке |  |  |
| workflow_id | integer | const=o1ivkrztmb |  | workflows |
| create_message | string | const=soobsheniepripo |  |  |
| use_standart_processing | bool | const=rx6cgrypmu |  |  |
| code | string | ##'Код отработки при создании заявки'## |  |  |
| code_library_id | integer | ##'Библиотека программного кода (метод onCreate)'## |  | code_librarys |
| processing_code | string | const=t61a70b4mu |  |  |
| processing_code_library_id | integer | ##'Библиотека программного кода (метод onProcessing)'## |  | code_librarys |
| reject_processing_code | string | const=fo1awuw8ay |  |  |
| reject_processing_code_library_id | integer | ##'Библиотека программного кода (метод onReject)'## |  | code_librarys |
| request_custom_web_template_id | integer | const=shablondokument |  | custom_web_templates |
| reject_redirect_url | string | const=adresperehodap |  |  |
| remote_action_id | integer | const=udalennoedeyst |  | remote_actions |
| access | string | const=bmlkskx7us |  |  |
| is_std | bool | const=rnya4h6g63 |  |  |
| changed | bool | const=izmenennyy |  |  |
| doc_info | doc_info_base | const=dseglc23jx |  |  |
| comment | string | const=vkpb_comment |  |  |
| desc | string | const=c_desc |  |  |
| role_id | integer | const=4egocnh7uc |  | roles |
