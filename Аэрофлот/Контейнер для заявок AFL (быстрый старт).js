<% 
    var imgPencil = OptInt(img_pencil, 0);
var imgSave = OptInt(img_loupe, 0);
var imgClock = OptInt(img_clock, 0);
var imgDone = OptInt(img_done, 0);
var imgReject = OptInt(img_reject, 0);
var imgOriginalDoc = OptInt(img_original_doc, 0);
var imgSign = OptInt(img_sign, 0);
var topOkGroupID = OptInt(topOkGroup)
var imgWatermarkDoc = OptInt(img_watermark_doc, 0);
var imgInfo = OptInt(img_info, 0);
var folderImg = OptInt(img_folder, 0);
var aSigners = new Array();
var sLogName = "page_request";
var curState = curObject.workflow_state;
var sDocumentType = "watermark";
var sDownloadLink = "/download_file.html?file_id=";
var bIsUserCandidate = tools_web.is_true(curUser.is_candidate);

// Функция вывода сообщений в лог сервера
function alertLog(sLog, sLogName) {
  if (sLogName == undefined) sLogName = "Lib_Afl_Documents_LOG"
  tools.call_code_library_method("libAflIntegration", "AlertLog", [sLog, sLogName]);
  return true;
}


function get_aprovers_docs(curObject) {
  var sDocs = "[]";
  switch (String(curObject.request_type_id.ForeignElem.code)) {
    case "afl_hire_request":
      sDocs = '[{"key":"doc_cv","name":"Резюме"},{"key":"doc_employment_memo","name":"СЗ о приёме"},{"key":"doc_personnel_information","name":"Лист согласования (СЗ о приеме на работу)"},{"key":"doc_sd_decide","name":"Решение СД"}]';
      break;

    case "afl_change_contract":
    case "afl_transfer_to_position":
      sDocs = '[{"key":"internal_memo","name":"СЗ"},{"key":"employee_statement","name":"Заявление работника"},{"key":"personnel_info","name":"Кадровая справка"},{"key":"schedule","name":"График"},{"key":"assessment_sheet","name":"Лист оценки"},{"key":"sd_decide","name":"Решение СД"}]';
      break;
  }
  return ParseJson(sDocs)
}
function check_cur_user_is_approvers(curUserID, curObject) {
  return (
    curObject.workflow_fields.GetOptChildByKey('approving_person_1') != undefined &&
    OptInt(curUserID) == OptInt(curObject.workflow_fields.GetOptChildByKey('approving_person_1').value)
  ) ||
    (
      curObject.workflow_fields.GetOptChildByKey('approving_person_2') != undefined &&
      OptInt(curUserID) == OptInt(curObject.workflow_fields.GetOptChildByKey('approving_person_2').value)
    ) ||
    (
      curObject.workflow_fields.GetOptChildByKey('approving_person_3') != undefined &&
      OptInt(curUserID) == OptInt(curObject.workflow_fields.GetOptChildByKey('approving_person_3').value)
    );
}

function check_cur_user_is_TopAccount(curUserID) {
  return ArrayOptFirstElem(
    XQuery("for $elem in group_collaborators  where $elem/collaborator_id =" + curUserID + " and $elem/group_id=" + topOkGroupID + " return $elem")
  ) != undefined;
}

function check_cur_user_is_ok(curUserID, curObject) {
  return ArrayOptFirstElem(
    XQuery("for $elem in group_collaborators  where $elem/collaborator_id =" + curUserID + " and $elem/group_id=" + 7520455557419201059 + " return $elem")
  ) != undefined;
}

function isTop(curUserID, curObject) {
  return curObject.custom_elems.GetOptChildByKey('is_top') != undefined && tools_web.is_true(curObject.custom_elems.GetOptChildByKey('is_top').value)
}

// Функция определения ссылки на скачивание документа
function getDownloadDocsLink(bIsUserCandidate) {
  var sDownloadDocLink = "";
  try {
    if (bIsUserCandidate) {
      var libParam = tools.get_params_code_library("libAflMain");
      var candidate_main_link = String(libParam.GetOptProperty("sCandidateMainLink"));
      sDownloadDocLink = candidate_main_link + "view_doc.html?mode=doc_type&object_id=7037361513010551352&docid=";
    } else {
      sDownloadDocLink = UrlAppendPath(global_settings.settings.portal_base_url, "/view_doc.html?mode=doc_type&object_id=7037361513010551352&docid=");
    }
    return sDownloadDocLink;
  } catch (err) {
    alertLog("Ошибка при выполнении функции getDownloadDocsLink: " + err, sLogName);
  }
}
var urlDownloadFile = getDownloadDocsLink(bIsUserCandidate);

// Функция для определения, является ли текущий согласующий работодателем, то есть отличается от пользователя, указанного в заявке, и состоит в перечне согласующих по заявке
/* function isBoss(curUserID, aSigners) {
    return (OptInt(curObject.person_id) != OptInt(curUserID)) && (ArrayOptFind(aSigners, "This.person_id == " + curUserID) != undefined);
}; */

// Функция для определения, является ли текущий согласующий работодателем, то есть отличается от пользователя, указанного в заявке, и состоит в перечне согласующих по заявке
function isBoss(curUserID, aSigners, doc_type) {
  var elem = ArrayOptFind(aSigners, "This.documentType == doc_type");
  if (elem != undefined) {
    return (OptInt(curObject.person_id) != OptInt(curUserID)) && (ArrayOptFind(elem.aSigners, "This.person_id == " + curUserID) != undefined);
  }
  return false;
};

// Функция для получения ссылки перехода в Тессу для подписания документов
function getLink(curObject) {
  var sLink = '';
  try {
    oRes = tools.call_code_library_method("libAflIntegrationTessa", "GetTessaSystemObject", []);
    if (oRes.error != 1) {
      sTessaID = curObject.custom_elems.GetOptChildByKey("kasud_id") == undefined ? 0 : curObject.custom_elems.GetOptChildByKey("kasud_id").value;
      if (bIsUserCandidate) {
        sLink = oRes.result.sLinkCandidate + oRes.result.sLinkDocumentSign + '/' + sTessaID;
      } else {
        sLink = oRes.result.sLinkMain + oRes.result.sLinkDocumentSign + '/' + sTessaID;
      }
    }
  
  } catch (err) {
    alertLog("Ошибка при выполнении функции getLink: " + err, sLogName);
  }
  return sLink;
};

// Функция для определения, является ли текущий пользователь пользователем, указанным в заявке
function personIsObject() {
  return OptInt(curUserID) == OptInt(curObject.person_id);
};

// Функция для получения правильной кнопки в контейнере (лупа или карандаш)
function documentButton(elem, curObject, curUserID, isCurUserAcc, isCurUserHr, curState, sDownloadLink, docs) {
  oActionButton = new Object();
  oActionButton.src = '';
  oActionButton.action = 'read';
  try {
    switch (curObject.request_type_id.ForeignElem.code) {
      case "afl_hire_request":
        switch (elem.name) {
          case 'contract':
            if ((personIsObject() && curState == 'person_sign_contract')
              || (isBoss(curUserID, docs, elem.name) && curState == 'manager_sign_contract')) {
              oActionButton.src = sDownloadLink + imgPencil;
              oActionButton.action = 'edit';
            }
            else if ((personIsObject() || isBoss(curUserID, docs, elem.name)) && (
              curState == 'manager_sign_order' ||
              curState == 'person_introduction' ||
              curState == 'complete')
              || (isCurUserHr && (curState == 'person_introduction' || curState == 'complete') ||
                ((isCurUserApprovers || isCurUserOK) && curState != 'waiting_creation_kedo')
              )
            ) {
              oActionButton.src = sDownloadLink + imgSave;
              oActionButton.action = 'read';
            }
            break;
          case 'order':
            if ((isBoss(curUserID, docs, elem.name) && curState == 'manager_sign_order') ||
              (personIsObject() && curState == 'person_introduction')) {
              oActionButton.src = sDownloadLink + imgPencil;
              oActionButton.action = 'edit';
            }
            else if (
              (personIsObject() && curState == 'complete')
              || ((isCurUserAcc || isCurUserHr) && (curState == 'person_introduction' || curState == 'complete'))
              || (isBoss(curUserID, docs, elem.name) && (
                curState == 'person_introduction' ||
                curState == 'complete')) || ((isCurUserApprovers || isCurUserOK) && curState != 'waiting_creation_kedo')
            ) {
              oActionButton.src = sDownloadLink + imgSave;
              oActionButton.action = 'read';
            }
            break;
          }
        break;
      case "afl_change_contract":
      case "afl_transfer_to_position":
        switch (elem.name) {
          case 'consent':
            if ((personIsObject() && curState == 'person_sign_consent') || (isBoss(curUserID, docs, elem.name) && curState == 'manager_sign_consent')) {
              oActionButton.src = sDownloadLink + imgPencil;
              oActionButton.action = 'edit';
            } else if ((isBoss(curUserID, docs, elem.name) && curState == 'person_sign_consent') || (personIsObject() && curState == 'manager_sign_consent')) {
              oActionButton.src = '';
            } else {
              oActionButton.src = sDownloadLink + imgSave;
              oActionButton.action = 'read';
            }
            break;
          case 'agreement':
            if ((personIsObject() && curState == 'person_agreement')
              || (isBoss(curUserID, docs, elem.name) && curState == 'manager_agreement')) {
              oActionButton.src = sDownloadLink + imgPencil;
              oActionButton.action = 'edit';
            } else if (((personIsObject() || isBoss(curUserID, docs, elem.name)) &&
              (curState == 'manager_sign_order' ||
                curState == 'person_introduction' ||
                curState == 'complete')
            ) || (isCurUserHr && (curState == 'person_introduction' || curState == 'complete'))
              || ((isCurUserApprovers || isCurUserOK) && curState != 'waiting_creation_kedo')
            ) {
              oActionButton.src = sDownloadLink + imgSave;
              oActionButton.action = 'read';
            }
            break;
          case 'order':
            if ((isBoss(curUserID, docs, elem.name) && curState == 'manager_sign_order') ||
              (personIsObject() && curState == 'person_introduction')
            ) {
              oActionButton.src = sDownloadLink + imgPencil;
              oActionButton.action = 'edit';
            }
            if(isCurUserOK){
              oActionButton.src = sDownloadLink + imgSave;
              oActionButton.action = 'read';
            }
            if (
              (personIsObject() && curState == 'complete') ||
              (
                (isCurUserAcc || isCurUserHr || isBoss(curUserID, docs, elem.name)) && (
                  curState == 'person_introduction' ||
                  curState == 'complete'
                )
              )
            ) {
              oActionButton.src = sDownloadLink + imgSave;
              oActionButton.action = 'read';
            }
            break;
        }
        break;
      case 'afl_acquaint':
        if (personIsObject() && curState == 'person_sign_application') {
          oActionButton.src = sDownloadLink + imgPencil;
          oActionButton.action = 'edit';
        }
        else {
          oActionButton.src = sDownloadLink + imgSave;
          oActionButton.action = 'read';
        } 
        break;
      }
  } catch (err) {
    alertLog("Ошибка при выполнении функции documentButton: " + err, sLogName);
  }
  return oActionButton;
};

// Функция для определения, является ли указанный пользователь пользователем, указанным в заявке для определения статуса "Работник" или "Работодатель"
function isUserCurObject(objPersonId, signerPersonId) {
  return OptInt(objPersonId, 0) == OptInt(signerPersonId, 0);
}

// Функция для определения статуса этапа подписания (отображается в блоке "Маршрут документа" для каждого подписанта)
function getSignStatus(docmentId, signerId, curState, sDownloadLink) {
  var result = new Object();
  var status = '';
  var src = '';
  try {
    dataObject = ArrayOptFirstElem(XQuery("for $elem in digital_signatures where $elem/object_id = " + OptInt(docmentId, 0) + " and $elem/person_id = " + OptInt(signerId, 0) + " and $elem/object_type = 'personnel_document' return $elem"));
    if (dataObject != undefined) {
      teDataObject = tools.open_doc(dataObject.id).TopElem;
      signStatus = (teDataObject.custom_elems.GetOptChildByKey("sStatus") == undefined) ? "" : teDataObject.custom_elems.GetOptChildByKey("sStatus").value;
      dataState = (signStatus == "") ? 0 : OptInt(signStatus);
      switch (dataState) {
        case 0:
          if (curState == "person_introduction" || (curState == "manager_sign_order" && OptInt(signerId) == OptInt(curObject.person_id))) {
            status = 'На ознакомлении';
          } else {
            status = 'На подписании';
          }
          src = sDownloadLink + imgClock;
          break;
        case 1:
          status = 'Подписан';
          src = sDownloadLink + imgDone;
          break;
        case 2:
          status = 'Отклонен';
          src = sDownloadLink + imgReject;
          break;
        case 3:
        case 4:
          status = 'Ознакомлен';
          src = sDownloadLink + imgDone;
          break;
        default:
          status = '';
          src = sDownloadLink + imgClock;
          break;
      }
    }
    result.status = status;
    result.src = src;
  } catch (err) {
    alertLog("Ошибка при выполнении функции getSignStatus: " + err, sLogName);
  }
  return result;
}

// Функция для определения массива подписантов по переданному документу
function getSignersDoc(aDataSigners, curObjectID) {
  var aSigners = new Array();
  try {
    reqDoc = tools.open_doc(curObjectID).TopElem;
    if (ArrayOptFirstElem(aDataSigners) != undefined) {
      for (signer in aDataSigners) {
        signerData = new Object();
        signerData.person_id = OptInt(signer.person_id, 0);
        signerData.person_fullname = String(signer.person_fullname);
        isPersonCurObject = isUserCurObject(reqDoc.person_id, signer.person_id)
        signerData.state = isPersonCurObject ? "Работник" : "Работодатель";
        signerData.order = isPersonCurObject ? 1 : 2;
        aSigners.push(signerData);
      }
    }
  } catch (err) {
    alertLog("Ошибка при выполнении функции getSignersDoc: " + err, sLogName);
  }
  return aSigners;
}

// Функция для определения статуса подписания документа
function getStatusDoc(aDataSigners, curState) {
  try {
    var docState = '';
    var aStates = new Array();
    if (ArrayOptFirstElem(aDataSigners) != undefined) {
      for (data in aDataSigners) {
        teData = tools.open_doc(data.id).TopElem;
        signStatus = (teData.custom_elems.GetOptChildByKey("sStatus") == undefined) ? "" : teData.custom_elems.GetOptChildByKey("sStatus").value
        dataState = (signStatus == "") ? 0 : OptInt(signStatus);
        if (dataState == 2) {
          docState = 'Отклонен';
          return docState;
        } else {
          aStates.push(dataState);
        }
      }
      if (ArrayOptFirstElem(aStates) != undefined) {
        var countSign = 0;
        for (state in aStates) {
          if (state == 1 || state == 3 || state == 4) {
            countSign++;
          }
        }
        if (countSign == ArrayCount(aStates)) {
          docState = 'Подписан';
        } else {
          if (curState == "person_introduction") {
            docState = 'На&nbsp;ознакомлении';
          } else if (curState == "person_sign_contract") {
            docState = 'На&nbsp;подписании кандидатом';
          } else if (curState == "person_sign_consent" || curState == "person_agreement") {
            docState = 'На&nbsp;подписании работником';
          } else if (curState == "manager_sign_contract" || curState == "manager_sign_order" || curState == "manager_agreement" || curState == "manager_sign_consent") {
            docState = 'На&nbsp;подписании работодателем';
          } else if (StrContains(curState, "approval_")) {
            docState = ""
          }
          else {
            docState = 'На подписании';
          }
        }
      }
    }
    return docState;
  } catch (err) {
    alertLog("Ошибка при выполнении функции getStatusDoc: " + err, sLogName);
  }
};

// Функция для определения подписанта доп. соглашения
function isAgreementBoss(curObject, curUserID) {
  var result = false;
  try {
    var agreementDocID = 0;
    if (curObject.custom_elems.GetOptChildByKey("agreement") != undefined && !IsEmptyValue(curObject.custom_elems.GetOptChildByKey("agreement").value)) {
      agreementDocID = curObject.custom_elems.GetOptChildByKey("agreement").value;
      agreementDoc = tools.open_doc(OptInt(agreementDocID));
      if (agreementDoc != undefined) {
        teAgreementDoc = agreementDoc.TopElem;
        if (teAgreementDoc.custom_elems.GetOptChildByKey("employer") != undefined && !IsEmptyValue(teAgreementDoc.custom_elems.GetOptChildByKey("employer").value)) {
          result = OptInt(curUserID) == OptInt(teAgreementDoc.custom_elems.GetOptChildByKey("employer").value);
        }
      }
    }
  } catch (err) {
    alertLog("Ошибка при выполнении функции isAgreementBoss: " + err, sLogName);
  }
  return result;
}

// Функция для определения видимости документов для подписантов в зависимости от текущего этапа д/о
function isDocumentView(elem, isCurUserAcc, isCurUserHr, isCurUserApprovers, isCurUserOK, curState, docs) {
  var result = false;
  try {
    if (elem.name == 'contract') {
      if (personIsObject() || (isBoss(curUserID, docs, elem.name) &&
        (curState != 'waiting_creation_kedo' || curState != 'person_sign_contract')) ||
        (isCurUserApprovers || isCurUserOK)
      ) {
        return true;
      } else if (isCurUserAcc) {
        return false;
      } else if (isCurUserHr && (curState == 'person_introduction' || curState == 'complete')) {
        return true;
      }
    }
    if (elem.name == 'order') {
      if (
        (isBoss(curUserID, docs, elem.name) && (
          curState == 'manager_sign_order' ||
          curState == 'person_introduction' ||
          curState == 'complete')) ||
        (
          (personIsObject() || isCurUserAcc || isCurUserHr) && (
            curState == 'person_introduction' ||
            curState == 'complete'
          )
        ) ||
        (isCurUserApprovers || isCurUserOK)
      ) {
        return true;
      }
    };
    if (elem.name == 'consent') {
      if (personIsObject() || (isCurUserHr && (curState == 'person_introduction' || curState == 'complete')) || isBoss(curUserID, docs, elem.name) || isAgreementBoss(curObject, curUserID) ||
        (isCurUserApprovers || isCurUserOK)) {
        return true;
      }
    }
    if (elem.name == 'agreement') {
      if ((personIsObject() && (
        curState == 'person_agreement' ||
        curState == 'manager_agreement' ||
        curState == 'manager_sign_order' ||
        curState == 'person_introduction' ||
        curState == 'complete')
      )
        || (isBoss(curUserID, docs, elem.name) && (
          curState == 'manager_agreement' ||
          curState == 'manager_sign_order' ||
          curState == 'person_introduction' ||
          curState == 'complete'))
        || (isCurUserHr && (curState == 'person_introduction' || curState == 'complete'))
        || ((isCurUserApprovers || isCurUserOK) && curState != 'waiting_creation_kedo')
      ) {
        return true;
      }
    }
    if (elem.name == 'acquaint') {
      return true;
    }
  } catch (err) {
    alertLog("Ошибка при выполнении функции isDocumentView: " + err, sLogName);
  }
  return result;
};

// Функция для определения списка участников документооборота
function getWorkflowMembers(curObject) {
  var aWorkflowMembers = new Array();
  try {
    aWorkflowMembers = tools.call_code_library_method("libAflDocuments", "GetWorkflowMembers", [curObject]);
  } catch (err) {
    alertLog("Ошибка при выполнении функции getWorkflowMembers: " + err, sLogName);
  }
  return aWorkflowMembers;
}

// Функция по определению названия документа
function getDocumentName(document_code) {
  var sDocName = "";
  switch (curObject.request_type_id.ForeignElem.code) {
    case "afl_hire_request":
      if (document_code == 'contract') {
        sDocName = "Трудовой договор";
      }
      if (document_code == 'order') {
        sDocName = "Приказ о приёме на работу";
      };
      break;
    case "afl_change_contract":
      if (document_code == 'consent') {
        sDocName = "Уведомление";
      }
      if (document_code == 'agreement') {
        sDocName = "Дополнительное соглашение к трудовому договору";
      };
      if (document_code == 'order') {
        sDocName = "Приказ об изменении условий ТД";
      };
      break;
    case "afl_transfer_to_position":
      if (document_code == 'consent') {
        sDocName = "Уведомление";
      }
      if (document_code == 'agreement') {
        sDocName = "Дополнительное соглашение о переводе";
      };
      if (document_code == 'order') {
        sDocName = "Приказ о переводе";
      };
      
      break;
      case "afl_acquaint":
        sDocName = "Ознакомление";
      break;
    default: sDocName = ""; break;
  }
  return sDocName;
}

var titleValue = '';
switch (curObject.request_type_id.ForeignElem.code) {
  case "afl_change_contract": titleValue = "Подписание документов об изменении условий трудового договора"; break;
  case "afl_transfer_to_position": titleValue = "Подписание документов о переводе"; break;
  case "afl_hire_request": titleValue = "Подписание документов о приёме на работу"; break;
};
var customFields = curObject.custom_elems;
var documents = new Array();
var isCurUserAcc = false;
var isCurUserHr = false;
var isCurUserApprovers = check_cur_user_is_approvers(curUserID, curObject);
var isCurUserOK = check_cur_user_is_ok(curUserID, curObject);
var isCurUserTopAccount = check_cur_user_is_TopAccount(curUserID);
var isTopRequest = isTop(curUserID, curObject);
var workwfowMembers = getWorkflowMembers(curObject);
var docsForApprovers = get_aprovers_docs(curObject)
var isManager = tools.call_code_library_method("libAflDocuments", "GetApproverRequest", [curUserID, curObject, 'contract']) == curUserID ||
  tools.call_code_library_method("libAflDocuments", "GetApproverRequest", [curUserID, curObject, 'order']) == curUserID ||
  tools.call_code_library_method("libAflDocuments", "GetApproverRequest", [curUserID, curObject, 'consent']) == curUserID ||
  tools.call_code_library_method("libAflDocuments", "GetApproverRequest", [curUserID, curObject, 'agreement']) == curUserID;

var isEnableDocumentsForApprovers = (
  ( (isTopRequest && isManager) || (curState == "approval_super_hr") ||(isTopRequest && isCurUserApprovers))) && 
                                       !( StrContains(curState, "_sign_consent") || curState == "waiting_creation_kedo" || curState == "waiting_update_kedo") && 
                                       !personIsObject() && 
                                       !isCurUserTopAccount;



if (workwfowMembers.HasProperty("aAccountants")) {
  isCurUserAcc = ArrayOptFind(workwfowMembers.aAccountants, "This ==" + curUserID) != undefined || ArrayOptFind(workwfowMembers.aAllOrdersManagers, "This.collaborator_id ==" + curUserID) != undefined;
}
if (workwfowMembers.HasProperty("aHRs")) {
  isCurUserHr = ArrayOptFind(workwfowMembers.aHRs, "This ==" + curUserID) != undefined;
}
if (
  ((!isCurUserHr || (isCurUserHr && isManager) || (isCurUserHr && personIsObject())) && curState != 'waiting_creation_kedo' && curState != 'approve_manager_sign' && curState != 'reject')
  || (isCurUserHr && (curState == "hr_update_order" || curState == "person_introduction" || curState == "complete") || isCurUserApprovers || isCurUserOK)
) {
    %>
    <section class="documents">
      <h1 class="section__title"><%=titleValue%></h1>
      <div class="section__header">
        <div class="section__cell">Документ</div>
        <div class="section__cell">Дата создания</div>
        <div class="section__cell">Статус</div>
        <div class="section__cell"></div>
      </div>
      <ul class="documents_list">
        <%if(isEnableDocumentsForApprovers){
                    %>
            <li class="document contract">
                <p class="document_title">
                    Сопроводительные документы
                </p>
                <p class="document_creation cell__text"></p>

                <p class="document_state companion_document  cell__text">
                    <a href="javascript:void(0);"> Просмотреть <img
                            src="data:image/svg+xml,%3Csvg fill='none' viewBox='0 0 7 12' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m0.63559 0.76006c0.44926-0.42023 0.67154-0.40352 0.67154-0.40352l5.6427 5.6427-5.6427 5.6429s-0.22228 0.0168-0.67154-0.4035c-0.44926-0.4202-0.42841-0.6964-0.42841-0.6964l4.5429-4.5429-4.5429-4.5429s-0.020852-0.27619 0.42841-0.69642z' fill='%231D4CC4'/%3E%3C/svg%3E"
                            alt=""></a>
                </p>


                <div class="document__buttons">

                </div>
            </li><%}
        var objDocument = undefined;
        for (elem in customFields) {
                    if (elem.name == 'contract' || elem.name == 'order' || elem.name == 'consent' || elem.name == 'agreement' || elem.name == 'acquaint') {
                        if (elem.value != undefined && elem.value != null && elem.value != "") {
          objectDocument = new Object();
        documentDoc = tools.open_doc(OptInt(elem.value)).TopElem;
        objectDocument.documentDoc = documentDoc;
        objectDocument.documentType = String(elem.name);
        documentLink = getLink(curObject);
        documentName = getDocumentName(elem.name);
        objectDocument.documentName = String(documentName);
        aDataObjects = ArraySelectAll(XQuery("for $elem in digital_signatures where $elem/object_id = "+ OptInt(elem.value) +" and $elem/object_type = 'personnel_document' return $elem"));
        aSigners = ArraySort(getSignersDoc(aDataObjects, curObjectID), "This.order", '+');
        objectDocument.aSigners = aSigners;
        docState = getStatusDoc(aDataObjects, curState);
        documents.push(objectDocument);
        if (isDocumentView(elem, isCurUserAcc, isCurUserHr, isCurUserApprovers, isCurUserOK,  curState, documents)) {
                %>
                <li class="document <%=elem.name%>">
                    <p class="document_title">
                        <%=documentName%>
                    </p>
                    <p class="document_creation cell__text"><%=DateNewTime(documentDoc.create_date)%></p>
                    <%
                        actionButton = documentButton(elem, curObject, curUserID, isCurUserAcc, isCurUserHr, curState, sDownloadLink, documents);
                            if (actionButton.action == 'edit') {
                    %>
                        <button type="button" class="button">
                            <a href="<%=documentLink%>" class="button__link" target="_blank">
                                <%
                                if (curState == 'person_introduction') {
                                %>
                                Ознакомиться
                                <%
                                } else {
                                %>
                                Подписать
                                <%
                                }
                                %>
                            </a>
                        </button>
                    <%
                            } else {
                    %>
                    <p class="document_state cell__text"><%=docState%></p>
                    <%
                            }
                    %>

                    <div class="document__buttons">
                        <%
                            if (actionButton.src == '' || actionButton.action == 'edit') {
                        %>
                            <button type="button" class="document__button save__btn" disabled>
                                <img src="<%=sDownloadLink%><%=imgSave%>" alt="Кнопка для скачивания файла" class="document__button_img_save">
                            </button>
                        <%
                            } else if (actionButton.action == 'read') {

                               
                                slinkToSave = urlDownloadFile+documentDoc.id+"&reqid="+curObjectID+"&doctype="+sDocumentType;
                                
                                //ВЫВОД ПФ В ЗАЯВКЕ
                                if (curObject.request_type_id.ForeignElem.code == 'afl_acquaint') {
                                  if (curObject.custom_elems.GetOptChildByKey('acquaint') != undefined) {
                                    docAcquaint = tools.open_doc(curObject.custom_elems.GetOptChildByKey('acquaint').value);
                                    if (docAcquaint != undefined) {
                                      oSignature = ArrayOptFirstElem(docAcquaint.TopElem.signature_files);
                                      if (oSignature != undefined) {
                                        slinkToSave = "/view_play_resource.html?info=1&object_id="+oSignature.id;
                                      }
                                    }
                                  }
                                }

                                if((isCurUserApprovers || isCurUserOK)){
                                    if(OptInt(documentDoc.personnel_document_type_id)==7035552013966277638 && curObject.custom_elems.GetOptChildByKey('order_resource_id')!=undefined ){
                                        slinkToSave = "/view_play_resource.html?info=1&object_id="+curObject.custom_elems.GetOptChildByKey('order_resource_id').value
                                    }

                                    if(OptInt(documentDoc.personnel_document_type_id)==7035183217472697653 && curObject.custom_elems.GetOptChildByKey('contract_resource_id')!=undefined ){
                                        slinkToSave = "/view_play_resource.html?info=1&object_id="+curObject.custom_elems.GetOptChildByKey('contract_resource_id').value
                                    }

                                    if(OptInt(documentDoc.personnel_document_type_id)==7205189565581547318 && curObject.custom_elems.GetOptChildByKey('agreement_resource_id')!=undefined ){
                                        slinkToSave = "/view_play_resource.html?info=1&object_id="+curObject.custom_elems.GetOptChildByKey('agreement_resource_id').value
                                    }
                                    
                                }
                        %>
                        <button type="button" class="document__button save__btn">
                            <a href="<%=slinkToSave%>" class="document__button save__btn" target="_blank">
                                <img src="<%=sDownloadLink%><%=imgSave%>" alt="Кнопка для скачивания файла" class="document__button_img_save">
                            </a>
                        </button>
                        <%
                            }
                        %>
                        <button type="button" class="document__button info__btn" id="info__btn">
                            <img src="<%=sDownloadLink%><%=imgInfo%>" alt="Кнопка для просмотра маршрута" class="document__button_img_info info__btn">     
                                <%
                                if (ArrayOptFind(documents, "This.documentType == elem.name") != undefined) {
                                    objDocument = ArrayOptFind(documents, "This.documentType == elem.name");
                                    if (ArrayOptFirstElem(objDocument.aSigners) != undefined) { %>
                                        <ul class="persons">
                                                <% for (signer in objDocument.aSigners) { 
                                                    stateStatus = getSignStatus(OptInt(objDocument.documentDoc.id, 0), OptInt(signer.person_id, 0), curState, sDownloadLink)
                                                %>
                                                <li class="person__container">
                                                    <div class="person_string">
                                                        <div>
                                                            <p class="person_name"><%=signer.person_fullname%></p>
                                                            <p class="person_state"><%=signer.state%></p>
                                                        </div>
                                                        <p class="doc_state person_name"><%=stateStatus.status%></p>
                                                    </div>
                                                </li>
                                            <% } %>
                                        </ul>
                                    <%
                                    }
                                    %>      
                                <%
                                }
                                %>
                        </button>
                    </div>
                </li>
                <%
                    }
                } else {
                    continue;
                }
            }
        }
        %>
      </ul>
      <%
      if (isCurUserHr && curState == "hr_update_order") {
            var cur_order_id = 0;
      if (ArrayOptFind(documents, "This.documentType == 'order'") != undefined) {
                var orderDoc = ArrayOptFind(documents, "This.documentType == 'order'");
      cur_order_id = OptInt(orderDoc.documentDoc.id, 0);
            }
        %>
      <div id="cur_order_id" class="invisible"><%=cur_order_id%></div>
      <section class="add_order__section">
        <h2 class="section__subtitle">Прикрепить файл приказа</h2>
        <div class="field__block">
          <input id='file_name' name='file_name' readonly class="popup__input" type='text' placeholder="Выберите файл">
            <input type="file" hidden accept=".pdf" class="popup__input popup__input_type_hidden" name="eduDocFile" id="edu_document_file">
              <button type="button" class="popup__input_type_button" value="Выберите значение" onclick="this.previousElementSibling.click();">
                <img class="button__img addEduButton" src="/download_file.html?file_id=<%=folderImg%>">
              </button>
            </div>
          </section>
          <%
        }
        %>
      </section>


      <div id="modal_templates" style="display: none;">
        <%if(isEnableDocumentsForApprovers){
                    %>
<div class="container" style="background-color:white;">
            <div class="wrapper">
                <div class="modal-header">
                    <div class="title">
                        Документы
                    </div>
                    <button class="header__button close__button" type="reset">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <path
                                d="M1.27298 1.26297C0.613012 1.92293 0.707293 2.01722 0.707293 2.01722L5.6718 6.98172L0.707226 11.9463C0.707226 11.9463 0.695428 12.1231 1.2729 12.7005C1.85038 13.278 2.02716 13.2662 2.02716 13.2662L6.99173 8.30166L11.9563 13.2662C11.9563 13.2662 12.0506 13.3605 12.7105 12.7005C13.3705 12.0406 13.2762 11.9463 13.2762 11.9463L8.31167 6.98172L13.2762 2.01723C13.2762 2.01723 13.2879 1.84045 12.7105 1.26297C12.133 0.685496 11.9562 0.697294 11.9562 0.697294L6.99173 5.66179L2.02723 0.697283C2.02723 0.697283 1.93294 0.603002 1.27298 1.26297Z"
                                fill="#4F5D74"></path>
                        </svg>
                    </button>
                </div>
                <ul class="documents_list">               

                     <% 
                     for (doc in docsForApprovers) {
                     
                     
                     if(curObject.workflow_fields.GetOptChildByKey(doc.key)!=undefined && OptInt(curObject.workflow_fields.GetOptChildByKey(doc.key).value,0)!=0){%>
                    <li class="document contract">
                        <p class="document_title">
                            <%=doc.name%>
                        </p>
                        
                            <button type="button" class="document__button save__btn">
                                <a target="_blank" href="/view_play_resource.html?info=1&object_id=<%=curObject.workflow_fields.GetOptChildByKey(doc.key).value%>">
                                    <img src="/download_file.html?file_id=7509844155523566659"
                                        alt="Кнопка для скачивания файла" class="document__button_img_save">
                                </a>
                            </button>
                            
                    </li>
                        <% }} %>
                    <li class="document contract">
                        <p class="document_title">
                            Лист согласования 
                        </p>
                        <button type="button" class="document__button save__btn">
                             <a target="_blank" href="/view_print_form.html?print_form_id=7520258784657907575&object_id=<%=curObject.id%>&sid=<%=tools_web.get_sum_sid(7520258784657907575, Request.Session.sid)%>">
                                <img src="/download_file.html?file_id=7509844155523566659"
                                    alt="Кнопка для скачивания файла" class="document__button_img_save">
                            </a>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
        <%}%>
      </div>

      <script>

        $(document).ready(function () {

            var badges = document.querySelectorAll(".companion_document a")
            badges.forEach(x => x.addEventListener("click", throttle(openModal, 500)))
        })


        window.modalOpen = false;

        var container = document.createElement('div');
        container.id = 'modal';
        container.style.display = "none"
        document.body.appendChild(container);

        function openModal() {
            if (window.modalOpen) { return }


        container.style.display = "flex"
        // document.querySelector("#wt-container").style.display="none"
        window.modalOpen = true;

        container.innerHTML = document.querySelector("#modal_templates").innerHTML
        container.querySelector(".close__button").addEventListener("click", close)

        }

        function close() {
            var modals = document.querySelectorAll("#modal");
        //document.querySelector("#wt-container").style.display="block"  

        container.style.display = "none"


        window.modalOpen = false;
        }

        window.modalClose = close;

        function throttle(func, limit) {
          let lastFunc;
        let lastRan;

        return function () {
                const context = this;
        const args = arguments;
        if (!lastRan) {
          func.apply(context, args);
        lastRan = Date.now();
                } else {
          clearTimeout(lastFunc);
        lastFunc = setTimeout(function () {
                        if ((Date.now() - lastRan) >= limit) {
          func.apply(context, args);
        lastRan = Date.now();
                        }
                    }, limit - (Date.now() - lastRan));
                }
            };
        }
        var openRoute = false;
        /* Функция для получения данных из файла*/
        function getFileData(e) {
            const current_order_id = document.getElementById('cur_order_id').innerHTML;
        var file_data = "";
            document.addEventListener('click', (e) => {
                if (e.target.classList.contains('addEduButton')) {
          file_name = document.querySelector("#file_name");
        file_field = document.querySelector("#edu_document_file");
        $(file_field).on('change', function () {
          let file = this.files[0];
        if (file) {
                            const reader = new FileReader();
        reader.onload = function (e) {
          file_data = e.target.result;
        file_data = file_data.replace("data:" + file.type + ";base64,", "");
        $.ajax({
          url: "custom_web_template.html?object_id=7070208979350811173",
        type: "POST",
        dataType: "JSON",
        data: {
          filename: file.name,
        filedata: file_data,
        curorderid: current_order_id
                                    },
                                    error: (xhr, message) => {
          alert("SERVER ERROR\n" + message);
                                    },
                                    success: (result) => {
          console.log(result)
                                        if (result.status == 200) {
          file_name.value = file.name;
                                        }
        else {
          alert(result.status + ": " + result.message);
                                        }
                                    }
                                });
                            };
        reader.readAsDataURL(file);
                        }
                    });
                }
            })
        }

        <%
        if (isCurUserHr && curState == "hr_update_order") {
    %>
          getFileData();
        <%
        }
    %>

        const elems = document.querySelector('.documents');

        elems.querySelectorAll('.document__button').forEach(container => {
          container.addEventListener('mouseenter', () => {
            container.querySelector('.persons').style.visibility = 'visible';
          });

            container.addEventListener('mouseleave', () => {
          container.querySelector('.persons').style.visibility = 'hidden';
            });
        })
      </script>
      <%
}
%>
      <style>
         * {
   margin: 0;
   padding: 0;
   font-family: 'GOLOS-TEXT';
 }

 .documents {
   width: 100%;
   max-width: 640px;
 }

 .section__title {
   font-weight: 400;
   font-style: normal;
   color: rgba(4, 24, 57, 1);
   font-size: 19px;
   padding: 0;
   margin: 0;
   line-height: 30px;
 }

 .section__header {
   display: grid;
   grid-template-columns: 230px 100px 88px 1fr;
   margin: 8px 0 0 0;
   padding: 8px 0 8px 16px;
   gap: 20px;
 }

 .section__cell {
   font-weight: 400;
   font-size: 13px;
   line-height: 18px;
   color: rgba(140, 149, 164, 1);
 }

 .document {
   display: grid;
   align-items: center;
   grid-template-columns: 230px 100px 88px 1fr;
   background-color: rgba(242, 243, 245, 1);
   padding: 25px 16px;
   gap: 20px;
   border-radius: 6px;
   margin-top: 2px;

 }

 .document:first-child {
   margin-top: 2px;
 }

 .document_title {
   font-weight: 500;
   font-style: normal;
   color: rgba(4, 24, 57, 1);
   font-size: 15px;
   line-height: 22px;
   max-width: 230px;
 }

 .cell__text {
   font-weight: 400;
   font-size: 13px;
   line-height: 18px;
   color: rgba(54, 70, 97, 1);
 }

 .cell__text.document_state {
   color: #04780C;
 }

 .button {
   border: none;
   margin: 0;
   padding: 0;
 }

 .button:hover {
   background-color: rgba(6, 31, 120, 1);
   color: white;
 }

 .document__buttons {
   margin: 0 0 0 56px;
 }

 .document__button {
   border: none;
   padding: 0;
   margin: 0 4px 0 0;
   cursor: pointer;
 }

 .document__button:last-child {
   margin: 0;
 }

 .document__button:hover {
   background-color: transparent;
 }

 .document__button:disabled {
   opacity: .5;
   cursor: auto;
 }

 .document__button_img_save {
   padding: 6px;
 }

 .document__button_img_info {
   padding: 8.67px;
 }

 .button__link {
   border-radius: 6px;
   background-color: rgba(16, 52, 158, 1);
   color: rgba(255, 255, 255, 1);
   font-size: 13px;
   line-height: 18px;
   font-weight: 500;
   padding: 8px 12px;
 }

 .button__link:hover, .button__link:hover a:hover a,.button__link:hover a:hover, .button__link:hover a:visited,  .button__link a:visited{
   background-color: rgba(6, 31, 120, 1);
   color: rgba(255, 255, 255, 1);
 }

 .button_hr_list {
   display: flex;
   justify-content: flex-end;
 }

 .button_hr {
   padding: 0 0 0 2em;
 }

 .documents_list {
   display: flex;
   flex-direction: column;
 }

 .inactive {
   display: none;
 }

 .route_title {
   margin: 0;
   font-weight: 600;
   font-style: normal;
   color: #3f3f3f;
   font-size: 1.33em;
   padding: 32px 0;
 }

 .person__container {
   padding: 16px 18px 0;
   list-style: none;
   position: relative;
 }

 .document__button {
   position: relative;
 }

 .document__button:hover {
   background-color: rgba(225, 227, 231, 1);
   border-radius: 6px;
 }

 .document__button:disabled:hover {
   background-color: transparent;
   opacity: .5;
   cursor: auto;
 }

 .persons {
   display: grid;
   border-radius: 12px;
   max-width: 352px;
   box-shadow: 0px 9px 28px 8px rgba(3, 17, 82, 0.05);
   position: absolute;
   z-index: 100;
   visibility: hidden;
   box-sizing: border-box;
   top: 40px;
   right: 0;
   background-color: #fff;
   border-radius: 12px;
   transition: visibility 0.3s;
 }

 .person_string {
   display: grid;
   grid-template-columns: 210px 98px;
   gap: 10px;
   align-items: center;
   background-color: #fff;
   text-align: left;
   padding-bottom: 18px;
 }

 .persons .person__container:not(:last-child) .person_string {
   border-bottom: 1px solid rgba(225, 227, 231, 1);
 }

 .person_name {
   font-weight: 400;
   font-size: 13px;
   line-height: 18px;
   color: rgba(54, 70, 97, 1);
 }

 .person_state {
   font-weight: 400;
   font-size: 13px;
   line-height: 18px;
   color: rgba(140, 149, 164, 1);
 }

 .doc_state {
   font-weight: 500;
 }

 .state_icon {
   width: 30px;
   justify-self: center;
 }

 .wt-lp-wtext-header {
   font-family: Arial, Helvetica, sans-serif;
   font-weight: 700;
   font-style: normal;
   color: #151D2D !important;
   font-size: 1.2em !important;
   padding: 0 0 1em 0;
 }

 .wt-lp-wtext-text {
   font-family: Arial, Helvetica, sans-serif;
   font-weight: 400;
   font-style: normal;
   color: #727A8D !important;
   font-size: 0.9em !important;
 }

 .popup__input {
   margin: 4px 0 0;
   font-weight: 400;
   line-height: 17px;
   color: #000000;
   min-width: 135px;
   width: 95%;
   box-sizing: border-box;
   border-radius: 5px !important;
   background: #fff;
   border: 1px solid #B6BBC8 !important;
 }

 .popup__input_type_hidden {
   margin: 0 !important;
   padding: 0 !important;
   border: none !important;
   box-shadow: none !important;
   background-color: transparent !important;
   height: 0 !important;
 }

 .popup__input_type_button {
   border: none;
   padding: 0;
   margin: 5px 0 0;
 }

 .popup__input_type_button:hover {
   filter: brightness(0) saturate(100%) invert(12%) sepia(82%) saturate(4303%) hue-rotate(220deg) brightness(85%) contrast(116%);
   background-color: transparent;
 }

 .button__img {
   width: 25px;
   padding: 0;
 }

 .section__subtitle {
   font-weight: 500;
   font-style: normal;
   color: #151D2D;
   font-size: 1.33em;
   margin: 1em 0;
 }

 .add_order__section {
   background-color: white;
   padding: 1em 2em 2em;
   border-radius: .5em;
 }

 .field__block {
   display: flex;
   gap: 10px;
   align-items: center;
 }

 .invisible {
   display: none;
 }

 .companion_document a {
   display: flex;
   justify-content: flex-start;
   align-items: center;
   gap: 11.2px;
 }

 .companion_document a img {
   width: 6.74px;
   height: 11.29px;
 }

 #modal {
   position: fixed;
   top: 64px;
   left: 0;
   right: 0;
   bottom: 0;
   z-index: 999;
   background-color: rgba(4, 24, 57, 0.46);
   font-size: 55px;
   pointer-events: none;
   justify-content: center;
   align-items: center;
 }

 #modal .container {
   background-color: #fff;
   pointer-events: all;
   width: 420px;
   padding: 24px;
   border-radius: 12px;
   box-shadow: 0px 6px 16px -4px rgba(3, 17, 82, 0.08),
     0px 3px 6px -4px rgba(3, 17, 82, 0.12),
     0px 9px 28px 8px rgba(3, 17, 82, 0.05);
 }

 .modal-header {
   display: flex;
   justify-content: space-between;
   align-items: center;
   font-size: 24px;
   line-height: 30px;
   padding-bottom: 18px;
 }

 .modal-header .close__button {
   background-color: #F2F3F5;
   border-radius: 6px;
   padding: 7px 9px;
   margin: 0;
   border: none;
 }

 #modal .document {
   display: flex;
   justify-content: space-between;
   padding: 17px;
   max-height: 56px;
   box-sizing: border-box;

 }

 #modal .document__buttons {
   margin: 0px;
 }

 @media screen and (max-width: 750px) {
   .document {
     grid-template-columns: repeat(2, 40vw);
     width: auto;
   }

   .section__title {
     text-align: center;
     padding: 0 0 1em 0;
   }

   .document_title {
     min-width: auto;
   }

   .person_string {
     grid-template-columns: repeat(4, 15vw);
     width: auto;
   }
 }
      </style>