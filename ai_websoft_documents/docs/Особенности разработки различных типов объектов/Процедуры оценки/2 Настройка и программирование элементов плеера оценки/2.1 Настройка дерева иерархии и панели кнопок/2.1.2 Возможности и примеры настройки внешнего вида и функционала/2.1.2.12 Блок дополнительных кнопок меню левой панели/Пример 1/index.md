## Пример 1

**_Пример 1_**: Добавляем кнопку, показывающую материалы и помощь для проведения оценки. Материалы будем размещать в специальном разделе портала – как текст и приложенные файлы.

Последовательность действий:

1) создаем шаблон, показывающий заданный раздел портала (текст и файлы). Шаблон будем делать на XAML, чтобы синхронизировать со всеми стилями и шаблонами портала. Код документа будем передавать в url запуска шаблона (атрибут doc\_code).

<SPXMLScreen>

<%

                \_doc\_code = curUrlQuery.GetOptProperty( "doc\_code", " ass\_materials" )

                \_doc = ArrayOptFirstElem(XQuery("for $obj in documents where $obj/code='"+\_doc\_code+"' return $obj"));

                if (\_doc!=undefined)

                {

                                \_cdoc = tools.open\_doc(\_doc.id);

                                if (\_cdoc!=undefined)

                                {

                                                curObjectID = \_doc.id;

                                                curObjectDoc = \_cdoc;

                                                curObject = \_cdoc.TopElem;

                                                Response.Write( tools\_web.place\_xaml( "desc\_body" ) );

                                                Response.Write( tools\_web.place\_xaml( "list\_files" ) );

                                }

                }

%>

</SPXMLScreen>

2) Сделаем шаблон для запуска XAML-плеера (напрямую проиграть XAML из HTML страницы не получится). Идентификатор XAML-шаблона, который надо показать в окне, будем передавать в строке адреса (атрибут xaml\_id).

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="ru" lang="ru">

<%Server.Execute( "include/head.html" )%>

<body>

                <div>

                                <%=tools\_web.insert\_custom\_code(Request.Query.GetOptProperty("xaml\_id",""), null)%>

                </div>

</body>

</html>

3) Формируем объект описания кнопки показа материалов

oData.config.buttons = \[ { action: “iframe”,

                id: ”assessment\_docs”,

                title: “Материалы”,

                class: “assessment\_docs”,

                visible: “true”,

                dialog\_title: “Материалы по оценке”,

                url: UrlEncode(“/custom\_web\_template.html?object\_code=…&xaml\_id=…&doc\_code=…”),

                title\_close\_action: “none”,

                dialog\_buttons: \[\],

                iframe\_width: 80,

                iframe\_height: 80 } \];

Действие по закрытию окна, по кресту в правом верхнем углу (title\_close\_action) – просто закрыть окно (none).

Не показывать другие кнопки окна – пустой массив dialog\_buttons.

Широта и высота окна iframe – по 80  процентов от размера окна плеера.

В строке адреса для object\_code подставляем код шаблона из 2 этапа (запуск XAML-плеера).

Для xaml\_id – идентификатор шаблона из 1 этапа (показ раздела портала).

Для doc\_code – кода раздела портала, где будут лежать материалы по оценке.

4) С помощью таблицы стилей меняем оформление – картинку кнопки

.wt-appr-side-btns .wt-btn-iframe.assessment\_docs .wt-btn-icon-iframe { display: none; }

.wt-appr-side-btns .wt-btn-iframe.assessment\_docs .wt-btn-icon-paperclip { display: block;}

Первой строкой скрываем стандартную картинку кнопки – ее класс wt-btn-icon-iframe.

Второй строкой показываем другую кнопку (скрепка) wt-btn-icon-paperclip.

---

