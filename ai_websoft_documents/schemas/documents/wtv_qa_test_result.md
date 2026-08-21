# Схема: wtv_qa_test_result.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID | ✅ |  |
| name | string | const=c_name |  |  |
| test_id | integer | ##'Тест программного кода'## |  | qa_tests |
| test_set_id | integer | ##'Набор тестов программного кода'## |  | qa_test_sets |
| test_paramset_id | integer | ##'Набор параметров тестов программного кода'## |  | qa_test_paramsets |
| start_date | date | const=c_start_date |  |  |
| finish_date | date | const=c_finish_date |  |  |
| work_status | string | const=statusraboty |  | common.qa_test_result_completion_states |
| finish_status | string | const=k6n55hdzx7 |  | common.qa_test_result_states |
| error_code | integer | ##'Код ошибки'## |  |  |
| duration | integer | const=prodolzhitelnos |  |  |
| timestamp | integer |  |  |  |
| datetime | date | const=39uh306q64 |  |  |
| is_check | bool | const=emk2b9q7zf |  |  |
| is_failed | bool | const=neproydeno |  |  |
| result_value | string | const=vsb_actual_result |  |  |
| template_value | string | const=vsb_expected_result |  |  |
| text | string | const=7zen195nnp |  |  |
| doc_info | doc_info_base | const=dseglc23jx |  |  |
