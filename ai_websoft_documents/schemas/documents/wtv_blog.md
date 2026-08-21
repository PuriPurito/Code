# Схема: wtv_blog.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| create_date | date | const=vdb_aim_date |  |  |
| type | string | ##'Тип блога'## |  | common.blog_types |
| channel_provider_id | integer | ##'Провайдер канала'## |  | channel_provider |
| permit_subscription | bool | const=vdb_can_submition |  |  |
| allow_anonymous_comment | bool | const=vbeb_can_anonum_comm |  |  |
| creator_id | integer |  |  | collaborators |
| object_id | integer | const=c_object |  | DefaultDb.GetOptCatalog( object_type + 's' ) |
| object_type | string | const=c_object_type |  | common.exchange_object_types |
| object_name | string | const=j2xkyixyrs |  |  |
| authors | string | const=vbbo_authors |  |  |
| person_id | integer |  |  | collaborators |
| is_full_moderator | bool |  |  |  |
| authors_num | string | const=els39989wi |  |  |
| num_message_in_list | integer | const=vbeb_mess_num |  |  |
| access | string | const=bmlkskx7us |  |  |
| desc | string | const=c_desc |  |  |
| comment | string | const=vkpb_comment |  |  |
| doc_info | doc_info_base | const=dseglc23jx |  |  |
| author_sort_type | string |  |  |  |
