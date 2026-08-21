## Запросы XQuery

Для работы с базой данных в системе WebTutor используются запросы. Рекомендуется применять **запросы на языке XQuery**.

В данной статье производится разбор некоторых запросов на языке XQuery. Эти запросы менее известны, чем аналогичные запросы на языке SQL, но после некоторой практики запросы XQuery становятся вполне понятными.

Общая схема запросов на языке XQuery приведена на следующем рисунке:

1.   Объект в котором хранятся запрашиваемые записи
2.   Название таблицы из которой берутся записи. Все записи созданы по одному шаблону, и могут содержать только те поля, которые содержатся в шаблоне.
3.    Логическое условие
4.    Сортировка записей
5.    Результат запроса, объект с отфильтрованными записями

* * *

**Отбор сотрудников по одному критерию:**

for $elem in collaborators where contains($elem/fullname, 'Test') return $elem

  for $elem    in collaborators    where contains($elem/fullname, 'Test')    return $elem

*   Аналогичный запрос на языке SQL:

SELECT \* FROM collaborators WHERE CONTAINS(fullname, 'Test')

*   Присвоение переменной текста запроса:

\_query\_str = "for $elem in collaborators where contains($elem/fullname, 'Test') return $elem";

**Примечание**: Обратите внимание на то, что значение критерия поиска (ФИО) заключено в одинарные кавычки, а весь текст кода запроса – в двойные кавычки.

**CONTAINS** — предикат, используемый для выполнения полнотекстового поиска подстроки в полях, содержащих символьные данные.

* * *

**Отбор сотрудников по двум критериям:**

for $elem in collaborators where (contains($elem/fullname, 'Test') and $elem/login = 'TestTestTest') return $elem

 for $elem    in collaborators    where (contains($elem/fullname, 'Test') and $elem/login = 'TestTestTest')    return $elem

*   Аналогичный запрос на языке SQL:

SELECT \* FROM collaborators WHERE CONTAINS(fullname, 'Test') AND login = 'TestTestTest'

*   Присвоение переменной текста запроса:

\_query\_str = "for $elem in collaborators where (contains($elem/fullname, 'Test') and $elem/login = 'TestTestTest') return $elem";

* * *

**Отбор теста по одному критерию (коду):**

for $elem in assessments where $elem/code = '00000017' return $elem

 for $elem    in assessments    where $elem/code = '00000017'    return $elem

*   Аналогичный запрос на языке SQL:

SELECT \* FROM assessments WHERE code = '00000017'

*   Присвоение переменной текста запроса:

\_query\_str = " for $elem in assessments where $elem/code = '00000017' return $elem ";

* * *

**Отбор курса по одному критерию (коду):**

for $elem in courses where $elem/code = 'OTM8' return $elem

  for $elem    in courses    where $elem/code = 'OTM8'    return $elem

*   Аналогичный запрос на языке SQL:

SELECT \* FROM courses WHERE code = 'OTM8'

*   Присвоение переменной текста запроса:

\_query\_str = "for $elem in courses where $elem/code = 'OTM8' return $elem";

* * *

**Отбор** **объекта** **по** **ID:**

for $elem in collaborators where $elem/id = 6511610587817075498 return $elem

for $elem in assessments where $elem/id = 6424083603832075130 return $elem

for $elem in courses where $elem/id = 6486395195918459516 return $elem

  for $elem     in collaborators    where $elem/id = 6511610587817075498    return $elem

  for $elem     in assessments    where $elem/id = 6424083603832075130    return $elem

  for $elem     in courses    where $elem/id = 6486395195918459516    return $elem

**Примечание** – Об определении ID объектов – см. статью.

* * *

**Отбор сотрудников с упорядочиванием (по возрастанию):**

for $elem in collaborators where contains($elem/fullname, 'Иванов') order by $elem/id return $elem

или

for $elem in collaborators where contains($elem/fullname, 'Иванов') order by $elem/id ascending return $elem

  for $elem     in collaborators    where contains($elem/fullname, 'Иванов')    order by $elem/id    return $elem

  for $elem     in collaborators    where contains($elem/fullname, 'Иванов')    order by $elem/id ascending    return $elem

*   Аналогичный запрос на языке SQL:

SELECT \* FROM collaborators WHERE CONTAINS(fullname, 'Иванов') ORDER BY id

*   Присвоение переменной текста запроса:

\_query\_str = "for $elem in collaborators where contains($elem/fullname, 'Иванов') order by $elem/id return $elem";

* * *

**Отбор сотрудников с упорядочиванием (по убыванию):**

for $elem in collaborators where contains($elem/fullname, 'Иванов') order by $elem/id descending return $elem

  for $elem     in collaborators    where contains($elem/fullname, 'Иванов')    order by $elem/id descending    return $elem

*   Аналогичный запрос на языке SQL:

SELECT \* FROM collaborators WHERE CONTAINS(fullname, 'Иванов') ORDER BY id DESC

*   Присвоение переменной текста запроса:

\_query\_str = "for $elem in collaborators where contains($elem/fullname, 'Иванов') order by $elem/id descending return $elem";

* * *

**Отбор законченных тестов для определенного сотрудника:**

for $emp in test\_learnings where contains($emp/person\_fullname, 'Иванов Иван Иванович') return $emp

  for $emp     in test\_learnings    where contains($emp/person\_fullname, 'Иванов Иван Иванович')    return $emp

*   Присвоение переменной текста запроса:

\_query\_str = "for $emp in test\_learnings where contains($emp/person\_fullname, 'Иванов Иван Иванович') return $emp";

* * *

**Отбор незаконченных тестов для определенного сотрудника:**

for $emp in active\_test\_learnings where contains($emp/person\_fullname, 'Иванов Иван Иванович') return $emp

  for $emp     in active\_test\_learnings    where contains($emp/person\_fullname, 'Иванов Иван Иванович')    return $emp

*   Присвоение переменной текста запроса:

\_query\_str = "for $emp in active\_test\_learnings where contains($emp/person\_fullname, 'Иванов Иван Иванович') return $emp";

* * *

**Отбор пройденных тестов (state\_id=4) среди завершенных по данному сотруднику:**

for $elem in test\_learnings where contains($elem/person\_fullname, 'Иванов Иван Иванович') and $elem/state\_id=4 return $elem

  for $elem     in test\_learnings    where contains($elem/person\_fullname, 'Иванов Иван Иванович') and $elem/state\_id=4    return $elem

*   Присвоение переменной текста запроса:

\_query\_str = "for $elem in test\_learnings where contains($elem/person\_fullname, 'Иванов Иван Иванович') and $elem/state\_id=4 return $elem";

* * *

 

Подробнее о языке XQuery см. здесь.

---

