# Схема: wtv_assessment_appraise_abridged.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| code | string | const=c_code |  |  |
| assessment_object_type | string | const=okpdszkyxr |  |  |
| always_check_custom_experts | bool |  |  |  |
| participant_id | string |  |  | common.assessment_appraise_participants |
| is_custom_experts | bool |  |  |  |
| impersonator_id | integer |  |  | collaborators |
| impersonator_fullname | string |  |  |  |
| face_person_id | integer |  |  | collaborators |
| face_person_fullname | string |  |  |  |
| from_date | date |  |  |  |
| to_date | date |  |  |  |
| data_web_template_id | integer |  |  | custom_web_templates |
| css_template_id | integer |  |  | custom_web_templates |
| xml_template_id | integer |  |  | custom_web_templates |
