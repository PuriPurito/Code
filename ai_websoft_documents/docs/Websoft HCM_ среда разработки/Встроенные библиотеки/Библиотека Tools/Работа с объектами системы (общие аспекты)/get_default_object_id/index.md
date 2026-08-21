## get_default_object_id

Возвращает ID различных объектов системы по умолчанию.  
См. также устаревшие функции: tools.get\_default\_notification\_system\_id и tools.get\_default\_webinar\_system\_id.

_Синтаксис:_  
      **tools.get\_default\_object\_id (<sCatalogNameParam>)**      или  
      **tools.get\_default\_object\_id (<sCatalogNameParam>, <sTypeParam>)**      или  
      **tools.get\_default\_object\_id (<sCatalogNameParam>, <sTypeParam>, <teObjectParam>)**

_Аргументы:_

     <sCatalogNameParam> (обязательный)  
     Тип: **Строка**. Строковое значение типа объекта.  
     Допустимые значения аргумента:  
\- 'notification\_system'  
\- 'webinar\_system'  
\- 'boss\_type'  
\- 'contact\_type'  
\- 'contact\_result'  
\- 'custom\_web\_template'  
\- 'learning\_storage'

     <sTypeParam> (необязательный; обязательный при некоторых значениях sCatalogNameParam)  
     Тип: **Строка**. Строковое значение подтипа объекта.  
     Допустимые значения аргумента:  
При _sCatalogNameParam = 'boss\_type'_:  
_'main'  
'talent\_pool\_curator'  
'talent\_pool\_tutor'  
'project\_manager'_

При _sCatalogNameParam = 'custom\_web\_template'_:  
_\- 'css'  
\- 'placeholder\_empty'_

     <teObjectParam> (необязательный; обязательный при некоторых значениях sCatalogNameParam и teObjectParam)  
     Тип: **TopElem**. TopElem объекта.  
     Допустимые значения названия типа аргумента (_teObjectParam.Name_) при _sCatalogNameParam = 'custom\_web\_template' и sTypeParam = 'css':  
\- 'poll'  
\- 'assessment'_

_Возвращаемое значение:_  
      Тип: **Целое число**. ID заданного объекта системы по умолчанию.

_Пример:_  
      `_notification_system_id = tools.get_default_object_id ( 'notification_system' );         alert (notification_system_id);_`

---

