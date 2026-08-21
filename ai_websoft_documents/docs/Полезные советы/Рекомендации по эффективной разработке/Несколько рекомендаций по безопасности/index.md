## Несколько рекомендаций по безопасности

1.  Не использовать в программном коде вставки вида:

<form action="**<%=Request.Url%>**" method="post" name="response\_form">

<a href="**<%=Request.Url%>**#" onclick="

То есть текущий url пишется в какой-либо параметр html. Данная конструкция потенциально опасна для  XSS. Необходимо использовать функции маскирования для параметров **XmlAttrEncode. Например, так:**

            <form action="**<%=XmlAttrEncode( Request.Url )%**\>" method="post" name="response\_form">

<a href="**<%=XmlAttrEncode( Request.Url )%>**#" onclick="

1.  При обработке post запросов, при использовании параметров из адреса, или при чтении Context в xaml шаблонах нужно помнить о возможности SQL и XQuery injection. Поэтому, если параметры нужно использовать в XQuery или SQL, то все числовые значения предварительно приводятся к нужному типу, а потом используются в запросе.

_Для цифровых типов можно привести к числу:​_

iSQuery= OptInt(Request.Query.learning\_id,0);

iQuery= OptInt(Request.Query.qlearning\_id,0);

iFQuery= OptInt(Request.Form.flearning\_id,0);

arrElems=XQuery('for $elem in learnings where $elem/id='+iSQuery+' or $elem/id='+iQuery+' or $elem/id='+iFQuery+' return $elem');

_Для строковых типов нужно использовать функцию tools\_web.convert\_xss и XQueryLiteral:_

sSQuery= tools\_web.convert\_xss(Request.QueryString.slearning\_name)

sQuery= tools\_web.convert\_xss(Request.Query.qlearning\_id\_name)

sFQuery= tools\_web.convert\_xss(Request.Form.flearning\_id\_name)

arrElems=XQuery('for $elem in learnings where $elem/name='+ XQueryLiteral(sSQuery)+' or $elem/id='+ XQueryLiteral(sQuery)+' or $elem/id='+ XQueryLiteral(sFQuery)+' return $elem')

1.  При сохранении строковых значений из post запросов, или Contextи других значений в xaml шаблонах для строковых типов данных нужно использовать функцию tools\_web.convert\_xss

curObject.name = tools\_web.convert\_xss( Request.Form.name );

1.  Избегать по возможности использование eval как на клиенте, так и на сервере. На сервере использование eval для обработки значений, полученных из post запросов параметров из адреса, или при чтении Context в xaml шаблонах категорически запрещено. То есть

sValue= eval(Request.QueryString.s\_name)использовать нельзя. Если по каким-то причинам, строка кода для выполнения собирается из значений, введенных пользователем, то нужно придерживаться правил из пунктов 2 и 3. Кроме того, можно использовать функцию, tools.evalReplace, которая удалит из строки наиболее опасные значения (ProcessExecute','alert','eval','ShellExecute','Eval'). Но даже в этом случае нужно много раз подумать, прежде чем использовать eval.

---

