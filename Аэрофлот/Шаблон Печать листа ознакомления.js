<%
iObjectID = OptInt(curObjectID,0);
iUserID = OptInt(curUserID,0);

docAcquaint = tools.open_doc(iObjectID);
if (docAcquaint != undefined) {
    iPrintFormID = OptInt(docAcquaint.TopElem.questions.ObtainChildByKey("print_form_id", "id").answer);
    //sPrintFormURL = "/view_print_form.html?print_form_id=" + iPrintFormID + "&object_id="+iObjectID+"&sid=" + tools_web.get_sum_sid(iObjectID, Request.Session.sid);
%>
    <input type="button" value="Печать" class="button" onclick='window.open("view_print_form.html?print_form_id=<%=iPrintFormID%>&sid=<%=tools.get_sum_sid( iPrintFormID )%>&object_id=<%=iObjectID%>");'>
<%
}
%>
<style>
.button {
    color: #f6e6c0 !important;
    background-color: #383838 !important;
    margin-left: 0 !important;
    padding: 1em 1.5em !important;
    border-radius: 0.5em !important;
    font-weight: 400;
    font-style: normal;
    font-size: 1em !important;
    margin: 0 0 0 0 !important;
    position: absolute;
    top: 2em;
}

.button:hover {
    color: #383838 !important; 
    border: 1px solid #d59b3d !important;
    background-color: #d59b3d !important;
}
</style>