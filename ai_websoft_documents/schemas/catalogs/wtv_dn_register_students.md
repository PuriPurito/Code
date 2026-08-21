# Схема: wtv_dn_register_students.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID | ✅ |  |
| register_id | integer | ms_tools.get_const('vedomost') | ✅ | dn_registers |
| code | string | const=c_code |  |  |
| discipl_id | integer | ms_tools.get_const('disciplina') |  | dn_disciplines |
| lector_id | integer | const=c_lector |  | lectors |
| date_event | date |  |  |  |
| contr_form_id | integer |  |  | dn_control_forms |
| student_id | integer | ms_tools.get_const('siwbxij6vi') | ✅ | dn_students |
| person_fullname | string | const=xwyxbks6xk |  |  |
