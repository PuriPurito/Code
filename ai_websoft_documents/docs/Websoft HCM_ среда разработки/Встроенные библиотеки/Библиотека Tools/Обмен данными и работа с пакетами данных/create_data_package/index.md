## create_data_package

Создание пакета данных для отправки на сервер обмена данными.

_Синтаксис:_  
      **tools.create\_data\_package (<server\_id>, <report\_id>, <sPackIDParam>\[, <date>\])**

_Аргументы:_  
     <server\_id> (обязательный)  
     Тип: **Целое число**. ID сервера обмена данными, для которого формируется пакет.  
     <report\_id> (обязательный)  
     Тип: **Целое число**. ID документа событий базы, в который будут записываться отчет.  
     <sPackIDParam> (обязательный)  
     Тип: **Строка**. Строковое выражение ID загружаемого пакета.  
     <date> (необязательный)  
     Тип: **Дата**. Дата, начиная с которой нужно загружать данные.

_Возвращаемое значение:_  
      Тип: **Строка**. Строковое выражение, содержащее путь до сформированного пакета.

_Пример:_  
      `__filename = tools.create_data_package ( curExchangeServerID, _report_id, _package_id, '' );         sPackageUrl = tools.create_data_package( iExchangeSeverIDParam, iReportID, iPackageID, dtLimitParam, iExchangeObjectIDParam );         _filename = ServerEval( 'tools.create_data_package (' + curExchangeServerID + ',' + _report_id + ',' + _package_id + ',\'\')');_`

---

