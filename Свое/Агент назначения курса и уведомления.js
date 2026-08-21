var sLogName = "COURSE_APPOINTMENT_AGENT_LOG";
var iCourseID = OptInt(Param.sCourse);
var iExclusionGroupID = OptInt(Param.sExclusionGroup);
var sAppointmentNotificationCode = "learning_appointment";
var sReminderNotificationCode = "learning_reminder";
var iAmountOfDays = OptInt(Param.iAmountOfDays);

function AlertLog(sText) {
    LogEvent(sLogName, sText);
    return;
}

function IsInExclusionGroup(iExclusionGroup, iCollaboratorID) {
    var bRes = false;
    docGroup = tools.open_doc(iExclusionGroup);
    if (docGroup != undefined) {
        oCollaborator = ArrayOptFindByKey(docGroup.TopElem.collaborators, iCollaboratorID , 'collaborator_id');
        if (oCollaborator != undefined) {
            bRes = true;
        }
    }
    return bRes;
}

function HasCourse(arAllLearnings, iCollaboratorID) {
    oCourse = ArrayOptFindByKey(arAllLearnings, iCollaboratorID , 'person_id');
    return (oCourse != undefined) ? true : false;
}

function SendReminderNotification(oCourse, iCollaboratorID, iAmountOfDays) {
    docCourse = tools.open_doc(oCourse.id);
    if (docCourse != undefined) {
        dFullCurrentDate = Date();
        dCurrentDate = DateNewTime(dFullCurrentDate, 0, 0, 0);
        dFullLastNotificationDate = OptDate(docCourse.TopElem.custom_elems.ObtainChildByKey("last_notification_date").value);
        if (dFullLastNotificationDate != undefined) {
            dLastNotificationDate = DateNewTime(dFullLastNotificationDate, 0, 0, 0);
            dTimeToSendNotification = DateOffset(dLastNotificationDate, (iAmountOfDays*24*60*60));
            if (DateDiff(dCurrentDate, dTimeToSendNotification) >= 0) {
                bNotificationSent = tools.create_notification(sReminderNotificationCode, iCollaboratorID, '', oCourse.id);
                if (bNotificationSent != true) {
                    AlertLog("Сотрудник " + sCollaboratorFullname + ": напоминание о необходимости завершить курс не отправлено");
                }
                else {
                    AlertLog("Сотруднику " + sCollaboratorFullname + " отправлено напоминание о необходимости закончить курс");
                    docCourse.TopElem.custom_elems.ObtainChildByKey("last_notification_date").value = Date();
                    docCourse.Save();
                }
                
            }
        }
        else {
            dFullStartDate = OptDate(docCourse.TopElem.start_usage_date);
            if(dFullStartDate!=undefined) {
                dStartDate = DateNewTime(dFullStartDate, 0, 0, 0);
                dTimeToSendNotification = DateOffset(dStartDate, (iAmountOfDays*24*60*60));
                if (DateDiff(dCurrentDate, dTimeToSendNotification) >= 0) {
                    bNotificationSent = tools.create_notification(sReminderNotificationCode, iCollaboratorID, '', oCourse.id);
                    if (bNotificationSent != true) {
                        AlertLog("Сотрудник " + sCollaboratorFullname + ": напоминание о необходимости завершить курс не отправлено");
                    }
                    else {
                        AlertLog("Сотруднику "+sCollaboratorFullname+" отправлено напоминание о необходимости закончить курс");
                        docCourse.TopElem.custom_elems.ObtainChildByKey("last_notification_date").value = Date();
                        docCourse.Save();
                    }
                }
            }
            else {
                AlertLog("Не удалось получить дату назначения незаконченного курса с ID " + oCourse.id + ". Напоминание не было отправлено");
            }
        }
    }

    return;
}

function main() {
    if(iCourseID!=undefined) {
        if(iAmountOfDays!=undefined) {
            var arAllActiveCollaborators = ArraySelectAll(XQuery("for $elem in collaborators where is_dismiss = false() and web_banned = false() return $elem"));
            var arActiveLearnings = ArraySelectAll(XQuery("for $elem in active_learnings where course_id = " + iCourseID + " return $elem"));
            var arLearnings = ArraySelectAll(XQuery("for $elem in learnings where course_id = " + iCourseID + " return $elem"));
            var arAllLearnings = ArrayUnion(arActiveLearnings, arLearnings);
            var sCollaboratorFullname;
            for (oCollaborator in arAllActiveCollaborators) {
                docCollaborator = tools.open_doc(oCollaborator.id);
                sCollaboratorFullname = String(oCollaborator.fullname);
                if (docCollaborator != undefined) {
                    if (tools_web.is_true(docCollaborator.TopElem.custom_elems.ObtainChildByKey("is_from_integration").value)) {
                        if(!IsInExclusionGroup(iExclusionGroupID, OptInt(docCollaborator.TopElem.id))) {
                            if(!HasCourse(arAllLearnings, OptInt(docCollaborator.TopElem.id))) {
                                docAppointedCourse =  tools.activate_course_to_person(docCollaborator.TopElem.id, iCourseID);
                                if (docAppointedCourse != undefined) {
                                    AlertLog("Сотруднику " + sCollaboratorFullname + " был назначен курс");
                                    bNotificationSent = tools.create_notification(sAppointmentNotificationCode, docCollaborator.TopElem.id, '', docAppointedCourse.TopElem.id);
                                    if (bNotificationSent != true) {
                                        AlertLog("Сотруднику "+sCollaboratorFullname+" не удалось отправить уведомление о назначении курса");
                                    }
                                    else {
                                        docAppointedCourse.TopElem.custom_elems.ObtainChildByKey("last_notification_date").value = Date();
                                        docAppointedCourse.Save();
                                    }
                                }
                                else {
                                    AlertLog("Сотруднику " + sCollaboratorFullname + " не удалось назначить курс");
                                }
                            }
                            else {
                                oCourse = ArrayOptFindByKey(arActiveLearnings, docCollaborator.TopElem.id , 'person_id');
                                if (oCourse != undefined) {
                                    SendReminderNotification(oCourse, OptInt(docCollaborator.TopElem.id), iAmountOfDays);
                                }
                                else {
                                    AlertLog("Сотрудник " + sCollaboratorFullname + " уже закончил курс. Новый курс назначен не был");
                                }
                            }
                        }
                    }
                }
            }
        }
        else {
            AlertLog("Не указано колличество дней для напоминания");
        }
    }
    else {
        AlertLog("Не указан курс для назначения");
    }
    
    return;
}


EnableLog(sLogName, true);

try {
    AlertLog("Агент Назначения курса и уведомления начал работу");
    main();
    AlertLog("Агент Назначения курса и уведомления закончил работу");
}
catch(e) {
    AlertLog(e);
}

EnableLog(sLogName, false);