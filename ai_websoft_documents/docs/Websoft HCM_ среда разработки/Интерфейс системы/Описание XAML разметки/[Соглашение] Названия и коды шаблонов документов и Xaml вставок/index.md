## [Соглашение] Названия и коды шаблонов документов и Xaml вставок

Элемент разметки  
Название:    \[Соглашение\] Названия и коды шаблонов документов и Xaml вставок  
Краткое описание:      
Тип:    Справка  
Содержимое:      
Подробное описание:      
**Коды шаблонов**

block\_desc ( view\_desc.xaml ) - панель описания объекта. Поле desc.   
list\_catalogs ( view\_catalogs.xaml ) - таблицы прикрепленных типов объектов к карточке объекта.  
list\_files ( view\_files.xaml ) - таблица прикрепленных файлов к карточке объета.  
list\_knowledge\_parts ( view\_knowledge\_parts.xaml ) - таблица карты знаний.  
dlg\_select ( dlg\_select.xaml ) - диалог выбора объектов.  
dlg\_set\_course\_test\_params ( dlg\_set\_course\_test\_params.xaml ) - диалог параметров обучения.  
block\_text\_area ( view\_text\_area.xaml ) - панель описания раздела портала. Поле text\_area.   
navigation\_list ( view\_navigation\_list .xaml ) - список дочерних раделов портала.

**Глобальные переменные**

curSubPersonByManagerID - список записей каталога Сотрудники подчиненных текущего пользователя. Рекомендуется использовать с помощью конструкции:

Env.SetProperty( 'curSubPersonByManagerID', curSubPersonByManagerID = Env.GetOptProperty( 'curSubPersonByManagerID', tools.get\_sub\_persons\_by\_func\_manager\_id( curUserID ) ) );

  
**Универсальные XAML шаблоны и имена контролов**

view\_custom\_fields.xaml - список универсальных поле (настраиваимых, полей документооборота). Могут быть редактируемые.  
CustomFieldGrid<%id%> - таблица, в которой располагаются лайбел - значение настраиваемых полей.

---

