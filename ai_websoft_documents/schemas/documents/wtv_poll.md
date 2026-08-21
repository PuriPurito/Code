# Схема: wtv_poll.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| class | string |  |  |  |
| poll_id | integer |  |  |  |
| start_date | date | const=c_start_date |  |  |
| end_date | date | const=3bywib72ya |  |  |
| completed | bool | const=4p62srusxe |  |  |
| is_main | bool | const=rtn2bvia3z |  |  |
| is_one_time | bool | const=m6882y2jvq |  |  |
| is_anonymous | bool | const=dj4mksikb1 |  |  |
| show_report | bool | const=7qa9d3fm6f |  |  |
| show_comments_in_report | bool |  |  |  |
| person_id | integer | const=c_coll |  | collaborators |
| is_multiple_select | bool |  |  |  |
| columns_num | integer | const=lmg1y3dna8 |  |  |
| questions | string | const=c_questions |  |  |
| class | attr |  |  |  |
| id | integer |  |  |  |
| type | string | const=wn6qh2maou |  | common.poll_types |
| title | string | const=c_heading |  |  |
| is_in_table | bool | const=2xzdlv11x4 |  |  |
| show_header | bool | const=niaeh727i4 |  |  |
| required | bool | const=jijszmy5hs |  |  |
| catalog | string | const=c_object_type |  | common.exchange_object_types |
| add_comment | bool | const=kdnzyftaux |  |  |
| subtype | integer |  |  |  |
| is_multiple | bool | const=hitxh8jynw |  |  |
| value_condition | string |  |  |  |
| completed | bool | const=voproszavershen |  |  |
| image_id | integer | const=vfb_image |  | resources |
| entries | string | const=5ed2971r62 |  |  |
| id | integer |  |  |  |
| value | string | const=c_value |  |  |
| weight | real | const=ques_score |  |  |
| bg_color | string | const=cvetfona |  |  |
| resource_id | integer | const=c_resource |  | resources |
| id | integer |  |  |  |
| value | string |  |  |  |
| bg_color | string |  |  |  |
| id | integer |  |  |  |
| value | string |  |  |  |
| bg_color | string |  |  |  |
| is_current | bool |  |  |  |
| catalog_entry_id | integer |  |  |  |
| id | string |  |  |  |
| type | string | Тип представления |  | common.poll_item_types |
| title | string | const=c_title |  |  |
| question_id | integer |  |  | BaseMultipleElem.Parent.Parent.questions |
| required | bool | const=jijszmy5hs |  |  |
| resource_type | string | const=x91r5l546f |  | common.resource_types |
| max_duration | integer | const=3c9n8xs4j2 |  |  |
| preparation_time | integer | Время на подготовку (сек.) |  |  |
| prohibit_viewing | bool | Запретить просмотр своего ответа |  |  |
| prohibit_overwriting | bool | Запретить перезапись |  |  |
| id | string |  |  |  |
| bg_color | string |  |  |  |
| question_id | integer |  |  | BaseMultipleElem.Parent.BaseMultipleElem.Parent.Parent.questions |
| value | string |  |  |  |
| id | string |  |  |  |
| bg_color | string |  |  |  |
| question_id | integer |  |  | BaseMultipleElem.Parent.BaseMultipleElem.Parent.BaseMultipleElem.Parent.Parent.questions |
| value | string |  |  |  |
| is_title | bool |  |  |  |
| id | string |  |  |  |
| question_id | integer |  |  | BaseMultipleElem.Parent.BaseMultipleElem.Parent.Parent.questions |
| entry_id | integer |  |  | question_id.ForeignElem.entries |
| and_or | string |  |  |  |
| allow_delete_poll_result | bool | Разрешить пользователям удалять свои результаты опросов |  |  |
| complete_message | string | Сообщение при завершении |  |  |
| view_templates | ms_view_templates_base | Шаблоны визуальных настроек |  |  |
| access | string | const=bmlkskx7us |  |  |
| complete_massege | string |  |  |  |
| processing_code | string | Программный код обработки результатов опроса |  |  |
| desc | string | const=c_desc |  |  |
| comment | string |  |  |  |
| doc_info | doc_info_base |  |  |  |
| role_id | integer | const=4egocnh7uc |  | roles |
