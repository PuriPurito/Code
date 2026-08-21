## add_script_to_queue

Создает элемент очереди скриптов.

_Синтаксис:_  
      **tools.add\_script\_to\_queue (<sScriptParam>, <sCodeParam>, <bDeleteAutomaticallyParam>, <iDelayParam>)**

_Аргументы:_  
      _<sScriptParam> (обязательный)_  
      Тип: **Строка**. Код для выполнения.  
      _<sCodeParam> (обязательный)_  
      Тип: **Строка**. Строка с кодом скрипта.  
      _<bDeleteAutomaticallyParam> (обязательный)_  
      Тип: **Булево**. Флаг, определяющий, нужно ли автоматически удалять код из очереди (true – код автоматически удаляется из очереди, false – не удаляется).  
      _<iDelayParam> (обязательный)_  
      Тип: **Целое число**. Задержка в секундах перед выполнением кода.

_Возвращаемое значение:_  
      Тип: **Целое число**. ID созданного объекта.

_Пример:_  
      `_iScriptId = tools.add_script_to_queue(sRegistrationScript,"mgr", true, 5);         tools.add_script_to_queue( 'tools_chat.write_message( ' + XQueryLiteral( sTextMessage ) + ', ' + iObjectID + ' )', 'send_message', true, 0 );         tools.add_script_to_queue( 'tools_chat.change_participants_conversation( ' + iConversationID + ', null, ' + XQueryLiteral( sAction ) + ' )', 'change_participants_conversation', true, 0 );_`

---

