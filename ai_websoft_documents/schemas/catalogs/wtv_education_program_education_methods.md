# Схема: wtv_education_program_education_methods.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID | ✅ |  |
| education_program_id | integer | const=c_edu_prog | ✅ | education_programs |
| code | string | const=c_code |  |  |
| name | string | const=c_name |  |  |
| education_method_id | integer | const=c_edu_method | ✅ | education_methods |
| education_method_name | string | const=hdnjnik42z |  |  |
| cost | real | const=c_cost |  |  |
| currency | string | const=c_currency_type |  | lists.currency_types |
| cost_type | string | const=sy59gro7j9 |  | common.cost_types |
| duration | integer | const=im8225wmup |  |  |
| person_num | integer | const=vocwacfpan |  |  |
| type | string | const=8859kcc2xb |  | common.education_method_types |
| is_open | bool | const=6242t2gokd |  |  |
| duration_days | integer | const=bpe5nh62rx |  |  |
