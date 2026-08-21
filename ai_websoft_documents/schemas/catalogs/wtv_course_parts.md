# Схема: wtv_course_parts.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID | ✅ |  |
| code | string | const=cz4823o9d1 | ✅ |  |
| name | string | const=a74bhtte55 | ✅ |  |
| course_id | integer | const=c_course | ✅ | courses |
| part_code | string |  |  |  |
| parent_part_code | string | const=6xrbiv2oyk |  |  |
| part_name | string |  |  |  |
| part_type | string | const=m7n2fhzngz | ✅ | common.course_part_types |
| course_module_id | integer | const=c_course_module |  | course_modules |
| assessment_id | integer | const=c_test |  | assessments |
| activity_id | integer | const=uchebnayaaktivno |  | activitys |
| object_id | integer |  |  |  |
