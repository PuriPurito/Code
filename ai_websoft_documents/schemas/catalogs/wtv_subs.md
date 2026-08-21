# Схема: wtv_subs.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer |  | ✅ |  |
| name | string |  |  |  |
| type | string |  | ✅ |  |
| org_id | integer |  |  | orgs |
| parent_id | integer |  | ✅ |  |
| basic_collaborator_id | integer |  | ✅ | collaborators |
| basic_collaborator_fullname | string |  |  |  |
| is_boss | bool |  |  |  |
| is_disbanded | bool |  |  |  |
