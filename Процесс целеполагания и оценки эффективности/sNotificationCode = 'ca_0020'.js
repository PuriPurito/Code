sNotificationCode = 'ca_0020'
bExpert = false

if(!bExpert)
    iPersonID = OptInt(curObject.boss_id)
else
    iPersonID = ArrayOptFirstElem(curObject.custom_experts)!=undefined ?  OptInt(ArrayOptFirstElem(curObject.custom_experts).person_id) : undefined
if(iPersonID!=undefined)
   try { tools.create_notification(sNotificationCode,iPersonID,'',curObject.id)} catch(er) {alert(er)}


tools.create_notification(sNotificationCode,iPersonID,'',curObject.id)

/////////////////////////////////////////////

sWFState="1_";
sRND=tools.random_string(5);

all_pas = ArraySelectAll(tools.xquery(tools.create_xquery("pa","$elem/assessment_plan_id = "+curObject.id,null)));
for (pa in all_pas)
{
    docPa =tools.open_doc(pa.id);
    if(docPa!=undefined)
    {
        tePa =docPa.TopElem
        need_save = false;
        for (oComment in tePa.custom_comments)
        {
            if (StrContains(oComment.workflow_state,sWFState) && !StrContains(oComment.workflow_state,"__"))
            {
                oComment.workflow_state = oComment.workflow_state + "__" + sRND;
                need_save = true;
            }
        }

        if(need_save) docPa.Save();
    }    
}