<%
function ToStr(anyValue)
{
	if (IsEmptyValue(anyValue))
	{
		return "";
	}
	return "" + anyValue;
}
function GetCustomElem(teObj, sKey)
{
	var xmlField;
	xmlField = teObj.custom_elems.GetOptChildByKey(sKey);
	if (xmlField == undefined)
	{
		return "";
	}
	return ToStr(xmlField.value.Value);
}
// Проверяем прохождение опроса через event_result - уникальную запись
// "человек + мероприятие", куда системное событие AFL_DKU_FEEDBACK_POLL_EVENT
// проставляет флаг poll_completed при сохранении результата.
function IsFeedbackPollCompleted(sEventId, sPersonId)
{
	var bResult = false;
	try
	{
		if (!IsEmptyValue(sEventId) && !IsEmptyValue(sPersonId))
		{
			var aResults = tools.xquery("for $elem in event_results where $elem/person_id = " + OptInt(sPersonId, 0) + " and $elem/event_id = " + OptInt(sEventId, 0) + " return $elem");
			var oResultItem = ArrayOptFirstElem(aResults);
			if (oResultItem != undefined)
			{
				var docResultFull = tools.open_doc(OptInt(oResultItem.id));
				if (docResultFull != undefined)
				{
					var xmlDoneFlag = docResultFull.TopElem.custom_elems.GetOptChildByKey("poll_completed");
					if (xmlDoneFlag != undefined)
					{
						bResult = tools_web.is_true(xmlDoneFlag.value.Value);
					}
				}
			}
		}
	}
	catch (e)
	{
		bResult = false;
	}
	return bResult;
}
// Свитч по notification_ID, с фолбэком на notification_code, если ID пуст
function GetButtonLabelByNotification(sNotificationId, sNotificationCode, sObjectId, sPersonId)
{
	var sKey;
	sKey = IsEmptyValue(sNotificationId) ? sNotificationCode : sNotificationId;
	switch (sKey)
	{
		case "7659814405287613740":  // afl_dku_feedback - по notification_ID (decimal)
		case "0x6A4D209E4096952C":   // afl_dku_feedback - по notification_ID (hex)
		case "afl_dku_feedback":     // afl_dku_feedback - по notification_code, если ID не задан
			// если опрос уже пройден (флаг poll_completed на соответствующей
			// event_result) - кнопка не нужна, пустой label скроет её
			if (IsFeedbackPollCompleted(sObjectId, sPersonId))
			{
				return "";
			}
			return "Пройти опрос";
		case "7669800375700497692":  // afl_education_request_to_dku_responsible_notification - по notification_ID (decimal)
		case "0x6A709ACE2BC9251C":   // afl_education_request_to_dku_responsible_notification - по notification_ID (hex)
		case "afl_education_request_to_dku_responsible_notification": // по notification_code, если ID не задан
			return "Перейти к заявке";
		case "7656771390584434792":  // afl_education_request_to_boss - по notification_ID (decimal)
		case "0x6A4251032E28B068":   // afl_education_request_to_boss - по notification_ID (hex)
		case "afl_education_request_to_boss": // по notification_code, если ID не задан
			return "Перейти к заявке";
		case "7669817195863274133":  // afl_education_request_to_sub_responsible - по notification_ID (decimal)
		case "0x6A70AA1A6B9CF295":   // afl_education_request_to_sub_responsible - по notification_ID (hex)
		case "afl_education_request_to_sub_responsible": // по notification_code, если ID не задан
			return "Перейти к заявке";
		case "7669820497071731235":  // afl_education_request_to_boss_dku - по notification_ID (decimal)
		case "0x6A70AD1B0AF87223":   // afl_education_request_to_boss_dku - по notification_ID (hex)
		case "afl_education_request_to_boss_dku": // по notification_code, если ID не задан
			return "Перейти к заявке";
		case "7669824411404717373":  // afl_education_request_rejected - по notification_ID (decimal)
		case "0x6A70B0AA6B65CD3D":   // afl_education_request_rejected - по notification_ID (hex)
		case "afl_education_request_rejected": // по notification_code, если ID не задан
			return "Перейти к заявке";
		case "7670081271547664662":  // afl_education_request_to_dku_admin - по notification_ID (decimal)
		case "0x6A719A4754F99916":   // afl_education_request_to_dku_admin - по notification_ID (hex)
		case "afl_education_request_to_dku_admin": // по notification_code, если ID не задан
			return "Перейти к заявке";
		case "7670084613306700826":  // afl_education_request_completed - по notification_ID (decimal)
		case "0x6A719D516555D41A":   // afl_education_request_completed - по notification_ID (hex)
		case "afl_education_request_completed": // по notification_code, если ID не задан
			return "Перейти к заявке";
		case "7670101830779174899":  // afl_education_request_rejected_by_responsible - по notification_ID (decimal)
		case "0x6A71ACFA26AA7FF3":   // afl_education_request_rejected_by_responsible - по notification_ID (hex)
		case "afl_education_request_rejected_by_responsible": // по notification_code, если ID не задан
			return "Перейти к заявке";
		case "7670105835183273909":  // afl_education_request_canceled_by_boss_dku - по notification_ID (decimal)
		case "0x6A71B09E7FBFF7B5":   // afl_education_request_canceled_by_boss_dku - по notification_ID (hex)
		case "afl_education_request_canceled_by_boss_dku": // по notification_code, если ID не задан
			return "Перейти к заявке";
		case "7670108402369318825":  // afl_education_request_approved_by_boss_dku - по notification_ID (decimal)
		case "0x6A71B2F437F64FA9":   // afl_education_request_approved_by_boss_dku - по notification_ID (hex)
		case "afl_education_request_approved_by_boss_dku": // по notification_code, если ID не задан
			return "Перейти к заявке";
		// Ксюша 28.09.2026
		// Кейсы для обработки уведомлений на годовой бюджет
		case "7669850961368321774":  // afl_annual_campaign_start - по notification_ID (decimal)
		case "0x6A70C8D0108C0EEE":  // afl_annual_campaign_start - по notification_ID (hex)
		case "afl_annual_campaign_start": // по notification_code, если ID не задан
		case "7670889009197557522":  // afl_annual_campaign_rp - по notification_ID (decimal)
		case "0x6A7478E968AB2712":  // afl_annual_campaign_rp - по notification_ID (hex)
		case "afl_annual_campaign_rp": // по notification_code, если ID не задан
		case "7670889686737999912":  // afl_annual_campaign_sp - по notification_ID (decimal)
		case "0x6A7479872939D828":  // afl_annual_campaign_sp - по notification_ID (hex)
		case "afl_annual_campaign_sp": // по notification_code, если ID не задан
		case "7670890279512015839":  // afl_annual_campaign_end - по notification_ID (decimal)
		case "0x6A747A112D4F83DF":  // afl_annual_campaign_end - по notification_ID (hex)
		case "afl_annual_campaign_end": // по notification_code, если ID не задан
			return "Перейти к заявке";
		default:
			return "";
	}
}
function GetUniversalButtonLabel(sTaskId)
{
	var docTask;
	var teTask;
	var sNotificationId;
	var sNotificationCode;
	var sObjectId;
	var sPersonId;
	docTask = tools.open_doc(sTaskId);
	if (docTask == undefined)
	{
		return "";
	}
	teTask = docTask.TopElem;
	sNotificationId = GetCustomElem(teTask, "notification_ID");
	sNotificationCode = GetCustomElem(teTask, "notification_code");
	sObjectId = GetCustomElem(teTask, "sec_notification_object");
	// получатель задачи хранится в executor_id (подтверждено диагностикой -
	// не person_id и не object_id, как предполагалось изначально)
	sPersonId = ToStr(teTask.executor_id);
	return GetButtonLabelByNotification(sNotificationId, sNotificationCode, sObjectId, sPersonId);
}
try
{
	var sTaskId;
	var sLabel;
	sTaskId = ToStr(Request.Form.task_id);
	sLabel = "";
	if (!IsEmptyValue(sTaskId))
	{
		sLabel = GetUniversalButtonLabel(sTaskId);
	}
	Response.Write(tools.object_to_text({ status: 200, label: sLabel }, "json"));
}
catch (e)
{
	Response.Write(tools.object_to_text({ status: 500, msg: String(e) }, "json"));
}
%>