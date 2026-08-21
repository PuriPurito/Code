# Схема: wtv_position_family.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| parent_position_family_id | integer | Родительское семейство должностей |  | position_familys |
| subdivision_group_id | integer | const=1akgrp8ook |  | subdivision_groups |
| is_dynamic | bool | const=iqord0ntqc |  |  |
| bonus_profile_id | integer | const=629saq8h6f |  | bonus_profiles |
| competence_profile_id | integer | const=ass_competence_profile |  | competence_profiles |
| competence_profiles | string | const=ass_competence_profiles |  |  |
| id | integer | const=ass_competence_profile |  | competence_profiles |
| kpi_profile_id | integer | const=ass_kpi_profile |  | XQuery('kpi_profiles') |
| id | integer | const=ass_kpi_profile |  | kpi_profiles |
| period_type_id | string |  |  | common.perioditys |
| obligatory | bool | const=7df3q17dhk |  |  |
| desc | string | const=c_desc |  |  |
| comment | string | const=vkpb_comment |  |  |
| doc_info | doc_info_base |  |  |  |
| knowledge_sort_type_id | string | const=szmrdieib8 |  |  |
| knowledge_classifier_id | integer | const=vkpb_classifier |  |  |
