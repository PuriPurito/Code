var sLogName = "afl_universal_task_button";
EnableLog(sLogName, true);
function AlertLog(log)
{
	var sLog = log;
	var sLogType = ObjectType(log);
	if (DataType(log) == "object" && (sLogType == "JsObject" || sLogType == "JsArray" || sLogType == "XmElem"))
	{
		sLog = tools.object_to_text(log, "json");
	}
	LogEvent(sLogName, sLog);
}
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
// Команда для клиента: переход по ссылке на опрос из o_feedback_poll мероприятия.
// {} если опрос не привязан к мероприятию - кнопка тогда ничего не делает.
function GetFeedbackPollCommand(sEventId)
{
	var docEvent;
	var teEvent;
	var xmlPollField;
	var sPollId;
	var sUrl;
	try
	{
		docEvent = tools.open_doc(sEventId);
		if (docEvent == undefined)
		{
			AlertLog("Мероприятие id=" + sEventId + " не найдено (возможно, удалено)");
			return {};
		}
		teEvent = docEvent.TopElem;
		xmlPollField = teEvent.custom_elems.GetOptChildByKey("o_feedback_poll");
		if (xmlPollField == undefined)
		{
			return {};
		}
		sPollId = ToStr(xmlPollField.value.Value);
		if (IsEmptyValue(sPollId) || sPollId == "0")
		{
			return {};
		}

		// НОВОЕ: session-подход не сработал (Request недоступен в обработчике
		// результатов опроса) - вместо этого помечаем КОНКРЕТНЫЙ event_result
		// этого мероприятия меткой "ожидаю прохождения" прямо сейчас, пока мы
		// точно знаем event_id. Обработчик результата опроса потом выберет
		// именно эту event_result среди нескольких совпавших кандидатов вместо
		// угадывания по датам.
		try
		{
			var aClickEventResults = tools.xquery("for $elem in event_results where $elem/person_id = " + OptInt(curUserID) + " and $elem/event_id = " + OptInt(sEventId) + " return $elem");
			var oClickResultItem = ArrayOptFirstElem(aClickEventResults);
			if (oClickResultItem != undefined)
			{
				var docClickResult = tools.open_doc(OptInt(oClickResultItem.id));
				if (docClickResult != undefined)
				{
					docClickResult.TopElem.custom_elems.ObtainChildByKey("poll_pending_since").value = Date();
					docClickResult.Save();
					AlertLog("Проставлена метка poll_pending_since на event_result=" + String(oClickResultItem.id) + " (event=" + sEventId + ")");
				}
			}
			else
			{
				AlertLog("ПРЕДУПРЕЖДЕНИЕ: не найден event_result для curUserID=" + String(curUserID) + ", event_id=" + sEventId + " - метку поставить не удалось");
			}
		}
		catch (ePending)
		{
			AlertLog("ERROR: не удалось проставить метку poll_pending_since: " + ePending);
		}

		sUrl = UrlAppendPath(global_settings.settings.portal_base_url, "/pplayer2/" + sPollId + "/poll");
		return {
			command: "redirect",
			url: sUrl
		};
	}
	catch (e)
	{
		AlertLog("Ошибка построения команды для мероприятия id=" + sEventId + ": " + e);
		return {};
	}
}
// Команда для клиента: переход на страницу заявки afl_external_learning_request,
// чтобы ответственный ДКУ мог взять её в обработку. sRequestId - id заявки (sec_notification_object задачи).
function GetTakeRequestCommand(sRequestId)
{
	var docRequest;
	var sUrl;
	try
	{
		docRequest = tools.open_doc(sRequestId);
		if (docRequest == undefined)
		{
			AlertLog("Заявка id=" + sRequestId + " не найдена (возможно, удалена)");
			return {};
		}
		sUrl = UrlAppendPath(global_settings.settings.portal_base_url, "/view_doc.html?mode=afl_external_learning_request&object_id=" + sRequestId);
		return {
			command: "redirect",
			url: sUrl
		};
	}
	catch (e)
	{
		AlertLog("Ошибка построения команды для заявки id=" + sRequestId + ": " + e);
		return {};
	}
}
// Ксюша 28.09.2026
// Функция для обработки уведомлений на годовой бюджет
function GetAnnualBudgetRequestCommand(sRequestId)
{
	var docRequest;
	var sUrl;
	try
	{
		docRequest = tools.open_doc(sRequestId);
		if (docRequest == undefined)
		{
			AlertLog("Заявка на годовой бюджет id=" + sRequestId + " не найдена (возможно, удалена)");
			return {};
		}
		sUrl = UrlAppendPath(global_settings.settings.portal_base_url, "/view_doc.html?mode=afl_annual_budget_request&object_id=" + sRequestId);
		return {
			command: "redirect",
			url: sUrl
		};
	}
	catch (e)
	{
		AlertLog("Ошибка построения команды для заявки на годовой бюджет id=" + sRequestId + ": " + e);
		return {};
	}
}
// Единственный свитч по notification_ID/notification_code. Каждый case зовёт свой обработчик,
// который сам решает, какую команду вернуть (redirect и т.д.)
function GetCommandByNotification(sNotificationId, sNotificationCode, sObjectId)
{
	var sKey;
	sKey = IsEmptyValue(sNotificationId) ? sNotificationCode : sNotificationId;
	switch (sKey)
	{
		case "7659814405287613740":  // afl_dku_feedback - по notification_ID (decimal)
		case "0x6A4D209E4096952C":   // afl_dku_feedback - по notification_ID (hex)
		case "afl_dku_feedback":     // afl_dku_feedback - по notification_code, если ID не задан
			return GetFeedbackPollCommand(sObjectId);
		case "7669800375700497692":  // afl_education_request_to_dku_responsible_notification - по notification_ID (decimal)
		case "0x6A709ACE2BC9251C":   // afl_education_request_to_dku_responsible_notification - по notification_ID (hex)
		case "afl_education_request_to_dku_responsible_notification": // по notification_code, если ID не задан
			return GetTakeRequestCommand(sObjectId);
		case "7656771390584434792":  // afl_education_request_to_boss - по notification_ID (decimal)
		case "0x6A4251032E28B068":   // afl_education_request_to_boss - по notification_ID (hex)
		case "afl_education_request_to_boss": // по notification_code, если ID не задан
			return GetTakeRequestCommand(sObjectId);
		case "7669817195863274133":  // afl_education_request_to_sub_responsible - по notification_ID (decimal)
		case "0x6A70AA1A6B9CF295":   // afl_education_request_to_sub_responsible - по notification_ID (hex)
		case "afl_education_request_to_sub_responsible": // по notification_code, если ID не задан
			return GetTakeRequestCommand(sObjectId);
		case "7669820497071731235":  // afl_education_request_to_boss_dku - по notification_ID (decimal)
		case "0x6A70AD1B0AF87223":   // afl_education_request_to_boss_dku - по notification_ID (hex)
		case "afl_education_request_to_boss_dku": // по notification_code, если ID не задан
			return GetTakeRequestCommand(sObjectId);
		case "7669824411404717373":  // afl_education_request_rejected - по notification_ID (decimal)
		case "0x6A70B0AA6B65CD3D":   // afl_education_request_rejected - по notification_ID (hex)
		case "afl_education_request_rejected": // по notification_code, если ID не задан
			return GetTakeRequestCommand(sObjectId);
		case "7670081271547664662":  // afl_education_request_to_dku_admin - по notification_ID (decimal)
		case "0x6A719A4754F99916":   // afl_education_request_to_dku_admin - по notification_ID (hex)
		case "afl_education_request_to_dku_admin": // по notification_code, если ID не задан
			return GetTakeRequestCommand(sObjectId);
		case "7670084613306700826":  // afl_education_request_completed - по notification_ID (decimal)
		case "0x6A719D516555D41A":   // afl_education_request_completed - по notification_ID (hex)
		case "afl_education_request_completed": // по notification_code, если ID не задан
			return GetTakeRequestCommand(sObjectId);
		case "7670101830779174899":  // afl_education_request_rejected_by_responsible - по notification_ID (decimal)
		case "0x6A71ACFA26AA7FF3":   // afl_education_request_rejected_by_responsible - по notification_ID (hex)
		case "afl_education_request_rejected_by_responsible": // по notification_code, если ID не задан
			return GetTakeRequestCommand(sObjectId);
		case "7670105835183273909":  // afl_education_request_canceled_by_boss_dku - по notification_ID (decimal)
		case "0x6A71B09E7FBFF7B5":   // afl_education_request_canceled_by_boss_dku - по notification_ID (hex)
		case "afl_education_request_canceled_by_boss_dku": // по notification_code, если ID не задан
			return GetTakeRequestCommand(sObjectId);
		case "7670108402369318825":  // afl_education_request_approved_by_boss_dku - по notification_ID (decimal)
		case "0x6A71B2F437F64FA9":   // afl_education_request_approved_by_boss_dku - по notification_ID (hex)
		case "afl_education_request_approved_by_boss_dku": // по notification_code, если ID не задан
			return GetTakeRequestCommand(sObjectId);
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
			return GetAnnualBudgetRequestCommand(sObjectId);
		default:
			AlertLog("Неизвестный notification_ID/code: " + sKey);
			return {};
	}
}
// По ID задачи определяет команду для универсальной кнопки
function GetUniversalButtonCommand(sTaskId)
{
	var docTask;
	var teTask;
	var sNotificationId;
	var sNotificationCode;
	var sObjectId;
	try
	{
		docTask = tools.open_doc(sTaskId);
		if (docTask == undefined)
		{
			AlertLog("Задача id=" + sTaskId + " не найдена");
			return {};
		}
		teTask = docTask.TopElem;
		sNotificationId = GetCustomElem(teTask, "notification_ID");
		sNotificationCode = GetCustomElem(teTask, "notification_code");
		sObjectId = GetCustomElem(teTask, "sec_notification_object");
		AlertLog("Задача id=" + sTaskId + ", notification_ID=" + sNotificationId + ", notification_code=" + sNotificationCode);
		if (IsEmptyValue(sObjectId) || (IsEmptyValue(sNotificationId) && IsEmptyValue(sNotificationCode)))
		{
			AlertLog("У задачи id=" + sTaskId + " не хватает данных (notification_ID/code или sec_notification_object) - кнопка не сработает");
			return {};
		}
		return GetCommandByNotification(sNotificationId, sNotificationCode, sObjectId);
	}
	catch (e)
	{
		AlertLog("Ошибка определения команды для задачи id=" + sTaskId + ": " + e);
		return {};
	}
}
// ===============   Main   ==================
RESULT = {};
try
{
	RESULT = GetUniversalButtonCommand(ToStr(curObjectID));
	AlertLog("Результат для задачи id=" + ToStr(curObjectID) + ": " + tools.object_to_text(RESULT, "json"));
}
catch (err)
{
	AlertLog("Общая ошибка универсальной кнопки: " + err);
}
EnableLog(sLogName, false);