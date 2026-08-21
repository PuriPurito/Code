## Преобразование массива в строку формата XML

Примечание – Данные объектов в формате XML перечисляются в следующем виде: {<параметр\_1>значение\_1</параметр\_1> <параметр\_2>значение\_2</параметр\_2> …}.

\_query\_str = " for $elem in collaborators where contains($elem/fullname, 'ин') return $elem";   
personArray = XQuery(\_query\_str);  
  
sDataTypePARAM = 'xml';  
res = tools.array\_to\_text( personArray, sDataTypePARAM ); // возвращает строку, содержащую записи элементов массива в формате XML  
alert (res);

---

