## Кастомный alert (confirm)

Для кастомного alert (confirm) реализован класс WTLPAlert. При создании экземпляра класса происходит  
создание диалогового окна, заменяющего браузерные alert или confirm. Для вызова необходимо вместо  
alert( "text" ) вызывать создание экземпляра класса WTLPAlert.

Пример самого простого вызова:

`new WTLPAlert({ "sText": oArgs.oData.result.msg });`

Диалог будет выводить лишь сообщение и кнопку `ok.` Ширина диалога по умолчанию 50%.

**Пример вызова:**

`new WTLPAlert({` 

 `"sText": oArgs.oData.result.msg,` 

 `"sType": "alert",` 

 `"sView": "question",` 

 `"sWidth": "30",` 

 `"oExtraOptions": {` 

    `"sTitle": "Тестовый alert",` 

    `"sHeader": "Тестовый заголовок",` 

    `"sIcon": "\"/download_file.html?file_id=6864277091533668668\""` 

  `}`

`});`

`sText` \- текст выводимого сообщения (обязательный)

`sType` \- это тип диалогового окна (alert - значит диалог с одной кнопкой ok, confirm - диалог с двумя кнопками ok и отмена)

`sView` \- вид алерта. Возможны варианты: warning, success, info, question

`sWidth` \- ширина диалогового окна

`oExtraOptions` \- объект с набором параметров:

    - `sTitle` \- заголовок алерта (диалогового окна)

    - `sHeader` \- текст заголовка алерта в теле сообщения

    - `sIcon` \- ссылка на ресурс базы с картинкой. Передается всегда в формате: 

    `"/download_file.html?file_id=6864277091533668668"`

    - `bModal` \- является ли диалог модальным

    - `sDialogClass` \- классы, которые будут применены к диалогу

    - `aButtons` \- массив объектов в кнопками. Если пустой, то кнопки будут заданы по умолчанию в зависимости от типа диалогового окна. 

Вариант диалогового окна (алерта) warning:

info:

success:

question:

Формат объекта кнопки из массива aButtons: 

 `{ name: "accept", label: "Ок", type: "accept" }`

На нажатие ok - возвращается true, диалог закрывается

На нажатие cancel - возвращается false, диалог закрывается

Пример того, как выглядит диалог с заданными параметрами кнопок и иконки:

`new WTLPAlert({ "sText": oArgs.oData.result.msg, "sType": "alert", "sView": "", "sWidth": "30", "oExtraOptions": { "sTitle": "Тестовый alert", "sHeader": "Тестовый заголовок", "sIcon": "\"/download_file.html?file_id=6864277091533668668\"", "aButtons": [ { name: "send", label: "Отправить", type: "send" } ] } });`

---

