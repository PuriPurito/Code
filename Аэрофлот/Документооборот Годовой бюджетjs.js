(
oSubResponsibleField = curObject.workflow_fields.GetOptChildByKey("sub_responsible"),
(oSubResponsibleField != undefined && StrContains(oSubResponsibleField.OptChild("value"), OptInt(curUserID, 0)))
)

(
iCurUserID = OptInt(curUserID, 0),
oMainBossField = (iCurUserID != 0 ? curObject.workflow_fields.GetOptChildByKey("main_boss") : undefined),
(oMainBossField != undefined && OptInt(oMainBossField.OptChild("value"), -1) == iCurUserID)
)

(
iCurUserID = OptInt(curUserID, 0),
oResponsibleField = (iCurUserID != 0 ? curObject.workflow_fields.GetOptChildByKey("responsible") : undefined),
(oResponsibleField != undefined && OptInt(oResponsibleField.OptChild("value"), -1) == iCurUserID)
)

ArrayOptFirstElem(XQuery("for $gc in group_collaborators, $gr in groups where $gc/group_id = $gr/id and $gr/code = 'dku_group' and $gc/collaborator_id = " + curUserID + " return $gc")) != undefined


(
iCurUserID = OptInt(curUserID, 0),
oSubResponsibleField = curObject.workflow_fields.GetOptChildByKey("sub_responsible"),
oMainBossField = (iCurUserID != 0 ? curObject.workflow_fields.GetOptChildByKey("main_boss") : undefined),
oResponsibleField = (iCurUserID != 0 ? curObject.workflow_fields.GetOptChildByKey("responsible") : undefined),
bSubResponsible = (oSubResponsibleField != undefined && StrContains(oSubResponsibleField.OptChild("value"), OptInt(curUserID, 0))),
bMainBoss = (oMainBossField != undefined && OptInt(oMainBossField.OptChild("value"), -1) == iCurUserID),
bResponsible = (oResponsibleField != undefined && OptInt(oResponsibleField.OptChild("value"), -1) == iCurUserID),
((bSubResponsible && (curObject.workflow_state == "sp_first" || curObject.workflow_state == "sp_second")) || (bMainBoss && (curObject.workflow_state == "rp_first" || curObject.workflow_state == "rp_second")) || (bResponsible && (curObject.workflow_state == "dku_work" || curObject.workflow_state == "end")))
)



if (StrContains(curObject.workflow_state, "_first")) {
    curObject.workflow_state = "rp_first";
    curObject.workflow_state_name = "На согласовании РП";
}
else {
    curObject.workflow_state = "rp_second";
    curObject.workflow_state_name = "Повторно получено РП";
}
oSubResponsibleField = curObject.workflow_fields.GetOptChildByKey("main_boss");
if (oSubResponsibleField != undefined)
tools.call_code_library_method('libAflMain', 'CreateNotification', ["afl_annual_campaign_rp", OptInt(oSubResponsibleField.OptChild("value")), '', curObject.id]);


if (curObject.workflow_fields.GetOptChildByKey("flag_dku_first") != undefined && tools_web.is_true(curObject.workflow_fields.GetOptChildByKey("flag_dku_first").value)) {
    curObject.workflow_state = "dku_second";
    curObject.workflow_state_name = "Повторно получено ДКУ";
}
else {
    curObject.workflow_state = "dku_first";
    curObject.workflow_state_name = "Новая";
}



try {
    sRawFormFields = SCOPE_WVARS.GetOptProperty("form_fields", "");
} catch (errWvars) {
    sRawFormFields = "";
}
if (sRawFormFields != "") {
	try {
		aFormFields = ParseJson(sRawFormFields);

		oRPField = ArrayOptFindByKey(aFormFields, "main_boss_comment", "name");
		if (oRPField != undefined && oRPField.value != "") {
			oRPCommentField = curObject.workflow_fields.ObtainChildByKey("main_boss_comment");
			sOldRPValue = "" + oRPCommentField.value;
			aRPComments = [];
			if (sOldRPValue != "") {
				if (StrBegins(sOldRPValue, "["))
					aRPComments = ParseJson(sOldRPValue);
				else
					aRPComments.push({ comment: sOldRPValue, author: undefined, date: undefined });
			}
			aRPComments.push({ comment: oRPField.value, author: OptInt(curUserID), date: StrDate(Date()) });
			oRPCommentField.value = tools.object_to_text(aRPComments, "json");
		}

		oDKUField = ArrayOptFindByKey(aFormFields, "dku_comment", "name");
		if (oDKUField != undefined && oDKUField.value != "") {
			oDKUCommentField = curObject.workflow_fields.ObtainChildByKey("dku_comment");
			sOldDKUValue = "" + oDKUCommentField.value;
			aDKUComments = [];
			if (sOldDKUValue != "") {
				if (StrBegins(sOldDKUValue, "["))
					aDKUComments = ParseJson(sOldDKUValue);
				else
					aDKUComments.push({ comment: sOldDKUValue, author: undefined, date: undefined });
			}
			aDKUComments.push({ comment: oDKUField.value, author: OptInt(curUserID), date: StrDate(Date()) });
			oDKUCommentField.value = tools.object_to_text(aDKUComments, "json");
		}

        oSubResponsibleField = curObject.workflow_fields.GetOptChildByKey("sub_responsible");
        if (oSubResponsibleField != undefined)
            tools.call_code_library_method('libAflMain', 'CreateNotification', ["afl_annual_campaign_sp", OptInt(oSubResponsibleField.OptChild("value")), '', curObject.id]);
    	} catch (errParse) {}
}