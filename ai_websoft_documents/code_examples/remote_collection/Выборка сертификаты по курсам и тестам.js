// Выборка: сертификаты по курсам и тестам
// Столбцы: object_name (название курса/теста), finish_date (дата завершения), object_type (Курс / Тест)
//
// Алгоритм:
// 1. Запрашиваем заявки двух типов (afl_acquaint + «Сертификат по курсу» и afl_certificate)
// 2. Открываем документ каждой заявки для получения кастомного поля certificate
//    (допустимое исключение: custom_elems недоступны в каталоге заявок, выборка мала)
// 3. Открываем кадровые документы для получения ID курса/теста и даты завершения
//    (допустимое исключение: данных нет в каталоге, выборка мала)
// 4. Собираем ID курсов / тестов → батчем загружаем названия через MatchSome
// 5. Формируем итоговый массив строк → записываем в RESULT

ERROR   = 0;
MESSAGE = "";
RESULT  = [];

var sLogName = "certificate_collection_log";

function AlertLog(log)
{
	var sLog = log;
	var logType = ObjectType(log);
	if (DataType(log) == 'object' && (logType == 'JsObject' || logType == 'JsArray' || logType == 'XmElem'))
		sLog = tools.object_to_text(log, 'json');
	LogEvent(sLogName, sLog);
}

function main()
{
	var aResult       = [{
        "id": OptInt(Random(0, 9999)),
        "div": "<div class='header__tr'><div class='header__cell cell'><span class='header__title'>Название курса/теста</span></div><div class='header__cell cell'><span class='header__title'>Дата завершения</span></div><div class='header__cell cell'><span class='header__title'>Курс / Тест</span></div></div>"
    }];
	var aRequestItems = []; // JS-массив: [ { requestId, certDocId, type } ]

	// ── 1. Сертификаты по курсам ──────────────────────────────────────────
	// Тип заявки — afl_acquaint, название содержит «Сертификат по курсу».
	var oAcquaintType = ArrayOptFirstElem(XQuery(
		"for $elem in request_types where $elem/code = 'afl_acquaint' return $elem/Fields('id')"
	));

	if (oAcquaintType != undefined)
	{
		var iAcquaintTypeId = OptInt(oAcquaintType.id);
		if (iAcquaintTypeId != undefined)
		{
			var aCourseCertReqs = XQuery(
				"for $r in requests " +
				"where $r/request_type_id = " + iAcquaintTypeId + " and $r/person_id = " + curUserID + " " +
				"order by $r/create_date descending " +
				"return $r/Fields('id')"
			);

			for (oCourseCertReq in aCourseCertReqs)
			{
				try
				{
					docCourseCertReq = tools.open_doc(OptInt(oCourseCertReq.id));
					if (docCourseCertReq == undefined) continue;
					iCertDocId = OptInt(docCourseCertReq.TopElem.custom_elems.ObtainChildByKey("certificate").value);
					if (iCertDocId != undefined)
						aRequestItems.push({ requestId: OptInt(oCourseCertReq.id), certDocId: iCertDocId, type: "Курс" });
				}
				catch (e)
				{
					AlertLog("Ошибка открытия заявки (курс) " + OptInt(oCourseCertReq.id) + ": " + e);
				}
			}
		}
	}

	// ── 2. Сертификаты по тестам ──────────────────────────────────────────
	// Тип заявки — afl_certificate.
	var oCertType = ArrayOptFirstElem(XQuery(
		"for $elem in request_types where $elem/code = 'afl_certificate' return $elem/Fields('id')"
	));

	if (oCertType != undefined)
	{
		var iCertTypeId = OptInt(oCertType.id);
		if (iCertTypeId != undefined)
		{
			var aTestCertReqs = XQuery(
				"for $r in requests " +
				"where $r/request_type_id = " + iCertTypeId + " and $r/person_id = " + curUserID + " " +
				"order by $r/create_date descending " +
				"return $r/Fields('id')"
			);

			for (oTestCertReq in aTestCertReqs)
			{
				try
				{
					docTestCertReq = tools.open_doc(OptInt(oTestCertReq.id));
					if (docTestCertReq == undefined) continue;
					iCertDocId = OptInt(docTestCertReq.TopElem.custom_elems.ObtainChildByKey("certificate").value);
					if (iCertDocId != undefined)
						aRequestItems.push({ requestId: OptInt(oTestCertReq.id), certDocId: iCertDocId, type: "Тест" });
				}
				catch (e)
				{
					AlertLog("Ошибка открытия заявки (тест) " + OptInt(oTestCertReq.id) + ": " + e);
				}
			}
		}
	}

	if (!aRequestItems.length) {
		aResult.push({
            "id": OptInt(Random(0, 9999)),
            "div": "<div class='no_data_tr'><svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M19.5 14.25V11.625C19.5 9.76104 17.989 8.25 16.125 8.25H14.625C14.0037 8.25 13.5 7.74632 13.5 7.125V5.625C13.5 3.76104 11.989 2.25 10.125 2.25H8.25M13.4812 15.7312L15 17.25M10.5 2.25H5.625C5.00368 2.25 4.5 2.75368 4.5 3.375V19.875C4.5 20.4963 5.00368 21 5.625 21H18.375C18.9963 21 19.5 20.4963 19.5 19.875V11.25C19.5 6.27944 15.4706 2.25 10.5 2.25ZM14.25 13.875C14.25 15.3247 13.0747 16.5 11.625 16.5C10.1753 16.5 9 15.3247 9 13.875C9 12.4253 10.1753 11.25 11.625 11.25C13.0747 11.25 14.25 12.4253 14.25 13.875Z' stroke='#4F5D74' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/></svg><span class='no_data_text'>В этой категории пока нет документов</span></div>"
        });
		return aResult;
	}

	// ── 3. Открываем кадровые документы, собираем ID курсов/тестов и даты ─
	// Допустимое исключение: данные недоступны через каталог, выборка мала.
	// Дата завершения берётся из кадрового документа (course_finish_date / test_finish_date),
	// а не из заявки, так как там хранится реальная дата прохождения курса/теста.
	var aCertDocInfos = []; // [ { id (requestId), date, type, courseId, assessId } ]
	var aCourseIds    = [];
	var aAssessIds    = [];

	for (oRequestItem in aRequestItems)
	{
		oCertDocInfo = { id: oRequestItem.requestId, date: undefined, type: oRequestItem.type, courseId: undefined, assessId: undefined };

		try
		{
			docCert = tools.open_doc(oRequestItem.certDocId);
			if (docCert == undefined) continue;

			if (oRequestItem.type == "Курс")
			{
				iCourseId = OptInt(docCert.TopElem.custom_elems.ObtainChildByKey("course_id").value);
				if (iCourseId != undefined)
				{
					oCertDocInfo.courseId = iCourseId;
					aCourseIds.push(iCourseId);
				}
				oCertDocInfo.date = OptDate(docCert.TopElem.custom_elems.ObtainChildByKey("course_finish_date").value);
			}
			else
			{
				iAssessId = OptInt(docCert.TopElem.custom_elems.ObtainChildByKey("assessment_id").value);
				if (iAssessId != undefined)
				{
					oCertDocInfo.assessId = iAssessId;
					aAssessIds.push(iAssessId);
				}
				oCertDocInfo.date = OptDate(docCert.TopElem.custom_elems.ObtainChildByKey("test_finish_date").value);
			}
		}
		catch (e)
		{
			AlertLog("Ошибка открытия кадрового документа " + oRequestItem.certDocId + ": " + e);
		}

		aCertDocInfos.push(oCertDocInfo);
	}

	// ── 4. Батчевая загрузка названий курсов и тестов ─────────────────────
	// ArraySelectAll нужен для корректной работы ArrayOptFind по XmElem-массиву
	var aCourseData = [];
	if (aCourseIds.length > 0)
	{
		aCourseData = ArraySelectAll(XQuery(
			"for $c in courses where MatchSome($c/id, (" + aCourseIds.join(", ") + ")) " +
			"return $c/Fields('id', 'name')"
		));
	}

	var aAssessData = [];
	if (aAssessIds.length > 0)
	{
		aAssessData = ArraySelectAll(XQuery(
			"for $a in assessments where MatchSome($a/id, (" + aAssessIds.join(", ") + ")) " +
			"return $a/Fields('id', 'title')"
		));
	}

	// ── 5. Формирование итоговых строк ────────────────────────────────────
	for (oCertDocInfo in aCertDocInfos)
		{
			sObjName = "";

			if (oCertDocInfo.type == "Курс" && oCertDocInfo.courseId != undefined)
			{
				oCourse = ArrayOptFind(aCourseData, "OptInt(This.id) == " + oCertDocInfo.courseId);
				if (oCourse != undefined)
					sObjName = String(oCourse.name);
			}
			else if (oCertDocInfo.type == "Тест" && oCertDocInfo.assessId != undefined)
			{
				oAssess = ArrayOptFind(aAssessData, "OptInt(This.id) == " + oCertDocInfo.assessId);
				if (oAssess != undefined)
					sObjName = String(oAssess.title);
			}

			// aResult.push({
			// 	id:          oCertDocInfo.id,
			// 	object_name: sObjName,
			// 	finish_date: StrDate(oCertDocInfo.date, false),
			// 	object_type: oCertDocInfo.type
			// });
			sLink = "/certificate/" + oCertDocInfo.id;
			aResult.push({
				"id": oCertDocInfo.id,
				"div": "<div class='content__tr active-requests'><div class='content__cell cell'><span class='content__title'><a href='" + String(sLink) + "'>" + String(sObjName) + "</a></span></div><div class='content__cell cell'><span class='content__title'>" + (oCertDocInfo.date != undefined ? StrDate(oCertDocInfo.date, false) : "") + "</span></div><div class='content__cell cell'><span class='content__title'>" + String(oCertDocInfo.type) + "</span></div></div>",
			});
		}
	if (!aCertDocInfos.length) {
		aResult.push({
            "id": OptInt(Random(0, 9999)),
            "div": "<div class='no_data_tr'><svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M19.5 14.25V11.625C19.5 9.76104 17.989 8.25 16.125 8.25H14.625C14.0037 8.25 13.5 7.74632 13.5 7.125V5.625C13.5 3.76104 11.989 2.25 10.125 2.25H8.25M13.4812 15.7312L15 17.25M10.5 2.25H5.625C5.00368 2.25 4.5 2.75368 4.5 3.375V19.875C4.5 20.4963 5.00368 21 5.625 21H18.375C18.9963 21 19.5 20.4963 19.5 19.875V11.25C19.5 6.27944 15.4706 2.25 10.5 2.25ZM14.25 13.875C14.25 15.3247 13.0747 16.5 11.625 16.5C10.1753 16.5 9 15.3247 9 13.875C9 12.4253 10.1753 11.25 11.625 11.25C13.0747 11.25 14.25 12.4253 14.25 13.875Z' stroke='#4F5D74' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/></svg><span class='no_data_text'>В этой категории пока нет документов</span></div>"
        });
	}
	return aResult;
}


EnableLog(sLogName, true);

try
{
	AlertLog("Выборка сертификатов начала работу");
	RESULT = main();
	AlertLog("Выборка сертификатов завершила работу, строк: " + RESULT.length);
}
catch (e)
{
	ERROR   = 1;
	MESSAGE = String(e);
	AlertLog(e);
}

EnableLog(sLogName, false);