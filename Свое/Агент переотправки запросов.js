function AlertLog(log, type) {
	var sLog = log

	var logType = ObjectType(log)
	if (DataType(log) == 'object' && (logType == 'JsObject' || logType == 'JsArray' || logType == 'XmElem'))
		sLog = tools.object_to_text(log, 'json')

	LogEvent(sLogName, sLog);
}

function main()
{
	var libParam = tools.get_params_code_library('libAflIntegration');
	var iSend = OptInt(libParam.GetOptProperty("sSendDataObjectType", 7033397371138841269), 7033397371138841269);
	var iResendHours = OptInt(Param.iResendHours,72)
	aSendRequests = ArraySelectAll(XQuery("for $elem in object_datas where object_data_type_id="+iSend+" and status_id='ignore' return $elem"))
	for(oSendRequests in aSendRequests)
	{
		try
		{
			dToday = Date()
			dToday = DateNewTime(dToday,Hour(dToday),0,0)
			dRequestSendDate = DateNewTime(oSendRequests.start_date,Hour(oSendRequests.start_date),0,0)
			if(DateDiff(DateOffset(dRequestSendDate,iResendHours*(60*60)),dToday)>=0)
			{
				docSendRequests = tools.open_doc(oSendRequests.id)
				if(docSendRequests!=undefined)
				{
					teSendRequests = docSendRequests.TopElem
					aParams = ParseJson(teSendRequests.data_str)
					aParams.push(OptInt(oSendRequests.id))
					sFunction = String(teSendRequests.data)
					if(sFunction=='CreateEdmDocumentCard') {
                        oParam = ArrayOptFirstElem(aParams);
                        if (oParam != undefined) {
                            for (oFile in oParam.Files) {
                                oDocumentID = ArrayOptFirstElem(XQuery("for $elem in personnel_documents where code = '" + oFile.DocumentNumber + "' return $elem"));
                                if(oDocumentID != undefined) {
                                    docDocument = tools.open_doc(oDocumentID.id);
                                    if (docDocument != undefined) {
                                        teDocument = docDocument.TopElem;
                                        oSignatureFile = ArrayOptFirstElem(teDocument.signature_files);
                                        if (oSignatureFile != undefined) {
                                            oFile.FileContent = Base64Encode(LoadUrlData(oSignatureFile.file_url));
                                        }
                                    }
                                }
                            }
                        }
                    }
					newQuery = tools.call_code_library_method("libAflIntegrationTessa", sFunction, aParams);
					if(newQuery.error==0)
					{
						AlertLog("Запрос '"+sFunction+"' с id '"+oSendRequests.id+"' успешно доотправлен")
						switch(sFunction)
						{
							case "Login":
								
								oSetTessaTokenRes = tools.call_code_library_method("libAflIntegrationTessa", 'SetTessaToken', [newQuery.result]);
								if(oSetTessaTokenRes!=0)
									AlertLog("Не удалось записать токен. Возникла ошибка: "+oSetTessaTokenRes.errorText)
								break;
						}
					}
					else
						AlertLog("Запрос '"+sFunction+"' с id '"+oSendRequests.id+"'  не успешно доотправлен с ошибкой: "+ newQuery.errorText)
				}
				else
				{
					AlertLog("Не удалось открыть документ запроса с id '"+oSendRequests.id+"'")
				}
			}
			else
			{
				//TODO Добавить отправку уведомления администратору
			}
		}
		catch(e)
		{
			AlertLog("Не удалось обработать запись '"+oSendRequests.id+"' Возникла ошибка: "+e)
		}
	}
}

var sLogName = String('Afl_Request_Resending_LOG')
var bLogActive = true
EnableLog(sLogName, bLogActive);

try 
{
    main()
}
catch(e) {
    AlertLog("Агент переотправки запросов закончился с ошибкой: "+e)
}

EnableLog(sLogName, false);