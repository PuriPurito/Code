// web_rule: /view_doc.html — редирект заявок на нужный mode по коду типа заявки

// Если mode уже задан — редирект уже выполнен, пропускаем чтобы не зациклиться
if (PARAMETERS.indexOf('mode=') >= 0)
{
	RESULT.type = 'success';
	return;
}

sObjectId = PARAMETERS.indexOf('object_id=') >= 0
	? StrRightRangePos(PARAMETERS, PARAMETERS.indexOf('object_id=') + StrLen('object_id='))
	: undefined;

// Обрезаем, если после object_id есть ещё параметры
if (!IsEmptyValue(sObjectId) && sObjectId.indexOf('&') >= 0)
	sObjectId = StrRangePos(sObjectId, 0, sObjectId.indexOf('&'));

if (IsEmptyValue(sObjectId))
{
	RESULT.type = 'success';
	return;
}

// Проверяем, является ли id заявкой
oRequest = ArrayOptFirstElem(XQuery(
	"for $r in requests where $r/id = " + sObjectId +
	" return $r/Fields('id', 'request_type_id')"
));

if (oRequest == undefined)
{
	RESULT.type = 'success';
	return;
}

iRequestTypeId = OptInt(oRequest.request_type_id);
if (iRequestTypeId == undefined)
{
	RESULT.type = 'success';
	return;
}

oRequestType = ArrayOptFirstElem(XQuery(
	"for $rt in request_types where $rt/id = " + iRequestTypeId +
	" return $rt/Fields('id', 'code')"
));

if (oRequestType == undefined)
{
	RESULT.type = 'success';
	return;
}

sTypeCode = String(oRequestType.code);
sMode     = undefined;

// TODO: заполнить коды типов заявок и соответствующие mode
switch (sTypeCode)
{
	case 'afl_certificate':
		sMode = 'afl_request_2024_certificate';
		break;
	case 'afl_acquaint':
	case 'afl_change_contract':
	case 'afl_hire_request':
	case 'afl_transfer_to_position':
		sMode = 'afl_request_2024_mobile';
		break;
}

if (sMode == undefined)
{
	RESULT.type = 'success';
	return;
}

RESULT.type = 'redirect';
RESULT.url  = '/view_doc.html?mode=' + sMode + '&object_id=' + sObjectId;
