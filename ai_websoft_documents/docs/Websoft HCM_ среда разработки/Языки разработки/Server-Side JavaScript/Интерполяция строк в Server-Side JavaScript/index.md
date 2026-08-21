## Интерполяция строк в Server-Side JavaScript

Начиная с релиза 2025.1 в языке Server-Side JavaScript появилась возможность интерполяции строк, позволяющая упростить процесс разработки. Этот режим обработки строк позволяет вставлять значения переменных прямо в текст, избавляет от подсчетов «плюсов» в программном коде и понимается большинством редакторов.

При написании кода на языке Server-Side JavaScript строки (как и в ES6) задаются в обратных кавычках (\`...\`), код внутри строки обрамляется конструкцией ${<code>}.

`x = 'Управление матрицей талантов';   y = 1234;`  
**Вместо:**  
`var xqs = 'for $obj in object_claims where $obj/source_name = '+ XQueryLiteral(x,TypeStr) + ' or $obj/id=' + XQueryLiteral(y,TypeInteger) + ' return $obj';`  
**Можно использовать:**  
``var xqs = `for $obj in object_claims where $obj/source_name = ${XQueryLiteral(x,TypeStr)} or obj/id=${XQueryLiteral(y,TypeInteger)} return $obj`;``

Интерполяция строк не работает в интерфейсе администратора и в браузере (в Web-клиенте). Работает только на сервере (реализовано только в xHttp).

---

