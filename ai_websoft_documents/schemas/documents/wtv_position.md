# Схема: wtv_position.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| status | string | const=c_status |  | common.position_statuses |
| org_id | integer | const=c_org |  | orgs |
| parent_object_id | integer | const=c_subd |  | subdivisions |
| basic_collaborator_id | integer | const=c_coll |  | collaborators |
| basic_rate | integer | const=p7kssz5oz1 |  |  |
| is_boss | bool | const=bi5usg4iby |  |  |
| position_date | date | const=datavstupleniya |  |  |
| cost_month | real | const=mesyachnayastavka |  |  |
| currency | string | const=c_currency_type |  | lists.currency_types |
| competence_profile_id | integer | const=ass_competence_profile |  | DefaultDb.GetOptCatalog( 'competence_profiles' ) |
| competence_profiles | string | const=ass_competence_profiles |  |  |
| id | integer | const=ass_competence_profile |  | competence_profiles |
| competence_codes | string | const=3noejxhnb0 |  |  |
| kpi_profile_id | integer | const=ass_kpi_profile |  | XQuery('kpi_profiles') |
| id | integer | const=ass_kpi_profile |  | kpi_profiles |
| period_type_id | string |  |  | common.perioditys |
| bonus_profile_id | integer | const=629saq8h6f |  | bonus_profiles |
| knowledge_profile_id | integer | const=syqx4l4uo1 |  | knowledge_profiles |
| position_common_id | integer | const=c_position_common |  | position_commons |
| position_common_level_id | integer | const=voqs5lcnua |  |  |
| position_common_level_name | string | const=1n88mvek1x |  |  |
| position_family_id | integer | const=re7n9mti11 |  | position_familys |
| position_finish_date | date | const=datazaversheniya_1 |  |  |
| is_position_finished | bool | const=deystvienaznach |  |  |
| position_assignment_type | string | const=tipnaznacheniya |  | common.position_assignment_types |
| position_appointment_type_id | integer | const=tipnaznacheniya |  | appointment_types |
| staff_position_id | integer | Позиция штатного рассписания |  | staff_positions |
| desc | string | const=c_desc |  |  |
| comment | string | const=vkpb_comment |  |  |
| doc_info | doc_info_base |  |  |  |
| basic_collaborator_id | integer |  |  |  |
| org_id | integer |  |  | orgs |
| name | string |  |  |  |
| parent_object_id | integer |  |  |  |
| drop_pers_hier_entry | bool |  |  |  |
