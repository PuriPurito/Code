## get_annals_text_from_annals

Возвращает строку в формате XML без отступов, но со стандартным XML-заголовком на основе XML-структуры, переданной в функцию. Например, если передан объект XmlElem:  
_<elem\_count>  
      Новый элемент  
     <count TYPE='integer'>5</count>  
    <description>Описание нового элемента</description>  
</elem\_count>_  
то будет возвращено:   
_<?xml version="1.0"encoding="utf-8"?><elem\_count>Новый элемент<count TYPE='integer'>5</count><description>Описание нового элемента</description></elem\_count>_

**Примечание** – Передаваемый в данную функцию аргумент должен строго соответствовать требованиям к объекту XmlElem. В противном случае функция может выдать ошибку: _«Unknown method: GetXml()»_. Соответствие аргумента структуре _annals_ (результатам тестирования) данная функция не проверяет.

_Синтаксис:_  
      **tools.get\_annals\_text\_from\_annals (<fldAnnalsParam>)**

_Аргументы:_  
     <fldAnnalsParam> (обязательный)  
     Тип: **Объект XmlElem**. Данные для преобразования.

_Возвращаемое значение:_  
      Тип: **Строка**. Строка в формате XML со стандартным заголовком. Результат действия функции.

_Пример 1:_  
      `_newElem = CreateDynamicElem( 'elem_count' , 'string'); // формирование тестового объекта XmlElem         newElem.Value = 'Новый элемент'; // определение значения свойства Value элемента newElem          newElem.AddChild( 'count', 'integer' ); // создание двух подчиненных элементов первого уровня и определение значений их свойства Value         newElem.count = 5;         newElem.AddChild( 'description', 'string' );         newElem.description = 'Описание нового элемента';            doc = tools.get_annals_text_from_annals ( newElem ); // формирование строки в формате XML со стандартным заголовком         alert (doc); // вывод на экран сформированной строки_`  

_Пример 2:_  
      `_TopElem.lesson_report = tools.get_annals_text_from_annals( TopElem.annals_variant.Object );_`

---

