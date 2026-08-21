## eval_remote_action_step

Выполнение этапа удаленного действия. Метод, в частности, рекомендуется для выполнения в интерпретаторе действий в приложениях. 

Примечание - До версий второй половины 2022 г. для выполнения данной задачи использовалась функция tools\_web.evaluate\_remote\_action (varRemoteAction, Request). 

_Синтаксис:_  
      **eval\_remote\_action\_step( 'ms\_tools', 'eval\_remote\_action\_step', \[ <ID>, <param> \] )**

_Аргументы:_  
     _<ID> (обязательный)_  
      Тип: **Целое число**. Идентификатор удаленного действия.  
     _<param>_  
      Тип: **Объект JS**. Параметры удаленного действия.

_Возвращаемое значение:_  
      Тип: **Объект**. Результат выполнения функции.

_Пример:_  
      `_var oStepResult = eval_remote_action_step( 'ms_tools', 'eval_remote_action_step', [ iRemoteActionID, oParams ] );_`

---

