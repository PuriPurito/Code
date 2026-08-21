## enable_log_web_request

Включает или выключает журнал веб-запросов.

_Синтаксис:_  
      **tools.enable\_log\_web\_request (<flag>)**

_Аргументы:_  
     <flag> (обязательный)  
     Тип: **Булево**. Включить (_true_) / выключить (_false_) журнал веб-запросов. 

_Возвращаемое значение:_  
      Производит включение/выключение журнала веб-запросов. Возвращаемое значение отсутствует. 

_Пример:_  
     _if ( global\_settings.settings.disp\_log\_web\_request )_  
          _tools.enable\_log\_web\_request( true );_

     `_tools.enable_log_web_request( global_settings.settings.disp_log_web_request );        sLogEval = 'tools.enable_log_web_request(' + global_settings.settings.disp_log_web_request + ');'_`

---

