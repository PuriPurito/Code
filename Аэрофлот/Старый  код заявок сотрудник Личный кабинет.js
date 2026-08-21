try { curObjectID } catch (e) { var curObjectID; }
try { curObject } catch (e) { var curObject; }
var oRequestLinks = requests_types;
var aTypesCodes = tools_web.parse_multiple_parameter(sRequestsCodes);

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

switch (tab) {
    case "active":
        sStatus = "active";
        break;
    case "close":
        sStatus = "close";
        break;
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
    var arrFilters = oCollectionParams.GetOptProperty("filters", []);
    if (iRequestTypeID == null) {
        oFilter = ArrayOptFindByKey(arrFilters, "request_type_id", "id");
        if (oFilter != undefined && ArrayCount(oFilter.value) != 0) {
            oParams.xquery_qual += " and MatchSome( $elem/request_type_id, (" + ArrayMerge(oFilter.value, "OptInt(This.value,0)", ",") + ") )";
        }
    }
    else {
        oParams.xquery_qual += " and $elem/request_type_id = " + iRequestTypeID;
    }
    if (sStatus == "") {
        oFilter = ArrayOptFindByKey(arrFilters, "status_id", "id");
        if (oFilter != undefined && ArrayCount(oFilter.value) != 0) {
            oParams.xquery_qual += " and MatchSome( $elem/status_id, (" + ArrayMerge(oFilter.value, "XQueryLiteral(This.value)", ",") + ") )";
        }
    }
    else {
        oParams.xquery_qual += " and $elem/status_id = " + XQueryLiteral(sStatus);
    }
    if (ArrayOptFirstElem(aTypeCodes) != undefined) {
        xqRequestTypes = tools.xquery("for $elem in request_types where MatchSome($elem/code, (" + ArrayMerge(aTypeCodes, 'XQueryLiteral(This)', ',') + ")) return $elem/Fields('id')")
        oParams.xquery_qual += " and MatchSome( $elem/request_type_id, (" + ArrayMerge(xqRequestTypes, "This.id", ",") + ") )";
    }
    oFilter = ArrayOptFindByKey(arrFilters, "search", "type");
    if (oFilter != undefined && oFilter.value != "") {
        oParams.xquery_qual += " and doc-contains( $elem/id, '" + DefaultDb + "'," + XQueryLiteral(oFilter.value) + " )";
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
    var xarrXQRequests = XQuery("for $elem in requests where " + oParams.xquery_qual + sort_query + " return $elem/Fields('id','create_date','code','request_type_id','type','object_id','object_name','status_id','workflow_state','workflow_state_name')");

    if (oPaging != undefined && oPaging.SIZE != null) {
        oPaging.MANUAL = true;
        oPaging.TOTAL = ArrayOptSize(xarrXQRequests);
        xarrRequests = ArrayRange(xarrXQRequests, OptInt(oPaging.INDEX, 0) * oPaging.SIZE, oPaging.SIZE);
    }
    else {
        xarrRequests = xarrXQRequests;
    }

    for (catRequestElem in xarrRequests) {
        catRequestType = catRequestElem.request_type_id.OptForeignElem;
        sRequestType = catRequestType == undefined ? "" : catRequestType.name.Value;
        sLink = "/_wt/";
        bCodeExist = false;
        for (elem in aRequestLinks) {
            if (elem.request_code == catRequestType.code.Value) {
                bCodeExist = true;
                sLink = elem.request_link;
            }    
        }
        oRes.requests.push({
            "id": catRequestElem.id.Value,
            "create_date": catRequestElem.create_date.Value,
            "code": catRequestElem.code.Value,
            "request_type_id": catRequestElem.request_type_id.Value,
            "request_type_name": (curLng == null ? sRequestType : tools_web.get_cur_lng_name(sRequestType, curLng.short_id)),
            "type": catRequestElem.type.Value,
            "object_id": catRequestElem.object_id.Value,
            "object_name": catRequestElem.object_name.Value,
            "status_id": catRequestElem.status_id.Value,
            "status_name": catRequestElem.status_id.ForeignElem.name.Value,
            "workflow_state_id": catRequestElem.workflow_state.Value,
            "workflow_state_name": (curLng == null ? catRequestElem.workflow_state_name.Value : tools_web.get_cur_lng_name(catRequestElem.workflow_state_name.Value, curLng.short_id)),
            "link": String(sLink + OptInt(catRequestElem.id.Value)),
            "person_id": catRequestElem.person_id.Value,
            "person_fullname": catRequestElem.person_fullname.Value
        });
    }

    var arrDistinct = oCollectionParams.GetOptProperty("distincts", []);
    if (ArrayOptFirstElem(arrDistinct) != undefined) {
        oRes.data.distincts = new Object;
        var xarrPositions, xarrSubdivision, xarrStatuses;
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
                        for (carRequestTypeElem in aRequestTypes) {
                            oRes.data.distincts.request_type_id.push({
                                name: (curLng == null ? carRequestTypeElem.name.Value : tools_web.get_cur_lng_name(carRequestTypeElem.name, curLng.short_id)),
                                value: carRequestTypeElem.id.Value
                            });
                        }
                        break;
                    }
                case "status_id":
                    {
                        for (fldTypeElem in common.request_status_types) {
                            if (fldTypeElem.id.Value != "pay" && fldTypeElem.id.Value != "ignore") {
                                oRes.data.distincts.status_id.push({
                                    name: fldTypeElem.name.Value,
                                    value: fldTypeElem.id.Value
                                });
                            }
                        }
                        break;
                    }
            }
        }
    }

    return oRes;
}

if (tools_web.check_collection_access(curUser, iPersonID, SCOPE_WVARS.GetOptProperty("sPersonAccessType"))) {
    oLibRes = GetPersonRequests(iPersonID, OptInt(iRequestTypeID, OptInt(sRequestTypeID)), sStatus, aTypesCodes, oCollectionParams);
    ERROR = oLibRes.error;
    MESSAGE = tools.get_code_library_error_message(oLibRes, Env);
    RESULT = oLibRes.requests;
    PAGING = oLibRes.paging;
    DATA = oLibRes.data;

    if (SORT.FIELD != null && SORT.FIELD != undefined && SORT.FIELD != "") {
        //		RESULT = ArraySort( RESULT, SORT.FIELD, ( SORT.DIRECTION == "DESC" ? "-" : "+" ) ); // move into library function
    }
}
else {
    ERROR = 403;
    MESSAGE = tools_web.get_web_const('nedostatochnopr', Env.GetOptProperty("curLngWeb", []));
}