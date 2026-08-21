## safe_execution

Функция **safe\_execution** предназначена для проведения проверки безопасности программного кода и выполнения потенциально безопасного кода.   
  
В частности, потенциально опасными считаются следующие встроенные функции:  
\- _встроенные функции для работы с файлами и с URL_ (file function): **CreateDirectory, CreateShellLink, DeleteDirectory, DeleteFile, GetShellFolderPath, MoveFile, ObtainDirectory, ObtainSessionTempFile, ObtainTempFile, PutFileData, PutFileText, AddUrlMapping, CopyUrl, DeleteUrl, PutUrlData, PutUrlText**;  
\- _специализированные встроенные функции выполнения программного кода_ (execution function): **EvalCodeUrl, EvalCodePage, EvalCodePageUrl, EvalCs, InPlaceEval, OptEval, ServerEval, EvalAsync, EvalSync, EvalCode**;   
\- _встроенные функции работы с реестром Windows и др._ (function): **RemoveEmptySysRegKey, RemoveSysRegKey, SetSysRegIntegerValue, SetSysRegStrValue, SysRegKeyExists, ProcessExecute, ShellExecute, DllWrapper, ActiveXObject**.

_Синтаксис:_  
      **tools.safe\_execution(<sCodeSaveExecutionParam>\[, <oEnvParam>\])**

_Аргументы:_  
      _<sCodeSaveExecutionParam> (обязательный)_  
      Тип: строка. Анализируемый программный код. Если значение данного аргумента равно пустой строке, то проверка не выполняется и выдается показатель завершения выполнения функции (_true_).  
      _<oEnvParam> (необязательный)_  
      Тип: объект. Объект, для которого выполняется анализируемый программный код. Если объект не указан, то функция выполняется для всех возможных объектов системы.

_Возвращаемое значение:_  
      Результат выполнения безопасного кода или показатель завершения функции _true_ (булево) 

_Пример:_  
     `_tools.safe_execution( curAction.condition_eval_str );        tools.safe_execution( _operation.eval_str );_`

---

