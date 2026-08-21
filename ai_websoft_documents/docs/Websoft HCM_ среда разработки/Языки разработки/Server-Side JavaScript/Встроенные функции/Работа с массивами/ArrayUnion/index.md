## ArrayUnion

Последовательное объединение нескольких массивов в один. Функция не контролирует повторяемость элементов результирующего массива.

_Синтаксис:_  
      **ArrayUnion (<array1>, <array2>\[, …, <arrayN>\])**

_Аргументы:_  
      _<array1> (обязательный)_  
      Тип: **Массив**. Исходный массив 1.  
      _<array2> (обязательный)_  
      Тип: **Массив**. Исходный массив 2.  
      _<arrayN> (необязательный)_  
      Тип: **Массив**. Исходный массив N.

_Возвращаемое значение:_  
      Тип: **Массив**. Результирующий объединенный массив. Результат действия функции.

_Пример 1:_  
      _var Array1 = \['one', 'two', 'three' \];  
      var Array2 = \['four', 'five' \];  
      Array3 = ArrayUnion (Array1, Array2); // создание нового массива, объединяющего элементы массивов Array1 и Array2  
      for (arr in Array3) {  
            alert (arr); // возвращает значения 5-ти элементов результирующего массива  
      }_

_Пример 2:_  
      _arr1 = \[1,2\];  
      arr2 = \[2,3\];  
      arr3 = ArrayUnion(arr1, arr1, arr2);  
      alert (ArrayCount(arr3)); // выводит 6  
      alert (tools.object\_to\_text (arr3, 'json')); // выводит \[1,2,1,2,2,3\]_

_Пример 3:_      

_var sqlCourse = "courses";  
var sqlTest = "assessments";_

_var arrCourses = ArrayExtract(tools.xquery(sqlCourse), "({ id: This.id.Value, name: This.name.Value, status: This.status.Value , type: 'course'})");  
var arrTests = ArrayExtract(tools.xquery(sqlTest), "({ id: This.id.Value, name: This.title.Value, status: This.status.Value , type: 'test'})");  
var RESULT = ArrayUnion(arrCourses, arrTests); // объединяет массивы курсов и тестов_

_alert( tools.object\_to\_text(RESULT, "json") );_

---

