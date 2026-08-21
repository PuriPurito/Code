## finish_real_test

Завершает тест, назначенный в рамках тестирования участников указанного мероприятия. Действие производится со всеми участниками мероприятия, которым был назначен данный тест.

_Синтаксис:_  
      **tools.finish\_real\_test (<event\_id>\[, <doc\_event>\]\[, <assessment\_id>\]\[, <assessment\_doc>\])**      или  
      **tools.finish\_real\_test (\[<event\_id>\], <doc\_event>\[, <assessment\_id>\]\[, <assessment\_doc>\])**

_Аргументы:_  
     <event\_id> (обязательный; необязательный, если передан doc\_event)  
     Тип: **Целое число**. ID мероприятия.  
     <doc\_event> (необязательный)  
     Тип: **Объект XmlDoc**. Документ мероприятия.  
     <assessment\_id> (необязательный)  
     Тип: **Целое число**. ID завершаемого теста.  
     <assessment\_doc> (необязательный)  
     Тип: **TopElem**. TopElem завершаемого теста.

_Возвращаемое значение:_  
      Производится завершение теста. Возвращаемое значение отсутствует.

_Пример:_  
      `_tools.finish_real_test (Ps.Doc.DocID);         ServerEval ( 'tools.finish_real_test(' + Ps.Doc.DocID + ')' );_`

---

