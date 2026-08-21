## active_test_learning_finish_attempt

Функция завершает указанную попытку для теста и создает карточку завершенного теста.

_Синтаксис:_  
      **tools.active\_test\_learning\_finish\_attempt (<learning\_id>\[, <learning\_code>\]\[, <assessment\_doc>\]\[, <flag\_create\_learning>\]\[, <docActiveLearning>\])**

_Аргументы:_  
      _<learning\_id> (обязательный)_  
      Тип: **Целое число**. ID активного теста, попытку которого необходимо завершить.  
      _<learning\_code> (необязательный)_  
      Тип: **Строка**. Код раздела теста, который нужно завершить.  
      _<assessment\_doc> (необязательный)_  
      Тип: **TopElem**. TopElem теста, который необходимо завершить.  
      _<flag\_create\_learning> (необязательный)_  
      Тип: **Булево**. Возвращает значение, показывающее, создавать или не создавать запись завершенного теста (true – создавать запись завершенного теста, false – не создавать запись ).   
      _<docActiveLearning> (необязательный)_  
      Тип: **Объект XmlDoc**. документ активного теста, который необходимо завершить.

_Возвращаемое значение:_  
      Тип: **Булево**. Возвращает значение, показывающее, успешно или неуспешно завершена попытка теста (true – попытка завершена успешно, false – попытка завершена неуспешно). 

_Пример:_  
     _bHaveAttempt = tools.active\_test\_learning\_finish\_attempt ( iActiveTestLearningID, '', null, true, docActiveTestLearning );_  
     _iSessionID = Int( ArrayFirstElem( String( Request.Query.session\_id ).split( '-' ) ) );_  
     _connection = ArrayFirstElem( XQuery( 'for $elem in connections where $elem/id = ' + iSessionID + ' return $elem' ) );_  
     _partCode = connection.part\_code;_  
     _bAttemptFlag = tools.active\_test\_learning\_finish\_attempt ( learningDoc.DocID, partCode, null, true, learningDoc );_

---

