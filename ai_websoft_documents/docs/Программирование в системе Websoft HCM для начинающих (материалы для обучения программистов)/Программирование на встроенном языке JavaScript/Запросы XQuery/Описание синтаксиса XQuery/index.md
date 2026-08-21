## Описание синтаксиса XQuery

В запросах XQuery применяются следующие основные операнды:   
_\- операторы сравнения;  
\- contains();_  
\- _doc-contains();_  
_\- MatchSome();  
\- some/satisfies;  
\- null();_  
_\- date()._

Рассмотрим указанные операнды подробнее.  
 

**Операторы сравнения**

В запросах XQuery могут быть использованы следующие операнды сравнения:  
_\=_ \- равно;  
_!=_ - не равно;  
_\>_ - больше;  
_\>=_ - больше или равно;  
_<_ - меньше;  
_<=_ - меньше или равно.  
  
_Пример:_

for $c in events where $c/status\_id='plan' return $c

  
**Другие операнды**

\- _contains (arg1, arg2)_ - поиск подстроки _arg2_ в строке _arg1._  
  
_Пример:_

for $emp in collaborators where contains($emp/position\_name, 'инженер') return $emp

  
  
\- _doc-contains(arg1, arg2, arg3)_ \- полнотекстовый поиск в документе.  
_arg1_ \- <имя поля>, содержащее ID документа, в котором будет выполняться полнотекстовый поиск.  
_arg2_ \- имя базы для поиска, как правило пусто, т.е. ''.  
_arg3_ \- <величина>, содержащая искомую строку.  
  
_Пример:_

for $elem in collaborators where doc-contains($elem/id, 'DefaultDb', 'Воронов') return $elem

  
С помощью данной конструкции можно выполнять поиск по кастомным полям. Общий принцип поиска по кастомным полям следующий:  
doc-contains($elem/id, DefaultDb, '\[<имя кастомного поля>=<значение критерия поиска>~<тип кастомного поля>\]')  
Примеры типов кастомного поля: _string, date, integer, bool_.  
Например:

_doc-contains($elem/id, DefaultDb, '\[custom\_field\_name=123~integer\]')_  
 

Синтаксис теоретически позволяет не просто искать по тексту, но и отрабатывать условия, например doc-contains($elem/id, DefaultDb, '\[custom\_field\_name>2023-12-12~date\]'), однако такой вариант работает только на реляционной СУБД (MS SQL, Postgres), а на базе типа XML работать не будет.  
 

\- _MatchSome(arg1,arg2)_ \- поиск множества значений поля.  
_arg1_ \- <имя поля>, в котором производится поиск.  
_arg2_ \- массив значений для поиска вида (<величина>{,<величина>})  
  
_Пример:_

for $elem in events where MatchSome($elem/type\_id,('one\_time','real\_time')) return $elem

\- _some/satisfies_ \- поиск элементов из каталога 1, для которых элементы из каталога 2 соответствуют указанному критерию:

for $elem1 in <каталог1> where some $elem2 in <каталог2> satisfies ( <критерий> ) return $elem1

_Пример (поиск блогов тех групп, в которые входит пользователь):_

for $elem in blogs where some $sub in group\_collaborators satisfies ( $elem/object\_id = $sub/group\_id and $sub/collaborator\_id = ' + curUserID + ' ) return $elem

  
\- _null()_ - проверка на пустое поле  
  
_Пример:_

for $x in collaborators where $x/mobile\_phone=null() return $x

  
  
\- _date(arg1)_ \- приведение величины к дате для сравнения с полем типа дата.  
arg1 - <величина>, содержащая строку, приводимую к дате.  
  
_Пример:_

for $elem in collaborators where dismiss\_date<date('15.03.2016') return $elem

  
  
В запросах XQuery в качестве результата выборки обычно используется условная переменная _$elem_. Выбор данного названия условной переменной неважен (например, ее можно назвать _$e, $obj_ и т.д.

Подробнее - см. статью "Синтаксис XQuery запросов".

В запросах XQuery полезно использовать функцию **XQueryLiteral**, преобразующую исходное значение в литерал соответствующего типа:

\_query\_str = "for $elem in active\_test\_learnings where $elem/person\_fullname = " + XQueryLiteral( cFullName ) + " return $elem";  
\_query\_str = "for $elem in subdivisions where $elem/name="+XQueryLiteral("Подразделение2") + " return $elem";  
\_query\_str = "for $al in active\_learnings where $al/course\_id = " + XQueryLiteral(iCourseID) + return $al";

Подробнее о функции **XQueryLiteral** \- см. статью.

---

