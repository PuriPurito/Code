# Схема: wtv_positions.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID | ✅ |  |
| code | string | const=c_code | ✅ |  |
| name | string | const=c_name | ✅ |  |
| status | string | const=c_status |  | common.position_statuses |
| org_id | integer | const=c_org | ✅ | orgs |
| parent_object_id | integer | const=c_subd | ✅ | subdivisions |
| basic_collaborator_id | integer | const=c_coll | ✅ | collaborators |
| basic_collaborator_fullname | string | const=lhbyv18qkm | ✅ |  |
| basic_rate | integer | const=p7kssz5oz1 |  |  |
| is_boss | bool | const=bi5usg4iby |  |  |
| position_date | date | const=datavstupleniya |  |  |
| position_finish_date | date | const=datazaversheniya_1 |  |  |
| is_position_finished | bool | const=deystvienaznach |  |  |
| position_assignment_type | string | const=tipnaznacheniya |  | common.position_assignment_types |
| position_appointment_type_id | integer | const=tipnaznacheniya |  | appointment_types |
| competence_profile_id | integer | const=ass_competence_profile |  | competence_profiles |
| kpi_profile_id | integer | const=ass_kpi_profile |  | kpi_profiles |
| kpi_profiles_id | integer | const=ass_kpi_profiles |  | kpi_profiles |
| bonus_profile_id | integer | const=629saq8h6f |  | bonus_profiles |
| knowledge_profile_id | integer | const=syqx4l4uo1 |  | knowledge_profiles |
| position_common_id | integer | const=c_position_common |  | position_commons |
| position_family_id | integer | const=re7n9mti11 |  | position_familys |
| staff_position_id | integer | Позиция штатного рассписания | ✅ | staff_positions |
| modification_date | date | const=n6k2nxsxx4 | ✅ |  |
| app_instance_id | string | const=8qorpy64yd | ✅ |  |
