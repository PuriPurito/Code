var sLogName = "afl_annual_budget_comment_debug";

function AlertLog(log, type) {
	EnableLog(sLogName, true);
	var sLog = log;
	var logType = ObjectType(log);
	if (DataType(log) == 'object' && (logType == 'JsObject' || logType == 'JsArray' || logType == 'XmElem')) {
		sLog = tools.object_to_text(log, 'json');
	}
	LogEvent(sLogName, sLog);
	EnableLog(sLogName, false);
}

function GetPastComment(sFieldName) {
	sPastComment = "";
	oPastComment = aWorkflowFields.GetOptChildByKey(sFieldName);
	if (oPastComment != undefined) {
		sPastComment = oPastComment.OptChild("value");
	}
	if (sPastComment != "" && StrBegins(sPastComment, "[{") && StrEnds(sPastComment, "}]")) {
		try {
			aPastComments = ParseJson(sPastComment);
			iLength = ArrayCount(aPastComments);
			if (iLength > 0) {
				oComment = aPastComments[iLength - 1];
				sPastComment = oComment.comment;
			}
		} catch (e) {
			AlertLog(e);
		}
	}
	return sPastComment;
}

iObjectID = OptInt(iObjectID, OptInt(curObjectID));

ERROR = 0;
MESSAGE = "";

function GetCommentFieldInfo(iTargetID) {
	docTarget = tools.open_doc(iTargetID);
	if (docTarget == undefined)
		return undefined;

	sState = docTarget.TopElem.workflow_state.Value;
	aWorkflowFields = docTarget.TopElem.workflow_fields;

	oResult = undefined;
	if (StrContains(sState, "rp_")) oResult = { name: "main_boss_comment", label: "Комментарий РП" };
	else if (StrContains(sState, "dku_")) oResult = { name: "dku_comment", label: "Комментарий ДКУ" };
	if (oResult == undefined)
		return undefined;
	oResult.past_comment = GetPastComment(oResult.name);
	return oResult;
}

if (command == "eval") {
	oCommentField = GetCommentFieldInfo(iObjectID);

	if (oCommentField == undefined) {
		RESULT = { command: "alert", msg: "Не удалось определить этап документооборота" };
		RESULT.WORKFLOW_ACTION_BREAK = true;
	} else {
		RESULT = {
			command: "display_form",
			title: "Вернуть на доработку",
			message: "Укажите комментарий (необязательно)",
			form_fields: [
				{
					name: oCommentField.name,
					label: oCommentField.label,
					type: "text",
					value: oCommentField.past_comment,
					mandatory: false,
					catalog: "",
					query_qual: ""
				}
			],
			buttons: [
				{ name: "submit", label: "Сохранить", type: "submit" },
				{ name: "cancel", label: "Отменить", type: "cancel" }
			],
			no_buttons: false
		};
		RESULT.WORKFLOW_ACTION_BREAK = true;
	}
} else if (command == "submit_form") {
	RESULT = { command: "close_form", confirm_result: { command: "reload_page" } };
}