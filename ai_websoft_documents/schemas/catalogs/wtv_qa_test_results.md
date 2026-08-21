# Схема: wtv_qa_test_results.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID | ✅ |  |
| name | string | const=c_name |  |  |
| test_id | integer | ##'Тест программного кода'## | ✅ | qa_tests |
| test_set_id | integer | ##'Набор тестов программного кода'## | ✅ | qa_test_sets |
| test_paramset_id | integer | ##'Набор параметров тестов программного кода'## | ✅ | qa_test_paramsets |
| start_date | date | const=c_start_date | ✅ |  |
| finish_date | date | const=c_finish_date | ✅ |  |
| work_status | string | const=statusraboty | ✅ | common.qa_test_result_completion_states |
| finish_status | string | const=k6n55hdzx7 | ✅ | common.qa_test_result_states |
| error_code | integer | ##'Код ошибки'## | ✅ |  |
| duration | integer | const=prodolzhitelnos | ✅ |  |
| modification_date | date | const=n6k2nxsxx4 | ✅ |  |
| app_instance_id | string | const=8qorpy64yd | ✅ |  |
