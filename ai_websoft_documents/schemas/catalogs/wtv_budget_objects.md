# Схема: wtv_budget_objects.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID | ✅ |  |
| budget_id | integer | const=c_budget | ✅ | budgets |
| code | string | const=c_code |  |  |
| name | string | const=c_name |  |  |
| catalog_name | string | const=s5j056rnbt | ✅ | common.exchange_object_types |
| all | bool | const=vc02se4ckx |  |  |
| object_id | integer | const=c_object | ✅ | DefaultDb.GetOptCatalog( catalog_name + 's' ) |
