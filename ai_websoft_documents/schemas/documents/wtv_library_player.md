# Схема: wtv_library_player.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID |  |  |
| code | string | const=c_code |  |  |
| name | string | const=c_name |  |  |
| player_url | string |  |  |  |
| learning_storage_id | integer | const=c_learning_storage |  | learning_storages |
| activity_id | integer | const=uchebnayaaktivno |  | activitys |
| cmi5 | bool | CMI5 |  |  |
| comment | string | const=vkpb_comment |  |  |
| doc_info | doc_info_base | const=dseglc23jx |  |  |
| is_std | bool | const=rnya4h6g63 |  |  |
| changed | bool | const=izmenennyy |  |  |
| selector | string |  |  |  |
