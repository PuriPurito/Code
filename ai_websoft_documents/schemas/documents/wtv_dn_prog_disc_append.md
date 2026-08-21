# Схема: wtv_dn_prog_disc_append.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| code | string | const=c_code |  |  |
| name | string | const=c_name |  |  |
| program_discipline_id | integer |  |  | dn_program_discipls |
| academ_year_id | integer |  |  | dn_academ_years |
| special_id | integer |  |  | dn_specials |
| specialization_id | integer | const=specializaciya |  | dn_specializations |
| educat_form_id | string |  |  | lists.dn_educat_forms |
| qualification_id | integer | const=c_qualification |  | qualifications |
| doc_info | doc_info_base |  |  |  |
