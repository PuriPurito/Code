## Агент "Снять флажок "Требуется сменить пароль" на вкладке "Права доступа" сотрудников определенной организации"

При загрузке списка сотрудников в систему с помощью команды **Импорт сотрудников из Excel, CSV...** _(Сервис - Импорт - Импорт сотрудников из Excel, CSV...)_ автоматически устанавливается флажок **Требуется сменить пароль**. Если пароль менять не требуется, то можно запустить на клиенте следующий агент, обязательно указав название нужной организации в переменной _sOrgName_.  
 

// Ввести название компании  
var sOrgName = 'Трудовые резервы';  
  
\_query\_str = "for $elem in collaborators where $elem/org\_name='" + sOrgName + "' return $elem"; // здесь после org\_name= ставится одиночная кавычка, а затем двойная; перед return - двойная кавычка, затем одиночная и пробел  
// alert (\_query\_str);  
personArray = XQuery(\_query\_str); // personArray является массивом объектов Сотрудник, отобранных запросом.  
alert ( ArrayCount (personArray) ); // определение количества элементов отобранного результирующего массива  
  
for (e in personArray){  
     eElem = OpenDoc(UrlFromDocID(e.id));  
     eElem.TopElem.change\_password = false; // изменение значения поля change\_password (не требуется менять пароль)  
     eElem.Save(); // сохранение карточки сотрудника  
}

  
Заодно приведем здесь макрос Excel для подготовки файла CSV с разделителем "запятая" в кодировке UTF-8.  
Пусть исходный файл Excel с данными сотрудников для ввода в систему называется _Import1.xlsx_.

Sub SaveACommatoUtf8\_3()  
     ' Path$ - полный путь к текущей папке  
     Path$ = Application.ActiveWorkbook.Path  
  
     ' filename1$ - имя промежуточного файла в текущей папке с разделителем "запятая" в кодировке windows-1251 (промежуточный файл не учитывается)  
     filename1$ = Path$ & "\\Import1-1.csv"  
  
     ' filename$ - имя результирующего файла для записи в кодировке UTF-8 (он будет называться Import1.csv)  
     Filename$ = Path$ & "\\Import1.csv"  
  
     ' Подавляет предупреждения Excel  
     Workbooks.Application.DisplayAlerts = False  
  
     ' Записывает промежуточный файл filename1$ (Import3-1.csv)  
     ActiveWorkbook.SaveAs Filename:=filename1$, \_  
     FileFormat:=xlCSV, CreateBackup:=False, Local:=False, TextCodepage:="utf-8"  
  
     ' Закрыть файл filename1$ без сохранения  
     ActiveWorkbook.Close  
  
     ' Функция сохраняет текст txt в кодировке Charset$(utf-8) в файл filename$ (Import3.csv)  
     Encoding$ = "windows-1251"  
     With CreateObject("ADODB.Stream")  
          .Type = 2:  
          If Len(Encoding$) Then .Charset = Encoding$  
          .Open  
          .LoadFromFile filename1$ ' загружаем данные из промежуточного файла  
          Txt$ = .ReadText ' считываем текст файла  
          .Close  
     End With  
  
     ' utf-8noBOM  
     With CreateObject("ADODB.Stream")  
          .Type = 2: .Charset = "utf-8": .Open  
          .WriteText Txt$  
  
          Set binaryStream = CreateObject("ADODB.Stream")  
          binaryStream.Type = 1: binaryStream.Mode = 3: binaryStream.Open  
          .Position = 3: .CopyTo binaryStream 'Skip BOM bytes  
          .flush: .Close  
          binaryStream.SaveToFile Filename$, 2  
          binaryStream.Close  
     End With  
  
     ' Снова открыть файл  
     Workbooks.Open (Path$ & "\\Import1.xlsx")  
End Sub

---

