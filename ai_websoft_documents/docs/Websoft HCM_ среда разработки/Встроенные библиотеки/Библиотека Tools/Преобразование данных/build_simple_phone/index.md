## build_simple_phone

Заменяет в строке пробел, «(» , «)», «+» и «-» на пустую сроку, а символы «,» и «;» - на пробел.

_Синтаксис:_  
      **tools.build\_simple\_phone (<strPhoneParam>)**

_Аргументы:_  
     <strPhoneParam> (обязательный)  
     Тип: **Строка**. Исходная строка для преобразования.  
 

_Возвращаемое значение:_  
      Тип: **Строка**. Преобразованная строка или значение null, если произошла ошибка.

_Пример 1:_  
     `_sPhoneUnif1 = tools.build_simple_phone ( '+7-903-508-20-45' );        alert ( sPhoneUnif1 );        sPhoneUnif2 = tools.build_simple_phone ( '+7(903)508-20-45' );        alert ( sPhoneUnif2 );        sPhoneUnif3 = tools.build_simple_phone ( '+7(903)508-2045' );        alert ( sPhoneUnif3 );        sPhoneUnif4 = tools.build_simple_phone ( '+7(903)508-2045; +7(903)508-2046; +7(903)508-2047' );        alert ( sPhoneUnif4 );_`  

_Пример 2:_  
      `_str = tools.build_simple_phone ( strPhoneParam );_`

---

