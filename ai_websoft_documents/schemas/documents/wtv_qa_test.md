# Схема: wtv_qa_test.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| create_date | date | const=c_create_date |  |  |
| status | string | const=c_status |  | common.qa_test_states |
| type | string | ##'Тип теста'## |  | common.qa_test_types |
| code_library_id | integer | ##'Библиотека програмного кода'## |  | code_librarys |
| lib_name | string | ##'Имя библиотеки кода'## |  |  |
| function_name | string | ##'Имя функции'## |  |  |
| desc | string | const=c_desc |  |  |
| comment | string | const=vkpb_comment |  |  |
| doc_info | doc_info_base | const=dseglc23jx |  |  |
| role_id | integer | const=4egocnh7uc |  | roles |
