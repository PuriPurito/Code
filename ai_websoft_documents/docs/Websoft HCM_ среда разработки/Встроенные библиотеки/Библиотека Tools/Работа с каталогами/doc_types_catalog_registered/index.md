## doc_types_catalog_registered

Свойство. Возвращает значение _true_, если запись хеш-форм каталогов завершилась успешно, или _false_ - в противном случае. По умолчанию – _false_.   
 

_Синтаксис:_  
      **tools.doc\_types\_catalog\_registered**

_Возвращаемое значение:_  
      Тип: **Булево**. Успешность завершения записи хеш-форм каталогов.

_Пример:_  
      `_if (!tools.doc_types_catalog_registered.Value)              tools.doc_types_catalog_registered = true;_`

---

