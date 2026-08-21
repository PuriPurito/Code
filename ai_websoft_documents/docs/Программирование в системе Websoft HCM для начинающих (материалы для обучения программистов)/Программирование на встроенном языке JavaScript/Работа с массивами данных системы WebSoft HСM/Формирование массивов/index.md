## Формирование массивов

Массивы могут быть сформированы без использования конструктора и с помощью конструкторов **Array** и **Object**.  
 

**Формирование массива без использования конструктора**

aNumbers = \[1, 2, 3, 5\];  
alert(aNumbers.length); // выводится значение 4

**Формирование массива с помощью конструктора Array**

На практике чаще используется конструктор **Array**. С помощью конструктора **Array** могут быть присвоены начальные элементы массива. При использовании конструктора **Array** свойство **length** (длина массива) определяется автоматически.

arrConstrArray2 = new Array(1, 2, 0, 0, 1);  
alert(arrConstrArray2.length); // выводится значение 5

Можно определить лишь некоторые элементы массива:

arrConstrArray1 = new Array();  
arrConstrArray1 \[0\] = 1;  
arrConstrArray1 \[1\] = 1;  
arrConstrArray1 \[5\] = 4;  
alert(arrConstrArray1.length); // выводится значение 6

При использовании этого конструктора неопределенные промежуточные элементы массива получают значение _undefined_, а обращение к элементам массива с индексами, превышающими длину массива **length**, приводит к ошибке "_Invalid array index":_

arrConstrArray1 = new Array();  
arrConstrArray1 \[0\] = 1;  
arrConstrArray1 \[1\] = 1;  
arrConstrArray1 \[5\] = 4;  
alert(arrConstrArray1 \[3\]); // выводится значение undefined  
alert(arrConstrArray1 \[7\]); // выводится ошибка "_Invalid array index"_

**Формирование массива с помощью конструктора Object**

При использовании конструктора **Object** для создания массива невозможно передать несколько элементов массива. Массивы, создаваемые с помощью конструктора **Object** не имеют свойства **length**.

arrConstrObject = new Object();  
arrConstrObject \[0\] = 1;  
arrConstrObject \[2\] = 4;  
alert(arrConstrObject.length); // система выдает ошибку "Unknown object property: length"

При обращении к неопределенным промежуточным элементам массива в этом случае система выдает ошибку "_Unknown object property":_

arrConstrObject = new Object();  
arrConstrObject \[0\] = 1;  
arrConstrObject \[2\] = 4;  
alert(arrConstrObject \[1\]); // система выдает ошибку "Unknown object property: 1"

---

