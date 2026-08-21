## Символы <% и %>

Между символами **<%** и **%>** размещается _исполняемый код JavaScript. Код, размещенный в шаблоне вне указанной области, воспринимается системой как разметка HTML._

_Пример:_  
      `_// Это код разметки HTML. Открываем таблицу_         _<table>         <tr>         <td class="tableRowEven"><b>Название</b></td>         <td class="tableRowEven"><b>Инфо</b></td>         // ...         </tr>_      _// Далее начинается **исполняемый код JavaScript**_         _<%         arr=XQuery("for $elem in courses order by $elem/name return $elem");         // ...         %>_      _// **Область исполняемого кода JavaScript заканчивается**, далее снова идет код разметки HTML_         _<tr>         <td class="tableRowOdd" width=30%><a href="/view_doc.html?mode=course_info&object_id=<%=i.id%>"><%=i.name%></a></td>         <td class="tableRowOdd">         // ...         </tr>         </table>_      _// Закрываем таблицу_`

---

