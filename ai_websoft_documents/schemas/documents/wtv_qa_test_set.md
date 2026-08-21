# Схема: wtv_qa_test_set.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| status | string | const=c_status |  | common.qa_test_states |
| id | string |  |  |  |
| test_id | integer | ##'Тест программного кода'## |  | qa_tests |
| paramset_id | integer | ##'Набор параметров'## |  | qa_test_paramsets |
| desc | string | const=c_desc |  |  |
| comment | string | const=vkpb_comment |  |  |
| doc_info | doc_info_base | const=dseglc23jx |  |  |
| role_id | integer | const=4egocnh7uc |  | roles |
