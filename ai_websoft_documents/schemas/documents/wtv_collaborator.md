# Схема: wtv_collaborator.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID |  |  |
| code | string | const=c_code |  |  |
| eid | string | const=491til8oh6 |  |  |
| name | string | const=c_fio |  |  |
| snils | string | ##'Снилс'## |  |  |
| position_id | integer | const=c_position |  | positions |
| position_name | string | const=g89skt4yui |  |  |
| position_parent_id | integer | const=c_subd |  | subdivisions |
| position_parent_name | string | const=uf_depart_name |  |  |
| org_id | integer | const=c_org |  | orgs |
| org_name | string | const=rne3a8laso |  |  |
| change_password | bool | const=7qjrq56302 |  |  |
| is_candidate | bool | const=4pft7z99y2 |  |  |
| is_outstaff | bool | const=yavlyaetsyavremen |  |  |
| candidate_status_type_id | integer | const=statuskandidata |  | candidate_status_types |
| candidate_id | integer | const=c_candidate |  |  |
| is_dismiss | bool | const=3i9j58qey7 |  |  |
| hire_date | date | const=9zrvsdt5a5 |  |  |
| dismiss_date | date | const=c_dismiss_date |  |  |
| position_date | date | const=datavstupleniya |  |  |
| in_request_black_list | bool | const=xmccqf5217 |  |  |
| request_black_list_data | date | Дата включения в &quot;черный список&quot; |  |  |
| request_black_list_comment | string | Комментарий включения в &quot;черный список&quot; |  |  |
| place_id | integer | const=c_place |  | places |
| region_id | integer | const=vrb_region |  | regions |
| cost_center_id | integer | const=c_position |  | cost_centers |
| provider_legal_id | string |  |  |  |
| lng_id | string | const=p6rt8epp12 |  | tools.get_list_lngs() |
| location_id | string | const=2oe3g1tyyn |  | lists.locations |
| pict_url | string | const=y4e57allmv |  |  |
| access_time_start | string | const=bm965r0291 |  |  |
| access_time_end | string | const=q1yftwoiv2 |  |  |
| desc | string | const=c_desc |  |  |
| disp_empty_fields | bool | const=mtm52m1zqm |  |  |
| disp_personal_info | bool | const=0qnl7eydha |  |  |
| disp_login | bool | const=rxrkhv5hek |  |  |
| disp_sex | bool | const=gfanofs6yk |  |  |
| disp_desc | bool | const=smqp63dy5i |  |  |
| disp_files | bool | const=qmnh0odwww |  |  |
| disp_birthdate | bool | const=otobrazhatdatur |  |  |
| disp_birthdate_year | bool | const=cx72imemi1 |  |  |
| disp_resume | bool | const=dpf606w80g |  |  |
| allow_personal_chat_request | bool | const=razreshitprigla |  |  |
| personal_chat_confirmation_required | bool | const=dlyaobsheniyavper |  |  |
| development_potential_id | integer | const=potencialrazvi_9_9 |  | development_potentials |
| efficiency_estimation_id | integer | const=ocenkaeffektiv |  | efficiency_estimations |
| web_enter_date | date | const=zvitm42m3d |  |  |
| category_id | string | const=4egocnh7uc |  | categorys |
| id | string | ID |  |  |
| position_id | integer | const=c_position |  | positions |
| position_name | string | const=g89skt4yui |  |  |
| position_parent_id | integer | const=c_subd |  | subdivisions |
| position_parent_name | string | const=uf_depart_name |  |  |
| org_id | integer | const=c_org |  | orgs |
| org_name | string | const=rne3a8laso |  |  |
| date | date | const=vdb_aim_date |  |  |
| comment | string | const=vkpb_comment |  |  |
| start_date | date | const=c_start_date |  |  |
| finish_date | date | const=c_finish_date |  |  |
| working_days | integer | const=obsheevremyaotra |  |  |
| working_hours | integer | const=obsheevremyaotra_1 |  |  |
| rate | real | const=p7kssz5oz1 |  |  |
| rate_percent | real | const=procentstavki |  |  |
| current_state | string | const=uf_current_state |  |  |
| history_states | string | const=sxjj611bxc |  |  |
| id | string | ID |  |  |
| state_id | string | const=vppb_state |  | lists.person_states |
| start_date | date | const=c_start_date |  |  |
| finish_date | date | const=c_finish_date |  |  |
| object_id | integer | const=c_object |  | DefaultDb.GetOptCatalog( object_type + 's' ) |
| object_type | string | const=c_object_type |  | common.exchange_object_types |
| event_code | string | const=c_personnel_event_code |  |  |
| comment | string | const=vkpb_comment |  |  |
| personal_config | string | const=2g14kk8bwg |  |  |
| avatar_filename | string | const=sciiol20zt |  |  |
| nick | string | const=psevdonim |  |  |
| status | string | const=c_status |  |  |
| default_info_type | string | const=vfb_how_show_name |  | common.forum_person_info_types |
| doc_info | doc_info_base |  |  |  |
| last_import_date | date | const=3ycf812a8n |  |  |
| custom_params | string | const=j2p5xrkn4k |  |  |
| custom_param | string | const=sttkrezysm |  |  |
| name | string | const=c_name |  |  |
| value | string | const=c_value |  |  |
| level_id | integer | ##'Уровень компетентности'## |  | levels |
| grade_id | integer | const=hadn53sf2d |  | grades |
| salary | real | const=kuw4uwwgsl |  |  |
| currency_type_id | string | const=c_currency_type |  | lists.currency_types |
| payment_period | string | Период выплаты |  | common.perioditys |
| comment | string | const=vkpb_comment |  |  |
| payment_types | string | Возможные типы выплат |  |  |
| payment_type_id | integer | Тип выплат |  | DefaultDb.GetOptCatalog( 'payment_types' ) |
| max_value | real | const=ywcib7im60 |  |  |
| comment | string | const=vkpb_comment |  |  |
| gdpr | bool | GDPR |  |  |
| consent_kedo | bool | ##'Согласие на КЭДО'## |  |  |
| consent_kedo_date | date | ##'Дата согласия на КЭДО'## |  |  |
| is_preview | bool |  |  |  |
| is_admin | bool |  |  |  |
| user_id | integer |  |  |  |
| position_array | variant |  |  |  |
| position_doc_ref | variant |  |  |  |
| never_saved | bool |  |  |  |
| knowledge_classifier_id | integer | const=vkpb_classifier |  |  |
| knowledge_sort_type_id | string | const=szmrdieib8 |  |  |
| disp_access | bool |  |  |  |
| disp_auth | bool |  |  |  |
| drop_pers_hier_entry | bool |  |  |  |
| last_data | string | const=sohranennyedan |  |  |
| web_banned | bool | const=2ufe7a4a63 |  |  |
| login | string | const=uf_login |  |  |
| password | string | const=veb_pass |  |  |
| access_role | string | const=c8ou6fmrlw |  |  |
| is_arm_admin | bool | const=9z3k34q3kt |  |  |
| is_application_admin | bool | ##'Является пользователем приложений'## |  |  |
| is_content_admin | bool | ##'Является редактором контента'## |  |  |
| in_request_black_list | bool | const=xmccqf5217 |  |  |
| position_id | integer | const=c_position |  |  |
| pict_url | string | const=y4e57allmv |  |  |
| avatar_filename | string | const=sciiol20zt |  |  |
| rows | variant |  |  |  |
| row_disp_elem | string |  |  |  |
| row_list_field | string |  |  |  |
| row_key_field | string |  |  |  |
| list_variant | variant |  |  |  |
