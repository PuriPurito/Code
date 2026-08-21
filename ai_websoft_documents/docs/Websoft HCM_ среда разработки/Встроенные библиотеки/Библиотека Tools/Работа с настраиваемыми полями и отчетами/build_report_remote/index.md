## build_report_remote

Запускает построение настраиваемого отчета.

_Синтаксис:_  
      **tools.build\_report\_remote (<report\_id>\[, <ps>\]\[, <docReportParam>\])**      или  
      **tools.build\_report\_remote (\[<report\_id>,\]\[ <ps>,\] <docReportParam>)**

_Аргументы:_  
     <report\_id> (обязательный; необязательный, если передан аргумент _<docReportParam>_)  
     Тип: **Целое число**. ID отчета для построения.   
     <ps> (необязательный)  
     Тип: **Объект XmlDoc**. Документ карточки отчета, если она открыта в интерфейсе Webtutor Administrator. Данные (последние изменения) будут браться из этого документа.  
     <docReportParam> (необязательный)  
     Тип: **Объект XmlDoc**. Документ отчета.     

_Возвращаемое значение:_  
      Тип: **Объект XmlDoc**. Документ сохраненного настраиваемого отчета.

_Пример:_      

     `_tools.build_report_remote ( null, null, docCustomReport );        ServerEval('tools.build_report_remote ( ' + _cur_custom_report_id + ')' );_`

     `_if (tools.build_report_remote(iCustomReportID, teCustomReport, null) != null)        {             vReportResult = teCustomReport.get_report_data(iCustomReportID, curPersonID);        }        else        {             alert("custom_report.html: invalid custom_report_id [" +iCustomReportID+ "] PS.Name=" + Ps.Name);        }_`

---

