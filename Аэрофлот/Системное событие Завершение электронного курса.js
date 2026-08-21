var sLogName = "acquaint_assignment_log";
var iPersonalDocumentTypeID = 7478266768742210747;

function AlertLog(log) {
    var sLog = log;

    var logType = ObjectType(log);
    if (DataType(log) == 'object' && (logType == 'JsObject' || logType == 'JsArray' || logType == 'XmElem')) {
        sLog = tools.object_to_text(log, 'json');
    }
    LogEvent(sLogName, sLog);
}

function main() {
    if (tools_web.is_true(courseDoc.custom_elems.ObtainChildByKey("acquaint_is_necessary").value)) {
        //Создание кадрового документа ознакомления

        // Антон
        // Дописал проверку обязательных полей
        var bCheckRequiredFiled = true;
        bCheckRequiredFiled = ToCheckField(OptInt(learningDoc.person_position_id), "должность", learningDoc.course_id, bCheckRequiredFiled);
        bCheckRequiredFiled = ToCheckField(OptInt(learningDoc.person_org_id), "организация", learningDoc.course_id, bCheckRequiredFiled);
        bCheckRequiredFiled = ToCheckField(OptInt(learningDoc.person_subdivision_id), "подразделение", learningDoc.course_id, bCheckRequiredFiled);

        if (bCheckRequiredFiled) {
            // Переписал получение нужного personnel_document_types по ID а не по коду
            oPersonelDocType = ArrayOptFirstElem(XQuery("for $elem in personnel_document_types where id = " + iPersonalDocumentTypeID + " return $elem"));
            if (oPersonelDocType == undefined) {
                oPersonelDocType = ArrayOptFirstElem(XQuery("for $elem in personnel_document_types where code = 'afl_acquaint' return $elem"));
            }
            if (oPersonelDocType != undefined) {
                // Антон конец

                docNewPersonnelDoc = OpenNewDoc('x-local://wtv/wtv_personnel_document.xmd');
                docNewPersonnelDoc.BindToDb(DefaultDb);

                docNewPersonnelDoc.TopElem.name = String('Ознакомление с ' + (courseDoc.name) + ' ' + learningDoc.person_fullname);
                docNewPersonnelDoc.TopElem.personnel_document_type_id = OptInt(oPersonelDocType.id);
                docNewPersonnelDoc.TopElem.state_id = String('process');

                docNewPersonnelDoc.TopElem.person_id = OptInt(learningDoc.person_id);
                docNewPersonnelDoc.TopElem.person_fullname = String(learningDoc.person_fullname);
                docNewPersonnelDoc.TopElem.person_position_id = OptInt(learningDoc.person_position_id);
                docNewPersonnelDoc.TopElem.person_position_name = String(learningDoc.person_position_name);
                docNewPersonnelDoc.TopElem.person_org_id = OptInt(learningDoc.person_org_id);
                docNewPersonnelDoc.TopElem.person_org_name = String(learningDoc.person_org_name);
                docNewPersonnelDoc.TopElem.person_subdivision_id = OptInt(learningDoc.person_subdivision_id);
                docNewPersonnelDoc.TopElem.person_subdivision_name = String(learningDoc.person_subdivision_name);

                //Антон
                //Добавил проверку на поле subdivision_code что бы не ломалось если код не заполнен
                if (!IsEmptyValue(learningDoc.person_subdivision_code)) {
                    docNewPersonnelDoc.TopElem.person_subdivision_code = String(learningDoc.person_subdivision_code);
                } else {
                    docNewPersonnelDoc.TopElem.person_subdivision_code = "";
                }
                //Антон конец

                docNewPersonnelDoc.TopElem.custom_elems.ObtainChildByKey("print_form_id").value = oPersonelDocType.print_form_id;
                docNewPersonnelDoc.TopElem.custom_elems.ObtainChildByKey("course_finish_date").value = OptDate(learningDoc.last_usage_date);
                docNewPersonnelDoc.TopElem.custom_elems.ObtainChildByKey("course_start_date").value = OptDate(learningDoc.start_learning_date);
                docNewPersonnelDoc.TopElem.custom_elems.ObtainChildByKey("course_id").value = OptInt(courseDoc.id);

                dCurrentDate = DateNewTime(Date(), 0, 0, 0);
                iDaysForEndDate = 5;
                docNewPersonnelDoc.TopElem.custom_elems.ObtainChildByKey("normative_date").value = DateOffset(dCurrentDate, (iDaysForEndDate * 24 * 60 * 60));

                docNewPersonnelDoc.Save();

                //Формирование ПФ
                sPrintFormText = tools.process_print_form(oPersonelDocType.print_form_id, docNewPersonnelDoc.TopElem.id);

                sTempUrl = ObtainTempFile('.pdf');
                PutFileData(UrlToFilePath(sTempUrl), sPrintFormText);

                docResource = OpenNewDoc('x-local://wtv/wtv_resource.xmd');
                docResource.BindToDb();
                docResource.TopElem.put_data(sTempUrl);
                docResource.Save();
                oPrintForm = docNewPersonnelDoc.TopElem.signature_files.AddChild();
                oPrintForm.id = docResource.TopElem.id;
                oPrintForm.file_url = docResource.TopElem.file_url;
                docNewPersonnelDoc.Save();
                DeleteUrl(sTempUrl);

                //Создание заявки
                oRequestType = ArrayOptFirstElem(XQuery("for $elem in request_types where code = 'afl_acquaint' return $elem"));
                docNewRequest = OpenNewDoc('x-local://wtv/wtv_request.xmd');
                docNewRequest.BindToDb(DefaultDb);

                docNewRequest.TopElem.request_type_id = OptInt(oRequestType.id);
                docNewRequest.TopElem.status_id = String("active");
                docNewRequest.TopElem.workflow_id = OptInt(oRequestType.workflow_id);
                docNewRequest.TopElem.person_id = OptInt(learningDoc.person_id);
                docNewRequest.TopElem.person_fullname = String(learningDoc.person_fullname);

                docNewRequest.TopElem.custom_elems.ObtainChildByKey("acquaint").value = docNewPersonnelDoc.TopElem.id;

                docNewRequest.Save();


                //Создание эцп
                docNewDigitalSignature = OpenNewDoc('x-local://wtv/wtv_digital_signature.xmd');
                docNewDigitalSignature.BindToDb(DefaultDb);

                docNewDigitalSignature.TopElem.name = String(learningDoc.person_fullname);
                docNewDigitalSignature.TopElem.person_id = OptInt(learningDoc.person_id);
                docNewDigitalSignature.TopElem.person_fullname = String(learningDoc.person_fullname);
                docNewDigitalSignature.TopElem.object_type = String("personnel_document");
                docNewDigitalSignature.TopElem.object_id = OptInt(docNewPersonnelDoc.TopElem.id);
                docNewDigitalSignature.TopElem.create_date = dCurrentDate;

                docNewDigitalSignature.Save();

                //Запуск ДО
                /* curObject = docNewRequest.TopElem;
                curObjectID = OptInt(docNewRequest.TopElem.id);
                tools.workflow_action_process(docNewRequest, "get_next_stage", docNewRequest.TopElem.workflow_id,tools.open_doc(docNewRequest.TopElem.workflow_id).TopElem,null,false);
                docNewRequest.Save()  */
            } else {
                AlertLog("Отсутствует personnel_document_type с кодом afl_acquaint");
            }
        }
    }
    return;
}

//Антон
//Фукция проверки обязательных полей с выводом в лог если поле не заполнено
function ToCheckField(fieldValue, sFieldName, ID, bCheckField) {
    if (IsEmptyValue(fieldValue) || fieldValue == 0) {
        bCheckField = false;
        AlertLog("Не заполнено поле " + sFieldName + " для незаконченного курса: " + ID);
    }
    return bCheckField;
}
//Антон конец


EnableLog(sLogName, true);

try {
    AlertLog("Системное событие Назначение ознакомления при завершении курса начало работу");
    main();
    AlertLog("Системное событие Назначение ознакомления при завершении курса закончило работу");
}
catch (e) {
    AlertLog(e);
}

EnableLog(sLogName, false);
