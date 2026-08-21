## clear_good_instance_status

Очищает данные статуса экземпляра товара.

_Синтаксис:_  
      **tools.clear\_good\_instance\_status (<oSourceGoodInstance>)**

_Аргументы:_  
     _<oSourceGoodInstance> (обязательный)_  
      Тип: **Целое число** или **строка**. ID экземпляра товара или документ экземпляра товара.

_Возвращаемое значение:_  
      Тип: **Булево**. Возвращает значение, показывающее, выполнена ли функция успешно (_true_ – функция выполнена успешно, _false_ – функция не выполнена).

_Пример:_  
      `_if ( tools.clear_good_instance_status( fldGoodInstanceElem.PrimaryKey ) ) { ... }_`

---

