## encrypt_content

Шифрует указанный курс для его использования в Personal WebTutor.

_Синтаксис:_  
      **tools.encrypt\_content (<iCourseIDParam>)**

_Аргументы:_  
     <iCourseIDParam> (обязательный)  
     Тип: **Целое число**. ID курса, подлежащего шифрованию.

_Возвращаемое значение:_  
      Тип: **Объект Error**. Информация об успехе выполнения функции или об ошибке. Результирующий объект _oRes_ имеет три свойства: код _oRes.error_, путь до файла курса _oRes.course\_path_ и сведения об ошибке _oRes.error\_text_.  
      В случае успеха выполнения функции возвращаются значения _oRes.error = 0_ и пустая строка в поле _oRes.error\_text_.  
      В случае возникновения ошибки возвращаются значения _oRes.error = 1_ и сведения об ошибке в поле _oRes.error\_text._       

_Пример:_  
      `_tools.encrypt_content ( TopElem.Doc.DocID );         ServerEval ( 'tools.encrypt_content (' + TopElem.Doc.DocID + ')' );_`

---

