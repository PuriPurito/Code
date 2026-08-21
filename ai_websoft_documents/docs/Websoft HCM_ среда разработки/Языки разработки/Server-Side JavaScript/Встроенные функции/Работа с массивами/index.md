## Работа с массивами

Массив в платформе SP-XML - это объект, содержащий список каких-либо значений (в том числе других объектов). В минимальном варианте любой массив позволяет получить содержащиеся в нем элементы один за другим, используя оператор for-in:

for ( elem in array )  
{  
}

 **Пример:**  
     var Array1 = \['one', 'two', 'three'\];  
     for (i in Array1)  
     {  
         alert(i);  
     }

Для работы с элементами массива можно использовать также функции, описанные в данном разделе.

Некоторые массивы поддерживает так называемый прямой доступ. Для таких массивов заранее известно количество его элементов, и любой элемент может быть доступен по его индексу array\[i\]:

elemsNum = ArrayCount( array );  
for ( i = 0; i < elemsNum; i++ )  
{  
    elem = array\[i\];  
}

**Пример:**  
     var Array1 = \['one', 'two', 'three'\];  
     elemsNum = ArrayCount (Array1);  
     for ( i = 0; i < elemsNum; i++ )  
     {  
         elem = Array1 \[i\];  
         alert(elem);  
     }

Гарантированно прямой доступ поддерживают только два вида массивов - стандартный массив JavaScript Array и объект XmlElem. Для остальных массивов возможность использования прямого доступа заранее неизвестна, и, если требуется прямое индексирование (например, для выбора случайного элемента из массива), следует использовать функции ArrayDirect или ArraySelectAll.

      ArrayCount  
      ArrayDirect  
      ArrayExtract  
      ArrayExtractKeys  
      ArrayFind  
      ArrayFirstElem  
      ArrayIntersect  
      ArrayMax  
      ArrayMerge  
      ArrayMin  
      ArrayOptFind  
      ArrayOptFindByKey  
      ArrayOptFindBySortedKey  
      ArrayOptFirstElem  
      ArrayOptMax  
      ArrayOptMin  
      ArrayRange  
      ArraySelect  
      ArraySelectAll  
      ArraySelectByKey  
      ArraySelectBySortedKey  
      ArraySelectDistinct  
      ArraySort  
      ArraySum  
      ArrayUnion  
      IsArray

---

