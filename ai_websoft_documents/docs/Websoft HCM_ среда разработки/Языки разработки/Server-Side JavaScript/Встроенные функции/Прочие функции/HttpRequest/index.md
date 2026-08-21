## HttpRequest

Выполняет HTTP-запрос.

Данная функция не работает в тонком клиенте (в браузере). Для корректной работы функции рекомендуется переносить обработку данных на сервер. Подробнее в статье.

Также необходимо учитывать, что при работе в среде Linux автоматически задействуется алгоритм сжатия контента gzip, с которым функция HttpRequest несовместима.  
Для Linux рекоментуется использовать .Net компонент **tools.get\_object\_assembly( "HttpRequest" )** (см. в указанной статье Пример 2).

_Синтаксис:_  
**HttpRequest (<url>, \[<method>\], \[<body>\], \[<fields>\])**

_Аргументы:_  
_<url> (обязательный)_  
Тип: **Строка.** Url HTTP-запроса.  
_<method> (необязательный)_  
Тип: **Строка.** Наименование метода ('get', 'post'). По умолчанию используется метод 'get'.  
_<body> (необязательный)_  
Тип: **Строка.** Тело запроса.  
_<fields> (необязательный)_  
Тип: **Строка.** Список дополнительных полей заголовка HTTP-запроса в соответствующем формате _(имя:значение\\n)_ (строковая переменная).  
Список также может содержать дополнительные опции. В данном списке возможно _использование следующих опций_, которые обрабатываются отдельно и не попадают в передаваемый заголовок:

*   _**Ignore-Errors –**_ Игнорировать наличие кода ошибки HTTP в ответе. Если указана эта опция, код ошибки можно получить через атрибут RespCode возвращаемого объекта. По умолчанию функция завершается с ошибкой в случае получения кода ошибки по HTTP.
*   _**Auto-Redirect –**_ Автоматически следовать редиректам HTTP 303, HTTP 304. По умолчанию _true_.

_Возвращаемое значение:_  
Тип: **Объект HttpResponse**. Результат выполнения HTTP-запрос. Результат действия функции.  
С основными кодами ответа HTTP можно ознакомиться в статьях 1 и 2.

_Пример 1:_  
      `EnableLog ( "log1", true ); // пользовательский журнал с названием log1-<текущая дата>.log включен (о функции **EnableLog** подробнее см. здесь)            oResp1 = HttpRequest ( 'http://reg.datex-soft.com/' ); // такая страница существует         LogEvent ( "log1", oResp1.RespCode); // в пользовательский журнал выводится код завершения операции 200`  
  
      `try {               oResp2 = HttpRequest ( "https://ya.ru/423532452345", "get", null ); // такой страницы не существует         }         catch (err) {               LogEvent ( "log1", err ); // в пользовательский журнал выводится код ошибки`  
      `_}_`

_Пример 2:_       

      `oResp1 = HttpRequest ( 'http://reg.datex-soft.com/' ); // такая страница существует         alert (oResp1.RespCode); // выводит код завершения операции 200         try {               oResp2 = HttpRequest ( "https://ya.ru/423532452345", "get", null); // такой страницы не существует         }         catch (err) {               alert ( err); // выводит код ошибки          }`

_Пример 3:_  
      `resp = HttpRequest(targetUrl, 'post', soapXml, auth);         HttpRequest ( 'http://reg.datex-soft.com/' );         HttpRequest ( 'http://reg.datex-soft.com/login.htm', 'post', UrlEncodeQuery ( {login:'xxx',password:'xxx'} ) );         HttpRequest( 'http://reg.datex-soft.com/login.htm', 'post', '111', 'Content-type: text/xml\nIgnore-Errors: 1\n' );         Response = HttpRequest( sServiceUrl, 'post', strRequest, 'Ignore-Errors: 0\nContent-type: text/xml\nSOAPAction: http://www.e-staff.ru/soap/' + 'GetEvents' );`

_Пример 4:_  
     resp = HttpRequest(url,'post',body, headers)   
     responseObj = tools.read\_object(resp.Body)

---

