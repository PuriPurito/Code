## doc_types_catalog_hashes

Свойство. Массив хранит хеш-формы каталогов. Используется чтобы оценить, изменились ли формы объектов.  
  
Массив хеш-форм имеет следующую структуру:  
<doc\_types\_catalog\_hashes>  
     <doc\_types\_catalog\_hash MULTIPLE="1" PRIMARY-KEY="object\_name">  
          <object\_name TYPE="string"/>  
          <object\_hash TYPE="string"/>  
     </doc\_types\_catalog\_hash>  
</doc\_types\_catalog\_hashes>

_Синтаксис:_  
      **tools.doc\_types\_catalog\_hashes**

_Возвращаемое значение:_  
      Тип: **Массив**. Массив хеш-форм каталогов.

_Пример:_  
      `_fldHash = tools.doc_types_catalog_hashes.ObtainChildByKey ( oReturnInfo.catalog ); // данное выражение позволяет найти соответствующую пару «название объекта (каталога) –_ _хеш-функция__». Если искомая пара не найдена, то_ _функция ObtainChildByKey_ _добавляет новый дочерний элемент._`

---

