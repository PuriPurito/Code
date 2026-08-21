var sLogName = "certificate_assignment_test_log";

function AlertLog(log)
{
	var sLog = log;

	var logType = ObjectType(log);
	if (DataType(log) == 'object' && (logType == 'JsObject' || logType == 'JsArray' || logType == 'XmElem')) {
		sLog = tools.object_to_text(log, 'json');
	}
	LogEvent(sLogName, sLog);
}

function main()
{
	// Проверяем, что тест действительно завершён
	if (!tools_web.is_true(bFinishTest)) {
		AlertLog("Тест не завершён, выход");
		return;
	}

	// Проверяем наличие кастомного флага необходимости сертификата в карточке теста
	if (!tools_web.is_true(assessmentDoc.custom_elems.ObtainChildByKey("certificate_is_necessary").value)) {
		return;
	}

	// Получаем данные сотрудника через person_id законченного теста
	var oCollaborator = learningDoc.person_id.OptForeignElem;
	if (oCollaborator == undefined) {
		AlertLog("Не удалось получить данные сотрудника по person_id: " + OptInt(learningDoc.person_id));
		return;
	}

	var dCurrentDate = DateNewTime(Date(), 0, 0, 0);

	//Создание кадрового документа сертификата
	var oCertDocType = ArrayOptFirstElem(XQuery("for $elem in personnel_document_types where $elem/code = 'afl_certificate' return $elem"));
	if (oCertDocType == undefined) {
		AlertLog("Не найден тип кадрового документа afl_certificate");
		return;
	}
	var docNewCertDoc = OpenNewDoc('x-local://wtv/wtv_personnel_document.xmd');
	docNewCertDoc.BindToDb(DefaultDb);

	docNewCertDoc.TopElem.name = String('Сертификат ' + assessmentDoc.title + ' ' + oCollaborator.fullname);
	docNewCertDoc.TopElem.personnel_document_type_id = OptInt(oCertDocType.id);
	docNewCertDoc.TopElem.state_id = String('process');

	docNewCertDoc.TopElem.person_id = OptInt(learningDoc.person_id);
	docNewCertDoc.TopElem.person_fullname = String(oCollaborator.fullname);

	var iPositionId = OptInt(oCollaborator.position_id);
	if (iPositionId != undefined) {
		docNewCertDoc.TopElem.person_position_id = iPositionId;
	}
	docNewCertDoc.TopElem.person_position_name = String(oCollaborator.position_name);

	var iOrgId = OptInt(oCollaborator.org_id);
	if (iOrgId != undefined) {
		docNewCertDoc.TopElem.person_org_id = iOrgId;
	}
	docNewCertDoc.TopElem.person_org_name = String(oCollaborator.org_name);

	var iSubdivisionId = OptInt(oCollaborator.position_parent_id);
	if (iSubdivisionId != undefined) {
		docNewCertDoc.TopElem.person_subdivision_id = iSubdivisionId;
	}
	docNewCertDoc.TopElem.person_subdivision_name = String(oCollaborator.position_parent_name);

	docNewCertDoc.TopElem.custom_elems.ObtainChildByKey("print_form_id").value = oCertDocType.print_form_id;
	docNewCertDoc.TopElem.custom_elems.ObtainChildByKey("test_finish_date").value = OptDate(learningDoc.last_usage_date);
	docNewCertDoc.TopElem.custom_elems.ObtainChildByKey("test_start_date").value = OptDate(learningDoc.start_learning_date);
	docNewCertDoc.TopElem.custom_elems.ObtainChildByKey("assessment_id").value = OptInt(assessmentDoc.id);
	docNewCertDoc.TopElem.custom_elems.ObtainChildByKey("normative_date").value = DateOffset(dCurrentDate, (5 * 24 * 60 * 60));

	docNewCertDoc.Save();

	//Формирование ПФ
	var sCertPrintForm = tools.process_print_form(oCertDocType.print_form_id, docNewCertDoc.TopElem.id);
	var sCertTempUrl = ObtainTempFile('.pdf');
	PutFileData(UrlToFilePath(sCertTempUrl), sCertPrintForm);

	var docCertResource = OpenNewDoc('x-local://wtv/wtv_resource.xmd');
	docCertResource.BindToDb();
	docCertResource.TopElem.put_data(sCertTempUrl);
	docCertResource.Save();
	var oCertFile = docNewCertDoc.TopElem.signature_files.AddChild();
	oCertFile.id = docCertResource.TopElem.id;
	oCertFile.file_url = docCertResource.TopElem.file_url;
	docNewCertDoc.Save();
	DeleteUrl(sCertTempUrl);

	//Создание заявки
	var oCertRequestType = ArrayOptFirstElem(XQuery("for $elem in request_types where $elem/code = 'afl_certificate' return $elem"));
	if (oCertRequestType == undefined) {
		AlertLog("Не найден тип заявки afl_certificate");
		return;
	}
	var docCertRequest = OpenNewDoc('x-local://wtv/wtv_request.xmd');
	docCertRequest.BindToDb(DefaultDb);

	docCertRequest.TopElem.request_type_id = OptInt(oCertRequestType.id);
	docCertRequest.TopElem.status_id = String("closed");
	var iWorkflowId = OptInt(oCertRequestType.workflow_id);
	if (iWorkflowId != undefined) {
		docCertRequest.TopElem.workflow_id = iWorkflowId;
	}
	docCertRequest.TopElem.person_id = OptInt(learningDoc.person_id);
	docCertRequest.TopElem.person_fullname = String(oCollaborator.fullname);
	docCertRequest.TopElem.object_name = String('Сертификат по тесту ' + assessmentDoc.title + ' ' + oCollaborator.fullname);
	docCertRequest.TopElem.custom_elems.ObtainChildByKey("certificate").value = docNewCertDoc.TopElem.id;

	docCertRequest.Save();

	//Создание эцп
	var docCertSignature = OpenNewDoc('x-local://wtv/wtv_digital_signature.xmd');
	docCertSignature.BindToDb(DefaultDb);

	docCertSignature.TopElem.name = String(oCollaborator.fullname);
	docCertSignature.TopElem.person_id = OptInt(learningDoc.person_id);
	docCertSignature.TopElem.person_fullname = String(oCollaborator.fullname);
	docCertSignature.TopElem.object_type = String("personnel_document");
	docCertSignature.TopElem.object_id = OptInt(docNewCertDoc.TopElem.id);
	docCertSignature.TopElem.create_date = dCurrentDate;

	docCertSignature.Save();

	//Запуск ДО
	/* curObject = docCertRequest.TopElem;
	curObjectID = OptInt(docCertRequest.TopElem.id);
	tools.workflow_action_process(docCertRequest, "get_next_stage", docCertRequest.TopElem.workflow_id, tools.open_doc(docCertRequest.TopElem.workflow_id).TopElem, null, false);
	docCertRequest.Save(); */

	return;
}


EnableLog(sLogName, true);

try {
	AlertLog("Системное событие Создание сертификата при завершении теста начало работу");
	main();
	AlertLog("Системное событие Создание сертификата при завершении теста закончило работу");
}
catch(e) {
	AlertLog(e);
}

EnableLog(sLogName, false);
