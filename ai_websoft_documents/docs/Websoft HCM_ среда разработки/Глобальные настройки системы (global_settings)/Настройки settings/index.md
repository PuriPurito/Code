## Настройки settings

Объект, содержащий данные настроек Websoft HCM.

У объекта настроек Websoft HCM имеются следующие параметры:

*   admin\_not\_auth
*   allow\_self\_register
*   auth\_check\_eval
*   auth\_session\_life\_time
*   auth\_site\_access\_failed\_eval
*   auto\_exchange\_data
*   brute\_password\_check
*   brute\_password\_count
*   brute\_password\_period
*   check\_access\_on\_lists
*   check\_sid
*   check\_user\_required\_fields
*   check\_wf\_access\_assessment
*   cl
*   cost\_center\_priority
*   default\_contact\_result\_id
*   default\_contact\_type\_id
*   default\_cost\_center\_id
*   default\_currency
*   default\_event\_result\_type\_id
*   default\_expense\_item\_id
*   default\_file\_source\_id
*   default\_lng
*   default\_tenancy\_template\_id
*   default\_web\_design\_id
*   default\_webinar\_system\_id
*   delete\_unused\_resource
*   digital\_signature\_control
*   disp\_anonymous\_polls
*   disp\_log\_debug
*   disp\_log\_mail\_trans
*   disp\_log\_web\_request
*   disp\_social\_block
*   disp\_wellcome\_screen
*   email\_empty\_create\_notification
*   eval\_post\_registration\_script
*   eval\_prev\_registration\_script
*   event\_settings
*   exchange\_period
*   export\_odbc\_commant\_timeout
*   external\_web\_players
*   fill\_path\_places
*   fill\_path\_subs
*   key\_position\_threat\_script
*   knowlcntrl
*   lds
*   lds\_url\_pattern
*   library
*   lngs
*   log\_web\_request\_rec\_unloged
*   login\_case\_sensitive
*   login\_domen\_sensitive
*   max\_message\_in\_block\_count
*   max\_report\_visible\_rows
*   mobile
*   not\_use\_doc\_contains
*   outstaff
*   own\_org
*   pass\_validation\_formula
*   password\_auto\_rebuild
*   password\_format
*   personal\_chat\_confirmation\_required
*   portal\_base\_url
*   portal\_tracking\_type
*   post\_registration\_script
*   ppm\_matrix
*   prev\_registration\_script
*   project
*   project\_task
*   recruitment
*   required\_fields
*   save\_deleted\_in\_trash
*   save\_exchange\_data\_files
*   save\_person\_change\_log
*   script\_create\_login
*   script\_create\_password
*   script\_evaluation\_cutoff
*   script\_queues
*   self\_register\_disp\_custom\_elems
*   self\_register\_disp\_subs
*   self\_register\_group\_id
*   self\_register\_org\_id
*   self\_register\_position\_name
*   self\_register\_subdivision\_id
*   self\_register\_use\_position\_commons
*   send\_learning\_additional\_info
*   server\_agent\_time\_start
*   set\_st\_category
*   show\_all\_persons
*   show\_creator\_editor\_name
*   show\_creator\_in\_reports
*   social\_avatar\_priority
*   soft\_kill\_before\_regenerate
*   statistics
*   template\_cache\_type
*   time\_stamp\_server\_address
*   timezone\_id
*   url\_exchange\_results
*   use\_auth\_session
*   use\_personal\_chat\_global\_policy
*   use\_profiling
*   use\_queue\_learnings
*   use\_time\_stamp\_server
*   use\_web\_rules
*   vclass\_hosts
*   web\_api\_settings
*   web\_banned\_self\_register
*   web\_designs
*   web\_request\_logging\_str
*   web\_rules
*   websoft\_plugin\_server и др.  
      
    Пример XML-структуры данных объекта _settings_ приведен на вкладке **Файлы**.

Примеры работы с глобальными настройками системы:  
  
curHostSettings = global\_settings.settings;  
// Откроем документ глобальных настроек системы  
curWebDesign = global\_settings.settings.web\_designs.GetChildByKey( curHostSettings.default\_web\_design );  
// Узнаем код текущего дизайна  
curWebDesignUrl = curWebDesign.url;  
// Определим URL текущего дизайна  
curWebSiteUrl = global\_settings.settings.portal\_base\_url;  
// Определим URL сайта

---

