## Сортировка массива

Сортировку массива (по возрастанию или по убыванию значения некоторого поля в элементах массива) удобно производить с помощью соответствующего запроса.  
Ранее уже говорилось о том, что в состав запроса можно добавлять конструкции:

\- _order by $elem/<название\_поля\_сортировки> ascending_ (для сортировки по возрастанию)  
\- _order by $elem/<название\_поля\_сортировки> descending_ (для сортировки по убыванию)

Приведем пример:

\_query\_str = "for $elem in test\_learnings order by $elem/person\_fullname ascending return $elem "; // сортировка результата отбора по возрастанию значения поля person\_fullname  
TestArray = XQuery(\_query\_str);  
  
str = 'Были отобраны следующие данные: \\n';   
i=1;  
for(q in TestArray)   
{  
     elem = q.person\_fullname + ' закончил сдачу теста ' + q.assessment\_name;  
     str = str + ' - ' + elem + '\\n';   
  
     if (i == 3) // перебираются первые три элемента массива  
          break;   
     i=i+1;  
}  
alert ( str ); 

  
Сравните результат со следующим кодом:

\_query\_str = "for $elem in test\_learnings order by $elem/person\_fullname descending return $elem "; // сортировка результата отбора по убыванию значения поля person\_fullname  
TestArray = XQuery(\_query\_str);  
  
str = 'Были отобраны следующие данные: \\n';   
i=1;  
for(q in TestArray)   
{  
     elem = q.person\_fullname + ' закончил сдачу теста ' + q.assessment\_name;  
     str = str + ' - ' + elem + '\\n';   
  
     if (i == 3) // перебираются первые три элемента массива  
          break;   
     i=i+1;  
}  
alert ( str ); 

  
  
1) Сравните результаты выполнения программ в этом разделе и в разделе «Вывод отдельных полей элементов массива в формате строки». В чем заключаются отличия и почему результаты различаются?

---

