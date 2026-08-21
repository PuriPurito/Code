## Синтаксис XQuery запросов

**Синтаксис XQuery запроса:**  
  
**for <декларация переменных> (where <условие>) (order by <имя поля> (descending | ascending)) return <возвращаемое значение>**  
  
<декларация переменных> = <декларация переменной> {,<декларация переменных>}  
<декларация переменной> = <имя переменной> in <имя каталога>  
<имя переменной> : начинается с $, затем любая последовательность латинских букв  
<условие> : <выражение 1> <логические оператор>  <выражение 2> <логические оператор> <выражение 3> ...  
<логические оператор> : and | or   
<выражение> : <величина> <оператор сравнения> <величина>  
<оператор сравнения> : > | >= | < | <= | = | != | MatchSome(<выражение> {,<выражение>}) | contains(<выражение>,<выражение>) | doc-contains(<выражение>)  
<величина> :  <имя поля> | <константа> | date(<величина>) | null() | true() | false()  
<имя поля> :  <имя переменой>/<имя поля каталога>  
<возвращаемое значение> = <имя переменной> | <имя переменой>/<имя поля каталога> | <имя переменной> {, <возвращаемое значение>}  
  
**Функции внутри XQuery:**  
  
1) contains (arg1, arg2) - поиск подстроки в строке  
agr1 - <величина> в котором проиходит поиск подстроки  
arg2 - величина>, содержащее искомую подстроку  
  
2) doc-contains(arg1, arg2, arg3) - полнотекстовый поиск в документе  
arg1 - <имя поля> в котором содержится ID документа, в котором будет вполняться полнотекстовый поиск  
arg2 - имя базы для поиска, как правило пусто, т.е. ''  
arg3 - <величина>, содержащее искомую строку

Примечание - С помощью конструкции **doc-contains** можно выполнять поиск по кастомным полям. Общий принцип поиска по кастомным полям следующий:  
doc-contains($elem/id, DefaultDb, '\[<имя кастомного поля>=<значение критерия поиска>~<тип кастомного поля>\]')  
Примеры типов кастомного поля: _string, date, integer, bool_.  
Синтаксис теоретически позволяет не просто искать по тексту, но и отрабатывать условия, например doc-contains($elem/id, DefaultDb, '\[custom\_field\_name>2023-12-12~date\]'), однако такой вариант работает только на реляционной СУБД (MS SQL, Postgres), а на базе типа XML работать не будет.

  
3) MatchSome(arg1,arg2) - поиск множества значений поля  
arg1 - <имя поля> в котором ищем  
arg2 - массив значений для поиска вида (<величина>{,<величина>})

4) some/satisfies - поиск элементов из каталога 1, для которых элементы из каталога 2 соответствуют указанному критерию:  
for $elem1 in <каталог1> where some $elem2 in <каталог2> satisfies ( <критерий> ) return $elem1  
  
5) null() -проверка на пустое поле   
  
6) true() - проверка булевской величины   
  
7) false() - проверка булевской величины   
  
8) date(arg1) - приведение величины к дате для сравнения с полет типа дата  
arg1 - <величина>, содержащее строку, приводимую к дате  
  
**Примеры XQuery запросов:**  
  
for $x in groups where $x/is\_dynamic=true() return $x  
  
for $emp in collaborators where contains($emp/position\_name, 'инженер') return $emp  
  
for $c in events where $c/status\_id='plan' and $c/type\_id='webinar' order by $c/start\_date descending return $c  
  
for $elem in events where MatchSome($elem/type\_id,('one\_time','real\_time')) return $elem

for $elem in events where $elem/start\_date > date('01.06.2019 15:30:30') return $elem  
  
for $e in education\_methods, $x in events  where $x/education\_method\_id=$e/id and $x/status\_id='plan' return $e

for $elem in collaborators where $elem/sex='w' and contains($elem/fullname,'Анна') order by $elem/birth\_date descending return $elem

for $er in event\_results, $cl in collaborators, $ev in events where $er/person\_id = $cl/id and $er/event\_id = $ev/id and $ev/status\_id='close' and $er/is\_assist=false() return $cl

for $elem in events return $elem/Fields('name','type\_id')

---

