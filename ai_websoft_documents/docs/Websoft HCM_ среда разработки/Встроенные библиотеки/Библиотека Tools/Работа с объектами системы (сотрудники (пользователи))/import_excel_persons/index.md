## import_excel_persons

Загрузка данных по сотрудникам из XML-структуры. Используется для импорта сотрудников. Документ XML с данными для загрузки должен быть сформирован предварительно и соответствовать определенным правилам.

Примечание - Предпочтительнее использовать стандартный способ импорта списка сотрудников с предварительным формированием схемы импорта. 

_Синтаксис:_  
      **tools.import\_excel\_persons (<oParamsXml>)**

_Аргументы:_  
     _<oParamsXml> (обязательный)_  
      Тип: **Объект XmlDoc**. Документ XML с данными для загрузки.

_Возвращаемое значение:_  
      Тип: **Целое число**. ID документа события базы с отчетом о загрузке.

_Пример:_  
      `_ID_Doc = tools.import_excel_persons ( XML_file );         local_settings.temp.import_excel_persont_action_report_id = OptInt ( ServerEval ( 'tools.import_excel_persons (' + CodeLiteral ( fldTE.GetXml( { 'tabs': false } ) ) + ')' ), null );_`

---

