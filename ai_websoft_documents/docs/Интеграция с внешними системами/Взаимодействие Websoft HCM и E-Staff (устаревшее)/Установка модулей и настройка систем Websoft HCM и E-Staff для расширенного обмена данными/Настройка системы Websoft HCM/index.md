## Настройка системы Websoft HCM

Настройка функциональности интеграции со стороны системы Websoft HCM производится автоматически.  
В программном коде Websoft HCM становятся доступными объекты, описанные в файле _..\\WebSoftServer\\wtv\\estaff\\module\_wtapi\\api.js_.

Для дополнительной настройки передачи данных о сотрудниках используются параметры, содержащиеся в настраиваемом шаблоне (интерфейс администратора -> блок "**Дизайнер**" -> раздел "**Шаблоны -> Шаблоны документов**") "_Параметры для методов estaff\_soap API_" (код **estaff\_soap\_params**):

*   **send\_dismissed\_persons** \- включает/выключает передачу данных об уволенных сотрудников;
*   **xquery\_conditions** \- дополнительные условия условия для запроса по каталогу collaborators относительно $elem (например, _$elem/login="user"_);
*   **script** \- программный код для кастомного отбора сотрудников, если он задан, то заменяет собой стандартный запрос GetPersons.

  
**Соответствие полей в E-Staff и в HCM**   
(ниже указываются поле в E-Staff и соответствующее ему поле в HCM)

**Для сотрудника - GetPersons:**  
 - id - id ( HEX формат )  
 - code - code  
 - lastname - lastname  
 - firstname - firstname  
 - middlename - middlename  
 - birth\_date - birth\_date  
 - email - email  
 - sys\_login - login  
 - gender\_id - sex ('m' = 0, 'w' = 1)  
 - phone - phone  
 - mobile\_phone - mobile\_phone  
 - email2 - system\_email  
 - address - address  
 - hire\_date - hire\_date  
 - dismissal\_date - dismiss\_date  
 - position\_id - position\_id ( HEX формат )  
 - position\_name - position\_name  
 - is\_division\_head - is\_boss  (из карточки должности)  
 - division\_id - position\_parent\_id ( HEX формат )  
 - employee\_state\_id - current\_state  
 

**Для должности - GetPositions:**  
 - id - id (HEX формат)  
 - code - code  
 - name - name  
 - division\_id - parent\_object\_id ( HEX формат )  
 - is\_division\_head - is\_boss

  
**Для подразделения - GetDivisions (организации и подразделения):**  
 - id - id ( HEX формат )  
 - code - code  
 - name - name  
 - parent\_id - parent\_object\_id или org\_id ( HEX формат )  
 - start\_date - formed\_date  
 - end\_date - disbanded\_date или modification\_date (если is\_disbanded = true)

---

