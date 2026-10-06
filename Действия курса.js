/**
 * @function GetCourseLearningActions
 * @memberof Websoft.WT.Learning
 * @description Получение списка действий курса.
 * @param {bigint} iPersonID - ID сотрудника.
 * @param {bigint} iCourseID - ID курса.
 * @param {string} sRequestTypeCode Код типа заявки.
 * @returns {ReturnPortalActions}
*/
function GetCourseLearningActions( iPersonID, iCourseID, sRequestTypeCode )
{
	var oRes = tools.get_code_library_result_object();
	oRes.actions = [];

	try
	{
		iPersonID = Int( iPersonID );
	}
	catch ( err )
	{
		oRes.error = 501; // Invalid param
		oRes.errorText = "{ text: 'Invalid param iPersonID.', param_name: 'iPersonID' }";
		return oRes;
	}
	try
	{
		iCourseID = Int( iCourseID );
	}
	catch ( err )
	{
		oRes.error = 501; // Invalid param
		oRes.errorText = "{ text: 'Invalid param iCourseID.', param_name: 'iCourseID' }";
		return oRes;
	}

	var teCourse = OpenDoc( UrlFromDocID( iCourseID ) ).TopElem;
	var bScheduleStart = teCourse.schedule.check_week_schedule();
	var bCheckAccessOnEducPlan = global_settings.settings.course_access_on_education_plan.Value;

	var isYourselfStart = teCourse.yourself_start;

	if (bCheckAccessOnEducPlan)
	{
		var xarrEducationPlans = tools.xquery("for $elem in education_plans where $elem/person_id = " + iPersonID + " and ($elem/state_id = 0 or $elem/state_id = 1) order by $elem/create_date descending return $elem");
		if (ArrayOptFirstElem(xarrEducationPlans) == undefined)
		{
			bCheckAccessOnEducPlan = false;
		}

		for (catEducPlan in xarrEducationPlans)
		{
			docEducPlan = tools.open_doc(catEducPlan.PrimaryKey);

			oProgram = ArrayOptFind(docEducPlan.TopElem.programs, "This.type == 'course' && This.object_id == iCourseID");
			if (oProgram != undefined)
			{
				bCheckAccessOnEducPlan = true;
				if (ArrayOptFirstElem(oProgram.completed_parent_programs) == undefined)
				{
					isYourselfStart = true;
					break;
				}

				for (_compProgram in oProgram.completed_parent_programs) 
				{
					oParentProgram = ArrayOptFind(docEducPlan.TopElem.programs, "This.id == _compProgram.program_id");
					
					if (oParentProgram.state_id == 4)
					{
						isYourselfStart = true;
					}
					else
					{
						isYourselfStart = false;
						break;
					}
				}
			}
			else
			{
				bCheckAccessOnEducPlan = false;
				continue;
			}
		}
	}

	catLearningFirstElem = ArrayOptFirstElem( XQuery( "for $elem in active_learnings where $elem/person_id = " + iPersonID + " and $elem/course_id = " + iCourseID + " return $elem/Fields('id','state_id','start_learning_date')" ) );
	alert( "CourseActions: person=" + iPersonID + " course=" + iCourseID + " yourself_start=" + teCourse.yourself_start + " isYourselfStart=" + isYourselfStart + " bScheduleStart=" + bScheduleStart + " bCheckAccessOnEducPlan=" + bCheckAccessOnEducPlan + " learning_state=" + ( catLearningFirstElem != undefined ? catLearningFirstElem.state_id : "none" ) );
	if ( catLearningFirstElem != undefined )
	{
		//if( catLearningFirstElem.state_id != 2 && catLearningFirstElem.state_id != 4 catLearningFirstElem.state_id == 0)
		if(catLearningFirstElem.state_id == 0 || (catLearningFirstElem.state_id == 1 && teCourse.yourself_start))
		{
			if ( bScheduleStart && ((bCheckAccessOnEducPlan && isYourselfStart) || !bCheckAccessOnEducPlan) && ( ! catLearningFirstElem.start_learning_date.HasValue || catLearningFirstElem.start_learning_date <= Date() ) )
			{
				oRes.actions.push({
					"id": "continue_learning",
					"title": ( catLearningFirstElem.state_id == 0 ? i18n.t( 'nachat' ) : i18n.t( 'prodolzhit' ) ),
					//"title": (i18n.t( 'nachat' )),
					"action_id": "continue_learning"
				});
			}
		}
		if ( ( teCourse.settings.enable_user_completion && ( ArrayOptFind( teCourse.parts, "This.is_mandatory" ) == undefined || teCourse.finish_without_mastery_score ) ) || catLearningFirstElem.state_id == 2 || catLearningFirstElem.state_id == 4 || ( tools_web.is_true( teCourse.OptChild( "ignore_failed_for_finish" ) ) && catLearningFirstElem.state_id == 3 ) )
		{
			var bMandatoryResponse = false;
			if ( teCourse.mandatory_fill_response && teCourse.default_response_type_id.HasValue )
			{
				var xarrResponse = XQuery( "for $elem in responses where $elem/object_id = " + iCourseID + " and $elem/person_id = " + iPersonID + " return $elem/Fields('id')" );
				bMandatoryResponse = ArrayOptFirstElem( xarrResponse ) == undefined;
			}
			if ( ! bMandatoryResponse )
			{
				oRes.actions.push({
					"id": "finish_learning",
					"title": i18n.t( 'zavershitobuchen' ),
					"action_id": "finish_learning"
				});
			}
		}
	}
	else
	{
		if ( isYourselfStart )
		{
			if ( bScheduleStart )
			{
				oRes.actions.push({
					"id": "start_learning",
					"title": i18n.t( 'nachat' ),
					"action_id": "start_learning"
				});
			}
		}
		else if ( !bCheckAccessOnEducPlan && teCourse.status != "secret" && teCourse.status != "archive" )
		{
			catRequestType = ArrayOptFirstElem( XQuery( "for $elem in request_types where $elem/object_type = 'course' and $elem/code = " + XQueryLiteral( sRequestTypeCode ) + " return $elem/Fields('id')" ) );
			if ( catRequestType != undefined )
			{
				if ( ArrayOptFirstElem( XQuery( "for $elem in requests where $elem/status_id = 'active' and $elem/person_id = " + iPersonID + " and $elem/object_id = " + iCourseID + " and $elem/request_type_id = " + catRequestType.id + " return $elem/Fields('id')" ) ) == undefined )
				{
					oRes.actions.push({
						"id": "create_request",
						"title": i18n.t( 'sozdatzayavku' ),
						"action_id": "create_request"
					});
				}
			}
		}
	}

	return oRes;
}


//oLibRes = tools.call_code_library_method( "libLearning", "GetCourseLearningActions", [ curUserID, curObjectID, sRequestTypeCode ] );
oLibRes = GetCourseLearningActions(curUserID, curObjectID, sRequestTypeCode);
ERROR = oLibRes.error;
MESSAGE = tools.get_code_library_error_message( oLibRes, Env );
RESULT = oLibRes.actions;
if(SORT.FIELD != null && SORT.FIELD != undefined && SORT.FIELD != "" )
	RESULT = ArraySort(RESULT, SORT.FIELD, ((SORT.DIRECTION == "DESC") ? "-" : "+"));