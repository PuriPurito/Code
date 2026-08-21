## GetPersonKnowledgePartContext

Метод _GetPersonKnowledgePartContext_ предназначен для получения контекста значения карты знаний для сотрудника.

_Синтаксис (вызов из JS-кода):_  
      **tools.call\_code\_library\_method ("libKnowledge", "GetPersonKnowledgePartContext", <arrParams>)**

_Аргументы:_  
     _<arrParams> (обязательный)_  
      Тип: **Массив**. Массив, элементы которого будут переданы методу в качестве параметров. Порядок следования элементов в массиве должен соответствовать порядку параметров метода. Параметры могут быть перечислены через запятую, а весь массив - заключен в квадратные скобки.   
     Массив включает в себя два параметра:  
     _iKnowledgePartID_ \- ID значения карты знаний (целое число).  
     _iUserID_ \- ID сотрудника (целое число).

_Возвращаемое значение:_  
      Тип: **Объект**. Содержит контекст значения карты знаний для сотрудника, а также ряд дополнительных атрибутов:  
\- _context_ \- контекст значения карты знаний для сотрудника (массив объектов).  
     Атрибуты объекта:  
     _bHasActiveAcquaint_ – есть или нет знание у пользователя/сотрудника (булево).  
     _bHasAcquaint_ – имеется ли подтверждение знания у пользователя/сотрудника (булево).  
     _sAcquaintState_ – статус подтверждения знания (строка).  
     _sKnowledgePath_ – полный путь к карточке знания (т.н. «хлебные крошки») (строка);  
     _sKnowledgeName_ – название значения (строка).  
     _sKnowledgeTypeName_ – тип значения (строка).  
     _sTargetKnowledgeLevelName_ – название требуемого уровеня (строка).  
     _sTargetKnowledgeLevelID_ – ID требуемого уровня (строка).  
     _bHasTargetKnowledge_ – имеется ли знание в профиле (булево).  
     _sCurrentKnowledgeLevelName_ – название текущего уровня (строка).  
     _sCurrentKnowledgeLevelID_ – ID текущего уровня в текстовом формате (строка).  
     _sProcessKnowledgeStatusID_ – ID статуса подтверждения знания в текстовом формате (строка).  
     _sProcessKnowledgeStatusName_ – название статуса подтверждения знания (название) (строка).  
     _iKnowledgeAcquaintID_ – ID объекта подтверждения знаний (целое число).  
     _iKnowledgeAcquaintPercent_ – прогресс в получении уровня в процентах (целое число).  
     _bLevelCompleted_ – подтвержден ли уровень (булево).  
     _sTargetKnowledgeStatusID_ – ID статуса подтверждения знания (строка).  
     _sTargetKnowledgeStatusName_ – название статуса подтверждения знания (строка).  
     _sKnowledgeAcquaintConfirmationType_ – тип подтверждения (строка).

\- _error_ \- код ошибки (при отсутствии ошибок код равен 0) (целое число).  
\- _errorText_ – текст ошибки (строка).

_Пример:_

`_// Вызов метода с помощью функции_ _tools.call_code_library_method_   _oRes = tools.call_code_library_method ("libKnowledge", "GetPersonKnowledgePartContext", [iKnowledgePartID, iUserID]);_` 

`_// Запись результата в основной журнал (лог) системы xhttp-<текущая_дата>.log   LogEvent('', EncodeJson(oRes));_`

---

