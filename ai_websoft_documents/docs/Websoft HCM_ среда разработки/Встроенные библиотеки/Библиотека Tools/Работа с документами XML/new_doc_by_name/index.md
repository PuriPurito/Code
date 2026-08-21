## new_doc_by_name

Создает новый объект в указанном каталоге.

Входные параметры:  
_sCatalogNameParam_ (string) – название каталога. Обычно указывается без s на конце.  
_bIsCatalogParam_ (bool)  – флаг указывающий, что создается новая запись в каталоге (true), или создается новый объект (false). Обычно передается false

Возвращаемый результат – Doc нового объекта.

Примеры вызова:  
**docObject = tools.new\_doc\_by\_name( 'collaborator', false );  
docObject = tools.new\_doc\_by\_name( Ps.catalog\_name, false );**

---

