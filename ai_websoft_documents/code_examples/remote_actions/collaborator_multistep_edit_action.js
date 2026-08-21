/*
Описание (из README + core_rules):
- Пример удаленного действия для запуска через ms_tools.eval_remote_action(...).
- Контракт удаленного действия: ERROR / MESSAGE / RESULT.
- Поддержан сценарий ms_tools: первый вызов возвращает display_form,
  затем приходит command=submit_form с заполненными form_fields.
- Многошаговый каскад: подразделение -> ПШР -> должность.
- Для выборок используем XQuery по каталогам, для сохранения — tools.open_doc по сотруднику.

Параметры (wvars) удалённого действия в администраторе:
  OBJECT_ID             — ID сотрудника (заполняется рантаймом)
  SELECTED_OBJECT_IDS   — список ID через ";" (заполняется рантаймом)
  command               — служебный, заполняет ms_tools ("submit_form" на возврате из формы)
  form_fields           — служебный, заполняет ms_tools (JSON-массив полей формы)
*/

var sLogName = "COLLABORATOR_MULTI_STEP_EDIT_ACTION";
var sDemoIntCustomFieldCode = "demo_integer_field";

function AlertLog(log)
{
	var sLog = log;
	var sType = ObjectType(log);
	if (DataType(log) == "object" && (sType == "JsObject" || sType == "JsArray" || sType == "XmElem"))
	{
		sLog = tools.object_to_text(log, "json");
	}
	LogEvent(sLogName, sLog);
}

function GetWvarCommand()
{
	try
	{
		return String(command);
	}
	catch (e)
	{
		return "";
	}
}

function GetWvarFormFields()
{
	try
	{
		return String(form_fields);
	}
	catch (e)
	{
		return "";
	}
}

function GetObjectIdFromWvars()
{
	iObjectID = undefined;
	try
	{
		iObjectID = OptInt(OBJECT_ID);
	}
	catch (e)
	{
		iObjectID = undefined;
	}

	if (iObjectID == undefined)
	{
		try
		{
			sSelectedIds = String(SELECTED_OBJECT_IDS);
			if (!IsEmptyValue(sSelectedIds))
			{
				aSelectedIds = sSelectedIds.split(";");
				if (ArrayOptFirstElem(aSelectedIds) != undefined)
					iObjectID = OptInt(ArrayOptFirstElem(aSelectedIds));
			}
		}
		catch (e2)
		{
		}
	}
	return iObjectID;
}

function ParseFormFieldsToValues()
{
	oValues = {};
	sRawFormFields = GetWvarFormFields();
	if (IsEmptyValue(sRawFormFields))
		return oValues;

	try
	{
		aFormFields = ParseJson(sRawFormFields);
		if (aFormFields == undefined || ObjectType(aFormFields) != "JsArray")
			return oValues;

		for (oField in aFormFields)
		{
			sName = String(oField.GetOptProperty("name", ""));
			if (IsEmptyValue(sName))
				continue;
			oValues.SetProperty(sName, oField.GetOptProperty("value", ""));
		}
	}
	catch (e)
	{
		throw "Некорректный form_fields: " + e;
	}
	return oValues;
}


function ReadDemoIntValue(teCollaborator)
{
	iValue = undefined;
	try
	{
		oCe = teCollaborator.custom_elems.ObtainChildByKey(sDemoIntCustomFieldCode);
		if (oCe != undefined && !IsEmptyValue(oCe.value))
			iValue = OptInt(oCe.value);
	}
	catch (e)
	{
	}
	return iValue;
}

function WriteDemoIntValue(teCollaborator, oValues)
{
	if (IsEmptyValue(oValues.GetOptProperty("demo_integer_value", "")))
		return;

	iDemo = OptInt(oValues.GetOptProperty("demo_integer_value", ""));
	if (iDemo == undefined)
		throw "Поле demo_integer_value должно быть целым числом.";

	try
	{
		oCe = teCollaborator.custom_elems.ObtainChildByKey(sDemoIntCustomFieldCode);
		if (oCe != undefined)
			oCe.value = iDemo;
	}
	catch (e)
	{
	}
}

function GetCollaboratorValues(iCollabID)
{
	docCollab = tools.open_doc(iCollabID);
	if (docCollab == undefined)
		throw "Не удалось открыть сотрудника: " + iCollabID;

	teCollab = docCollab.TopElem;
	oValues = {
		lastname: String(teCollab.lastname),
		firstname: String(teCollab.firstname),
		middlename: String(teCollab.middlename),
		birth_date: teCollab.birth_date,
		web_banned: teCollab.last_data.web_banned.Value == true,
		org_id: OptInt(teCollab.org_id),
		region_id: OptInt(teCollab.region_id),
		subdivision_id: OptInt(teCollab.position_parent_id),
		position_id: OptInt(teCollab.position_id),
		demo_integer_value: ReadDemoIntValue(teCollab)
	};

	if (oValues.position_id != undefined)
	{
		oPosition = ArrayOptFirstElem(XQuery(
			"for $elem in positions where $elem/id = " + oValues.position_id + " " +
			"return $elem/Fields('id','staff_position_id')"
		));
		if (oPosition != undefined)
			oValues.staff_position_id = OptInt(oPosition.staff_position_id);
	}
	return oValues;
}

function MergeValues(oBaseValues, oFormValues)
{
	oResult = {
		lastname:            oBaseValues.GetOptProperty("lastname", ""),
		firstname:           oBaseValues.GetOptProperty("firstname", ""),
		middlename:          oBaseValues.GetOptProperty("middlename", ""),
		birth_date:          oBaseValues.GetOptProperty("birth_date", ""),
		web_banned:          oBaseValues.GetOptProperty("web_banned", false),
		org_id:              oBaseValues.GetOptProperty("org_id", ""),
		region_id:           oBaseValues.GetOptProperty("region_id", ""),
		subdivision_id:      oBaseValues.GetOptProperty("subdivision_id", ""),
		staff_position_id:   oBaseValues.GetOptProperty("staff_position_id", ""),
		position_id:         oBaseValues.GetOptProperty("position_id", ""),
		demo_integer_value:  oBaseValues.GetOptProperty("demo_integer_value", "")
	};

	for (sName in oFormValues)
	{
		oResult.SetProperty(sName, oFormValues.GetOptProperty(sName, ""));
	}
	return oResult;
}

function AddHidden(aFields, sName, xValue)
{
	aFields.push({
		name: sName,
		type: "hidden",
		value: xValue == undefined ? "" : String(xValue)
	});
}

function BuildStepResult(sStep, oValues)
{
	aFields = [];
	AddHidden(aFields, "__step__", sStep);

	aButtons = [
		{ name: "CANCEL_BUTTON", type: "cancel", label: "Отмена", submit_type: "cancel" }
	];

	if (sStep == "step_subdivision")
	{
		aFields.push({ name: "header_1",          type: "heading",  label: "Шаг 1. Основные поля и подразделение" });
		aFields.push({ name: "lastname",           type: "string",   label: "Фамилия",                   value: oValues.GetOptProperty("lastname", ""),           mandatory: true });
		aFields.push({ name: "firstname",          type: "string",   label: "Имя",                       value: oValues.GetOptProperty("firstname", ""),          mandatory: true });
		aFields.push({ name: "middlename",         type: "string",   label: "Отчество",                  value: oValues.GetOptProperty("middlename", "") });
		aFields.push({ name: "birth_date",         type: "date",     label: "Дата рождения",             value: oValues.GetOptProperty("birth_date", "") });
		aFields.push({ name: "web_banned",         type: "bool",     label: "Заблокирован на портале",   value: tools_web.is_true(oValues.GetOptProperty("web_banned", false)) ? "1" : "0" });
		aFields.push({ name: "demo_integer_value", type: "integer",  label: "Демо-число (custom elem)",  value: oValues.GetOptProperty("demo_integer_value", "") });
		aFields.push({ name: "org_id",             type: "integer",  label: "Организация (ID)",          value: oValues.GetOptProperty("org_id", "") });
		aFields.push({ name: "region_id",          type: "integer",  label: "Регион (ID)",               value: oValues.GetOptProperty("region_id", "") });
		aFields.push({ name: "subdivision_id",     type: "foreign_elem",  label: "Подразделение",        value: oValues.GetOptProperty("subdivision_id", ""), catalog: "subdivision", mandatory: true });

		aButtons.push({ name: "NEXT_BUTTON", type: "submit", label: "Далее", submit_type: "next" });
		return {
			command:     "display_form",
			title:       "Редактирование сотрудника",
			message:     "Выберите подразделение и заполните базовые поля.",
			form_fields: aFields,
			buttons:     aButtons
		};
	}

	if (sStep == "step_staff_position")
	{
		iSubdivisionID = OptInt(oValues.GetOptProperty("subdivision_id", ""));
		if (iSubdivisionID == undefined)
			throw "Не выбрано подразделение.";

		AddHidden(aFields, "lastname",           oValues.GetOptProperty("lastname", ""));
		AddHidden(aFields, "firstname",          oValues.GetOptProperty("firstname", ""));
		AddHidden(aFields, "middlename",         oValues.GetOptProperty("middlename", ""));
		AddHidden(aFields, "birth_date",         oValues.GetOptProperty("birth_date", ""));
		AddHidden(aFields, "web_banned",         oValues.GetOptProperty("web_banned", ""));
		AddHidden(aFields, "demo_integer_value", oValues.GetOptProperty("demo_integer_value", ""));
		AddHidden(aFields, "org_id",             oValues.GetOptProperty("org_id", ""));
		AddHidden(aFields, "region_id",          oValues.GetOptProperty("region_id", ""));
		AddHidden(aFields, "subdivision_id",     iSubdivisionID);

		aFields.push({ name: "header_2",          type: "heading", label: "Шаг 2. Выбор ПШР" });
		aFields.push({
			name:       "staff_position_id",
			type:       "foreign_elem",
			catalog:    "staff_position",
			label:      "ПШР",
			value:      oValues.GetOptProperty("staff_position_id", ""),
			query_qual: "$elem/subdivision_id = " + iSubdivisionID,
			mandatory:  true
		});

		aButtons.push({ name: "NEXT_BUTTON", type: "submit", label: "Далее", submit_type: "next" });
		return {
			command:     "display_form",
			title:       "Редактирование сотрудника",
			message:     "Выберите ПШР для выбранного подразделения.",
			form_fields: aFields,
			buttons:     aButtons
		};
	}

	if (sStep == "step_position")
	{
		iSubdivisionID = OptInt(oValues.GetOptProperty("subdivision_id", ""));
		iStaffPositionID = OptInt(oValues.GetOptProperty("staff_position_id", ""));
		if (iSubdivisionID == undefined)
			throw "Не выбрано подразделение.";
		if (iStaffPositionID == undefined)
			throw "Не выбран ПШР.";

		AddHidden(aFields, "lastname",           oValues.GetOptProperty("lastname", ""));
		AddHidden(aFields, "firstname",          oValues.GetOptProperty("firstname", ""));
		AddHidden(aFields, "middlename",         oValues.GetOptProperty("middlename", ""));
		AddHidden(aFields, "birth_date",         oValues.GetOptProperty("birth_date", ""));
		AddHidden(aFields, "web_banned",         oValues.GetOptProperty("web_banned", ""));
		AddHidden(aFields, "demo_integer_value", oValues.GetOptProperty("demo_integer_value", ""));
		AddHidden(aFields, "org_id",             oValues.GetOptProperty("org_id", ""));
		AddHidden(aFields, "region_id",          oValues.GetOptProperty("region_id", ""));
		AddHidden(aFields, "subdivision_id",     iSubdivisionID);
		AddHidden(aFields, "staff_position_id",  iStaffPositionID);

		aFields.push({ name: "header_3", type: "heading", label: "Шаг 3. Выбор должности" });
		aFields.push({
			name:       "position_id",
			type:       "foreign_elem",
			catalog:    "position",
			label:      "Должность",
			value:      oValues.GetOptProperty("position_id", ""),
			query_qual: "$elem/staff_position_id = " + iStaffPositionID + " and $elem/parent_object_id = " + iSubdivisionID,
			mandatory:  true
		});

		aButtons.push({ name: "SAVE_BUTTON", type: "submit", label: "Сохранить", submit_type: "save" });
		return {
			command:     "display_form",
			title:       "Редактирование сотрудника",
			message:     "Выберите должность и нажмите Сохранить.",
			form_fields: aFields,
			buttons:     aButtons
		};
	}

	throw "Неизвестный шаг: " + sStep;
}

function SaveCollaborator(iCollabID, oValues)
{
	if (IsEmptyValue(oValues.GetOptProperty("lastname", "")))
		throw "Не заполнено поле lastname.";
	if (IsEmptyValue(oValues.GetOptProperty("firstname", "")))
		throw "Не заполнено поле firstname.";
	if (OptInt(oValues.GetOptProperty("subdivision_id", "")) == undefined)
		throw "Не выбрано подразделение.";
	if (OptInt(oValues.GetOptProperty("staff_position_id", "")) == undefined)
		throw "Не выбран ПШР.";
	if (OptInt(oValues.GetOptProperty("position_id", "")) == undefined)
		throw "Не выбрана должность.";

	docCollab = tools.open_doc(iCollabID);
	if (docCollab == undefined)
		throw "Не удалось открыть сотрудника для сохранения: " + iCollabID;

	teCollab = docCollab.TopElem;
	teCollab.lastname  = String(oValues.GetOptProperty("lastname", ""));
	teCollab.firstname = String(oValues.GetOptProperty("firstname", ""));
	teCollab.middlename = String(oValues.GetOptProperty("middlename", ""));
	teCollab.last_data.web_banned = tools_web.is_true(oValues.GetOptProperty("web_banned", ""));

	dBirthDate = OptDate(oValues.GetOptProperty("birth_date", ""));
	if (dBirthDate != undefined)
		teCollab.birth_date = dBirthDate;

	iSubdivisionID = OptInt(oValues.GetOptProperty("subdivision_id", ""));
	if (iSubdivisionID != undefined)
		teCollab.position_parent_id = iSubdivisionID;

	iPositionID = OptInt(oValues.GetOptProperty("position_id", ""));
	if (iPositionID != undefined)
		teCollab.position_id = iPositionID;

	iOrgID = OptInt(oValues.GetOptProperty("org_id", ""));
	if (iOrgID != undefined)
		teCollab.org_id = iOrgID;

	iRegionID = OptInt(oValues.GetOptProperty("region_id", ""));
	if (iRegionID != undefined)
		teCollab.region_id = iRegionID;

	WriteDemoIntValue(teCollab, oValues);
	docCollab.Save();
}

function main()
{
	iCollabID = GetObjectIdFromWvars();
	if (iCollabID == undefined)
		throw "Не передан OBJECT_ID (ID сотрудника).";

	sCommand = GetWvarCommand();

	if (sCommand != "submit_form")
	{
		oBaseValues = GetCollaboratorValues(iCollabID);
		return BuildStepResult("step_subdivision", oBaseValues);
	}

	oFormValues = ParseFormFieldsToValues();
	oBaseValues = GetCollaboratorValues(iCollabID);
	oValues = MergeValues(oBaseValues, oFormValues);
	sStep = String(oValues.GetOptProperty("__step__", "step_subdivision"));

	if (sStep == "step_subdivision")
		return BuildStepResult("step_staff_position", oValues);

	if (sStep == "step_staff_position")
		return BuildStepResult("step_position", oValues);

	if (sStep == "step_position")
	{
		SaveCollaborator(iCollabID, oValues);
		return {
			command: "close_form",
			msg: "Данные сотрудника успешно сохранены.",
			confirm_result: {
				command: "reload_page"
			}
		};
	}

	throw "Неизвестный __step__: " + sStep;
}

EnableLog(sLogName, true);
try
{
	RESULT = main();
	ERROR = 0;
	MESSAGE = "OK";
}
catch (e)
{
	ERROR = 1;
	MESSAGE = String(e);
	RESULT = {
		command:  "alert",
		msg:      MESSAGE,
		msg_type: "error"
	};
	AlertLog(e);
}
EnableLog(sLogName, false);
