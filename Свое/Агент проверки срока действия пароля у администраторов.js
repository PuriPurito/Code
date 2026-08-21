var sLogName = "PASSWORD_EXPIRATION_AGENT_LOG";
var sNotificationCode = "";

function AlertLog(sText) {
    LogEvent(sLogName, sText);
    return;
}

function main() {
    arAllAdmins = ArraySelectAll(XQuery("for $elem in collaborators where is_arm_admin = true() return $elem"));
    for (oAdmin in arAllAdmins) {
        docAdmin = tools.open_doc(oAdmin.id);
        if (docAdmin != undefined) {
            dCurrentDate = Date();
            iPasswordExpirationInDays = OptInt(docAdmin.TopElem.custom_elems.ObtainChildByKey("password_expiration").value);
            dFullPasswordUpdateDate = OptDate(docAdmin.TopElem.custom_elems.ObtainChildByKey("password_update_date").value);
            if (iPasswordExpirationInDays != undefined && dFullPasswordUpdateDate != undefined) {
                dPasswordUpdateDate = DateNewTime(dFullPasswordUpdateDate, 0, 0, 0);
                dPasswordExpirationDate = DateOffset(dPasswordUpdateDate, (iPasswordExpirationInDays*24*60*60));
                dPasswordExpirationDatePlus10 = DateOffset(dPasswordUpdateDate, ((iPasswordExpirationInDays+10)*24*60*60));
                if (DateDiff(dCurrentDate, dPasswordExpirationDate) >= 0 && DateDiff(dCurrentDate, dPasswordExpirationDatePlus10) <= 0) {
                    docAdmin.TopElem.change_password = true;
                    tools.create_notification(sNotificationCode, docAdmin.TopElem.id);
                    docAdmin.Save();
                }
            }
            else if (dPasswordUpdateDate == undefined) {
                docAdmin.TopElem.change_password = true;
                tools.create_notification(sNotificationCode, docAdmin.TopElem.id);
                docAdmin.Save();
            }
        }
    }
    
    return;
}


EnableLog(sLogName, true);

try {
    AlertLog("Агент Проверки срока действия пароля у администраторов начал работу");
    main();
    AlertLog("Агент Проверки срока действия пароля у администраторов закончил работу");
}
catch(e) {
    AlertLog(e);
}

EnableLog(sLogName, false);