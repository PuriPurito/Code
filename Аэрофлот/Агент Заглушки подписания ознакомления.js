function AlertLog(log, type) {
	var sLog = log;

	var logType = ObjectType(log);
	if (DataType(log) == 'object' && (logType == 'JsObject' || logType == 'JsArray' || logType == 'XmElem'))
		sLog = tools.object_to_text(log, 'json');

	LogEvent(sLogName, sLog);
}

function main() {
	if (iRequestID != undefined) {
		docRequest = tools.open_doc(iRequestID);
		if (docRequest != undefined) {
			docRequestTE = docRequest.TopElem;
			docRequestTE.status_id = 'close';
			docRequestTE.close_date = Date();
			docRequestTE.workflow_state = 'complete';
			docRequestTE.workflow_state_name = 'Завершена';
			docRequest.Save();

			oSignerObjectData = ArrayOptFirstElem(XQuery("for $elem in digital_signatures where $elem/person_id = " + XQueryLiteral(docRequestTE.person_id) + " and $elem/object_id = " + docRequestTE.custom_elems.ObtainChildByKey("acquaint").value + " return $elem"));
			docDigitalSignature = tools.open_doc(oSignerObjectData.id);
			if (docDigitalSignature != undefined) {
				docDigitalSignatureTE = docDigitalSignature.TopElem;
				docDigitalSignatureTE.sign_date = Date();
				docDigitalSignatureTE.is_signed = 1;
				docDigitalSignatureTE.custom_elems.ObtainChildByKey("sStatus").value = 4;
				docDigitalSignature.Save();
			}
		}
	}

	return;
}

var iRequestID = OptInt(Param.sRequest);
var sLogName = String('afl_acquaint_assign_demo');
var bLogActive = true;
EnableLog(sLogName, bLogActive);

try {
	AlertLog('Старт Агента Заглушки подписания ознакомления');
	main();
	AlertLog('Конец Агента Заглушки подписания ознакомления');
}
catch (e) {
	AlertLog(e);
}

EnableLog(sLogName, false);