# Схема: wtv_library_material.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| number | integer |  |  |  |
| title | string |  |  |  |
| number | integer |  |  |  |
| title | string |  |  |  |
| number | integer |  |  |  |
| title | string |  |  |  |
| number | integer |  |  |  |
| title | string |  |  |  |
| title | string |  |  |  |
| orientation | string |  |  |  |
| width | integer |  |  |  |
| height | integer |  |  |  |
| show_contents | bool |  |  |  |
| base_url | string |  |  |  |
| page_id | string |  |  |  |
| url | string | URL |  |  |
| name | string | const=uf_name |  |  |
| author | string | const=vfb_author |  |  |
| publisher | string | 'Издательство' |  |  |
| section_id | integer | const=razdelbibliote |  | library_sections |
| sections_id | integer | const=razdelbibliote |  | library_sections |
| library_system_id | integer | 'Система библиотек' |  | library_system |
| number | string | const=fnxaxirsmo |  |  |
| library_material_type_id | integer | const=c_view |  | library_material_types |
| library_material_format_id | integer |  |  | library_material_formats |
| number | integer |  |  |  |
| year | integer | const=c_imprint_date |  |  |
| isbn | string | ISSN/ISBN |  |  |
| state_id | integer | const=c_state |  | common.library_states |
| file_name | integer | const=c_file |  | resources |
| online_video_prepared | bool | const=videoskonverti |  |  |
| use_old_format | bool | const=c_format |  |  |
| online_video_quality | string | const=kachestvovideo |  |  |
| allow_download | bool | const=razreshitskachiv |  |  |
| allow_self_viewing | bool | const=razreshitsamost |  |  |
| image | integer | const=razreshitsamost |  | resources |
| description | string | const=c_annatatsiya |  |  |
| contents | string | const=c_content |  |  |
| is_need_admin_approval | bool | const=novymotzyvamtr |  |  |
| is_closed | bool | const=zakrytdlyanovyh |  |  |
| group_id | integer |  |  | groups |
| name | string |  |  |  |
| external_id | string | 'Идентификатор во внешнем источнике' |  |  |
| external_import_date | date | 'Дата актуализации из внешнего источника' |  |  |
| person_id | integer |  |  | collaborators |
| person_fullname | string |  |  |  |
| default_response_type_id | integer | const=veb_response_default_type |  | response_types |
| mandatory_fill_response | bool | const=veb_mandatory_fill_response |  |  |
| old_id | integer |  |  | library_sections |
| id | integer |  |  | library_sections |
| name | string |  |  |  |
| parent_id | integer |  |  | library_sections |
| comment | string | const=vkpb_comment |  |  |
| doc_info | doc_info_base | const=dseglc23jx |  |  |
