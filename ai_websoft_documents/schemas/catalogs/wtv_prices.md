# Схема: wtv_prices.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID | ✅ |  |
| code | string | const=c_code | ✅ |  |
| name | string | const=c_name | ✅ |  |
| create_date | date |  |  |  |
| state_id | string |  |  | common.successor_status_types |
| start_date | date |  |  |  |
| finish_date | date |  |  |  |
| modification_date | date | const=n6k2nxsxx4 | ✅ |  |
