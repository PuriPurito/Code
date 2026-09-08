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
        // Операнд-пустышка (например XQB_Eq по пустому массиву) оставил бы висящий and
        if (IsEmptyValue(Trim(String(sOperand)))) {
            continue;
        }
        aStringOperands.push(sOperand);
    }

    if (ArrayCount(aStringOperands) < 1) {
        return "";
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
 * Снимок значений custom_elems перед изменением, для отката
 * @param {Object} teObj
 * @param {string[]} aKeys
 * @returns {Object[]}
 */
function SnapshotCustomElems(teObj, aKeys) {
    var aSnapshot = [];
    var sKey, xmlField;

    for (sKey in aKeys) {
        xmlField = teObj.custom_elems.GetOptChildByKey(String(sKey));
        aSnapshot.push({
            key: String(sKey),
            existed: xmlField != undefined,
            value: (xmlField != undefined ? xmlField.value.Value : undefined)
        });
    }

    return aSnapshot;
}

/**
 * Возврат custom_elems к снимку. Элемент, которого не было, удаляется:
 * отсутствие и false у is_decided читаются по-разному
 * @param {Object} teObj
 * @param {Object[]} aSnapshot
 * @returns {void}
 */
function RestoreCustomElems(teObj, aSnapshot) {
    var oItem;

    for (oItem in aSnapshot) {
        if (oItem.existed) {
            teObj.custom_elems.ObtainChildByKey(oItem.key).value = oItem.value;
        } else {
            teObj.custom_elems.DeleteChildren("This.name == '" + oItem.key + "'");
        }
    }
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

/**
 * Совпадение дат без учёта времени
 * @param {Date=} dLeft
 * @param {Date=} dRight
 * @returns {boolean}
 */
function IsSameDay(dLeft, dRight) {
    if (dLeft == undefined || dRight == undefined) {
        return false;
    }

    return DateDiff(DateNewTime(dLeft), DateNewTime(dRight)) == 0;
}

/**
 * @param {number[]} aIDs
 * @param {number} iID
 * @returns {boolean}
 */
function ContainsID(aIDs, iID) {
    var iItem;
    for (iItem in aIDs) {
        if (OptInt(iItem) == OptInt(iID)) {
            return true;
        }
    }

    return false;
}

/**
 * @param {string[]} aValues
 * @param {string} sValue
 * @returns {boolean}
 */
function ContainsString(aValues, sValue) {
    var sItem;
    for (sItem in aValues) {
        if (String(sItem) == String(sValue)) {
            return true;
        }
    }

    return false;
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
var ErrType_HrSendFailed = NewErrorType("hr_send_failed", 500, "Ошибка отправки данных в кадровую систему");
var ErrType_FileUploadFailed = NewErrorType("file_upload_failed", 500, "Ошибка загрузки файла");

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

/**
 *
 * @param {string} sComment
 * @returns {CustomError}
 */
function ERR_HR_SEND_FAILED(sComment) {
    return NewCustomError(ErrType_HrSendFailed, sComment);
}

/**
 *
 * @param {string} sComment
 * @returns {CustomError}
 */
function ERR_FILE_UPLOAD_FAILED(sComment) {
    return NewCustomError(ErrType_FileUploadFailed, sComment);
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

// ====== Planned Vacation Repo (график) =====
/**
 * Строка табличной части cc_vacation_schedule
 * @typedef {Object} PlannedVacation
 * @property {string} id
 * @property {number} schedule_id
 * @property {Date} start_date
 * @property {Date} finish_date
 * @property {number=} days
 * @property {boolean} is_plan
 * @property {string} type_code
 * @property {string} type_name
 */

/**
 * Период отбора строк графика
 * @typedef {Object} SchedulePeriod
 * @property {Date=} date_from
 * @property {Date=} date_to
 */

/**
 * Условия отбора документов графика.
 * Год берётся на один шире периода: отпуск на стыке годов лежит в документе того года,
 * чей разрез его принёс.
 * @param {SchedulePeriod} oPeriod
 * @returns {XQueryBuilder_Operand[]}
 */
function Repo_PlannedVacation_PeriodConditions(oPeriod) {
    var aConditions = [];
    var sFrom, sTo;

    if (oPeriod.date_from != undefined) {
        sFrom = StrDate(oPeriod.date_from);
        aConditions.push("year >= " + (Year(oPeriod.date_from) - 1));
        aConditions.push("last_finish_date >= date('" + sFrom + "')");
    }

    if (oPeriod.date_to != undefined) {
        sTo = StrDate(oPeriod.date_to);
        aConditions.push("year <= " + Year(oPeriod.date_to));
        aConditions.push("first_start_date <= date('" + sTo + "')");
    }

    return aConditions;
}

/**
 * Попадает ли отпуск в период отбора
 * @param {Date} dStart
 * @param {Date=} dFinish
 * @param {SchedulePeriod} oPeriod
 * @returns {boolean}
 */
function Repo_PlannedVacation_InPeriod(dStart, dFinish, oPeriod) {
    if (dStart == undefined) {
        return false;
    }

    if (dFinish == undefined) {
        dFinish = dStart;
    }

    if (oPeriod.date_from != undefined && DateDiff(DateNewTime(dFinish), DateNewTime(oPeriod.date_from)) < 0) {
        return false;
    }

    if (oPeriod.date_to != undefined && DateDiff(DateNewTime(dStart), DateNewTime(oPeriod.date_to)) > 0) {
        return false;
    }

    return true;
}

/**
 * Плановые отпуска сотрудника из графика
 * @param {number} iPersonID
 * @param {SchedulePeriod} oPeriod
 * @returns {PlannedVacation[]}
 */
function Repo_PlannedVacation_Load(iPersonID, oPeriod) {
    var aConditions = [XQB_Eq("person_id", OptInt(iPersonID, 0))];

    var sCondition;
    for (sCondition in Repo_PlannedVacation_PeriodConditions(oPeriod)) {
        aConditions.push(sCondition);
    }

    var sQuery = XQB_Select({
        Catalog: "cc_vacation_schedules",
        Where: XQB_Where(aConditions)
    });

    var aSchedules = ArraySelectAll(XQuery(sQuery));

    var aResult = [];
    var oSchedule, docSchedule, teSchedule, oRow, dStart, dFinish, sTypeName, sTypeCode;

    // open_doc в цикле: табличной части нет в каталоге, а документов один-два на сотрудника
    for (oSchedule in aSchedules) {
        docSchedule = tools.open_doc(OptInt(oSchedule.id));
        if (docSchedule == undefined) {
            continue;
        }
        teSchedule = docSchedule.TopElem;

        for (oRow in teSchedule.vacations) {
            dStart = OptDate(oRow.start_date);
            dFinish = OptDate(oRow.finish_date);

            if (!Repo_PlannedVacation_InPeriod(dStart, dFinish, oPeriod)) {
                continue;
            }

            // Код вида есть только когда справочник ВидыОтпусков уже синхронизирован
            sTypeCode = "";
            try {
                sTypeCode = String(oRow.presence_state_id.OptForeignElem.code);
            } catch (e) {
                sTypeCode = "";
            }

            // Название из пакета выручает, если справочник ВидыОтпусков ещё не синхронизирован
            sTypeName = String(oRow.presence_state_name);
            if (IsEmptyValue(sTypeName)) {
                try {
                    sTypeName = String(oRow.presence_state_id.OptForeignElem.name);
                } catch (e) {
                    sTypeName = "";
                }
            }

            aResult.push({
                id: String(oRow.code),
                schedule_id: OptInt(teSchedule.id),
                start_date: dStart,
                finish_date: dFinish,
                days: OptInt(oRow.days),
                is_plan: tools_web.is_true(oRow.is_plan),
                type_code: sTypeCode,
                type_name: sTypeName
            });
        }
    }

    return aResult;
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
            vacation_days_number: OptInt(GetCustomElem(teRequest, "vacation_days_number")),
            // initial_* при переносе не перезаписываются: это ключ строки графика в 1С
            initial_start_date: OptDate(GetCustomElem(teRequest, "initial_start_date")),
            initial_end_date: OptDate(GetCustomElem(teRequest, "initial_end_date")),
            workflow_state: teRequest.workflow_state_name.Value,
            is_decided: tools_web.is_true(GetCustomElem(teRequest, "is_decided", true)),
            is_confirmed: tools_web.is_true(GetCustomElem(teRequest, "is_confirmed", false)),
            revision_comment: String(GetCustomElem(teRequest, "revision_comment", ""))
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
 * Текст ошибки для пользователя. У unknown_error комментарий диагностический,
 * в текст не попадает
 * @param {CustomError} oError
 * @returns {string}
 */
function HTTPErrorMessage(oError) {
    if (oError.type.value == ErrType_Unknown.value || IsEmptyValue(oError.comment)) {
        return oError.type.description;
    }

    return oError.type.description + ": " + oError.comment;
}

/**
 * Отправка HTTP ответа с ошибкой
 * @param {CustomError} oError
 */
function HTTPSendError(oError) {
    HTTPSendResponse(oError.type.code, HTTPErrorMessage(oError), {
        error: oError.type.value,
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
    var oListDTO = DTO_GetPlannedVacationsFromHTTP(oHTTPRequest);
    var aVacations = UC_GetPersonVacationList(oListDTO);

    var oStatsDTO = DTO_GetPersonVacationStatsFromHTTP(oHTTPRequest);
    var oStats = UC_GetPersonVacationStats(oStatsDTO);

    var oResult = {
        stats: oStats,
        vacations: aVacations
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
 * @property {Object[]} files подтверждающие документы, загруженные вместе с заявлением
 */

/**
 * Создает DTO NewVacationRequest
 * @param {number} iPersonID
 * @param {VacationType} oVacationType
 * @param {Date} dStartDate
 * @param {Date} dEndDate
 * @param {number} iDays
 * @param {string} sComment
 * @param {Object[]=} aFiles
 * @returns {NewVacationRequestDTO}
 */
function DTO_NewVacationRequst(iPersonID, oVacationType, dStartDate, dEndDate, iDays, sComment, aFiles) {
    return {
        person_id: iPersonID,
        vacation_type: oVacationType,
        vacation_start_date: dStartDate,
        vacation_end_date: dEndDate,
        vacation_days_number: iDays,
        vacation_comment: sComment,
        files: (aFiles == undefined ? [] : aFiles)
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

    // Подтверждающие документы приходят multipart-телом того же запроса
    var aFiles = CollectUploadedFiles(oHTTPRequest);

    return DTO_NewVacationRequst(iPersonID, oVacationType, oData.start_date, oData.end_date, oData.days_number, oData.comment, aFiles);
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
 * @typedef {Object} GetPlannedVacationsDTO
 * @property {number} person_id
 * @property {Date=} date_from
 * @property {Date=} date_to
 */

/**
 *
 * @param {number} iPersonID
 * @param {Date=} dFrom
 * @param {Date=} dTo
 * @returns {GetPlannedVacationsDTO}
 */
function DTO_GetPlannedVacations(iPersonID, dFrom, dTo) {
    return {
        person_id: iPersonID,
        date_from: dFrom,
        date_to: dTo
    }
}

/**
 * По умолчанию только предстоящие; границы переопределяются date_from/date_to
 * @param {HTTPRequest} oHTTPRequest
 * @returns {GetPlannedVacationsDTO}
 */
function DTO_GetPlannedVacationsFromHTTP(oHTTPRequest) {
    var iPersonID = RequiredUserID();

    /**
     * @type {{
     *  date_from: Date,
     *  date_to: Date
     * }}
     */
    var oData = ObjectValidator(oHTTPRequest.Query, [
        NewValidationField("date_from", "date", false, "Начало периода"),
        NewValidationField("date_to", "date", false, "Конец периода")
    ]);

    var dFrom = oData.date_from;
    if (dFrom == undefined) {
        dFrom = DateNewTime(Date());
    }

    return DTO_GetPlannedVacations(iPersonID, dFrom, oData.date_to);
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

// ============ Кадровая система =============
/**
 * Отправка заявления на отпуск в кадровую систему (пакет VacationRequest, Документ.ЗаявкаНаОтпуск)
 * @param {number} iRequestID
 * @returns {void}
 */
function SendRequest(iRequestID) {
    var iSystemID = OptInt(tools.get_params_code_library("libAfl1CZup").GetOptProperty("iSystemID", 0));
    if (iSystemID == undefined || iSystemID == 0) {
        Debug("SendRequest: не задан параметр iSystemID в libAfl1CZup");
        throw StringifyError(ERR_HR_SEND_FAILED("заявка не создана, попробуйте позже"));
    }

    var oPacketResult = tools.call_code_library_method("libAflIntegration", "CreatePackage", ["VacationRequest", iSystemID, { aObjectIDs: [iRequestID] }, undefined]);
    if (oPacketResult.error != 0) {
        Debug("SendRequest: заявка " + iRequestID + " не ушла в кадровую систему: " + oPacketResult.errorText);
        throw StringifyError(ERR_HR_SEND_FAILED("заявка не создана, попробуйте позже"));
    }
}

/**
 * Отправка решения по плановому отпуску в кадровую систему (пакет VacationRequestEditing)
 * @param {number} iRequestID
 * @param {string} sFailComment текст для сотрудника, если отправка не удалась
 * @returns {void}
 */
function SendDecision(iRequestID, sFailComment) {
    var iSystemID = OptInt(tools.get_params_code_library("libAfl1CZup").GetOptProperty("iSystemID", 0));
    if (iSystemID == undefined || iSystemID == 0) {
        Debug("SendDecision: не задан параметр iSystemID в libAfl1CZup");
        throw StringifyError(ERR_HR_SEND_FAILED(sFailComment));
    }

    var oPacketResult = tools.call_code_library_method("libAflIntegration", "CreatePackage", ["VacationRequestEditing", iSystemID, { aObjectIDs: [iRequestID] }, undefined]);
    if (oPacketResult.error != 0) {
        Debug("SendDecision: решение по заявке " + iRequestID + " не ушло в кадровую систему: " + oPacketResult.errorText);
        throw StringifyError(ERR_HR_SEND_FAILED(sFailComment));
    }
}

/**
 * Убирает несостоявшуюся заявку: сама заявка удаляется без корзины, следом ее файлы-ресурсы
 * @param {Object} docRequest
 * @returns {void}
 */
function RollbackNewRequest(docRequest) {
    var aResourceIDs = [];
    var oFile, iResourceID;

    try {
        for (oFile in docRequest.TopElem.files) {
            iResourceID = OptInt(oFile.file_id);
            if (iResourceID != undefined) {
                aResourceIDs.push(iResourceID);
            }
        }
    } catch (eFiles) {
        Debug("RollbackNewRequest: не прочитан список файлов заявки " + docRequest.DocID + ": " + String(eFiles));
    }

    try {
        DeleteDoc(UrlFromDocID(docRequest.DocID), true);
    } catch (eDoc) {
        Debug("RollbackNewRequest: заявка " + docRequest.DocID + " не удалена: " + String(eDoc));
    }

    for (iResourceID in aResourceIDs) {
        try {
            ms_tools.delete_resource(iResourceID);
        } catch (eResource) {
            Debug("RollbackNewRequest: ресурс " + iResourceID + " не удален: " + String(eResource));
        }
    }
}

/**
 * Откат решения по плановому отпуску: custom_elems возвращаются к снимку
 * @param {Object} docRequest
 * @param {Object[]} aSnapshot
 * @returns {void}
 */
function RollbackDecision(docRequest, aSnapshot) {
    try {
        RestoreCustomElems(docRequest.TopElem, aSnapshot);
        docRequest.Save();
    } catch (eRollback) {
        Debug("RollbackDecision: откат заявки " + docRequest.DocID + " не удался: " + String(eRollback));
    }
}
// ===========================================

// ============ Файлы заявки =================
/**
 * Имя загруженного файла без клиентского пути (старые браузеры шлют полный путь)
 * @param {string} sName
 * @returns {string}
 */
function UploadedFileName(sName) {
    var aParts = String(sName).split("\\");
    var sLast = String(aParts[ArrayCount(aParts) - 1]);

    aParts = sLast.split("/");
    sLast = String(aParts[ArrayCount(aParts) - 1]);

    return IsEmptyValue(sLast) ? String(sName) : sLast;
}

/**
 * Расширение файла в нижнем регистре, без точки
 * @param {string} sFileName
 * @returns {string}
 */
function UploadedFileExtension(sFileName) {
    var aParts = String(sFileName).split(".");

    if (ArrayCount(aParts) < 2) {
        return "";
    }

    return StrLowerCase(String(aParts[ArrayCount(aParts) - 1]));
}

/**
 * Файлы из multipart-тела запроса. Поля document_0..document_N, их число - в files_number
 * @param {HTTPRequest} oHTTPRequest
 * @returns {Object[]}
 */
function CollectUploadedFiles(oHTTPRequest) {
    var iCount = OptInt(oHTTPRequest.Query.GetOptProperty("files_number", 0), 0);
    var aFiles = [];
    var oForm;
    var oFile;
    var sFileName;
    var i;

    if (iCount == undefined || iCount <= 0) {
        return aFiles;
    }

    if (iCount > FilesLimit) {
        throw StringifyError(ERR_FILE_UPLOAD_FAILED("Файлов больше допустимого: " + iCount + " (максимум " + FilesLimit + ")"));
    }

    // Form у запроса без web-формы бросает исключение
    try {
        oForm = oHTTPRequest.Form;
    } catch (e) {
        oForm = undefined;
    }

    if (oForm == undefined) {
        return aFiles;
    }

    for (i = 0; i < iCount; i++) {
        oFile = oForm.GetOptProperty("document_" + i, undefined);
        if (oFile != undefined) {
            sFileName = UploadedFileName(oFile.FileName);
            if (!ContainsString(FilesAllowedExtensions, UploadedFileExtension(sFileName))) {
                throw StringifyError(ERR_FILE_UPLOAD_FAILED(
                    "Формат файла не поддерживается: " + sFileName + ". Допустимые: " + FilesAllowedExtensions.join(", ")
                ));
            }

            aFiles.push(oFile);
        }
    }

    return aFiles;
}

/**
 * Ресурс (файл) из загруженного файла
 * @param {Object} oFile
 * @param {number} iPersonID
 * @param {string} sPersonName
 * @returns {Object} документ ресурса
 */
function NewFileResource(oFile, iPersonID, sPersonName) {
    var sFileName = UploadedFileName(oFile.FileName);
    var sDir = ObtainTempDirectoryPath() + "/" + UniqueID();
    var sPath = sDir + "/" + sFileName;
    var docResource;

    ObtainDirectory(sDir);
    PutFileData(sPath, oFile.GetStr());

    docResource = OpenNewDoc("x-local://wtv/wtv_resource.xmd");
    docResource.BindToDb();
    docResource.TopElem.put_data(FilePathToUrl(sPath));
    docResource.TopElem.name = sFileName;
    docResource.TopElem.person_id = iPersonID;
    docResource.TopElem.person_fullname = sPersonName;
    docResource.Save();

    return docResource;
}

/**
 * Прикладывает загруженные файлы к заявке. Заявка должна быть уже сохранена:
 * AddFile прописывает ресурсу обратную ссылку по DocID заявки
 * @param {Object} docRequest
 * @param {Object[]} aFiles
 * @param {number} iPersonID
 * @param {string} sPersonName
 * @returns {number} сколько файлов приложено
 */
function AttachRequestFiles(docRequest, aFiles, iPersonID, sPersonName) {
    var iAttached = 0;
    var oFile;
    var docResource;

    for (oFile in aFiles) {
        try {
            docResource = NewFileResource(oFile, iPersonID, sPersonName);
        } catch (e) {
            Debug("AttachRequestFiles: файл '" + UploadedFileName(oFile.FileName) + "' не сохранен: " + String(e));
            throw StringifyError(ERR_FILE_UPLOAD_FAILED("не удалось сохранить файл " + UploadedFileName(oFile.FileName) + ", заявка не создана"));
        }

        if (docRequest.TopElem.AddFile(docResource.DocID, docResource)) {
            docResource.Save();
            iAttached++;
        }
    }

    if (iAttached > 0) {
        docRequest.Save();
    }

    return iAttached;
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
    teVacationReq.workflow_state = "created";
    teVacationReq.workflow_state_name = "Создана";
    teVacationReq.is_workflow_init = 1;
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

    // Заявка уже в базе: сбой файлов или отправки убирает ее целиком
    try {
        // Файлы кладём до отправки: пакет в 1С собирается уже по заявке с документами
        AttachRequestFiles(docVacationReq, oDTO.files, oDTO.person_id, tePerson.fullname);

        SendRequest(docVacationReq.DocID);
    } catch (eSend) {
        RollbackNewRequest(docVacationReq);
        throw StringifyError(ParseError(eSend));
    }

    // Компоновщик пакета дописал заявке code_1c и сохранил её - этап ставим на свежем экземпляре
    var docSent = tools.open_doc(docVacationReq.DocID);
    docSent.TopElem.workflow_state = "sent_to_erp";
    docSent.TopElem.workflow_state_name = "Отправлена в кадровую систему";
    docSent.Save();

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
 * @param {Object[]} aSchedules
 * @param {PlannedVacation} oSchedule
 * @returns {PlannedVacation=}
 */
function FindSameDatesSchedule(aSchedules, oSchedule) {
    var oItem;

    for (oItem in aSchedules) {
        if (IsSameDay(oItem.start_date, oSchedule.start_date) && IsSameDay(oItem.finish_date, oSchedule.finish_date)) {
            return oItem;
        }
    }

    return undefined;
}

/**
 * Один отпуск приезжает и планом, и фактом. Оставляем одну строку на период дат,
 * приоритет плановой.
 * @param {PlannedVacation[]} aSchedules
 * @returns {PlannedVacation[]}
 */
function DedupeSchedules(aSchedules) {
    var aResult = [];
    var oSchedule, oExisting;

    for (oSchedule in aSchedules) {
        oExisting = FindSameDatesSchedule(aResult, oSchedule);

        if (oExisting == undefined) {
            aResult.push(oSchedule);
            continue;
        }

        if (oSchedule.is_plan == true && oExisting.is_plan != true) {
            oExisting.id = oSchedule.id;
            oExisting.days = oSchedule.days;
            oExisting.is_plan = oSchedule.is_plan;
            oExisting.type_name = oSchedule.type_name;
            oExisting.schedule_id = oSchedule.schedule_id;
        }
    }

    return aResult;
}

/**
 * Заявка планового отпуска для строки графика.
 * Ключ 1С - сотрудник и дата начала; у заявки она в initial_start_date и при переносе
 * не перезаписывается. Явной ссылки нет: строку переписывает каждая суточная выгрузка.
 * @param {PlannedVacation} oSchedule
 * @param {Object[]} aRequests
 * @param {number[]} aUsedRequestIDs
 * @returns {Object=}
 */
function FindRequestForSchedule(oSchedule, aRequests, aUsedRequestIDs) {
    var oRequest;

    for (oRequest in aRequests) {
        if (ContainsID(aUsedRequestIDs, oRequest.id)) {
            continue;
        }

        if (IsSameDay(oRequest.initial_start_date, oSchedule.start_date)) {
            return oRequest;
        }

        if (oRequest.initial_start_date == undefined && IsSameDay(oRequest.vacation_start_date, oSchedule.start_date)) {
            return oRequest;
        }
    }

    return undefined;
}

/**
 * Группа элемента для блока на странице: основной отпуск строго по ссылке вида
 * из параметра iMainVacationTypeID, всё остальное - дополнительные.
 * @param {string} sTypeCode
 * @returns {string}
 */
function ResolveVacationGroup(sTypeCode) {
    if (!IsEmptyValue(sTypeCode) && !IsEmptyValue(MainVacationTypeLink) && StrLowerCase(String(sTypeCode)) == MainVacationTypeLink) {
        return VacationGroup_Main;
    }
    return VacationGroup_Additional;
}

/**
 * Элемент списка отпусков. Форма общая для строки графика и внеплановой заявки:
 * страница рисует их одинаково.
 * @typedef {Object} VacationItem
 * @property {string} id
 * @property {string} request_id
 * @property {string} group
 * @property {string} type_code
 * @property {string} type_name
 * @property {Date=} start_date
 * @property {Date=} end_date
 * @property {number=} days
 * @property {string} workflow_state
 * @property {boolean} is_decided
 * @property {boolean} can_decide
 * @property {string} revision_comment
 */

/**
 * @param {string} sID
 * @param {string} sTypeCode
 * @param {string} sTypeName
 * @returns {VacationItem}
 */
function NewVacationItem(sID, sTypeCode, sTypeName) {
    return {
        id: sID,
        request_id: "",
        group: ResolveVacationGroup(sTypeCode),
        type_code: sTypeCode,
        type_name: sTypeName,
        start_date: undefined,
        end_date: undefined,
        days: undefined,
        workflow_state: "",
        is_decided: false,
        can_decide: false,
        revision_comment: ""
    };
}

/**
 * Плановый отпуск: строка графика, уведомление или и то и другое.
 * Пока решение не принято, по нему доступны подтверждение и перенос.
 * @param {PlannedVacation=} oSchedule
 * @param {Object=} oRequest
 * @returns {VacationItem}
 */
function NewPlannedVacationItem(oSchedule, oRequest) {
    var sTypeCode = "";
    var sTypeName = "";

    if (oSchedule != undefined) {
        sTypeCode = oSchedule.type_code;
        sTypeName = oSchedule.type_name;
    } else if (oRequest.vacation_type != undefined) {
        sTypeCode = oRequest.vacation_type.code;
        sTypeName = oRequest.vacation_type.name;
    } else if (oRequest.request_type != undefined) {
        sTypeName = oRequest.request_type.name;
    }

    var oItem = NewVacationItem("", sTypeCode, sTypeName);

    if (oSchedule != undefined) {
        oItem.id = oSchedule.id;
        oItem.start_date = oSchedule.start_date;
        oItem.end_date = oSchedule.finish_date;
        oItem.days = oSchedule.days;
    }

    if (oRequest == undefined) {
        return oItem;
    }

    oItem.id = String(oRequest.id);
    oItem.request_id = String(oRequest.id);
    oItem.workflow_state = oRequest.workflow_state;
    oItem.is_decided = oRequest.is_decided;
    oItem.can_decide = !oRequest.is_decided;
    oItem.revision_comment = oRequest.revision_comment;

    if (oSchedule == undefined) {
        oItem.start_date = oRequest.vacation_start_date;
        oItem.end_date = oRequest.vacation_end_date;
        oItem.days = oRequest.vacation_days_number;
    }

    return oItem;
}

/**
 * Внеплановая заявка сотрудника. Подтверждение и перенос к ней неприменимы:
 * submit_planned/reschedule_planned работают только с плановым отпуском.
 * @param {Object} oRequest
 * @returns {VacationItem}
 */
function NewUnplannedVacationItem(oRequest) {
    var sTypeCode = "";
    var sTypeName = "";

    if (oRequest.vacation_type != undefined) {
        sTypeCode = oRequest.vacation_type.code;
        sTypeName = oRequest.vacation_type.name;
    } else if (oRequest.request_type != undefined) {
        sTypeName = oRequest.request_type.name;
    }

    var oItem = NewVacationItem(String(oRequest.id), sTypeCode, sTypeName);

    oItem.request_id = String(oRequest.id);
    oItem.start_date = oRequest.vacation_start_date;
    oItem.end_date = oRequest.vacation_end_date;
    oItem.days = oRequest.vacation_days_number;
    oItem.workflow_state = oRequest.workflow_state;
    oItem.is_decided = oRequest.is_decided;
    oItem.revision_comment = oRequest.revision_comment;

    return oItem;
}

/**
 * Попадает ли заявка в период отбора (по датам самого отпуска)
 * @param {Object} oRequest
 * @param {SchedulePeriod} oPeriod
 * @returns {boolean}
 */
function IsRequestInPeriod(oRequest, oPeriod) {
    var dStart = oRequest.vacation_start_date;
    var dEnd = oRequest.vacation_end_date;

    if (oPeriod.date_from != undefined && dEnd != undefined && DateDiff(DateNewTime(dEnd), DateNewTime(oPeriod.date_from)) < 0) {
        return false;
    }

    if (oPeriod.date_to != undefined && dStart != undefined && DateDiff(DateNewTime(dStart), DateNewTime(oPeriod.date_to)) > 0) {
        return false;
    }

    return true;
}

/**
 * UseCase GetPersonPlannedVacations
 * @param {GetPlannedVacationsDTO} oDTO
 * @param {Object[]} aVacationRequests
 * @returns {Object[]}
 */
function UC_GetPersonPlannedVacations(oDTO, aVacationRequests) {
    var aSchedules = DedupeSchedules(Repo_PlannedVacation_Load(oDTO.person_id, oDTO));

    var aPlannedRequests = [];
    var oRequest;

    for (oRequest in aVacationRequests) {
        if (oRequest.request_type != undefined && oRequest.request_type.code == RequestTypeCode_PlannedVacation) {
            aPlannedRequests.push(oRequest);
        }
    }

    var aResult = [];
    var aUsedRequestIDs = [];
    var oSchedule, oMatched;

    for (oSchedule in aSchedules) {
        oMatched = FindRequestForSchedule(oSchedule, aPlannedRequests, aUsedRequestIDs);
        if (oMatched != undefined) {
            aUsedRequestIDs.push(OptInt(oMatched.id));
        }

        aResult.push(NewPlannedVacationItem(oSchedule, oMatched));
    }

    // Уведомление может прийти раньше строки графика. Отвеченные без строки не показываем:
    // график их обогнал
    for (oRequest in aPlannedRequests) {
        if (ContainsID(aUsedRequestIDs, oRequest.id)) {
            continue;
        }

        if (oRequest.is_decided) {
            continue;
        }

        if (!IsRequestInPeriod(oRequest, oDTO)) {
            continue;
        }

        aResult.push(NewPlannedVacationItem(undefined, oRequest));
    }

    return aResult;
}

/**
 * UseCase GetPersonVacationList
 * Единый список для страницы: плановые отпуска (строки графика, сшитые с уведомлениями)
 * и внеплановые заявки. Плановые заявки отдельно не отдаём - они уже внутри плановых
 * элементов, иначе страница показала бы один отпуск дважды.
 * @param {GetPlannedVacationsDTO} oDTO
 * @returns {VacationItem[]}
 */
function UC_GetPersonVacationList(oDTO) {
    var aRequests = UC_GetPersonVacationRequests(DTO_GetPersonVacationRequests(oDTO.person_id));

    var aResult = UC_GetPersonPlannedVacations(oDTO, aRequests);

    var oRequest;
    for (oRequest in aRequests) {
        if (oRequest.request_type == undefined || oRequest.request_type.code != RequestTypeCode_Vacation) {
            continue;
        }

        aResult.push(NewUnplannedVacationItem(oRequest));
    }

    return ArraySort(aResult, "This.start_date", "+");
}

/**
 * Дробные остатки из 1С кратны трети дня, суммы дают двоичный хвост.
 * OptInt на отрицательных real переполняется, поэтому знак снимаем заранее.
 * @param {number} rValue
 * @returns {number}
 */
function RoundDays(rValue) {
    var bNegative = rValue < 0;
    var rAbs = bNegative ? -rValue : rValue;
    var rRounded = OptInt(rAbs * 100 + 0.5) / 100.0;
    return (bNegative ? -rRounded : rRounded);
}

/**
 * Остатки дней из документов cc_vacation_remainder (импорт пакета ОстаткиОтпусков).
 * У основного вида остаток сверх годовой нормы - перенос с прошлых лет
 * (отрицательный излишек считается нулём), остальное - текущий год.
 * Документов у сотрудника может быть несколько (совместительство), суммируем все.
 * @param {GetPersonVacationStatsDTO} oDTO
 * @returns {Object}
 */
function UC_GetPersonVacationStats(oDTO) {
    var oStats = {
        total_available: 0,
        common_current: 0,
        common_other: 0,
        additional: 0
    };

    var aRemainderDocs = ArraySelectAll(XQuery(
        "for $e in cc_vacation_remainders where $e/person_id = " + OptInt(oDTO.person_id) + " return $e/Fields('id')"
    ));

    // Табличной части нет в каталоге, поэтому open_doc; документов единицы
    var bHasData = false;
    var oRemainderDoc, docRemainder, oRow, rRest, iAnnual, rOther;
    for (oRemainderDoc in aRemainderDocs) {
        docRemainder = tools.open_doc(OptInt(oRemainderDoc.id));
        if (docRemainder == undefined) {
            continue;
        }
        for (oRow in docRemainder.TopElem.remainders) {
            rRest = OptReal(oRow.rest_days);
            if (rRest == undefined) {
                continue;
            }
            bHasData = true;
            if (!IsEmptyValue(MainVacationTypeLink) && StrLowerCase(String(oRow.code)) == MainVacationTypeLink) {
                iAnnual = OptInt(oRow.annual_days);
                rOther = iAnnual == undefined ? 0 : rRest - iAnnual;
                if (rOther < 0) {
                    rOther = 0;
                }
                oStats.common_other = oStats.common_other + rOther;
                oStats.common_current = oStats.common_current + (rRest - rOther);
            } else {
                oStats.additional = oStats.additional + rRest;
            }
        }
    }

    // Нет данных по остаткам - на странице прочерк, а не ноль
    if (!bHasData) {
        return { total_available: null, common_current: null, common_other: null, additional: null };
    }

    oStats.common_current = RoundDays(oStats.common_current);
    oStats.common_other = RoundDays(oStats.common_other);
    oStats.additional = RoundDays(oStats.additional);
    oStats.total_available = RoundDays(oStats.common_current + oStats.common_other + oStats.additional);

    return oStats;
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

    // Компоновщик пакета читает заявку из базы, поэтому решение сохраняется до отправки
    var aSnapshot = SnapshotCustomElems(teRequest, ["is_decided", "is_confirmed", "decision_date", "revision_comment", "comment"]);

    SetCustomElem(teRequest, "is_decided", true);
    SetCustomElem(teRequest, "is_confirmed", true);
    SetCustomElem(teRequest, "decision_date", Date());
    SetCustomElem(teRequest, "revision_comment", "");

    if (oDTO.comment != "") {
        SetCustomElem(teRequest, "comment", oDTO.comment);
    }

    docRequest.Save();

    try {
        SendDecision(oDTO.request_id, "подтверждение не выполнено, попробуйте позже");
    } catch (eSend) {
        RollbackDecision(docRequest, aSnapshot);
        throw StringifyError(ParseError(eSend));
    }

    teRequest.workflow_state = "sent_to_erp";
    teRequest.workflow_state_name = "Отправлена в кадровую систему";
    docRequest.Save();

    // Ксюша 11.08.2026
    // Уведомление специалистам ОКА - только после успешной отправки решения
    // 04.09.2026 - на всякий случай не удаляю отправку уведомлений, просто комментирую
    //tools.call_code_library_method("libAflDocuments", "SendNotificationRequest", [teRequest, "hr", "", "afl_vac_conf_oka_emp"]);

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

    // Компоновщик пакета читает заявку из базы, поэтому решение сохраняется до отправки
    var aSnapshot = SnapshotCustomElems(teRequest, [
        "is_decided", "is_confirmed", "decision_date", "revision_comment",
        "new_start_date", "new_end_date", "new_days_number",
        "vacation_start_date", "vacation_end_date", "vacation_days_number", "vacation_comment"
    ]);

    SetCustomElem(teRequest, "is_decided", true);
    SetCustomElem(teRequest, "is_confirmed", false);
    SetCustomElem(teRequest, "decision_date", Date());
    SetCustomElem(teRequest, "revision_comment", "");
    SetCustomElem(teRequest, "new_start_date", oDTO.new_start_date);
    SetCustomElem(teRequest, "new_end_date", oDTO.new_end_date);
    SetCustomElem(teRequest, "new_days_number", oDTO.new_days_number);

    SetCustomElem(teRequest, "vacation_start_date", oDTO.new_start_date);
    SetCustomElem(teRequest, "vacation_end_date", oDTO.new_end_date);
    SetCustomElem(teRequest, "vacation_days_number", oDTO.new_days_number);

    if (oDTO.comment != "") {
        SetCustomElem(teRequest, "vacation_comment", oDTO.comment);
    }

    docRequest.Save();

    try {
        SendDecision(oDTO.request_id, "перенос не выполнен, попробуйте позже");
    } catch (eSend) {
        RollbackDecision(docRequest, aSnapshot);
        throw StringifyError(ParseError(eSend));
    }

    teRequest.workflow_state = "sent_to_erp";
    teRequest.workflow_state_name = "Отправлена в кадровую систему";
    docRequest.Save();

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
    // Справочник видов отпуска: id прода зашит, на другом стенде переопределяется wvar-ом
    var VacationTypeODTypeID = 7597734394416466165;
    try {
        if (OptInt(iVacationTypeODTypeID) != undefined) {
            VacationTypeODTypeID = OptInt(iVacationTypeODTypeID);
        }
    } catch (errVacationTypeODParam) {
    }
    var RequestTypeCode_Vacation = "afl_vacation_request";
    var RequestTypeCode_PlannedVacation = "afl_planned_vacation_request"
    var RequestTypeCodes = [
        RequestTypeCode_Vacation,
        RequestTypeCode_PlannedVacation
    ];

    // Потолок на число подтверждающих документов в одном заявлении
    var FilesLimit = 10;

    // Форматы подтверждающих документов: сканы, фото и офисные файлы
    var FilesAllowedExtensions = ["pdf", "doc", "docx", "xls", "xlsx", "rtf", "odt", "jpg", "jpeg", "png", "heic", "tif", "tiff"];

    // Группы блоков страницы: основной ежегодный отпуск и всё остальное
    var VacationGroup_Main = "main";
    var VacationGroup_Additional = "additional";

    // Вид основного отпуска - параметр карточки шаблона (wvar, ссылка на presence_state).
    // Дальше сравнение идёт по коду вида (guid 1С): он есть и у строк, где presence_state_id не проставлен.
    var MainVacationTypeLink = "";
    var iMainVacationType = undefined;
    try {
        iMainVacationType = OptInt(iMainVacationTypeID);
    } catch (errMainVacationParam) {
        iMainVacationType = undefined;
    }
    if (iMainVacationType != undefined) {
        var oMainVacationType = ArrayOptFirstElem(
            XQuery("for $ps in presence_states where $ps/id = " + iMainVacationType + " return $ps/Fields('id', 'code')")
        );
        if (oMainVacationType != undefined) {
            MainVacationTypeLink = StrLowerCase(Trim(String(oMainVacationType.code)));
        }
    }
    if (IsEmptyValue(MainVacationTypeLink)) {
        Debug("Параметр iMainVacationTypeID (вид основного отпуска) не заполнен или вид не найден: группа main и остатки основного отпуска будут пустыми");
    }

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