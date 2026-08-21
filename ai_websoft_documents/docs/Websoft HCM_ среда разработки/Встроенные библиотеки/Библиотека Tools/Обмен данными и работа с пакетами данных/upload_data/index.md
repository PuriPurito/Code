## upload_data

Загрузка данных на сервер обмена данными.

Входные параметры:

\_server\_id (int) – ID сервера обмена данными, на который нужно отправить данные.

\_date (date) необязательный – дата, начиная с которой нужно грузить данные.

\_type (string) необязательный – описание типа отправки.

Возвращаемый результат – строка с ошибкой или пустая строка в случае успеха (string).

Пример вызова

**\_str = tools.upload\_data( curExchangeServerID, tools.get\_exchange\_date( serverDoc.TopElem.upload, serverDoc.TopElem.last\_upload\_date ), 'quick' );**

**\_str = tools.upload\_data( curExchangeServerID, '', 'full' );**

---

