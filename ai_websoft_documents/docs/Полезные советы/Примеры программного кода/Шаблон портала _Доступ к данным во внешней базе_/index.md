## Шаблон портала "Доступ к данным во внешней базе"

Рассмотрим как в шаблоне портала вывести данные, которые хранятся во внешней по отношению к системы базе данных (или в собственной базе данных WebTutor, но с использованием SQL запросов).   
  
Разберем программный код шаблона.

Пакет с шаблоном:  
  
  
Для того, чтобы опубликовать импортированный или созданный шаблон на портале, необходимо перейти в раздел **"Портал"**. Создать раздел портала и на закладке **"Атрибуты"** выбрать шаблон из списка настраиваемых web шаблонов (не забудьте переключить маркер с системных шаблонов на настраиваемые!!) - см. рисунок.  
  
  
  
Комментарии выделены красным шрифтом (текст комментария относится к блоку кода, расположенного выше него), код шаблона - синим.

<%  
// ODBC Connection string: для подключения к нужной СУБД найдите строку на http://www.connectionstrings.com   
sCONNECTIONSTRING = "Driver={SQL Native Client};Server=QUAD;Database=CEP\_REAL; Uid=sa;Pwd=password;";   
  
// Здесь пишем свой SQL запрос - в примере извлекаем все записи из таблицы zones  
sQUERY = "select \* from zones";   
  
// Здесь добавляем в массив имена полей из SQL запроса, которые мы будем извлекать в массив  
arrExportFields = new Array("zone\_code","name");   
  
// Код ниже выполняет соединение с базой данных через ADO, выполняет SQL запрос и извлекает его результаты в массив arrObjects  
  
arrObjects = new Array();  
  
db = new ActiveXObject( "ADODB.Connection" );  
db.Open(sCONNECTIONSTRING);  
  
function sGetValue(arrCursor, sFldName)  
{  
for( \_fi = 0; \_fi < arrCursor.Fields.Count; \_fi++ )  
{  
\_cur\_name = String( arrCursor.Fields( \_fi ).Name ).toLowerCase();  
if (StrLowerCase(sFldName) == \_cur\_name)  
{  
try  
{  
\_tmp1 = arrCursor.Fields( \_fi );  
}  
catch ( e1 )  
{  
\_tmp1 = arrCursor.Fields( \_cur\_name );  
}  
try  
{  
\_tmp = \_tmp1.Value;  
}  
catch ( e2 )  
{  
\_tmp = \_tmp1.value;  
}  
try  
{  
\_cur\_value = "" + \_tmp\[0\];  
}  
catch(\_aa\_)  
{  
\_cur\_value = "" + arrCursor.Fields( \_cur\_name ).Value;  
\_cur\_value = \_tmp;  
}  
return \_cur\_value;  
}  
}  
return null;  
}  
  
try  
{  
oSession = db.Execute(sQUERY);  
oSession.MoveFirst();  
iCounter = 0;  
while (!oSession.EOF)  
{  
oObj = new Object;  
for (sFld in arrExportFields)  
{  
oObj.SetProperty(sFld, sGetValue(oSession, sFld));  
}  
arrObjects\[iCounter\] = oObj;  
oSession.MoveNext;  
iCounter++;  
}  
}  
catch(\_oops\_)  
{  
alert(\_oops\_);  
db.Close();  
}  
  
//Конец кода работы с базой  
  
  
%>  
<table border="1">  
<tr>  
<th>Выводим поле Name</th><th>Выводим поле zone\_code</th>  
</tr>  
<%  
  
// Проходим циклом по массиву с результатами запроса и выводим поля  
for (oObj in arrObjects)  
{  
%>  
<tr>  
<td><%=oObj.name%></td><td><%=oObj.zone\_code%></td>  
</tr>  
<%  
}  
%>  
</table>  
 

  
Результат работы шаблона на портале:

---

