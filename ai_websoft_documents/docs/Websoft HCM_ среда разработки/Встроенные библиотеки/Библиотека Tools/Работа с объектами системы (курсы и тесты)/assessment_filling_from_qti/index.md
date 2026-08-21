## assessment_filling_from_qti

Заполняет карточку теста и создает вопросы к нему на основе qti-описания теста.

_Синтаксис:_  
      **tools.assessment\_filling\_from\_qti (<assessment\_id>\[, <source>\], <qti\_text>)**      или  
      **tools.assessment\_filling\_from\_qti (\[<assessment\_id>\], <source>, <qti\_text>)**

_Аргументы:_  
      <assessment\_id> (обязательный; необязательный, если передается аргумент <source>)  
      Тип: **Целое число**. ID теста.  
      <source> (необязательный)  
      Тип: **TopElem**. TopElem теста.  
      <qti\_text> (обязательный)  
      Тип: **Строка**. Структура теста в формате qti.  
 

_Возвращаемое значение:_  
      Производит заполнение карточки теста. Возвращаемое значение отсутствует.

_Пример:_  
     _tools.assessment\_filling\_from\_qti ( docAssessment.DocID, docAssessment.TopElem, \_event.test.qti\_text );_

     `__url = Screen.AskFileOpen( '', 'XML (*.xml)&#09;*.xml&#09;' + ms_tools.get_const('1d0p7epipp') + '&#09;*.*' );        docAssessment = tools.obtain_doc_by_key( 'assessment', 'code', 'xxx' );        tools.assessment_filling_from_qti( docAssessment.DocID, docAssessment.TopElem, LoadUrlData( _url ) );_`

---

