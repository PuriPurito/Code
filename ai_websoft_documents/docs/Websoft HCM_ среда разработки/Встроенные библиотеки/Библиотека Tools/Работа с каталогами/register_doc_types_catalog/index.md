## register_doc_types_catalog

Сравнивает hash в структуре doc\_types\_catalog\_hashes с текущем hash’ем объектов и обновляет его в случае изменения.

Входные параметры:

aCatalogsToRegPARAM (string)  – название объекта.

bServerCheck (bool)  – флаг, true – запускать проверку на сервере, или false на локальной машине.

Возвращаемый результат – нет.

Пример вызова:       

**tools.register\_doc\_types\_catalog(regAllDocTypes(), false)**

---

