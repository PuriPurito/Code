var sLogName = "acquaint_assignment_log";

function AlertLog(log) {
    var sLog = log;

    var logType = ObjectType(log);
    if (DataType(log) == 'object' && (logType == 'JsObject' || logType == 'JsArray' || logType == 'XmElem')) {
        sLog = tools.object_to_text(log, 'json');
    }
    LogEvent(sLogName, sLog);
}

function main() {
	var dCurrentDate = DateNewTime(Date(), 0, 0, 0);

	if (tools_web.is_true(courseDoc.custom_elems.ObtainChildByKey("acquaint_is_necessary").value))
	{
		//Создание кадрового документа ознакомления
		var oAcquaintDocType = ArrayOptFirstElem(XQuery("for $elem in personnel_document_types where $elem/code = 'afl_acquaint' return $elem"));
		var docNewAcquaintDoc = OpenNewDoc('x-local://wtv/wtv_personnel_document.xmd');
		docNewAcquaintDoc.BindToDb(DefaultDb);

		docNewAcquaintDoc.TopElem.name = String('Ознакомление с ' + courseDoc.name + ' ' + learningDoc.person_fullname);
		docNewAcquaintDoc.TopElem.personnel_document_type_id = OptInt(oAcquaintDocType.id);
		docNewAcquaintDoc.TopElem.state_id = String('process');

		docNewAcquaintDoc.TopElem.person_id = OptInt(learningDoc.person_id);
		docNewAcquaintDoc.TopElem.person_fullname = String(learningDoc.person_fullname);
		docNewAcquaintDoc.TopElem.person_position_id = OptInt(learningDoc.person_position_id);
		docNewAcquaintDoc.TopElem.person_position_name = String(learningDoc.person_position_name);
		docNewAcquaintDoc.TopElem.person_org_id = OptInt(learningDoc.person_org_id);
		docNewAcquaintDoc.TopElem.person_org_name = String(learningDoc.person_org_name);
		docNewAcquaintDoc.TopElem.person_subdivision_id = OptInt(learningDoc.person_subdivision_id);
		docNewAcquaintDoc.TopElem.person_subdivision_name = String(learningDoc.person_subdivision_name);
		docNewAcquaintDoc.TopElem.person_subdivision_code = String(learningDoc.person_subdivision_code);

		docNewAcquaintDoc.TopElem.custom_elems.ObtainChildByKey("print_form_id").value = oAcquaintDocType.print_form_id;
		docNewAcquaintDoc.TopElem.custom_elems.ObtainChildByKey("course_finish_date").value = OptDate(learningDoc.last_usage_date);
		docNewAcquaintDoc.TopElem.custom_elems.ObtainChildByKey("course_start_date").value = OptDate(learningDoc.start_learning_date);
		docNewAcquaintDoc.TopElem.custom_elems.ObtainChildByKey("course_id").value = OptInt(courseDoc.id);
		docNewAcquaintDoc.TopElem.custom_elems.ObtainChildByKey("normative_date").value = DateOffset(dCurrentDate, (5 * 24 * 60 * 60));

		docNewAcquaintDoc.Save();

		//Формирование ПФ
		var sAcquaintPrintForm = tools.process_print_form(oAcquaintDocType.print_form_id, docNewAcquaintDoc.TopElem.id);
		var sAcquaintTempUrl = ObtainTempFile('.pdf');
		PutFileData(UrlToFilePath(sAcquaintTempUrl), sAcquaintPrintForm);

		var docAcquaintResource = OpenNewDoc('x-local://wtv/wtv_resource.xmd');
		docAcquaintResource.BindToDb();
		docAcquaintResource.TopElem.put_data(sAcquaintTempUrl);
		docAcquaintResource.Save();
		var oAcquaintFile = docNewAcquaintDoc.TopElem.signature_files.AddChild();
		oAcquaintFile.id = docAcquaintResource.TopElem.id;
		oAcquaintFile.file_url = docAcquaintResource.TopElem.file_url;
		docNewAcquaintDoc.Save();
		DeleteUrl(sAcquaintTempUrl);

		//Создание заявки
		var oAcquaintRequestType = ArrayOptFirstElem(XQuery("for $elem in request_types where $elem/code = 'afl_acquaint' return $elem"));
		var docAcquaintRequest = OpenNewDoc('x-local://wtv/wtv_request.xmd');
		docAcquaintRequest.BindToDb(DefaultDb);

		docAcquaintRequest.TopElem.request_type_id = OptInt(oAcquaintRequestType.id);
		docAcquaintRequest.TopElem.status_id = String("active");
		docAcquaintRequest.TopElem.workflow_id = OptInt(oAcquaintRequestType.workflow_id);
		docAcquaintRequest.TopElem.person_id = OptInt(learningDoc.person_id);
		docAcquaintRequest.TopElem.person_fullname = String(learningDoc.person_fullname);
		docAcquaintRequest.TopElem.object_name = String(courseDoc.name + ' ' + learningDoc.person_fullname);
		docAcquaintRequest.TopElem.custom_elems.ObtainChildByKey("acquaint").value = docNewAcquaintDoc.TopElem.id;

		docAcquaintRequest.Save();

		//Создание эцп
		var docAcquaintSignature = OpenNewDoc('x-local://wtv/wtv_digital_signature.xmd');
		docAcquaintSignature.BindToDb(DefaultDb);

		docAcquaintSignature.TopElem.name = String(learningDoc.person_fullname);
		docAcquaintSignature.TopElem.person_id = OptInt(learningDoc.person_id);
		docAcquaintSignature.TopElem.person_fullname = String(learningDoc.person_fullname);
		docAcquaintSignature.TopElem.object_type = String("personnel_document");
		docAcquaintSignature.TopElem.object_id = OptInt(docNewAcquaintDoc.TopElem.id);
		docAcquaintSignature.TopElem.create_date = dCurrentDate;

		docAcquaintSignature.Save();

		//Запуск ДО
		/* curObject = docAcquaintRequest.TopElem;
		curObjectID = OptInt(docAcquaintRequest.TopElem.id);
		tools.workflow_action_process(docAcquaintRequest, "get_next_stage", docAcquaintRequest.TopElem.workflow_id, tools.open_doc(docAcquaintRequest.TopElem.workflow_id).TopElem, null, false);
		docAcquaintRequest.Save(); */

        if (tools_web.is_true(courseDoc.custom_elems.ObtainChildByKey("certificate_is_necessary").value)) {
            //Создание кадрового документа сертификата
            var oCertDocType = ArrayOptFirstElem(XQuery("for $elem in personnel_document_types where $elem/code = 'afl_certificate' return $elem"));
            if (oCertDocType == undefined) {
                AlertLog("Не найден тип кадрового документа afl_certificate");
                return;
            }
            var docNewCertDoc = OpenNewDoc('x-local://wtv/wtv_personnel_document.xmd');
            docNewCertDoc.BindToDb(DefaultDb);

            docNewCertDoc.TopElem.name = String('Сертификат ' + courseDoc.name + ' ' + learningDoc.person_fullname);
            docNewCertDoc.TopElem.personnel_document_type_id = OptInt(oCertDocType.id);
            docNewCertDoc.TopElem.state_id = String('process');

            docNewCertDoc.TopElem.person_id = OptInt(learningDoc.person_id);
            docNewCertDoc.TopElem.person_fullname = String(learningDoc.person_fullname);
            docNewCertDoc.TopElem.person_position_id = OptInt(learningDoc.person_position_id);
            docNewCertDoc.TopElem.person_position_name = String(learningDoc.person_position_name);
            docNewCertDoc.TopElem.person_org_id = OptInt(learningDoc.person_org_id);
            docNewCertDoc.TopElem.person_org_name = String(learningDoc.person_org_name);
            docNewCertDoc.TopElem.person_subdivision_id = OptInt(learningDoc.person_subdivision_id);
            docNewCertDoc.TopElem.person_subdivision_name = String(learningDoc.person_subdivision_name);
            docNewCertDoc.TopElem.person_subdivision_code = String(learningDoc.person_subdivision_code);

            docNewCertDoc.TopElem.custom_elems.ObtainChildByKey("print_form_id").value = oCertDocType.print_form_id;
            docNewCertDoc.TopElem.custom_elems.ObtainChildByKey("course_finish_date").value = OptDate(learningDoc.last_usage_date);
            docNewCertDoc.TopElem.custom_elems.ObtainChildByKey("course_start_date").value = OptDate(learningDoc.start_learning_date);
            docNewCertDoc.TopElem.custom_elems.ObtainChildByKey("course_id").value = OptInt(courseDoc.id);
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

            docAcquaintRequest.TopElem.custom_elems.ObtainChildByKey("certificate").value = docNewCertDoc.TopElem.id;
            docAcquaintRequest.Save();

            //Создание эцп
            var docCertSignature = OpenNewDoc('x-local://wtv/wtv_digital_signature.xmd');
            docCertSignature.BindToDb(DefaultDb);

            docCertSignature.TopElem.name = String(learningDoc.person_fullname);
            docCertSignature.TopElem.person_id = OptInt(learningDoc.person_id);
            docCertSignature.TopElem.person_fullname = String(learningDoc.person_fullname);
            docCertSignature.TopElem.object_type = String("personnel_document");
            docCertSignature.TopElem.object_id = OptInt(docNewCertDoc.TopElem.id);
            docCertSignature.TopElem.create_date = dCurrentDate;

            docCertSignature.Save();
        }
	}

	return;
}


EnableLog(sLogName, true);

try {
    AlertLog("Системное событие Назначение ознакомления при завершении курса начало работу");
    main();
    AlertLog("Системное событие Назначение ознакомления при завершении курса закончило работу");
}
catch(e) {
    AlertLog(e);
}

EnableLog(sLogName, false);