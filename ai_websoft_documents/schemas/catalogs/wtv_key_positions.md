# Схема: wtv_key_positions.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID | ✅ |  |
| code | string | const=c_code | ✅ |  |
| name | string | const=c_name | ✅ |  |
| position_id | integer | const=c_position | ✅ | positions |
| position_name | string | const=g89skt4yui | ✅ |  |
| person_id | integer | const=c_coll | ✅ | collaborators |
| person_fullname | string | const=lhbyv18qkm | ✅ |  |
| person_code | string | const=kodsotrudnika | ✅ |  |
| budget_period_id | integer | const=c_budget_period | ✅ | budget_periods |
| risk_perspective_id | integer | const=urovenriska | ✅ | risk_perspectives |
| risk_levels | string | const=stepeniriska |  |  |
| key_position_threat_id | integer | const=ugrozaklyuchevoy | ✅ | key_position_threats |
| career_reserve_type_id | integer | const=tipkadrovogore | ✅ | career_reserve_types |
| status | string | const=c_status | ✅ | common.key_position_status_types |
| is_open | bool | const=dostupadlyapree | ✅ |  |
| modification_date | date | const=n6k2nxsxx4 | ✅ |  |
| app_instance_id | string | const=8qorpy64yd | ✅ |  |
| role_id | integer | const=4egocnh7uc | ✅ | roles |
