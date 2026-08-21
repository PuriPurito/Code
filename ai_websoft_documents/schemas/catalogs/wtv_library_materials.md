# Схема: wtv_library_materials.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| author | string | const=vfb_author |  |  |
| section_id | integer | const=razdelbibliote |  | library_sections |
| sections_id | integer | const=razdelbibliote |  | library_sections |
| year | integer | const=c_imprint_date |  |  |
| isbn | string | ISSN/ISBN |  |  |
| state_id | integer | const=c_state |  | common.library_states |
| has_digital | bool | const=imeetsyacifrovo |  |  |
| has_physical | bool | const=imeetsyafiziches |  |  |
| allow_download | bool | const=razreshitskachiv |  |  |
| allow_self_viewing | bool | const=razreshitsamost |  |  |
| online_video_prepared | bool | const=videoskonverti |  |  |
| library_material_type_id | integer | const=c_view |  | library_material_types |
| library_material_formats | string | const=formaty |  |  |
| external_id | string | 'Идентификатор во внешнем источнике' |  |  |
| external_import_date | date | 'Дата актуализации из внешнего источника' |  |  |
| file_name | integer | const=c_file |  | resources |
| is_need_admin_approval | bool | const=novymotzyvamtr |  |  |
| is_closed | bool | const=zakrytdlyanovyh |  |  |
| image | integer | const=razreshitsamost |  | resources |
| knowledge_parts | string | const=vkpb_knowledge_parts_title |  |  |
| tags | string | ##'ID тегов'## |  |  |
| experts | string | const=vkpb_experts |  |  |
| previous_version_object_id | integer |  |  | DefaultDb.GetOptCatalog( Child(0).Parent.Name + 's' ) |
| creation_date | date | const=c_create_date |  |  |
| modification_date | date | const=n6k2nxsxx4 |  |  |
| app_instance_id | string | const=8qorpy64yd |  |  |
| status_in_knowledge_map | string | const=c_status |  | common.status_in_knowledge_map_types |
