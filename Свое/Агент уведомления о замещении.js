var sLogName = String(Param.sLogName);
var bLogActive = tools_web.is_true(Param.isLogActive);

function AlertLog(sText) {
    LogEvent(sLogName, sText);
    return;
}

function CreateSubstitutionNotification() {
    var dCurrentDate = Date();
    var arSubstitution = ArraySelectAll(XQuery("for $elem in substitutions where status = 'active' and start_date <= date('" + dCurrentDate + "') return $elem"));
    for (oSubstitution in arSubstitution) {
        docSubstitution = tools.open_doc(oSubstitution.id);
        if (docSubstitution != undefined) {
            oNotificationSent = docSubstitution.TopElem.custom_elems.ObtainChildByKey("notificationSent");
            if (!tools_web.is_true(oNotificationSent.value)) {
                oNotificationSent.value = tools.create_notification("kd_substitution", docSubstitution.TopElem.id);
                if (oNotificationSent.value = false) {
                    AlertLog("О нет! Уведомление не было отправлено!");
                }
                docSubstitution.Save();
            }
        }
    }

    return;
}

function main() {
    CreateSubstitutionNotification();

    return;
}


EnableLog(sLogName, bLogActive);

try {
    main();
}
catch(e) {
    AlertLog(e);
}

EnableLog(sLogName, false);