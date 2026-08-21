## evalReplace

Заменяет в строке выражения _'ProcessExecute', 'alert', 'eval', 'ShellExecute', 'Eval'_. Это позволяет использовать полученную в результате выполнения функции строку в выражении eval и таким образом частично обезопасить выполнение кода от атак с помощью внедрения SQL-кода (SQL injection).

_Синтаксис:_  
      **tools.evalReplace (<strEvalParam>)**

_Аргументы:_  
     <strEvalParam> (обязательный)  
     Тип: **Строка**. Строка для преобразования.

_Возвращаемое значение:_  
      Тип: **Строка**. Строка без выражений _'ProcessExecute', 'alert', 'eval', 'ShellExecute', 'Eval'_.

_Пример 1:_  
      `_strEval = "alert('Программа Webtutor');";         strEval1 = tools.evalReplace ( 'eval(' + strEval +')'); // возвращает строковое выражение (('Программа Webtutor');)         alert (strEval1);_`  
      

_Пример 2:_  
      `_strEval = tools.evalReplace ( strEval );_`

---

