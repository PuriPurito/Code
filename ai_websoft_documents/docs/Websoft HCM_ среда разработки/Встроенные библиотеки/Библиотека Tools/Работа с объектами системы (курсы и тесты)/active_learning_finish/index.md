## active_learning_finish

Функция завершает указанный активный электронный курс и создает карточку завершенного электронного курса (карточка незавершенного курса при этом удаляется).. 

_Синтаксис:_  
**tools.active\_learning\_finish (<learning\_id> \],\[ <source>\],\[ <course\_doc>\])**

_Аргументы:_  
      _<learning\_id> (обязательный)_  
      Тип: **Целое число**.  ID активного электронного курса, который необходимо завершить.  
      _<source> (необязательный)_  
      Тип: **TopElem**. TopElem активного электронного курса, который необходимо завершить.  
      _<course\_doc> (необязательный)_  
      Тип: **TopElem**. TopElem электронного курса, который необходимо завершить.

_Возвращаемое значение:_  
      Тип: **Целое число**. ID нового завершенного курса.

_Пример:_  
     `_learningDocID = tools.active_learning_finish( activeLearningID );        tools.active_learning_finish(_a9387.PrimaryKey);        iLearningId = tools.active_learning_finish(iActiveLearnId,'',teCourse);        tools.active_learning_finish( iObjectID, teObject );        tools.active_learning_finish( learningDoc.DocID, learningDoc.TopElem, courseDoc );_`

---

