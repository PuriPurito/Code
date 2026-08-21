## active_test_learning_finish

Функция завершает указанный активный тест и создает карточку завершенного теста (карточка незавершенного теста при этом не удаляется, и тест остается в списке назначенных). Если необходимо полное завершение, то карточку незавершенного теста нужно удалять дополнительно (с помощью отдельного кода вне данной функции).

_Синтаксис:_  
      **tools.active\_test\_learning\_finish (<learning\_id>\[, <source>\]\[,  <assessment\_doc>\]\[, <iPersonIDParam>\])** 

_Аргументы:_  
      _<learning\_id> (обязательный)_  
      Тип: **Целое число**. ID активного теста, который необходимо завершить.  
      _<source> (необязательный)_  
      Тип: **TopElem**. TopElem активного теста, который необходимо завершить.  
      _<assessment\_doc> (необязательный)_  
      Тип: **TopElem**. TopElem теста, который необходимо завершить.  
      _<iPersonIDParam> (необязательный)_  
      Тип: **Целое число**. ID сотрудника, для которого необходимо завершить тест.

_Возвращаемое значение:_  
      Тип: **Объект XmlDoc**. Документ нового завершенного теста.

_Пример 1:_  
_// Пусть в системе имеется сотрудник Васильева Людмила Петровна  
// Васильевой Л.П. ранее был назначен тест "Знаете ли Вы литературу"  
// Определяем ID назначенного теста   
\_query\_str = "for $elem in active\_test\_learnings where $elem/assessment\_name = 'Знаете ли Вы литературу' and $elem/person\_fullname = 'Васильева Людмила Петровна' return $elem";  
arrActiveTest = XQuery(\_query\_str);  
oActiveTest = ArrayOptFirstElem (arrActiveTest);_

_if (oActiveTest != undefined)  
{  
      alert ('Найден незаконченный тест: ' + oActiveTest.assessment\_name + ', назначенный сотруднику ' + oActiveTest.person\_fullname);   
      oFinishTest = tools.active\_test\_learning\_finish(oActiveTest.id);  
      teFinishTest = oFinishTest.TopElem;  
      alert ('Завершен тест: ' + teFinishTest.assessment\_name + ', назначенный сотруднику ' + teFinishTest.person\_fullname);   
      alert ('ID завершенного теста: ' + oFinishTest.DocID);  
}  
//  Тест остается в разделе "Незаконченные", но также записывается и в раздел "Законченные" (со статусом "Не пройден").  
//  Если данный агент выполнялся несколько раз, то создаются несколько записей в разделе "Законченные" .  
_

_Пример 2:_

     _tools.active\_test\_learning\_finish ( \_doc\_id );_  
     _docTestLearning = tools.active\_test\_learning\_finish ( iActiveTestId,'',teAssessment );_  
     _tools.active\_test\_learning\_finish( iObjectID, teObject );_  
      `_docLearning = tools.active_test_learning_finish ( _learning_id, partActiveLearning, assessmentDoc, activeLearningDoc.person_id );_`  
  
      `_if ( tools.active_test_learning_finish ( catLearning.id ) != null )_`  
              `_DeleteDoc ( UrlFromDocID ( catLearning.id ), true );_`

---

