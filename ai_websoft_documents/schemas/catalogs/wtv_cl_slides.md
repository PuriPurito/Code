# Схема: wtv_cl_slides.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID | ✅ |  |
| code | string | const=c_code |  |  |
| name | string | const=c_name |  |  |
| cl_course_id | integer | const=kurskurslab |  | cl_courses |
| cl_module_id | integer | const=modulcourselab |  | cl_modules |
| master_id | integer | const=slaydhozyain |  | cl_slides |
| master_code | string | const=kodslaydahozyai |  |  |
| is_master | bool | const=yavlyaetsyahozyain |  |  |
| is_splash | bool | const=yavlyaetsyavyskak |  |  |
| sid | integer | SID |  |  |
| flag_locked | string | const=zablokirovano |  |  |
| greedy_person_id | integer | const=vladelecresursa |  | collaborators |
| greedy_person_fullname | string | const=imyavladelca |  |  |
| flag_completion | bool | const=slaydzavershen |  |  |
| approval_status | integer | const=sostoyanierazra |  | common.cl_approval_states |
| stamp | integer | Stamp |  |  |
| modification_date | date | const=n6k2nxsxx4 |  |  |
| app_instance_id | string | const=8qorpy64yd |  |  |
