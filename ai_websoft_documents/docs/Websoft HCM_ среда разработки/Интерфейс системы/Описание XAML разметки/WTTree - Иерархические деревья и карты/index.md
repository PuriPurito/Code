## WTTree - Иерархические деревья и карты

Элемент разметки  
Название:    WTTree (Слава)  
Краткое описание:    Иерархические деревья и карты  
Тип:    Пользовательский элемент  
Содержимое:      
Подробное описание:    

//Обязательные параметры  
Name = STRING // идентификатор инстанса, обязательный параметр  
Source = COLLECTION // источник данных, обязательный параметр

//Общие параметры   
Type = STRING // "tree|map" - дерево или карта, по умолчанию tree  
MultiPath = BOOL // разрешает для дерева построение связей с многими родителями. Для карты невалиден. По умолчанию false  
Selectable = BOOL // For future use. Пока не валиден.  
NodeMode = STRING // "normal|dot" - For future use. Пока всегда normal  
NodeClick = ACTION // Действие при нажатии на ноду  
Width = STRING|NUMBER // Ширина контейнера. Если есть %, будет выставлена в %, число будет считаться пикселами, по умолчанию адаптируется к ширине внешнего контейнера  
Height = NUMBER // Высота контейнера, в пикселах. Отсутствие атрибута (AND отсуствие Aspect) означает адаптацию высоты под содержимое  
Aspect = NUMBER // Отношение высоты к ширине контейнера, в пикселах. Отсутствие атрибута (AND отсуствие Height) адаптацию высоты под содержимое  
Alignment = STRING // "left|center|right" - для дерева положение root-ноды в пределах своего уровня (условно горизонтального). For future use. Пока всегда center  
Orientation = STRING // "top|bottom|left|right" - для дерева положение root-ноды. Для карты невалиден. По умолчанию top  
LevelsOpen = NUMBER // Число уровней, открытых при первой загрузке. По умолчанию - неограничено  
Class = STRING // дополнительный CSS-класс для контейнера  
InterElement = NUMBER // Расстояние между элементами в уровне, в пикселах. По умолчанию 25  
InterLevel = NUMBER // Расстояние между уровнями, в пикселах. По умолчанию 75

//Параметры элементов (общие)  
ElementWidth = NUMBER // Ширина элемента, в пикселах, по умолчанию 200  
ElementHeight = NUMBER // Высота элемента, в пикселах, по умолчанию 50  
ElementForm = STRING // "rect|roundrect|ellipse" - форма элемента, по умолчанию "rect"  
ElementLayout = STRING // расположение полей, по умолчанию "title;image|text" (см. ниже о лэйаутах)  
ElementClass = STRING // дополнительный CSS-класс для элемента, по умолчанию ""  
ElementColor = STRING // цвет подложки title (CSS override), по умолчанию ""  
ElementFontColor = STRING // цвет шрифта title (CSS override), по умолчанию ""  
ElementBGColor = STRING // цвет подложки элемента (CSS override), по умолчанию ""  
ElementBorderColor = STRING // цвет бордера элемента (CSS override), по умолчанию ""  
ElementBorderWidth = NUMBER // ширина бордера элемента в пикселах (CSS override), по умолчанию 1  
ElementFontIcon = STRING // класс иконки (с добавкой -ico) при использовании в лэйауте font-icons, по умолчанию "icon-document-ico"

//Параметры коннекторов  
Connector = STRING // "plain|curve|rect" - форма коннектора, по умолчанию "curve"  
MarkerStart = STRING // "circle|square|arrow|none" - форма начальной точки, по умолчанию "circle"  
MarkerEnd = STRING // "circle|square|arrow|none" - форма конечной точки, по умолчанию "arrow"  
LineClass = STRING // дополнительный CSS-класс для линии коннектора, по умолчанию ""  
LineWidth = NUMBER // ширина линии коннектора в пикселах, по умолчанию вычисляется автоматически исходя из размеров элементов   
LineColor = STRING // цвет линии (CSS override), по умолчанию ""

//Панель кнопок Zoom  
AllowZoom = BOOL // включает или отключает показ всей панели с Zoom-кнопками, по умолчанию true   
ZoomButtons = STRING // "reset;fit;fitx;fity;plus;minus;center;findme" - максимальный набор, по умолчанию "reset;fit;plus;minus;findme"  
ZoomPosition = STRING // "left|center" - положение панели Zoom-кнопок, по умолчанию left

//Тултип  
DisplayTips = BOOL // включает или отключает показ баллунов с доп.информацией, по умолчанию false  
TipClass = STRING // дополнительный CSS-класс для баллуна, по умолчанию ""  
TipColor = STRING // цвет подложки баллуна (CSS override), по умолчанию ""  
TipBorderColor = STRING // цвет бордера баллуна (CSS override), по умолчанию ""  
TipLayout = STRING // расположение полей, по умолчанию "title;image|text" (см. ниже о лэйаутах)

//Переключатель  
DisplayToggle = BOOL // включает или отключает показ тогглера для дочерних нод. Не валиден, если выбран параметр MultiPath, по умолчанию false  
TogglerClass = STRING // дополнительный CSS-класс для тогглера, по умолчанию ""  
TogglerRadius = NUMBER // радиус тогглера в пикселах, по умолчанию 10  
TogglerColor = STRING // цвет бордера (CSS override), по умолчанию ""

// Описания полей коллекции  
DataID = STRING // название поля с id элемента, используется при построении иерархии, должен быть уникальным, по умолчанию "id"  
DataElemID = STRING // название поля с id элемента, используемым для прочих целей, может быть неуникальным, по умолчанию "id"  
DataParent = STRING // название поля с id родительского элемента, используется при построении иерархии, по умолчанию "parent"  
DataSister = STRING // название поля с id сиблинга, сейчас не используется, по умолчанию "sister"  
DataTitle = STRING // название поля с title элемента, по умолчанию "title"  
DataText = STRING // название поля с text элемента, по умолчанию "text"  
DataImage = STRING // название поля с URL картинки элемента, по умолчанию "image"  
DataColor = STRING // название поля с цветом title элемента, по умолчанию "color"  
DataFontColor = STRING // название поля с цветом шрифта в title элемента, по умолчанию "fontcolor"  
DataBGColor = STRING // название поля с цветом подложки элемента, по умолчанию "bgcolor"  
DataBorderColor = STRING // название поля с цветом бордера элемента, по умолчанию "bordercolor"  
DataElemForm = STRING // название поля с формой элемента, по умолчанию "form"  
DataElemLevel = STRING // название поля с уровнем иерархии элемента, по умолчанию "level"  
DataClass = STRING // название поля с CSS-классом для элемента, по умолчанию "class"  
DataElementLayout = STRING // название поля с лэйаутом для элемента, по умолчанию "layout"  
DataMe = STRING // название поля с булевским значение для особой пометки этого элемента, по умолчанию "me"  
DataParentList = STRING // название поля с строковым массивом id родительских элементов (разделитель - ;), используется при построении иерархии с множественными парентами, по умолчанию "parents\_ids"  
DataIsCurUser = STRING // название поля с булевским значением для пометки элемента текущего пользователя, по умолчанию "is\_cur\_user"  
DataFontIcon = STRING // название поля с CSS-классом для fonticon, по умолчанию "font\_icon"

// Layouts

Строка, описывающая расположение полей в элементе или баллуне. Точка с запятой - конец ряда. | - разделитель колонок.   
Возможные зоны:   
title - пытается занять ряд полностью  
image - картинка. вставялется как бэкграунд для квадратного (со стороной доступной высоты) DIV с опцией background-size: contain  
text - текстовый блок  
fonticon - подобно картинке, но в ячейку вставляется пустой SPAN, к которому применяется класс фонт-иконки

Если для указанных зон используются предопределенные поля (по умолчанию или переопределенные через описание полей коллекции), то синтаксис простой, например:

title;image|text  

т.е. заголовок сверху, затем в следующем ряду картинка и текст в двух колонках. Можно переопределить для зон свои поля (все или часть) прямо в этой строке добавив имя поля после знака =, тогда строка примет вид, например:

title=my\_title;fonticon=iconclass|text=description  
Примеры использования:      
<WTTree  
Name="DocChildMap"  
Width="100%"  
Source="{DocChildCollection}"  
Type="map"  
ElementForm="rect"  
Connector="rect"  
MarkerStart="circle"  
MarkerEnd="arrow"  
ElementClass="wt-sitemap-item"  
ElementLayout="fonticon|text=name"  
ElementWidth="200"  
ElementHeight="48"  
ElementFontIcon="icon-folder-o-ico"  
InterElement="16"  
InterLevel="48"  
DisplayToggle="true"  
TogglerClass=""  
TogglerRadius="8"  
DisplayTips="true"  
TipLayout="title=name;image=image|text=desc"  
AllowZoom="true"   
ZoomPosition="center"

DataID="id"  
DataParent="parent\_id"  
DataTitle="name"  
DataText="desc"

Orientation="left"      
LevelsOpen="3"

NodeClick="OPENURL={url}"  
/>

Параметры:

**Атрибут**

**Тип**

**Описание**

Name

string

Идентификатор инстанса, обязательный параметр

Source

string

Код документа выборки в WT. Если написать просто код выборки, то она будет напрямую запрошена с сервера. Если написать код выборки в фигурных скобках {}, то выборка будет проводиться через объект Collection (который в этом случае должен существовать). Это нужно, если требуется на каждый запрос к выборке передать еще какие-то данные, которые в этом самом объекте Collection и описываются.

Type

string

"tree|map" - дерево или карта, по умолчанию tree

MultiPath

bool

разрешает для дерева построение связей с многими родителями. Для карты невалиден. По умолчанию false

Width

number|string

Ширина контейнера. Если есть %, будет выставлена в %, число будет считаться пикселами, по умолчанию адаптируется к ширине внешнего контейнера

---

