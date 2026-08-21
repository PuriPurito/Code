## build_phone

Преобразует строку вида «+7-903-508-20-45» или «+7(903)508-20-45» в строку «79035082045 5082045». Функция используется для унификации поиска по телефонным номерам.

_Синтаксис:_  
      **tools.build\_phone (<strPhoneParam>)**

_Аргументы:_  
     <strPhoneParam> (обязательный)  
     Тип: **Строка**. Исходная строка для преобразования.

_Возвращаемое значение:_  
      Тип: **Строка**. Преобразованная строка или значение null, если произошла ошибка.

_Пример 1:_  
      `_sPhoneUnif1 = tools.build_phone ( '+7-903-508-20-45' );         alert ( sPhoneUnif1 );         sPhoneUnif2 = tools.build_phone ( '+7(903)508-20-45' );         alert ( sPhoneUnif2 );         sPhoneUnif3 = tools.build_phone ( '+7(903)508-2045' );         alert ( sPhoneUnif3 );_`

_Пример 2:_  
      `_str = tools.build_phone ( strPhoneParam );_`

---

