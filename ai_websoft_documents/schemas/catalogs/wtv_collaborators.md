# Схема: wtv_collaborators.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID | ✅ |  |
| code | string | const=c_code | ✅ |  |
| fullname | string | const=c_fio | ✅ |  |
| login | string | const=uf_login | ✅ |  |
| short_login | string | const=jfxk5u1olo | ✅ |  |
| lowercase_login | string | const=n8ew1l6apy | ✅ |  |
| email | string | Email | ✅ |  |
| phone | string | const=uf_phone |  |  |
| mobile_phone | string | const=emoqzexw7p |  |  |
| birth_date | date | const=vpb_birthday |  |  |
| sex | string | const=vpb_sex |  |  |
| pict_url | string | const=y4e57allmv |  |  |
| position_id | integer | const=c_position | ✅ | positions |
| position_name | string | const=g89skt4yui | ✅ |  |
| position_parent_id | integer | const=c_subd | ✅ | subdivisions |
| position_parent_name | string | const=uf_depart_name | ✅ |  |
| org_id | integer | const=c_org | ✅ | orgs |
| org_name | string | const=rne3a8laso | ✅ |  |
| place_id | integer | const=c_place |  | places |
| region_id | integer | const=vrb_region |  | regions |
| category_id | string | const=4egocnh7uc |  | categorys |
| web_banned | bool | const=3mtgw4ki6a |  |  |
| is_arm_admin | bool | const=9z3k34q3kt |  |  |
| is_content_admin | bool | Является редактором контента |  |  |
| is_application_admin | bool | Является пользователем приложений |  |  |
| role_id | string | const=c_role |  | access_roles |
| is_candidate | bool | const=4pft7z99y2 |  |  |
| candidate_status_type_id | integer | const=statuskandidata |  | candidate_status_types |
| candidate_id | integer | const=c_candidate |  |  |
| is_outstaff | bool | const=yavlyaetsyavremen |  |  |
| is_dismiss | bool | const=3i9j58qey7 |  |  |
| position_date | date | const=datavstupleniya |  |  |
| hire_date | date | const=9zrvsdt5a5 | ✅ |  |
| dismiss_date | date | const=c_dismiss_date |  |  |
| in_request_black_list | bool | const=xmccqf5217 |  |  |
| allow_personal_chat_request | bool | const=razreshitprigla |  |  |
| level_id | integer | ##'Уровень компетентности'## |  | levels |
| grade_id | integer | const=hadn53sf2d |  | grades |
| knowledge_parts | string | const=vkpb_knowledge_parts_title |  |  |
| tags | string | ##'ID тегов'## |  |  |
| experts | string | const=vkpb_experts |  |  |
| person_object_profile_id | integer |  | ✅ | person_object_profiles |
| current_state | string | const=uf_current_state | ✅ |  |
| next_state_date | date | ##'Дата следующего изменения статуса сотрудника'## | ✅ |  |
| development_potential_id | integer | const=potencialrazvi_9 | ✅ | development_potentials |
| efficiency_estimation_id | integer | const=ocenkaeffektiv | ✅ | efficiency_estimations |
| consent_kedo | bool | ##'Согласие на КЭДО'## |  |  |
| consent_kedo_date | date | ##'Дата согласия на КЭДО'## |  |  |
| provider_legal_id | string | ##'Код юридического лица'## |  |  |
| snils | string | ##'Снилс'## |  |  |
| cost_center_id | integer | const=c_cost_center | ✅ | cost_centers |
| disp_birthdate | bool | const=otobrazhatdatur |  |  |
| disp_birthdate_year | bool | const=cx72imemi1 |  |  |
| modification_date | date | const=n6k2nxsxx4 | ✅ |  |
| app_instance_id | string | const=8qorpy64yd | ✅ |  |
