# Схема: wtv_compound_program_education_methods.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID | ✅ |  |
| program_id | integer | const=z8hssxjy56 |  |  |
| parent_progpam_id | integer | const=z8hssxjy56 |  |  |
| position | integer | const=c_position |  |  |
| compound_program_id | integer | const=c_compound_prog | ✅ | compound_programs |
| name | string | const=g9ifvkchii |  |  |
| education_method_id | integer | const=c_edu_method | ✅ | education_methods |
| education_method_name | string | const=hdnjnik42z |  |  |
| cost | real | const=c_cost |  |  |
| currency | string | const=c_currency_type |  | lists.currency_types |
| cost_type | string | const=yznb9slir9 |  | common.cost_types |
| duration | integer | const=im8225wmup |  |  |
| person_num | integer | const=vocwacfpan |  |  |
| type | string | const=8859kcc2xb |  | common.education_method_types |
| object_type | string | const=c_type |  |  |
| object_id | integer | const=c_object |  | DefaultDb.GetOptCatalog( object_type + 's' ) |
| object_name | string | const=c_object_name |  |  |
| object_code | string | const=oemfe2rslq |  |  |
| is_open | bool | const=6242t2gokd |  |  |
| duration_days | integer | const=bpe5nh62rx |  |  |
