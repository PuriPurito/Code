## Форматирование кода на Javascript

• Для отступов используется клавиша **Tab**

• В конце строки ставится точка с запятой («**;**»)

• Пробелы в присваиваниях и проверках:  
      _var iEventsCount = 5;  
      if( x = 5 )_

• Пробелы в XQuery:  
    _XQuery(“for $elem in events where $elem/education\_method\_id = 123 and $elem/status\_id != 'cancel' return $elem”);_

• Пробелы при использовании стандартных функций (после названия функции пробел не ставится; после открытой скобки и запятой ставится один пробел):  
    _oMessage.data = tools.object\_to\_text( oMessageData, 'json' );_

    _if( ArrayOptFirstElem( XQuery( tools.create\_xquery( 'collaborator', '$elem/id = ' + iPersonID, tools.create\_filter\_xquery( oAccess.conditions ), '', '' ) ) ) != undefined )  
    {  
        bSaveBlock = true;  
        return true;  
    }_

---

