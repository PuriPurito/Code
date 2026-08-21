## Глобальные настройки системы (global_settings)

В процессе заполнения...  
 

  
У данного объекта имеются следующие параметры:

*   branch\_code
*   courses\_path
*   curator\_boss\_type\_id
*   customer
*   debug
*   default\_contact\_result\_id
*   default\_contact\_type\_id
*   default\_exchange\_server\_id
*   disp\_admin
*   disp\_ass
*   disp\_ass\_settings
*   disp\_career
*   disp\_career\_settings
*   disp\_chatbots
*   disp\_collaborator\_schedule
*   disp\_comp\_ben
*   disp\_comp\_ben\_settings
*   disp\_courselab
*   disp\_courselab\_settings
*   disp\_crm
*   disp\_crm\_settings
*   disp\_crmsale
*   disp\_dist
*   disp\_dist\_settings
*   disp\_dnoffice
*   disp\_edu
*   disp\_edu\_settings
*   disp\_exs
*   disp\_fin
*   disp\_game
*   disp\_knowlcntrl
*   disp\_knowlcntrl\_settings
*   disp\_library
*   disp\_library\_settings
*   disp\_mobile
*   disp\_mtenancy
*   disp\_outstaff
*   disp\_outstaff\_settings
*   disp\_pers
*   disp\_pers\_settings
*   disp\_prize
*   disp\_proctoring
*   disp\_prop
*   disp\_pwt
*   disp\_recr
*   disp\_recr\_settings
*   disp\_secur
*   disp\_sub
*   disp\_test
*   disp\_test\_adv
*   disp\_test\_settings
*   disp\_vclass
*   disp\_vclass\_settings
*   disp\_web
*   disp\_web\_settings
*   disp\_wiki
*   first\_install
*   install\_stamp
*   interface\_mode
*   is\_demo
*   object\_deleted\_str
*   old\_skk\_code
*   project\_manager\_type\_id
*   settings
*   skk\_code
*   smtp\_server
*   tutor\_boss\_type\_id
*   update\_exist\_package\_obj
*   web\_path и др.

XML-структура данных объекта _global\_settings хранится в папке WebTutorServer ('x-local://wt\_data/wtv\_global\_settings.xml')._  
Пример XML-структуры данных объекта _global\_settings_ приведен на вкладке **Файлы**.

Примеры работы с глобальными настройками системы:  
  
curHostSettings = global\_settings.settings;  
// Откроем документ глобальных настроек системы  
curWebDesign = global\_settings.settings.web\_designs.GetChildByKey( curHostSettings.default\_web\_design );  
// Узнаем код текущего дизайна  
curWebDesignUrl = curWebDesign.url;  
// Определим URL текущего дизайна  
curHostSettings = global\_settings.Doc; // преобразование объекта global\_settings в документ XmlDoc  
alert (curHostSettings.SaveToUrl('file:///D:/WebTutor/global\_settings.xml')); // сохранение объекта global\_settings на компьютере

---

