function AlertLog(log) {
	var sLog = log;
	logType = ObjectType(log);
	if (DataType(log) == "object" && (logType == "JsObject" || logType == "JsArray" || logType == "XmElem"))
		sLog = tools.object_to_text(log, "json");
	LogEvent(sLogName, sLog);
}

var sRequestTypeCode = "afl_annual_budget_request";
var sBossTypeCode = "sp_responsible";
var sNotificationCode = "afl_annual_campaign_start";

function PushUniqueInt(aArray, iValue) {
	if (iValue == undefined) return;
	if (ArrayOptFindByKey(aArray, iValue, "id") == undefined) {
		oItem = {};
		oItem.id = iValue;
		aArray.push(oItem);
	}
}

// Поднимается по parent_object_id до подразделения верхнего уровня (без parent_object_id).
// Если по пути встречается уже посещённое id — иерархия зациклена (найдены поломанные данные:
// например, подразделение и его "родитель" ссылаются друг на друга как parent_object_id) —
// в этом случае возвращает undefined, чтобы вызывающий код не считал такое подразделение валидным СП
function GetTopAncestorID(iSubID, aSubdivisions) {
	aVisitedIDs = [];
	iCurSubID = iSubID;
	while (iCurSubID != undefined) {
		if (ArrayOptFindByKey(aVisitedIDs, iCurSubID, "id") != undefined) {
			AlertLog(
				"Обнаружена рекурсия в иерархии подразделений (цикл через id=" +
					iCurSubID +
					"), стартовое подразделение id=" +
					iSubID
			);
			return undefined;
		}
		oVisited = {};
		oVisited.id = iCurSubID;
		aVisitedIDs.push(oVisited);

		oCurSub = ArrayOptFindByKey(aSubdivisions, iCurSubID, "id");
		if (oCurSub == undefined) return iCurSubID;

		iParentID = OptInt(oCurSub.parent_object_id);
		if (iParentID == undefined) return iCurSubID;
		iCurSubID = iParentID;
	}
	return iCurSubID;
}

// Определяет, является ли подразделение СП (а не структурной единицей), по глубине вложенности:
// СП — это подразделение 2-го уровня (родитель — подразделение верхнего уровня, у которого самого нет parent_object_id),
// либо подразделение верхнего уровня (нет parent_object_id), если у него самого нет дочерних подразделений.
// Подразделения глубже 2-го уровня — структурные единицы (СЕ), отдельные заявки на них не создаются.
// Перед классификацией проверяется, что иерархия до верхнего уровня не зациклена (см. GetTopAncestorID) —
// без этой проверки поломанные (циклические) данные могли ошибочно классифицироваться как СП
function IsSPSubdivision(oSub, aSubdivisions) {
	iSubID = OptInt(oSub.id);
	iParentID = OptInt(oSub.parent_object_id);
	if (iParentID == undefined) {
		bHasChildren = ArrayOptFind(aSubdivisions, "OptInt(This.parent_object_id) == " + iSubID) != undefined;
		return !bHasChildren;
	}

	oParentSub = ArrayOptFindByKey(aSubdivisions, iParentID, "id");
	if (oParentSub == undefined) return false;
	if (GetTopAncestorID(iSubID, aSubdivisions) == undefined) return false;
	return OptInt(oParentSub.parent_object_id) == undefined;
}

// Собирает ID подразделения-СП и всех его потомков (структурных единиц любого уровня вложенности) —
// сотрудники СЕ учитываются в заявке своего СП
function GetSubdivisionSubtreeIDs(iSubID, aSubdivisions) {
	aResult = [];
	oRoot = {};
	oRoot.id = iSubID;
	aResult.push(oRoot);

	iIndex = 0;
	while (iIndex < ArrayCount(aResult)) {
		oCur = aResult[iIndex];
		iIndex = iIndex + 1;

		aChildren = ArraySelect(aSubdivisions, "OptInt(This.parent_object_id) == " + oCur.id);
		for (oChild in aChildren) {
			iChildID = OptInt(oChild.id);
			if (iChildID == undefined) continue;
			if (ArrayOptFindByKey(aResult, iChildID, "id") != undefined) continue;
			oItem = {};
			oItem.id = iChildID;
			aResult.push(oItem);
		}
	}

	return aResult;
}

// Ищет ВСЕХ руководителей подразделения нужного типа (iBossTypeID) на первом уровне, где нашёлся хотя бы один:
// сначала для самого подразделения, если не найдено ни одного — поднимается вверх по parent_object_id.
// Используется только для поиска РП (main_boss) — для ответственных СП подъём по иерархии не делается,
// т.к. заявки создаются только на подразделения, которые сами являются СП (см. IsSPSubdivision)
function FindResponsibleManagersUp(iSubID, aSubdivisions, aFuncManagers, iBossTypeID) {
	aVisitedIDs = [];
	iCurSubID = iSubID;
	while (iCurSubID != undefined) {
		if (ArrayOptFindByKey(aVisitedIDs, iCurSubID, "id") != undefined) break;
		oVisited = {};
		oVisited.id = iCurSubID;
		aVisitedIDs.push(oVisited);

		aManagers = ArraySelect(
			aFuncManagers,
			"OptInt(This.object_id) == " + iCurSubID + " && OptInt(This.boss_type_id) == " + iBossTypeID
		);
		if (ArrayOptFirstElem(aManagers) != undefined) return aManagers;

		oParentSub = ArrayOptFindByKey(aSubdivisions, iCurSubID, "id");
		iCurSubID = oParentSub != undefined ? OptInt(oParentSub.parent_object_id) : undefined;
	}
	return [];
}

// Создаёт заявку на годовой бюджет по подразделению и связанные с ней записи данных (cc_annual_budget_request_data) по каждой найденной учебной программе
function CreateBudgetRequest(
	oSubData,
	iResponsiblePersonID,
	sSubResponsibleIDs,
	iMainBossPersonID,
	iRequestTypeID,
	teRequestType,
	aEducationMethodsCatalog,
	aEducationMethodCosts
) {
	docRequest = tools.new_doc_by_name("request");
	docRequest.BindToDb();
	tools.common_filling("request_type", docRequest.TopElem, iRequestTypeID, teRequestType);
	docRequest.TopElem.person_id = iResponsiblePersonID;
	tools.common_filling("collaborator", docRequest.TopElem, iResponsiblePersonID);
	docRequest.TopElem.status_id = "active";

	oWorkflowField = docRequest.TopElem.workflow_fields.AddChild();
	oWorkflowField.name = "sub_responsible";
	oWorkflowField.value = sSubResponsibleIDs;

	oWorkflowField = docRequest.TopElem.workflow_fields.AddChild();
	oWorkflowField.name = "main_boss";
	oWorkflowField.value = iMainBossPersonID;

	oWorkflowField = docRequest.TopElem.workflow_fields.AddChild();
	oWorkflowField.name = "responsible";
	oWorkflowField.value = "";

	oWorkflowField = docRequest.TopElem.workflow_fields.AddChild();
	oWorkflowField.name = "main_boss_comment";
	oWorkflowField.value = "";

	oWorkflowField = docRequest.TopElem.workflow_fields.AddChild();
	oWorkflowField.name = "dku_comment";
	oWorkflowField.value = "";

	// Связь заявка -> подразделение через общий механизм type/object_id (независимо от того, есть ли записи cc_annual_budget_request_data) —
	// нужна, чтобы находить уже созданные за год заявки, даже если по подразделению не нашлось ни одной учебной программы
	docRequest.TopElem.type = "subdivision";
	docRequest.TopElem.object_id = oSubData.id;
	docRequest.TopElem.object_name = oSubData.name;
	docRequest.Save();

	sRequestCode = String(docRequest.TopElem.code);

	for (oProgram in oSubData.education_method_ids) {
		oEMCatalog = ArrayOptFindByKey(aEducationMethodsCatalog, oProgram.id, "id");
		oEMCost = ArrayOptFindByKey(aEducationMethodCosts, oProgram.id, "id");
		iEducationOrgID = oEMCatalog != undefined ? OptInt(oEMCatalog.education_org_id) : undefined;
		rCost = oEMCost != undefined ? oEMCost.cost : undefined;

		sDataName = "Данные по заявке " + sRequestCode;
		if (oEMCatalog != undefined && String(oEMCatalog.name) != "")
			sDataName = sDataName + " - " + String(oEMCatalog.name);

		docData = tools.new_doc_by_name("cc_annual_budget_request_data");
		docData.TopElem.name = sDataName;
		docData.TopElem.request = docRequest.DocID;
		docData.TopElem.subdivision = oSubData.id;
		if (iEducationOrgID != undefined) docData.TopElem.education_center = iEducationOrgID;
		docData.TopElem.education_method_id = oProgram.id;
		if (rCost != undefined) docData.TopElem.price = StrReal(rCost, 2);
		docData.BindToDb();
		docData.Save();
	}

	return docRequest.DocID;
}

function CreateAnnualBudgetRequests() {
	oRequestType = ArrayOptFirstElem(
		XQuery(
			"for $rt in request_types where $rt/code = '" +
				sRequestTypeCode +
				"' return $rt/Fields('id','name','workflow_id')"
		)
	);
	if (oRequestType == undefined) {
		AlertLog('Не найден тип заявки с кодом "' + sRequestTypeCode + '"');
		return;
	}

	docRequestTypeDoc = tools.open_doc(OptInt(oRequestType.id));
	if (docRequestTypeDoc == undefined) {
		AlertLog("Не удалось открыть документ типа заявки id = " + oRequestType.id);
		return;
	}

	oBossType = ArrayOptFirstElem(
		XQuery("for $bt in boss_types where $bt/code = '" + sBossTypeCode + "' return $bt/Fields('id','name')")
	);
	if (oBossType == undefined) {
		AlertLog('Не найден тип руководства с кодом "' + sBossTypeCode + '"');
		return;
	}

	iMainBossTypeID = OptInt(tools.call_code_library_method("libAflMain", "GetMainBossTypeID", []));
	if (iMainBossTypeID == undefined) {
		AlertLog("Не удалось определить ID основного типа руководителя (GetMainBossTypeID)");
		return;
	}

	iYear = OptInt(StrLeftRange(tools.date_str(), 4));
	if (iYear == undefined) {
		AlertLog("Не удалось определить текущий год");
		return;
	}

	iOrgID = OptInt(Param.sOrgID);
	if (iOrgID == undefined) {
		AlertLog('Не задан параметр агента sOrgID (ID организации)');
		return;
	}

	// ---- Пакетная загрузка справочных данных ----

	aSubdivisions = ArraySelectAll(
		XQuery(
			"for $s in subdivisions where $s/status = 'active' and $s/is_disbanded != true() and $s/org_id = " +
				iOrgID +
				" return $s/Fields('id','code','name','parent_object_id')"
		)
	);
	aCollaborators = ArraySelectAll(
		XQuery(
			"for $c in collaborators where $c/is_dismiss != true() return $c/Fields('id','position_id','position_parent_id')"
		)
	);
	aPositions = ArraySelectAll(
		XQuery(
			"for $p in positions where $p/is_position_finished != true() return $p/Fields('id','position_common_id')"
		)
	);

	// Обязательные квалификации типовых должностей — из материализованного каталога object_requirements
	// (строится платформой из поля position_common.qualifications при сохранении типовой должности)
	aObligatoryRequirements = ArraySelectAll(
		XQuery(
			"for $o in object_requirements where $o/object_type = 'position_common' and $o/requirement_type = 'qualification' and $o/obligatory = true() return $o/Fields('object_id','requirement_object_id')"
		)
	);

	aFuncManagers = ArraySelectAll(
		XQuery(
			"for $f in func_managers where $f/catalog = 'subdivision' return $f/Fields('object_id','person_id','boss_type_id')"
		)
	);

	// Подразделения, для которых заявка данного типа уже создавалась в текущем году.
	// Связь заявка -> подразделение берётся из type/object_id самой заявки (а не из cc_annual_budget_request_data),
	// т.к. по подразделению может не найтись ни одной учебной программы, и тогда записей данных не будет вовсе
	sYearStart = "01.01." + iYear;
	sYearEnd = "01.01." + (iYear + 1);
	aSubdivisionsWithRequest = ArraySelectAll(
		XQuery(
			"for $r in requests where $r/request_type_id = " +
				OptInt(oRequestType.id) +
				" and $r/type = 'subdivision' and $r/create_date >= date('" +
				sYearStart +
				"') and $r/create_date < date('" +
				sYearEnd +
				"') return $r/Fields('id','object_id')"
		)
	);

	AlertLog(
		"Подразделений: " +
			ArrayCount(aSubdivisions) +
			" с уже созданной заявкой за " +
			iYear +
			" год: " +
			ArrayCount(aSubdivisionsWithRequest)
	);

	// ---- Для каждого подразделения: уникальные типовые должности его сотрудников -> уникальные обязательные квалификации ----

	aSubdivisionData = [];
	for (oSub in aSubdivisions) {
		iSubID = OptInt(oSub.id);
		if (iSubID == undefined) continue;
		if (!IsSPSubdivision(oSub, aSubdivisions)) continue;

		aSubtreeIDs = GetSubdivisionSubtreeIDs(iSubID, aSubdivisions);
		sSubtreeCond = "";
		for (oSubtreeID in aSubtreeIDs) {
			if (sSubtreeCond != "") sSubtreeCond = sSubtreeCond + " || ";
			sSubtreeCond = sSubtreeCond + "OptInt(This.position_parent_id) == " + oSubtreeID.id;
		}

		aPositionCommonIDs = [];
		aSubCollaborators = ArraySelect(aCollaborators, sSubtreeCond);
		for (oColl in aSubCollaborators) {
			iPositionID = OptInt(oColl.position_id);
			if (iPositionID == undefined) continue;
			oPosition = ArrayOptFindByKey(aPositions, iPositionID, "id");
			if (oPosition == undefined) continue;
			PushUniqueInt(aPositionCommonIDs, OptInt(oPosition.position_common_id));
		}

		aQualificationIDs = [];
		for (oPosCommon in aPositionCommonIDs) {
			aReqs = ArraySelect(aObligatoryRequirements, "OptInt(This.object_id) == " + oPosCommon.id);
			for (oReq in aReqs) {
				PushUniqueInt(aQualificationIDs, OptInt(oReq.requirement_object_id));
			}
		}

		oSubData = {};
		oSubData.id = iSubID;
		oSubData.name = String(oSub.name);
		oSubData.qualification_ids = aQualificationIDs;
		oSubData.education_method_ids = [];
		aSubdivisionData.push(oSubData);
	}

	AlertLog("СП для обработки: " + ArrayCount(aSubdivisionData));

	// ---- Квалификации -> учебные программы ----

	aAllQualificationIDs = [];
	for (oSubData in aSubdivisionData) {
		for (oQualID in oSubData.qualification_ids) {
			PushUniqueInt(aAllQualificationIDs, oQualID.id);
		}
	}

	aQualificationEduMethods = [];
	for (oQual in aAllQualificationIDs) {
		try {
			docQual = tools.open_doc(oQual.id);
			if (docQual == undefined) continue;

			aEduMethodIDs = [];
			for (oEduMethod in docQual.TopElem.education_methods) {
				PushUniqueInt(aEduMethodIDs, OptInt(oEduMethod.education_method_id));
			}

			oEntry = {};
			oEntry.qualification_id = oQual.id;
			oEntry.education_method_ids = aEduMethodIDs;
			aQualificationEduMethods.push(oEntry);
		} catch (err) {
			AlertLog("Ошибка при открытии квалификации " + oQual.id + ": " + err);
		}
	}

	for (oSubData in aSubdivisionData) {
		aProgramIDs = [];
		for (oQualID in oSubData.qualification_ids) {
			oMapping = ArrayOptFindByKey(aQualificationEduMethods, oQualID.id, "qualification_id");
			if (oMapping == undefined) continue;
			for (oEM in oMapping.education_method_ids) {
				PushUniqueInt(aProgramIDs, oEM.id);
			}
		}
		oSubData.education_method_ids = aProgramIDs;
	}

	// ---- Учебные программы: обучающая организация и стоимость за 1 человека ----

	aAllEducationMethodIDs = [];
	for (oEntry in aQualificationEduMethods) {
		for (oEM in oEntry.education_method_ids) {
			PushUniqueInt(aAllEducationMethodIDs, oEM.id);
		}
	}

	aEducationMethodsCatalog = [];
	if (ArrayOptFirstElem(aAllEducationMethodIDs) != undefined) {
		sIDs = ArrayMerge(aAllEducationMethodIDs, "This.id", ", ");
		// Если суммарное число уникальных учебных программ превысит ~500 (лимит MatchSome),
		// заменить на полную загрузку education_methods и фильтрацию через ArraySelect
		aEducationMethodsCatalog = ArraySelectAll(
			XQuery(
				"for $e in education_methods where MatchSome($e/id, (" +
					sIDs +
					")) return $e/Fields('id','name','education_org_id')"
			)
		);
	}

	aEducationMethodCosts = [];
	for (oEM in aAllEducationMethodIDs) {
		try {
			docEM = tools.open_doc(oEM.id);
			if (docEM == undefined) continue;
			oEntry = {};
			oEntry.id = oEM.id;
			oEntry.cost = OptReal(docEM.TopElem.cost);
			aEducationMethodCosts.push(oEntry);
		} catch (err) {
			AlertLog("Ошибка при открытии учебной программы " + oEM.id + ": " + err);
		}
	}

	// ---- Создание заявок по подразделениям (кроме тех, где заявка на этот год уже есть) ----

	aNotifyQueue = [];
	iCreatedCount = 0;

	for (oSubData in aSubdivisionData) {
		if (ArrayOptFind(aSubdivisionsWithRequest, "OptInt(This.object_id) == " + oSubData.id) != undefined) continue;

		aSPManagers = ArraySelect(
			aFuncManagers,
			"OptInt(This.object_id) == " + oSubData.id + " && OptInt(This.boss_type_id) == " + OptInt(oBossType.id)
		);
		oSPManager = ArrayOptFirstElem(aSPManagers);
		if (oSPManager == undefined) {
			AlertLog(
				'Для подразделения "' +
					oSubData.name +
					'" (id=' +
					oSubData.id +
					') не найден руководитель с типом руководства "' +
					sBossTypeCode +
					'" непосредственно на этом СП. Заявка не создана.'
			);
			continue;
		}
		sSubResponsibleIDs = ArrayMerge(aSPManagers, "This.person_id", ";");

		oMainBossManagers = FindResponsibleManagersUp(oSubData.id, aSubdivisions, aFuncManagers, iMainBossTypeID);
		oMainBossManager = ArrayOptFirstElem(oMainBossManagers);
		if (oMainBossManager == undefined) {
			AlertLog(
				'Для подразделения "' +
					oSubData.name +
					'" (id=' +
					oSubData.id +
					") не найден РП (основной руководитель) ни у самого подразделения, ни у вышестоящих. Заявка не создана."
			);
			continue;
		}

		try {
			iRequestID = CreateBudgetRequest(
				oSubData,
				OptInt(oSPManager.person_id),
				sSubResponsibleIDs,
				OptInt(oMainBossManager.person_id),
				OptInt(oRequestType.id),
				docRequestTypeDoc.TopElem,
				aEducationMethodsCatalog,
				aEducationMethodCosts
			);
			iCreatedCount++;

			for (oSPManagerNotify in aSPManagers) {
				oNotify = {};
				oNotify.person_id = OptInt(oSPManagerNotify.person_id);
				oNotify.request_id = iRequestID;
				aNotifyQueue.push(oNotify);
			}

			AlertLog(
				"Создана заявка id=" +
					iRequestID +
					' для подразделения "' +
					oSubData.name +
					'", ответственных СП: ' +
					ArrayCount(aSPManagers) +
					", программ: " +
					ArrayCount(oSubData.education_method_ids)
			);
		} catch (err) {
			AlertLog(
				'Ошибка при создании заявки для подразделения "' + oSubData.name + '" (id=' + oSubData.id + "): " + err
			);
		}
	}

	// Уведомления ответственным отправляются после того, как все заявки по всем подразделениям созданы.
	// Один человек может быть ответственным СП сразу в нескольких заявках — уведомление отправляется ему один раз
	aUniqueNotifyQueue = ArraySelectDistinct(aNotifyQueue, "OptInt(This.person_id)");

	for (oNotify in aUniqueNotifyQueue) {
		try {
			tools.call_code_library_method('libAflMain', 'CreateNotification', [sNotificationCode, oNotify.person_id, "", oNotify.request_id]);
		} catch (err) {
			AlertLog(
				"Ошибка при отправке уведомления по заявке id=" +
					oNotify.request_id +
					" сотруднику " +
					oNotify.person_id +
					": " +
					err
			);
		}
	}

	AlertLog("Готово. Создано заявок: " + iCreatedCount + " из " + ArrayCount(aSubdivisionData));
}

function main() {
	AlertLog("Агент Начала заявочной кампании начал работу");
	CreateAnnualBudgetRequests();
	AlertLog("Агент Начала заявочной кампании завершил работу");
}

var sLogName = String("afl_annual_budget_request_agent");
var bLogActive = true;
EnableLog(sLogName, bLogActive);

try {
	main();
} catch (e) {
	AlertLog(e);
}

EnableLog(sLogName, false);