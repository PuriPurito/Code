try { curObjectID } catch (e) { var curObjectID; }
try { curObject } catch (e) { var curObject; }
var oRequestLinks = "[]";
var aTypesCodes = tools_web.parse_multiple_parameter(sTypeCode);
alert("Initial initial: " + sTypeCode);

aRequestLinks = ParseJson(oRequestLinks);

iPersonID = OptInt(SCOPE_WVARS.GetOptProperty("person_id"));
if (iPersonID == undefined) {
    if (tools_web.check_object(curObject, "collaborator")) {
        iPersonID = curObjectID;
    }
    else {
        iPersonID = curUserID;
    }
}

var oCollectionParams = {
    paging: PAGING,
    sort: SORT,
    distincts: [],
    filters: []
}
try {
    oCollectionParams.distincts = ParseJson(_DISTINCTS);
}
catch (e) { }

try {
    oCollectionParams.filters = ParseJson(_FILTERS);
}
catch (e) { }

function GetStrDate(dDate) {
    sDate = ''
    dDate = OptDate(dDate)
    aMonths = ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек']
    if (dDate != undefined) {
        sDate = Day(dDate) + ' ' + aMonths[Month(dDate) - 1] + ' ' + Year(dDate)
    }
    return sDate
}

function GetPersonRequests(iPersonID, iRequestTypeID, sStatus, aTypeCodes, oCollectionParams) {
    var oRes = tools.get_code_library_result_object();
    oRes.requests = [];
    var oPaging = oCollectionParams.GetOptProperty("paging");
    oRes.paging = oPaging;
    oRes.data = {};

    try {
        iPersonID = Int(iPersonID);
    }
    catch (err) {
        oRes.error = 501; // Invalid param
        oRes.errorText = "{ text: 'Invalid param iPersonID.', param_name: 'iPersonID' }";
        return oRes;
    }
    iRequestTypeID = OptInt(iRequestTypeID, null);
    if (sStatus == null) {
        sStatus = "";
    }
    if (!IsArray(aTypeCodes)) {
        aTypeCodes = [];
    }
    if (oCollectionParams == null || oCollectionParams == "") {
        oCollectionParams = new Object;
    }

    var Env = CurRequest.Session.GetOptProperty("Env", ({}));
    var oLngEnv = tools_web.get_cur_lng_obj(Env);
    var curLng = oLngEnv.GetOptProperty("curLng", null);

    var oParams = {
        xquery_qual: ("$elem/person_id = " + iPersonID)
    };

    var xqRequestTypes = [];
    if (ArrayOptFirstElem(aTypeCodes) != undefined) {
        xqRequestTypes = tools.xquery("for $elem in request_types where MatchSome($elem/code, (" + ArrayMerge(aTypeCodes, 'XQueryLiteral(This)', ',') + ")) return $elem/Fields('id')")
        oParams.xquery_qual += " and MatchSome( $elem/request_type_id, (" + ArrayMerge(xqRequestTypes, "This.id", ",") + ") )";
    }

    var arrFilters = oCollectionParams.GetOptProperty("filters", []);

    oFilter = ArrayOptFindByKey(arrFilters, "request_type_id", "id");
    if (oFilter != undefined && ArrayOptFirstElem(oFilter.value) != undefined) {
        oRequestTypeFilter = ArrayOptFirstElem(oFilter.value)
        if (oRequestTypeFilter.value == "all") {
            oParams.xquery_qual += " and MatchSome( $elem/request_type_id, (" + ArrayMerge(xqRequestTypes, "This.id", ",") + ") )";
        } else if (!IsEmptyValue(oRequestTypeFilter.value)) {
            oParams.xquery_qual += " and MatchSome( $elem/request_type_id, (" + OptInt(oRequestTypeFilter.value) + ") )";
        }
    }


    var sort_query = "";
    if (oCollectionParams.HasProperty("sort")) {
        oParams.disp_sort = oCollectionParams.sort.FIELD != null;
        oParams.order = oCollectionParams.sort.FIELD;
        oParams.direct = oCollectionParams.sort.DIRECTION == "DESC" ? "-" : "+";
        if (oParams.disp_sort) {
            sort_query = " order by $elem/" + oParams.order + (oParams.direct == "-" ? " descending" : "")
        }
    }
    var aActiveRequests = XQuery("for $elem in requests where " + oParams.xquery_qual + sort_query + " and $elem/status_id = 'active' return $elem/Fields('id','create_date','code','request_type_id','type','object_id','object_name','status_id','workflow_state','workflow_state_name', 'close_date')");
    var aCloseRequests = XQuery("for $elem in requests where " + oParams.xquery_qual + sort_query + " and $elem/status_id = 'close' return $elem/Fields('id','create_date','code','request_type_id','type','object_id','object_name','status_id','workflow_state','workflow_state_name', 'close_date')");
    var aResult = [];

    aResult.push({
        "id": OptInt(Random(0, 9999)),
        "div": "<div class='header__tr'><div class='header__cell cell header__img'><svg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' clip-rule='evenodd' d='M12.7746 19.2308L12.7746 28.8993L26.9688 12.7808L19.2188 12.7806V3.12207L4.99023 19.2308H12.7746ZM10.2989 16.8265H15.1773V22.5431L21.6564 15.1797H16.8235V9.45801L10.2989 16.8265Z' fill='#1D4CC4'/></svg><span class='header__title'>На оформлении</span></div><div class='header__cell cell'><span class='header__title'>Дата создания</span></div><div class='header__cell cell'><span class='header__title'>Этап</span></div></div>"
    })
    // aResult.push({
    //     "id": OptInt(Random(0, 9999)),
    //     "div": "<div class='content__tr active-requests'><div class='content__cell cell'><span class='content__title'><a href='/requests'>Приём сотрудника</a></span></div><div class='content__cell cell'><span class='content__title'>5 окт 2025</span></div><div class='content__cell cell'><span class='content__title'>Подписание трудового договора кандидатом</span></div></div>",
    // });
    if (ArrayOptFirstElem(aActiveRequests) != undefined) {
        for (oActiveReq in aActiveRequests) {
            catRequestType = oActiveReq.request_type_id.OptForeignElem;
            sRequestType = '';
            if (catRequestType != undefined) {
                switch (catRequestType.code) {
                    case 'afl_acquaint':
                        sRequestType = oActiveReq.object_name;
                        break;
                    default:
                        sRequestType = catRequestType.name.Value;
                        break;
                }
            }
            sLink = "/_wt/" + oActiveReq.id;
            bCodeExist = false;
            for (elem in aRequestLinks) {
                if (elem.request_code == catRequestType.code.Value) {
                    bCodeExist = true;
                    sLink = elem.request_link;
                }
            }
            aResult.push({
                "id": oActiveReq.id.Value,
                "div": "<div class='content__tr active-requests'><div class='content__cell cell'><span class='content__title'><a href='" + String(sLink) + "'>" + String(sRequestType) + "</a></span></div><div class='content__cell cell'><span class='content__title'>" + GetStrDate(oActiveReq.create_date) + "</span></div><div class='content__cell cell'><span class='content__title'>" + String(oActiveReq.workflow_state_name.Value) + "</span></div></div>",
            });
        }
    } else {
        aResult.push({
            "id": OptInt(Random(0, 9999)),
            "div": "<div class='no_data_tr'><svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M19.5 14.25V11.625C19.5 9.76104 17.989 8.25 16.125 8.25H14.625C14.0037 8.25 13.5 7.74632 13.5 7.125V5.625C13.5 3.76104 11.989 2.25 10.125 2.25H8.25M13.4812 15.7312L15 17.25M10.5 2.25H5.625C5.00368 2.25 4.5 2.75368 4.5 3.375V19.875C4.5 20.4963 5.00368 21 5.625 21H18.375C18.9963 21 19.5 20.4963 19.5 19.875V11.25C19.5 6.27944 15.4706 2.25 10.5 2.25ZM14.25 13.875C14.25 15.3247 13.0747 16.5 11.625 16.5C10.1753 16.5 9 15.3247 9 13.875C9 12.4253 10.1753 11.25 11.625 11.25C13.0747 11.25 14.25 12.4253 14.25 13.875Z' stroke='#4F5D74' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/></svg><span class='no_data_text'>В этой категории пока нет документов</span></div>"
        })
    }

    aResult.push({
        "id": OptInt(Random(0, 9999)),
        "div": "<div class='header__tr'><div class='header__cell cell header__img'><svg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M15.8073 21.2565C15.5297 21.2838 14.2249 21.4079 14.045 21.4251C13.7341 20.7241 13.4089 20.1075 13.0165 19.4734C12.3203 18.3486 11.6213 17.3574 10.6666 16.1755C10.6666 16.1755 10.9012 15.8572 11.5003 15.4219C12.0993 14.9867 12.3896 15.0476 12.3896 15.0476C13.4463 16.3557 13.9107 17.1786 14.6946 18.7221C16.162 15.0658 17.6944 12.3086 19.4781 10.1242C19.4781 10.1242 19.7819 10.0334 20.4444 10.4889C21.1069 10.9443 21.2559 11.3253 21.2559 11.3253C19.4901 13.3923 18.1729 15.6585 17.228 17.7155C16.6984 18.8684 16.1993 20.0483 15.8073 21.2565Z' fill='#0D9E12'/><path fill-rule='evenodd' clip-rule='evenodd' d='M27.7333 15.9999C27.7333 22.4801 22.4801 27.7333 15.9999 27.7333C9.51979 27.7333 4.2666 22.4801 4.2666 15.9999C4.2666 9.51979 9.51979 4.2666 15.9999 4.2666C22.4801 4.2666 27.7333 9.51979 27.7333 15.9999ZM25.5999 15.9999C25.5999 21.3019 21.3019 25.5999 15.9999 25.5999C10.698 25.5999 6.39994 21.3019 6.39994 15.9999C6.39994 10.698 10.698 6.39994 15.9999 6.39994C21.3019 6.39994 25.5999 10.698 25.5999 15.9999Z' fill='#0D9E12'/></svg><span class='header__title'>Оформленные документы</span></div><div class='header__cell cell'><span class='header__title'>Дата создания</span></div><div class='header__cell cell'><span class='header__title'>Дата закрытия</span></div></div>"
    })
    // aResult.push({
    //     "id": OptInt(Random(0, 9999)),
    //     "div": "<div class='content__tr close-requests'><div class='content__cell cell'><span class='content__title'><a href='/requests'>Приём сотрудника</a></span></div><div class='content__cell cell'><span class='content__title'>20 нояб. 2025</span></div><div class='content__cell cell'><span class='content__title'>30 окт. 2025</span></div></div>",
    // });

    if (ArrayOptFirstElem(aCloseRequests) != undefined) {
        for (oCloseReq in aCloseRequests) {
            catRequestType = oCloseReq.request_type_id.OptForeignElem;
            sRequestType = '';
            if (catRequestType != undefined) {
                switch (catRequestType.code) {
                    case 'afl_acquaint':
                        sRequestType = oCloseReq.object_name;
                        break;
                    default:
                        sRequestType = catRequestType.name.Value;
                        break;
                }
            }
            sLink = "/_wt/" + oCloseReq.id;
            bCodeExist = false;
            for (elem in aRequestLinks) {
                if (elem.request_code == catRequestType.code.Value) {
                    bCodeExist = true;
                    sLink = elem.request_link;
                }
            }
            aResult.push({
                "id": oCloseReq.id.Value,
                "div": "<div class='content__tr close-requests'><div class='content__cell cell'><span class='content__title'><a href='" + String(sLink) + "'>" + String(sRequestType) + "</a></span></div><div class='content__cell cell'><span class='content__title'>" + GetStrDate(oCloseReq.create_date) + "</span></div><div class='content__cell cell'><span class='content__title'>" + GetStrDate(oCloseReq.close_date) + "</span></div></div>",
            });
        }
    } else {
        aResult.push({
            "id": OptInt(Random(0, 9999)),
            "div": "<div class='no_data_tr'><svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M19.5 14.25V11.625C19.5 9.76104 17.989 8.25 16.125 8.25H14.625C14.0037 8.25 13.5 7.74632 13.5 7.125V5.625C13.5 3.76104 11.989 2.25 10.125 2.25H8.25M13.4812 15.7312L15 17.25M10.5 2.25H5.625C5.00368 2.25 4.5 2.75368 4.5 3.375V19.875C4.5 20.4963 5.00368 21 5.625 21H18.375C18.9963 21 19.5 20.4963 19.5 19.875V11.25C19.5 6.27944 15.4706 2.25 10.5 2.25ZM14.25 13.875C14.25 15.3247 13.0747 16.5 11.625 16.5C10.1753 16.5 9 15.3247 9 13.875C9 12.4253 10.1753 11.25 11.625 11.25C13.0747 11.25 14.25 12.4253 14.25 13.875Z' stroke='#4F5D74' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/></svg><span class='no_data_text'>В этой категории пока нет документов</span></div>"
        })
    }

    var xarrXQRequests = aResult;

    if (oPaging != undefined && oPaging.SIZE != null) {
        oPaging.MANUAL = true;
        oPaging.TOTAL = ArrayOptSize(xarrXQRequests);
        xarrRequests = ArrayRange(xarrXQRequests, OptInt(oPaging.INDEX, 0) * oPaging.SIZE, oPaging.SIZE);
    }
    else {
        xarrRequests = xarrXQRequests;
    }

    var arrDistinct = oCollectionParams.GetOptProperty("distincts", []);
    if (ArrayOptFirstElem(arrDistinct) != undefined) {
        oRes.data.distincts = new Object;
        var aRequestTypes = new Array();
        if (ArrayOptFirstElem(aTypeCodes) != undefined) {
            aRequestTypes = tools.xquery("for $elem in request_types where MatchSome($elem/code, (" + ArrayMerge(aTypeCodes, 'XQueryLiteral(This)', ',') + ")) return $elem");
        } else {
            aRequestTypes = tools.xquery("for $elem in request_types return $elem");
        }
        for (sFieldNameElem in arrDistinct) {
            oRes.data.distincts.SetProperty(sFieldNameElem, []);
            switch (sFieldNameElem) {
                case "request_type_id":
                {
                    oRes.data.distincts.request_type_id.push({
                        name: " Все типы заявок",
                        value: "all"
                    });
                    for (carRequestTypeElem in aRequestTypes) {
                        oRes.data.distincts.request_type_id.push({
                            name: (curLng == null ? carRequestTypeElem.name.Value : tools_web.get_cur_lng_name(carRequestTypeElem.name, curLng.short_id)),
                            value: carRequestTypeElem.id.Value
                        });
                    }
                    break;
                }
            }
        }
    }
    oRes.requests = xarrRequests;

    return oRes;
}

//if (tools_web.check_collection_access(curUser, iPersonID, SCOPE_WVARS.GetOptProperty("sPersonAccessType"))) {
oLibRes = GetPersonRequests(iPersonID, OptInt(iRequestTypeID, OptInt(sRequestTypeID)), sStatus, aTypesCodes, oCollectionParams);
ERROR = oLibRes.error;
MESSAGE = tools.get_code_library_error_message(oLibRes, Env);
RESULT = oLibRes.requests;
PAGING = oLibRes.paging;
DATA = oLibRes.data;

if (SORT.FIELD != null && SORT.FIELD != undefined && SORT.FIELD != "") {
    //		RESULT = ArraySort( RESULT, SORT.FIELD, ( SORT.DIRECTION == "DESC" ? "-" : "+" ) ); // move into library function
}/* 
}
else {
    ERROR = 403;
    MESSAGE = tools_web.get_web_const('nedostatochnopr', Env.GetOptProperty("curLngWeb", []));
} */