## Описание методов API в E-Staff

Программный код, используемый для интеграции, включает в себя два этапа - 1) инициализация  объекта интеграции **api\_estaff.xml** и 2) собственно, вызов метода.

###   
**1 Инициализация объекта**

Для инициализации объекта интеграции **api\_estaff.xml** открываем новый документ с указанным объектом:

`var api = OpenNewDoc( 'x-local://source/api_estaff.xml' ).TopElem;`

###   
**2 Пример вызов метода**

В метод _CreateSOAPRequest(string name)_ передается название одного из поддерживаемых на стороне **E-Staff** методов (например, метод получения приложений  **GetAttachments** ):

`api.CreateSOAPRequest("GetAttachments");`

При этом в объекте инициализируется соответствующий этому методу набор обязательных параметров запроса к **E-Staff**. Необязательные параметры необходимо инициализировать согласно правилам объявления динамических элементов формы.  
Различные методы обращения к **E-Staff** предусматривают различные наборы входных данных. Например, метод получения приложений **GetAttachments** содержит один параметр _request_, в котором можно задать два параметра: _ID объекта_ и _тип объекта_ (в данном примере это объект _Кандидат_; в общем случае может быть указан еще тип приложений, которые необходимо получить):

`var request = api.GetRequestParam("request");   request.object_id = iCandidateId;   request.object_type = "candidate";`

Метод _GetRequestParam(string param)_ возвращает проинициализированный параметр запроса.  
После инициализации запроса остается выполнить обращение к серверу **E-Staff**:    

`if (!api.SendRequest())       throw("E-Staff API function GetAttachments return error.");`

В случае ошибки при обращении к **E-Staff** метод _SendRequest()_ возвращает _false_.  
Остается обработать полученные из **E-Staff** данные:    

`for(attachment in api.GetResponse().attachments)   {       alert(attachment.id + " " + attachment.content_type);   }`

###   
**Пример вызова метода **GetAttachments** без комментариев:**

`var api = OpenNewDoc( 'x-local://source/api_estaff.xml' ).TopElem;      api.CreateSOAPRequest("GetAttachments");      var request = api.GetRequestParam("request");   request.object_id = iCandidateId;   request.object_type = "candidate";          if (!api.SendRequest())       throw("E-Staff API function GetAttachments return error.");          for(attachment in api.GetResponse().attachments)   {       alert(attachment.id + " " + attachment.content_type);   }`

###   
**Другой пример - код выполнения метода добавления/обновления кандидата**  **AddCandidate**:

var oRes = { error: false, message: "" };  
try  
{  
    var api = OpenNewDoc( 'x-local://source/api\_estaff.xml' ).TopElem;  
}  
catch(err)  
{  
    oRes.error = true;  
    oRes.message = "Ошибка инициализации АПИ: "+err;  
    return oRes;  
}   
  
oParam = { candidate: candidate\_PARAM };  
try  
{  
    api.CreateSOAPRequest( "AddCandidate" );  
    api.SetRequestParam( oParam );   
  
    if( !api.SendRequest() )  
    {  
        oRes.error = true;  
        oRes.message = "Ошибка при вызове функции AddCandidate E-Staff API: "+api.GetResponse().error\_message;  
        return oRes;  
    }  
    else  
    {  
        oRes.message = "Карточка кандидата "+candidate\_PARAM.lastname+" "+candidate\_PARAM.firstname+" обновлена";  
        return oRes;  
    }  
}  
catch(err)  
{  
    oRes.error = true;  
    oRes.message = "Ошибка создания запроса: "+err;  
    return oRes;  
}

Примечание - Инициализация и вызов метода могут быть произведены, например, с помощью агентов и других объектов, которые содержат программный код.

---

