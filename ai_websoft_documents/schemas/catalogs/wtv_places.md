# Схема: wtv_places.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID | ✅ |  |
| code | string | const=c_code |  |  |
| name | string | const=c_name | ✅ |  |
| parent_id | integer | const=gth4chds1g | ✅ | places |
| region_id | integer | const=vrb_region |  | regions |
| timezone_id | integer | 'Временные зоны' |  | common.timezones |
| modification_date | date | const=n6k2nxsxx4 |  |  |
| app_instance_id | string | const=8qorpy64yd |  |  |
