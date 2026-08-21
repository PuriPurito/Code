var sLogName = "afl_sent_to_revision_debug";

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

try {
    oItem = ParseJson(SCOPE_WVARS.GetProperty("_ITEM_"));
} catch (ex) {
    AlertLog(ex);
}
sAction = "" + oItem.GetOptProperty("action_id", "");
iObjectID = OptInt(iObjectID, OptInt(curObjectID));

var oPopUp = new Object();
oPopUp.result = {};

ERROR = 0;
MESSAGE = "";

// Показываем попап при нажатии кнопки
if (command == "eval") {
    oPopUp.result = {
        command: "display_form",
        title: "Отправить на доработку",
        message: "Укажите комментарий",
        form_fields: [],
        buttons: [
            { name: "submit", label: "Сохранить", type: "submit" },
            { name: "cancel", label: "Отменить", type: "cancel" }
        ],
        no_buttons: false
    }
    docRequest = tools.open_doc(iObjectID);
    if (docRequest == undefined) {
        RESULT = { command: "alert", msg: "Не удалось найти заявку в системе" };
        RESULT.WORKFLOW_ACTION_BREAK = true;
    }
    aWorkflowFields = docRequest.TopElem.workflow_fields;
    sPastComment = "";
    switch (sAction) {
        case "sent_to_revision":
            sPastComment = GetPastComment("main_boss_comment");
            oPopUp.result.form_fields.push({
                name: "main_boss_comment",
                label: "Комментарий РП",
                type: "text",
                value: sPastComment,
                mandatory: true
            })
            break;
        case "sent_to_revision_dku_admin":
            sPastComment = GetPastComment("dku_admin_comment");
            oPopUp.result.form_fields.push({
                name: "dku_admin_comment",
                label: "Комментарий администратора ДКУ",
                type: "text",
                value: sPastComment,
                mandatory: true
            })
            break;
        case "sent_to_revision_dku_responsible":
            sPastComment = GetPastComment("dku_comment");
            oPopUp.result.form_fields.push({
                name: "dku_comment",
                label: "Комментарий ответственного ДКУ",
                type: "text",
                value: sPastComment,
                mandatory: true
            })
            break;
        case "canceled":
            sPastComment = GetPastComment("boss_dku_comment");
            oPopUp.result.form_fields.push({
                name: "boss_dku_comment",
                label: "Комментарий директора ДКУ",
                type: "text",
                value: sPastComment,
                mandatory: true
            })
            break;
        default:
            RESULT = { command: "alert", msg: "Не удалось определить действие" };
            RESULT.WORKFLOW_ACTION_BREAK = true;
            break;
    }
    RESULT = oPopUp.result;
    RESULT.WORKFLOW_ACTION_BREAK = true;
}
// Обрабатываем нажатие "Сохранить" внутри попапа
else if (command == "submit_form") {
    try {

        RESULT = {
            command: "close_form",
            confirm_result: {
                command: "reload_page"
            }
        };
    }
    catch (err) {
        AlertLog("submit_form: ОШИБКА: " + err);
        ERROR = 1;
        MESSAGE = "" + err;
        RESULT = { command: "alert", msg: "Возникла ошибка при сохранении: " + err };
    }
}