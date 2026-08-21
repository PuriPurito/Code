## Выборка первого элемента массива

Для выборки первого элемента массива рекомендуется использовать функцию **ArrayFirstElem**.

\_query\_str = " for $elem in collaborators where contains($elem/fullname, 'ин') return $elem";   
personArray = XQuery(\_query\_str);  
personArray1 = ArrayFirstElem (personArray); // выбирается первый элемент массива  
alert (personArray1.fullname);

  
  
1) Как выбрать элемент массива _personArray_, у которого значение поля _fullname_ является первым по алфавиту?  
2) Что произойдет, если функцию _ArrayFirstElem_ применить к пустому массиву? Проверьте на примере.

---

