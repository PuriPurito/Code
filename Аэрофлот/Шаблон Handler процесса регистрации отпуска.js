<%
// ==============    DEBUG   =================
var DEBUG_MODE = true;
var LOG_TAG = "afl_vacation_handler";
EnableLog(LOG_TAG);

/**
 *
 * @param {*} anyData
 * @returns {void}
 */
function Debug(anyData) {
    if (!DEBUG_MODE) return;

    var sData = anyData;
    if (DataType(anyData) != "string") {
        sData = tools.object_to_text(anyData, "json");
    }

    LogEvent(LOG_TAG, sData);
}
// ============================================

// =============== XQuery =====================
/**
 * @typedef {function (): string} XQueryBuilder_ToXqueryFn
 */

/**
 * @typedef {string} XQueryBuilder_Stringable
 */

/**
 * @typedef {XQueryBuilder_Stringable} XQueryBuilder_Operand
 */

/**
 * @typedef {'and' | 'or'} XQueryBuilder_Operator
 */

/**
 * @typedef {Object} XQueryBuilder_BuilderConfig
 * @property {string} Catalog
 * @property {XQueryBuilder_Stringable=} Where
 */

/**
 * 
 * @param {string} sKey 
 * @param {Array} aValues 
 * @returns {XQueryBuilder_Operand}
 */
function XQB_MatchSome(sKey, aValues) {
    if (!IsArray(aValues) || ArrayCount(aValues) < 1) {
        return "";
    }

    var aStrings = [];
    aStrings.push("MatchSome(");
    aStrings.push(String(sKey));
    aStrings.push(", (")

    aValues = ArrayExtract(aValues, "XQueryLiteral(This)");
    aStrings.push(ArrayMerge(aValues, "This", ", "));

    aStrings.push("))");

    return ArrayMerge(aStrings, "This", "");
}

/**
 * 
 * @param {string} sKey 
 * @param {*} anyValue 
 * @returns {XQueryBuilder_Operand}
 */
function XQB_Eq(sKey, anyValue) {
    if (IsArray(anyValue)) {
        return XQB_MatchSome(sKey, anyValue);
    }

    return String(sKey) + "=" + XQueryLiteral(anyValue); 
}

/**
 * 
 * @param {XQueryBuilder_Operand[]} aOperands 
 * @param {XQueryBuilder_Operator} sOperator
 * @returns {XQueryBuilder_Operand}
 */
function XQB_Operator(aOperands, sOperator) {
    return "(" + ArrayMerge(aOperands, "This", " " + sOperator + " ") + ")";
}

/**
 * 
 * @param {XQueryBuilder_Operand[]} aOperands
 * @returns {XQueryBuilder_Operand}
 */
function XQB_And(aOperands) {
    return XQB_Operator(aOperands, "and");
}

/**
 * 
 * @param {XQueryBuilder_Operand[]} aOperands 
 * @returns {XQueryBuilder_Operand}
 */
function XQB_Or(aOperands) {
    return XQB_Operator(aOperands, "or");
}

/**
 * 
 * @param {XQueryBuilder_Operand[]} aOperands 
 * @returns {XQueryBuilder_Stringable}
 */
function XQB_Where(aOperands) {
    if (ArrayCount(aOperands) < 1) {
        return "";
    }

    /** @type {XQueryBuilder_Operand} */
    var sOperand;

    /** @type {string[]} */
    var aStringOperands = [];

    for (sOperand in aOperands){
        aStringOperands.push(sOperand);
    }

    return "where " + ArrayMerge(aStringOperands, "This", " and ");
}

/**
 * 
 * @param {XQueryBuilder_BuilderConfig} oConfig 
 */
    function XQB_Select(oConfig) {
    if (oConfig.Catalog == undefined) {
        throw "XQueryBuilder: catalog is required to build query";
    }

    /** @type {XQueryBuilder_Stringable[]} */
    var aParts = [];

    if (oConfig.Where != undefined) {
        aParts.push(oConfig.Where);
    }

    var aStrings = [];

    aStrings.push("for $e in");
    aStrings.push(oConfig.Catalog);

    /** @type {XQueryBuilder_Stringable} */
    var sPart;

    for (sPart in aParts) {
        aStrings.push(sPart);
    }

    aStrings.push("return $e");

    return ArrayMerge(aStrings, "This", " ");
}
// ============================================

// ===============   UTILS   ==================
/**
 * Установить значение custom_elem у объекта
 * @param {Object} teObj
 * @param {string} sKey
 * @param {*} anyValue
 */
function SetCustomElem(teObj, sKey, anyValue) {
    teObj.custom_elems.ObtainChildByKey(sKey).value = anyValue;
}

/**
 * 
 * @param {Object} teObj 
 * @param {string} sKey 
 * @param {any=} defaulValue 
 * @returns {*}
 */
function GetCustomElem(teObj, sKey, defaulValue) {
    var xmlField = teObj.custom_elems.GetOptChildByKey(sKey);
    if (xmlField == undefined) {
        return defaulValue;
    }

    return xmlField.value.Value;
}

/**
 * 
 * @param {number} iID 
 * @returns {Object}
 */
function GetTopElem(iID) {
  var docObj = tools.open_doc(OptInt(iID))
  if (docObj == undefined) {
    return undefined;
  }

  return docObj.TopElem;
}

/**
 * Трансформация массива в мапу по определенному ключу элемента массива
 * @param {Object[]} aArr
 * @param {string} sKey
 * @returns
 */
function Array2MapByKey(aArr, sKey) {
    var oRes = new Object();

    var _item;
    for (_item in aArr) {
        try {
            _item[sKey];
        } catch (e) {
            continue;
        }

        oRes[_item[sKey]] = _item;
    }

    return oRes;
}
// ============================================

// ================ Errors ===================
/**
 * @typedef {Object} ErrorType
 * @property {string} value
 * @property {number} code
 * @property {string} description
 */

/**
 * @typedef {Object} CustomError
 * @property {ErrorType} type
 * @property {string} comment
 */

/**
 *
 * @param {string} sError
 * @param {number} iStatusCode
 * @param {string=} sDescription
 * @returns {ErrorType}
 */
function NewErrorType(sError, iStatusCode, sDescription) {
    if (sDescription == undefined) {
        sDescription = "";
    }

    return {
        value: sError,
        code: iStatusCode,
        description: sDescription
    };
}

/**
 *
 * @param {ErrorType} oErrType
 * @param {string=} sComment
 * @returns {CustomError}
 */
function NewCustomError(oErrType, sComment) {
    if (sComment == undefined) {
        sComment = "";
    }

    return {
        type: oErrType,
        comment: sComment
    };
}

var ErrType_Unknown = NewErrorType("unknown_error", 500, "Неизвестная ошибка");
var ErrType_WrongAction = NewErrorType("unknown_action", 400, "Неизвестное действие");
var ErrType_EmptyRequiredField = NewErrorType("empty_required_field", 400, "Не заполнено обязательное поле");
var ErrType_NoDataLoaded = NewErrorType("no_data_loaded", 500, "Не удалось загрузить необходимые данные");
var ErrType_NotFound = NewErrorType("not_found", 404, "Объект не найден");

/**
 *
 * @param {string} sComment
 * @returns {CustomError}
 */
function ERR_UNKNOWN(sComment) {
    return NewCustomError(ErrType_Unknown, sComment);
}

/**
 *
 * @param {string} sComment
 * @returns {CustomError}
 */
function ERR_WRONG_ACTION(sComment) {
    return NewCustomError(ErrType_WrongAction, sComment);
}

/**
 *
 * @param {string} sComment
 * @returns {CustomError}
 */
function ERR_EMPTY_REQUIRED_FIELD(sComment) {
    return NewCustomError(ErrType_EmptyRequiredField, sComment);
}

/**
 * 
 * @param {string} sComment 
 * @returns {CustomError}
 */
function ERR_NO_DATA_LOADED(sComment) {
    return NewCustomError(ErrType_NoDataLoaded, sComment);
}

/**
 * 
 * @param {string} sCode 
 * @returns {CustomError}
 */
function ERR_NO_DATA_LOADED_REQUEST_TYPE(sCode) {
    return ERR_NO_DATA_LOADED("Не найден тип заявки с кодом " + sCode);
}

/**
 * 
 * @param {string} sComment 
 * @returns {CustomError}
 */
function ERR_NOT_FOUND(sComment) {
    return NewCustomError(ErrType_NotFound, sComment);
}

/**
 * 
 * @param {number} iID 
 * @returns {CustomError}
 */
function ERR_NOT_FOUND_WITH_ID(iID) {
    return ERR_NOT_FOUND("ID: " + iID);
}

var ENV_ERR_SEPARATOR = "::";

/**
 *
 * @param {CustomError} oError
 * @returns {string}
 */
function StringifyError(oError) {
    var aArgs = [
        oError.type.value, // [0] - ошибка
        oError.type.code, // [1] - код ошибки
        oError.type.description, // [2] - описание ошибки (транспортная или служебная ошибка)
        oError.comment // [3] - комментарий (бизнесовая ошибка)
    ];
    return ArrayMerge(aArgs, "This", ENV_ERR_SEPARATOR);
}

/**
 *
 * @param {Error} eError
 * @returns {CustomError}
 */
function ParseError(eError) {
    var aArgs = eError.message.split(ENV_ERR_SEPARATOR);

    if (ArrayCount(aArgs) != 4) {
        var sMessage = eError.message;

        if (DEBUG_MODE) {
            sMessage = String(eError);
        }

        return ERR_UNKNOWN(sMessage);
    }

    return NewCustomError(NewErrorType(aArgs[0], OptInt(aArgs[1], 500), aArgs[2]), aArgs[3]);
}
// ===========================================

// =============== Validators ================
/**
 * @param {*} anyValue
 * @param {string} sName
 * @returns {*}
 */
function RequiredValue(anyValue, sName) {
    if (IsEmptyValue(anyValue)) {
        throw StringifyError(ERR_EMPTY_REQUIRED_FIELD(sName));
    }

    return anyValue;
}

/**
 * Возвращает переданное значение; если значение пустое, выбрасывается ошибка
 * @param {*} anyValue
 * @param {string} sName
 * @returns {string}
 */
function RequiredString(anyValue, sName) {
    var sRes = Trim(String(anyValue));

    return RequiredValue(sRes, sName);
}

/**
 * Возвращает переданное значение; если значение пустое, выбрасывается ошибка
 * @param {*} anyValue
 * @param {string} sName
 * @returns {number}
 */
function RequiredNumber(anyValue, sName) {
    var iRes = OptInt(anyValue);
    return RequiredValue(iRes, sName);
}

/**
 * Возвращает переданное значение; если значение пустое, выбрасывается ошибка
 * @param {*} anyValue
 * @param {string} sName
 * @returns {Date}
 */
function RequiredDate(anyValue, sName) {
    var dRes = OptDate(anyValue);

    return RequiredValue(dRes, sName);
}

/**
 * Возвращает ID сотрудника. Если не задан, выбрасывается ошибка
 * @returns {number}
 */
function RequiredUserID() {
    return RequiredValue(OptInt(curUserID), "ID сотрудника")
}

/**
 * @typedef {"number" | "string" | "date" | "other"} ValidationFieldType
 */

/**
 * @typedef {Object} ValidationField
 * @property {string} key
 * @property {ValidationFieldType} type
 * @property {boolean} required
 * @property {string=} description
 */

/**
 * @param {string} sKey
 * @param {ValidationFieldType=} sType
 * @param {boolean} bRequired
 * @param {string} sDescription
 * @returns {ValidationField}
 */
function NewValidationField(sKey, sType, bRequired, sDescription) {
    if (sType == undefined) {
        sType = "string"
    }

    if (bRequired == undefined) {
        bRequired = true
    }

    if (sDescription == undefined) {
        sDescription = ""
    }

    return {
        key: sKey,
        type: sType,
        required: bRequired,
        description: sDescription
    };
}

/**
 * @param {Object} oSrc
 * @param {ValidationField[]} aFields
 */
function ObjectValidator(oSrc, aFields) {
    var oValidators = {
        true: {
            number: RequiredNumber,
            string: RequiredString,
            date: RequiredDate,
            other: RequiredValue
        },
        false: {
            number: function _num(v) {
                return OptInt(v);
            },
            string: function _str(v) {
                return Trim(String(v));
            },
            date: function _dat(v) {
                return OptDate(v);
            },
            other: function _other(v) {
                return RValue(v);
            }
        }
    };

    var oRes = new Object();

    /**
     * @type {ValidationField}
     */
    var oField;

    var anyValue, sFieldDescription, fValidationFn;

    for (oField in aFields) {
        anyValue = oSrc.GetOptProperty(oField.key);

        sFieldDescription = oField.description;
        if (IsEmptyValue(sFieldDescription)) {
            sFieldDescription = oField.key;
        }

        fValidationFn = oValidators[oField.required][oField.type];

        oRes.SetProperty(oField.key, fValidationFn(anyValue, sFieldDescription));
    }

    return oRes;
}
// ===========================================

// ============  Request Type Repo  ==============
/**
 * @typedef {Object} RequestType
 * @property {number} id
 * @property {string} code
 * @property {string} name
 * @property {number} workflow_id
 */

/**
 *
 * @param {number} iID
 * @param {string} sCode
 * @param {string} sName
 * @param {number} iWorkflowID
 * @returns {RequestType}
 */
function NewRequestType(iID, sCode, sName, iWorkflowID) {
    return {
        id: iID,
        code: sCode,
        name: sName,
        workflow_id: iWorkflowID
    };
}

/**
 * 
 * @param {string[]} aCodes 
 * @returns {RequestType[]}
 */
function Repo_RequestType_Load(aCodes) {
    var sQuery = XQB_Select({
        Catalog: "request_types",
        Where: XQB_Where([
            XQB_Eq("code", aCodes)
        ])
    });

    var aRequestTypes = ArraySelectAll(XQuery(sQuery));

    var aResult = [];
    var oRequestType;

    for (oRequestType in aRequestTypes) {
        aResult.push(
            NewRequestType(
                oRequestType.id.Value,
                oRequestType.code.Value,
                oRequestType.name.Value,
                oRequestType.workflow_id.Value
            )
        );
    }

    return aResult;
}

/**
 * 
 * @param {string} sCode
 * @returns {RequestType=}
 */
function Repo_RequestType_GetByCode(sCode) {
    try {
        return Repo_RequestType_MAP_CODE[sCode];
    } catch(e) {
        return undefined;
    }
}

/**
 * 
 * @param {number} iID
 * @returns {RequestType=} 
 */
function Repo_RequestType_GetByID(iID) {
    iID = OptInt(iID, 0);

    try {
        return Repo_RequestType_MAP_ID[iID];
    } catch(e) {
        return undefined;
    }
}

/**
 * 
 * @returns {RequestType[]}
 */
function Repo_RequestType_GetAll() {
    return ArraySelectAll(Repo_RequestType_ARRAY);
}
// ===========================================

// ============ Vacation Type Repo ===============
/**
 * @typedef {Object} VacationType
 * @property {number} id
 * @property {string} code
 * @property {string} name
 */

/**
 *
 * @param {number} iID
 * @param {string} sCode
 * @param {string} sName
 * @returns {VacationType}
 */
function NewVacationType(iID, sCode, sName) {
    return {
        id: iID,
        code: sCode,
        name: sName
    };
}

/**
 * 
 * @param {number} iObjectDataTypeID 
 * @returns {VacationType[]}
 */
function Repo_VacationType_Load(iObjectDataTypeID) {
    iObjectDataTypeID = OptInt(iObjectDataTypeID, 0)

    var sQuery = XQB_Select({
        Catalog: "object_datas",
        Where: XQB_Where([
            XQB_Eq("object_data_type_id", iObjectDataTypeID)
        ])
    });

    var aVacationTypes = ArraySelectAll(XQuery(sQuery));

    var aResult = [];
    var oVacationType;

    for (oVacationType in aVacationTypes) {
        aResult.push(
            NewVacationType(oVacationType.id.Value, oVacationType.code.Value, oVacationType.name.Value)
        );
    }

    return aResult;
}

/**
 *
 * @param {string} sCode
 * @returns {VacationType=}
 */
function Repo_VacationType_GetByCode(sCode) {
    try {
        return Repo_VacationType_MAP_CODE[sCode];
    } catch (e) {
        return undefined;
    }
}

/**
 * 
 * @param {number | string} iID 
 * @returns {VacationType=}
 */
function Repo_VacationType_GetByID(iID) {
    iID = OptInt(iID, 0);

    try {
        return Repo_VacationType_MAP_ID[iID];
    } catch (e) {
        return undefined;
    }
}

/**
 * 
 * @returns {VacationType[]}
 */
function Repo_VacationType_GetAll() {
    return ArraySelectAll(Repo_VacationType_ARRAY);
}
// ===========================================

// ========= User Vacations Repo =============
/**
 * 
 * @param {number} iUserID 
 * @param {RequestType[]} aRequestTypes 
 * @param {string[]} aRequestStatuses 
 */
function Repo_UserVacation_GetUserVacationRequests(iUserID, aRequestTypes, aRequestStatuses) {
    if (aRequestTypes == undefined) {
        aRequestTypes = Repo_RequestType_GetAll();
    }

    if (aRequestStatuses == undefined) {
        aRequestStatuses = [];
    }

    /** @type {number[]} */
    var aRequestTypeIDs = ArrayExtractKeys(aRequestTypes, "id");
    
    var sQuery = XQB_Select({
        Catalog: "requests",
        Where: XQB_Where([
            XQB_Eq("person_id", iUserID),
            XQB_Eq("request_type_id", aRequestTypeIDs),
            XQB_Eq("status_id", aRequestStatuses)
        ])
    })

    var aRequests = ArraySelectAll(XQuery(sQuery));

    var aResult = [];

    for (oRequest in aRequests) {
        docRequest = tools.open_doc(OptInt(oRequest.id, 0));
        if (docRequest == undefined) {
            continue;
        }

        teRequest = docRequest.TopElem;
        vacation_type_id = GetCustomElem(teRequest, "vacation_type_id", 0);

        aResult.push({
            id: teRequest.id.Value,
            request_type: Repo_RequestType_GetByID(teRequest.request_type_id.Value),
            vacation_type: Repo_VacationType_GetByID(vacation_type_id),
            vacation_start_date: OptDate(GetCustomElem(teRequest, "vacation_start_date")),
            vacation_end_date: OptDate(GetCustomElem(teRequest, "vacation_end_date")),
            workflow_state: teRequest.workflow_state_name.Value,
            is_decided: tools_web.is_true(GetCustomElem(teRequest, "is_decided", true))
        });
    }

    return aResult;
}
// ===========================================

// ================  HTTP  ====================
/**
 * @typedef {Object} HTTPRequest
 * @property {Object} Query
 */
/**
 * Отправка HTTP ответа
 * @param {number} iCode
 * @param {string} sMessage
 * @param {*} anyData
 * @returns {void}
 */
function HTTPSendResponse(iCode, sMessage, anyData) {
    /**
     * Структура ответа HTTP
     * @typedef {Object} HTTPResponseStructure
     * @property {boolean} success
     * @property {string} message
     * @property {Object} data
     */

    /**
     * Response structure
     * @returns {HTTPResponseStructure}
     */
    function NewResponseStructure() {
        var oStruct = new Object();

        oStruct.success = false;
        oStruct.message = "";
        oStruct.data = {};

        return oStruct;
    }

    /**
     * Статус ответа HTTP
     * @typedef {Object} HTTPResponseStatus
     * @property {number} code
     * @property {string} status
     * @property {boolean} success
     */

    /**
     * Response status code
     * @param {number} iCodeNumber
     * @returns {HTTPResponseStatus}
     */
    function NewResponseStatus(iCodeNumber) {
        /**
         *
         * @param {number} code
         * @param {string} status
         * @param {boolean} success
         * @returns  {HTTPResponseStatus}
         */
        function _c(code, status, success) {
            return { code: code, status: status, success: success };
        }

        var oCodes = {
            200: _c(200, "OK", true),
            400: _c(400, "Bad request", false),
            500: _c(500, "Internal server error", false)
        };

        try {
            return oCodes[iCodeNumber];
        } catch (e) {
            return oCodes[500];
        }
    }

    // Default values
    if (sMessage == undefined) {
        sMessage = "";
    }

    if (anyData == undefined) {
        anyData = {};
    }

    // Main
    var oResponseCode = NewResponseStatus(iCode);
    var oResponseData = NewResponseStructure();

    oResponseData.success = oResponseCode.success;
    oResponseData.message = sMessage;
    oResponseData.data = anyData;

    Request.RespContentType = "application/json; charset=utf-8";
    Request.SetRespStatus(oResponseCode.code, oResponseCode.status);
    Response.Write(tools.object_to_text(oResponseData, "json"));
    return;
}

/**
 * Отправка HTTP ответа с ошибкой
 * @param {CustomError} oError
 */
function HTTPSendError(oError) {
    HTTPSendResponse(oError.type.code, oError.type.value, {
        description: oError.type.description,
        comment: oError.comment
    });
}

/**
 * Обработка HTTP запроса (router)
 * @returns {void}
 */
function HandleRequest() {
    // Действие (handler)
    var sAction = Request.Query.GetOptProperty("action", "");

    var oHandlers = {
        // Получение данных из справочников (тип отпуска и т.д.)
        get_data: Handler_GetData,
        // Получение всех отпусков сотрудника
        get_my_vacations: Handler_GetPersonVacations,
        // Создание заявки на отпуск
        create_request: Handler_NewVacationRequest,
        // Подтверждение планового отпуска
        submit_planned: Handler_SubmitPlannedVacation,
        // Перенос планового отпуска
        reschedule_planned: Handler_ReschedulePlannedVacation
    };

    var handler; // Обработчик запроса

    // Пробуем найти зарегистрированный обработчик
    try {
        handler = oHandlers[sAction];
    } catch (e) {
        handler = undefined;
    }

    // Если обработчик не зарегистрирован
    if (handler == undefined) {
        throw StringifyError(ERR_WRONG_ACTION(sAction));
    }

    // Вызываем обработчик
    handler(Request);
}
// ============================================

// ===============  HANDLERS  ================
/**
 * Получить данные справочников
 * @param {HTTPRequest} oHTTPRequest
 */
function Handler_GetData(oHTTPRequest) {
    HTTPSendResponse(200, "Данные успешно получены", {
        request_types: Repo_RequestType_ARRAY,
        vacation_types: Repo_VacationType_ARRAY
    });
}

/**
 * Хэндлер создания заявки на отпуск (ВС/05/01)
 * @param {HTTPRequest} oHTTPRequest
 */
function Handler_NewVacationRequest(oHTTPRequest) {
    var oDTO = DTO_NewVacationRequstFromHTTP(oHTTPRequest);

    var iNewRequestID = UC_NewVacationRequest(oDTO);

    HTTPSendResponse(200, "Заявка успешно создана", { request_id: iNewRequestID });
}

/**
 * Хэндлер получения всех отпусков сотрудника
 * @param {HTTPRequest} oHTTPRequest 
 */
function Handler_GetPersonVacations(oHTTPRequest) {
    var oDTO = DTO_GetPersonVacationRequestsFromHTTP(oHTTPRequest);
    var aRequests = UC_GetPersonVacationRequests(oDTO);

    oDTO = DTO_GetPersonVacationStatsFromHTTP(oHTTPRequest);
    var oStats = UC_GetPersonVacationStats(oDTO);

    var oResult = {
        stats: oStats,
        applications: aRequests
    }

    HTTPSendResponse(200, "Данные успешно получены", oResult)
}

/**
 * 
 * @param {HTTPRequest} oHTTPRequest 
 */
function Handler_SubmitPlannedVacation (oHTTPRequest) {
    var o = DTO_SubmitPlannedVacationFromHTTP(oHTTPRequest);

    UC_SubmitPlannedVacation(o);

    HTTPSendResponse(200, "Запланированный отпуск подтвержден", { request_id: o.request_id })
}

/**
 * 
 * @param {HTTPRequest} oHTTPRequest 
 */
function Handler_ReschedulePlannedVacation (oHTTPRequest) {
    var o = DTO_ReschedulePlannedVacationFromHTTP(oHTTPRequest);

    UC_ReschedulePlannedVacation(o);

    HTTPSendResponse(200, "Запрошен перенос планового отпуска", { request_id: o.request_id })
}
// ===========================================

// ================= DTO =====================
/**
 * @typedef {Object} NewVacationRequestDTO
 * @property {number} person_id
 * @property {VacationType} vacation_type
 * @property {Date} vacation_start_date
 * @property {Date} vacation_end_date
 * @property {number} vacation_days_number
 * @property {string} vacation_comment
 */

/**
 * Создает DTO NewVacationRequest
 * @param {number} iPersonID
 * @param {VacationType} oVacationType
 * @param {Date} dStartDate
 * @param {Date} dEndDate
 * @param {number} iDays
 * @param {string} sComment
 * @returns {NewVacationRequestDTO}
 */
function DTO_NewVacationRequst(iPersonID, oVacationType, dStartDate, dEndDate, iDays, sComment) {
    return {
        person_id: iPersonID,
        vacation_type: oVacationType,
        vacation_start_date: dStartDate,
        vacation_end_date: dEndDate,
        vacation_days_number: iDays,
        vacation_comment: sComment
    };
}

/**
 * Создает DTO NewVacationRequest из объекта HTTP запроса
 * @param {HTTPRequest} oHTTPRequest
 * @returns {NewVacationRequestDTO}
 */
function DTO_NewVacationRequstFromHTTP(oHTTPRequest) {
    // ID сотрудника
    var iPersonID = RequiredUserID();

    /**
     * @type {{
     *   start_date: Date,
     *   end_date: Date,
     *   days_number: number,
     *   comment: string,
     *   vacation_type: string
     * }}
     */
    var oData = ObjectValidator(oHTTPRequest.Query, [
        NewValidationField("start_date", "date", true, "Дата начала отпуска"),
        NewValidationField("end_date", "date", true, "Дата завершения отпуска"),
        NewValidationField("days_number", "number", true, "Количество дней отпуска"),
        NewValidationField("comment", "string", false, "Комментарий к отпуску"),
        NewValidationField("vacation_type", "string", true, "Тип отпуска")
    ]);

    // Тип отпуска (объект)
    var oVacationType = Repo_VacationType_GetByCode(oData.vacation_type);

    return DTO_NewVacationRequst(iPersonID, oVacationType, oData.start_date, oData.end_date, oData.days_number, oData.comment);
}

/**
 * @typedef {Object} GetPersonVacationRequestsDTO
 * @property {number} person_id
 */

/**
 * 
 * @param {number} iPersonID 
 * @returns {GetPersonVacationRequestsDTO}
 */
function DTO_GetPersonVacationRequests(iPersonID) {
    return {
        person_id: iPersonID
    }
}

/**
 * 
 * @param {HTTPRequest} oHTTPRequest 
 * @returns {GetPersonVacationRequestsDTO}
 */
function DTO_GetPersonVacationRequestsFromHTTP(oHTTPRequest) {
    var iPersonID = RequiredUserID();

    return DTO_GetPersonVacationRequests(iPersonID);
}

/**
 * @typedef {Object} GetPersonVacationStatsDTO
 * @property {number} person_id
 */

/**
 * 
 * @param {number} iPersonID
 * @returns {GetPersonVacationStatsDTO} 
 */
function DTO_GetPersonVacationStats(iPersonID) {
    return {
        person_id: iPersonID
    }
}

/**
 * 
 * @param {HTTPRequest} oHTTPRequest
 * @returns {GetPersonVacationStatsDTO}
 */
function DTO_GetPersonVacationStatsFromHTTP(oHTTPRequest) {
    var iPersonID = RequiredUserID();

    return DTO_GetPersonVacationStats(
        iPersonID
    )
}

/**
 * @typedef {Object} SubmitPlannedVacationDTO
 * @property {number} person_id
 * @property {number} request_id
 * @property {string} comment
 */

/**
 * 
 * @param {number} iPersonID 
 * @param {number} iRequestID 
 * @param {string} sComment 
 * @returns {SubmitPlannedVacationDTO}
 */
function DTO_SubmitPlannedVacation(iPersonID, iRequestID, sComment) {
    if (sComment == undefined) {
        sComment = "";
    }

    return {
        person_id: iPersonID,
        request_id: iRequestID,
        comment: sComment
    }
}

/**
 * 
 * @param {HTTPRequest} oHTTPRequest 
 * @returns {SubmitPlannedVacationDTO}
 */
function DTO_SubmitPlannedVacationFromHTTP(oHTTPRequest) {
    var iPersonID = RequiredUserID();

    /**
     * @type {{
     *  request_id: number,
     *  comment: string,
     * }}
     */
    
    var oData = ObjectValidator(oHTTPRequest.Query, [
        NewValidationField("request_id", "number", true, "ID заявки планового отпуска"),
        NewValidationField("comment", "string", false, "Комментарий к отпуску")
    ]);


    return DTO_SubmitPlannedVacation(iPersonID, oData.request_id, oData.comment);
}

/**
 * @typedef {Object} ReschedulePlannedVacationDTO
 * @property {number} person_id
 * @property {number} request_id
 * @property {Date} new_start_date
 * @property {Date} new_end_date
 * @property {number} new_days_number
 * @property {string} comment
 */

/**
 * 
 * @param {number} iPersonID 
 * @param {number} iRequestID 
 * @param {Date} dNewStartDate 
 * @param {Date} dNewEndDate 
 * @param {number} iNewDaysNumber 
 * @param {string} sComment 
 * @returns {ReschedulePlannedVacationDTO}
 */
function DTO_ReschedulePlannedVacation (iPersonID, iRequestID, dNewStartDate, dNewEndDate, iNewDaysNumber, sComment) {
    if (sComment == undefined) {
        sComment = "";
    }

    return {
        person_id: iPersonID,
        request_id: iRequestID,
        new_start_date: dNewStartDate,
        new_end_date: dNewEndDate,
        new_days_number: iNewDaysNumber,
        comment: sComment
    }
}

/**
 * 
 * @param {HTTPRequest} oHTTPRequest 
 * @returns {ReschedulePlannedVacationDTO}
 */
function DTO_ReschedulePlannedVacationFromHTTP(oHTTPRequest) {
    var iPersonID = RequiredUserID();

    /**
     * @type {{
     *  request_id: number,
     *  new_start_date: Date,
     *  new_end_date: Date,
     *  new_days_number: number,
     *  comment: string
     * }}
     */
    var oData = ObjectValidator(oHTTPRequest.Query, [
        NewValidationField("request_id", "number", true, "ID заявки планового отпуска"),
        NewValidationField("new_start_date", "date", true, "Новая дата начала отпуска"),
        NewValidationField("new_end_date", "date", true, "Новая дата окончания отпуска"),
        NewValidationField("new_days_number", "number", true, "Новое количество дней отпуска"),
        NewValidationField("comment", "string", false, "Комментарий (причина переноса)")
    ]);

    return DTO_ReschedulePlannedVacation(iPersonID, oData.request_id, oData.new_start_date, oData.new_end_date,oData.new_days_number, oData.comment);
}
// ===========================================

// ============== USE-CASES ==================
/**
 * UseCase NewVacationRequest
 * @param {NewVacationRequestDTO} oDTO
 * @returns {number}
 */
function UC_NewVacationRequest(oDTO) {
    var docPerson = tools.open_doc(OptInt(oDTO.person_id));
    if (docPerson == undefined) {
        throw StringifyError(ERR_EMPTY_REQUIRED_FIELD("person_id"));
    }
    var tePerson = docPerson.TopElem;

    var docVacationReq = tools.new_doc_by_name("request");
    var teVacationReq = docVacationReq.TopElem;

    teVacationReq.request_type_id = RequestType_Vacation.id;
    teVacationReq.workflow_id = RequestType_Vacation.workflow_id;
    teVacationReq.person_id = oDTO.person_id;
    teVacationReq.person_fullname = tePerson.fullname;
    teVacationReq.person_position_id = tePerson.position_id;
    teVacationReq.person_position_name = tePerson.position_name;
    teVacationReq.person_subdivision_id = tePerson.position_parent_id;
    teVacationReq.person_subdivision_name = tePerson.position_parent_name;
    SetCustomElem(teVacationReq, "vacation_type_id", oDTO.vacation_type.id);
    SetCustomElem(teVacationReq, "vacation_start_date", oDTO.vacation_start_date);
    SetCustomElem(teVacationReq, "vacation_end_date", oDTO.vacation_end_date);
    SetCustomElem(teVacationReq, "vacation_days_number", oDTO.vacation_days_number);
    SetCustomElem(teVacationReq, "vacation_comment", oDTO.vacation_comment);

    docVacationReq.BindToDb();
    docVacationReq.Save();

    // Кадровый документ приказа
    var docOrder = tools.new_doc_by_name("personnel_document");
    var teOrder = docOrder.TopElem;
    teOrder.name = "Отпуск приказ " + tePerson.fullname + " " + StrDate(Date());
    teOrder.person_id = tePerson.id;
    teOrder.person_fullname = tePerson.fullname;
    teOrder.state_id = "process";
    teOrder.personnel_document_type_id = 7035552013966277638; // TODO: id типа кадрового документа - приказ
    SetCustomElem(teOrder, "employer", 7501252210278446071);

    // var oSignatureFile = teOrder.signature_files.AddChild()
    // oSignatureFile.file_name = "Отпуск_приказ_" + oData.position_code + '_'+iRequestID+'.pdf'
    // ObtainDirectory("x-local://wt_data/sapdoc/");
    // PutFileData(UrlToFilePath('x-local://wt_data/sapdoc/' + oSignatureFile.file_name), Base64Decode(oData.document_data));
    // oSignatureFile.file_url = 'x-local://wt_data/sapdoc/' + oSignatureFile.file_name

    docOrder.BindToDb();
    docOrder.Save();


    // Кадровый документ заявления
    var docApplication = tools.new_doc_by_name("personnel_document");
    var teApplication = docApplication.TopElem;
    teApplication.name = "Отпуск заявление " + tePerson.fullname + " " + StrDate(Date());
    teApplication.person_id = tePerson.id;
    teApplication.person_fullname = tePerson.fullname;
    teApplication.state_id = "process";
    teApplication.personnel_document_type_id = 7606312805614157606; // TODO: id типа кадрового документа - заявление на отпуск
    SetCustomElem(teApplication, "employer", 7501252210278446071);
    // var oSignatureFile = teApplication.signature_files.AddChild()
    // oSignatureFile.file_name = "Отпуск_приказ_" + oData.position_code + '_'+iRequestID+'.pdf'
    // ObtainDirectory("x-local://wt_data/sapdoc/");
    // PutFileData(UrlToFilePath('x-local://wt_data/sapdoc/' + oSignatureFile.file_name), Base64Decode(oData.document_data));
    // oSignatureFile.file_url = 'x-local://wt_data/sapdoc/' + oSignatureFile.file_name

    docApplication.BindToDb();
    docApplication.Save();

    // ЭЦП для приказа
    var docOrderSignature = tools.new_doc_by_name("digital_signature");
    var teOrderSignature = docOrderSignature.TopElem;
    teOrderSignature.name = tePerson.fullname;
    teOrderSignature.person_id = tePerson.id;
    teOrderSignature.person_fullname = tePerson.fullname;
    teOrderSignature.object_type = "personnel_document";
    teOrderSignature.object_id = docOrder.DocID;
    teOrderSignature.object_name = teOrder.name;
    docOrderSignature.BindToDb();
    docOrderSignature.Save();


    // ЭЦП для заявления
    var docApplicationSignature = tools.new_doc_by_name("digital_signature");
    var teApplicationSignature = docApplicationSignature.TopElem;
    teApplicationSignature.name = tePerson.fullname;
    teApplicationSignature.person_id = tePerson.id;
    teApplicationSignature.person_fullname = tePerson.fullname;
    teApplicationSignature.object_type = "personnel_document";
    teApplicationSignature.object_id = docApplication.DocID;
    teApplicationSignature.object_name = teApplication.name;
    docApplicationSignature.BindToDb();
    docApplicationSignature.Save();


    SetCustomElem(teVacationReq, "documents_application", docApplication.DocID);
    SetCustomElem(teVacationReq, "documents_order", docOrder.DocID);
    docVacationReq.Save();



    return docVacationReq.DocID;
}

/**
 * UseCase GetPersonVacations
 * @param {GetPersonVacationRequestsDTO} oDTO 
 */
function UC_GetPersonVacationRequests(oDTO) {
    var aRequestTypes = Repo_RequestType_GetAll();

    var aVacationRequests = Repo_UserVacation_GetUserVacationRequests(
        oDTO.person_id,
        aRequestTypes,
        []
    )

    return aVacationRequests;
}

/**
 * 
 * @param {GetPersonVacationRequestsDTO} oDTO 
 * @returns 
 */
function UC_GetPersonVacationStats(oDTO) {
    return {
        total_available: 41,
        common_current: 28,
        common_other: 10,
        additional: 3
    }
}

/**
 * 
 * @param {SubmitPlannedVacationDTO} oDTO 
 */
function UC_SubmitPlannedVacation(oDTO) {
    tePerson = GetTopElem(oDTO.person_id);
    if (tePerson == undefined) {
        throw StringifyError(ERR_EMPTY_REQUIRED_FIELD("person_id"));
    }

    var docRequest = tools.open_doc(OptInt(oDTO.request_id));
    if (docRequest == undefined) {
        throw StringifyError(ERR_NOT_FOUND_WITH_ID(oDTO.request_id));
    }

    var teRequest = docRequest.TopElem;

    SetCustomElem(teRequest, "is_decided", true);
    SetCustomElem(teRequest, "is_confirmed", true);
    SetCustomElem(teRequest, "decision_date", Date());

    if (oDTO.comment != "") {
        SetCustomElem(teRequest, "comment", oDTO.comment);
    }

    // Ксюша 11.08.2026
    // Уведомление специалистам ОКА о подтверждении планового отпуска
    tools.call_code_library_method("libAflDocuments", "SendNotificationRequest", [teRequest, "hr", "", "afl_vac_conf_oka_emp"]);


    // TODO: ВС/05/02/04 Формируется ПФ уведомления о плановом отпуске и передается в КЭДО КАСУД 2.0
    // TODO: Перевод на ожидаение документов
    // 7617821261221344167


    var docNotice = tools.new_doc_by_name("personnel_document");
    var teNotice = docNotice.TopElem;
    teNotice.name = "Уведомление на плановый отпуск " + tePerson.fullname + " " + StrDate(Date());
    teNotice.person_id = tePerson.id;
    teNotice.person_fullname = tePerson.fullname;
    teNotice.state_id = "process";
    teNotice.personnel_document_type_id = 7617821261221344167; // TODO: id типа кадрового документа - заявление на отпуск

    // var oSignatureFile = teApplication.signature_files.AddChild()
    // oSignatureFile.file_name = "Отпуск_приказ_" + oData.position_code + '_'+iRequestID+'.pdf'
    // ObtainDirectory("x-local://wt_data/sapdoc/");
    // PutFileData(UrlToFilePath('x-local://wt_data/sapdoc/' + oSignatureFile.file_name), Base64Decode(oData.document_data));
    // oSignatureFile.file_url = 'x-local://wt_data/sapdoc/' + oSignatureFile.file_name

    docNotice.BindToDb();
    docNotice.Save();

    // Кадровый документ приказа
    var docOrder = tools.new_doc_by_name("personnel_document");
    var teOrder = docOrder.TopElem;
    teOrder.name = "Отпуск приказ " + tePerson.fullname + " " + StrDate(Date());
    teOrder.person_id = tePerson.id;
    teOrder.person_fullname = tePerson.fullname;
    teOrder.state_id = "process";
    teOrder.personnel_document_type_id = 7035552013966277638; // TODO: id типа кадрового документа - приказ
    SetCustomElem(teOrder, "employer", 7501252210278446071);

    // var oSignatureFile = teOrder.signature_files.AddChild()
    // oSignatureFile.file_name = "Отпуск_приказ_" + oData.position_code + '_'+iRequestID+'.pdf'
    // ObtainDirectory("x-local://wt_data/sapdoc/");
    // PutFileData(UrlToFilePath('x-local://wt_data/sapdoc/' + oSignatureFile.file_name), Base64Decode(oData.document_data));
    // oSignatureFile.file_url = 'x-local://wt_data/sapdoc/' + oSignatureFile.file_name

    docOrder.BindToDb();
    docOrder.Save();


    teRequest.workflow_state = "finished"; //было "waiting_kedo" -> стало "finished"
    teRequest.status_id = "closed"; //статус заявки "закрыто"
    SetCustomElem(teRequest, "documents_notice", docNotice.DocID);
    SetCustomElem(teRequest, "documents_order", docOrder.DocID)

    docRequest.Save();

    var iSystemID = OptInt(tools.get_params_code_library("libAfl1CZup").GetOptProperty("iSystemID", 0));
    if (iSystemID == undefined || iSystemID == 0)
        throw StringifyError(ERR_NO_DATA_LOADED("Не задан параметр iSystemID в libAfl1CZup"));

    var oPacketResult = tools.call_code_library_method("libAflIntegration", "CreatePackage", ["VacationRequestEditing", iSystemID, { aObjectIDs: [oDTO.request_id] }, undefined]);
    if (oPacketResult.error != 0)
        throw StringifyError(ERR_UNKNOWN(oPacketResult.errorText));

    oTask = ArrayOptFirstElem(XQuery("for $elem in tasks where task_type_id = 0x69F09B8333E3207E and status = 'n' and target_object_id = "+OptInt(teRequest.id)+" and executor_id = "+OptInt(oDTO.person_id)+" return $elem"))
    if(oTask!=undefined){
        docTask =  tools.open_doc(oTask.id);
        teTask = docTask.TopElem;
        teTask.status='0'
        docTask.Save();
    }
}

/**
 *
 * @param {ReschedulePlannedVacationDTO} oDTO
 */
function UC_ReschedulePlannedVacation(oDTO) {
    tePerson = GetTopElem(oDTO.person_id);
    if (tePerson == undefined) {
        throw StringifyError(ERR_EMPTY_REQUIRED_FIELD("person_id"));
    }

    var docRequest = tools.open_doc(OptInt(oDTO.request_id));
    if (docRequest == undefined) {
        throw StringifyError(ERR_NOT_FOUND_WITH_ID(oDTO.request_id));
    }

    var teRequest = docRequest.TopElem;

    SetCustomElem(teRequest, "is_decided", true);
    SetCustomElem(teRequest, "is_confirmed", false);
    SetCustomElem(teRequest, "decision_date", Date());
    SetCustomElem(teRequest, "new_start_date", oDTO.new_start_date);
    SetCustomElem(teRequest, "new_end_date", oDTO.new_end_date);
    SetCustomElem(teRequest, "new_days_number", oDTO.new_days_number);

    SetCustomElem(teRequest, "vacation_start_date", oDTO.new_start_date);
    SetCustomElem(teRequest, "vacation_end_date", oDTO.new_end_date);
    SetCustomElem(teRequest, "vacation_days_number", oDTO.new_days_number);

    if (oDTO.comment != "") {
        SetCustomElem(teRequest, "vacation_comment", oDTO.comment);
    }

    // Кадровый документ заявления
    var docApplication = tools.new_doc_by_name("personnel_document");
    var teApplication = docApplication.TopElem;
    teApplication.name = "Заявление на перенос отпуска " + tePerson.fullname + " " + StrDate(Date());
    teApplication.person_id = tePerson.id;
    teApplication.person_fullname = tePerson.fullname;
    teApplication.state_id = "process";
    teApplication.personnel_document_type_id = 7606312805614157606; // TODO: id типа кадрового документа - заявление на отпуск
    SetCustomElem(teApplication, "employer", 7501252210278446071);

    // var oSignatureFile = teApplication.signature_files.AddChild()
    // oSignatureFile.file_name = "Отпуск_приказ_" + oData.position_code + '_'+iRequestID+'.pdf'
    // ObtainDirectory("x-local://wt_data/sapdoc/");
    // PutFileData(UrlToFilePath('x-local://wt_data/sapdoc/' + oSignatureFile.file_name), Base64Decode(oData.document_data));
    // oSignatureFile.file_url = 'x-local://wt_data/sapdoc/' + oSignatureFile.file_name

    docApplication.BindToDb();
    docApplication.Save();

    // ЭЦП для заявления
    var docApplicationSignature = tools.new_doc_by_name("digital_signature");
    var teApplicationSignature = docApplicationSignature.TopElem;
    teApplicationSignature.name = tePerson.fullname;
    teApplicationSignature.person_id = tePerson.id;
    teApplicationSignature.person_fullname = tePerson.fullname;
    teApplicationSignature.object_type = "personnel_document";
    teApplicationSignature.object_id = docApplication.DocID;
    teApplicationSignature.object_name = teApplication.name;
    docApplicationSignature.BindToDb();
    docApplicationSignature.Save();

    // TODO: перевести заявку

    teRequest.workflow_state = "finished"; //было "waiting_kedo" -> стало "finished"
    teRequest.status_id = "closed"; //статус заявки "закрыто"

    SetCustomElem(teRequest, "documents_application", docApplication.DocID);

    docRequest.Save();

    var iSystemID = OptInt(tools.get_params_code_library("libAfl1CZup").GetOptProperty("iSystemID", 0));
    if (iSystemID == undefined || iSystemID == 0)
        throw StringifyError(ERR_NO_DATA_LOADED("Не задан параметр iSystemID в libAfl1CZup"));

    var oPacketResult = tools.call_code_library_method("libAflIntegration", "CreatePackage", ["VacationRequestEditing", iSystemID, { aObjectIDs: [oDTO.request_id] }, undefined]);
    if (oPacketResult.error != 0)
        throw StringifyError(ERR_UNKNOWN(oPacketResult.errorText));

    oTask = ArrayOptFirstElem(XQuery("for $elem in tasks where task_type_id = 0x69F09B8333E3207E and status = 'n' and target_object_id = "+OptInt(teRequest.id)+" and executor_id = "+OptInt(oDTO.person_id)+" return $elem"))
    if(oTask!=undefined){
        docTask =  tools.open_doc(oTask.id);
        teTask = docTask.TopElem;
        teTask.status='0'
        docTask.Save();
    }
}
// ===========================================

// ===============   Main   ==================
try {
    var VacationTypeODTypeID = 7597734394416466165;
    var RequestTypeCode_Vacation = "afl_vacation_request";
    var RequestTypeCode_PlannedVacation = "afl_planned_vacation_request"
    var RequestTypeCodes = [
        RequestTypeCode_Vacation,
        RequestTypeCode_PlannedVacation
    ];

    // Загружаем виды отпусков в память
    var Repo_VacationType_ARRAY = Repo_VacationType_Load(VacationTypeODTypeID);
    var Repo_VacationType_MAP_CODE = Array2MapByKey(Repo_VacationType_ARRAY, "code");
    var Repo_VacationType_MAP_ID = Array2MapByKey(Repo_VacationType_ARRAY, "id");
    
    // Загружаем типы заявок в память
    var Repo_RequestType_ARRAY = Repo_RequestType_Load(RequestTypeCodes);
    var Repo_RequestType_MAP_CODE = Array2MapByKey(Repo_RequestType_ARRAY, "code");
    var Repo_RequestType_MAP_ID = Array2MapByKey(Repo_RequestType_ARRAY, "id");
    
    // Проверяем, что все необходимые типы заявок загружены
    var RequestType_Vacation = Repo_RequestType_GetByCode(RequestTypeCode_Vacation);
    if (RequestType_Vacation == undefined) {
        throw StringifyError(ERR_NO_DATA_LOADED_REQUEST_TYPE(RequestTypeCode_Vacation));
    }

    var RequestType_PlannedVacation = Repo_RequestType_GetByCode(RequestTypeCode_PlannedVacation);
    if (RequestType_PlannedVacation == undefined) {
        throw StringifyError(ERR_NO_DATA_LOADED_REQUEST_TYPE(RequestTypeCode_PlannedVacation));
    }
    
    HandleRequest();
} catch (e) {
    var oError = ParseError(e);
    if (oError.type.value == ErrType_Unknown.value) {
        Debug("Unknown error: " + String(e));
    }

    HTTPSendError(oError);
}
%>