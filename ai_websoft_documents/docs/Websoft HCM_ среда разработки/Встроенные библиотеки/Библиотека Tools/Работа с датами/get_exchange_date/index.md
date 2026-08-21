## get_exchange_date

Возвращает последнюю дату обмена данными (отправки или получения) для указанного сервера обмена данными.

Входные параметры:

\_source (xml element) – xml элемент, в котором храниться дата (download, upload) .

\_date (date) – дата последней отправки .

Возвращаемый результат – дата последнего обмена (date).

Пример вызова

**\_exa2wx5nutv7 = tools.get\_exchange\_date( curServerDoc.download, curServerDoc.last\_download\_date );**

**\_exa2wx5nutv7 = tools.get\_exchange\_date( curServerDoc.upload, curServerDoc.last\_upload\_date );**

---

