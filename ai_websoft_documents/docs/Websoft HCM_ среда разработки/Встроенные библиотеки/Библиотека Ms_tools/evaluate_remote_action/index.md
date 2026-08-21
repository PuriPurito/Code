## evaluate_remote_action

Выполнение удаленного действия. Метод предназначен, в первую очередь, для запуска действия из XAML-плеера. 

Примечание - Начиная с версий второй половины 2022 г. вместо этой функции рекомендуется использовать функцию ms\_tools.eval\_remote\_action\_step(ID, param).

_Синтаксис:_  
      **evaluate\_remote\_action (<varRemoteAction>, <Request>)**

_Аргументы:_  
     _<varRemoteAction> (обязательный)_  
      Тип: **Строка, Целое число** или др. Код, ID или TopElem объекта удаленного действия (remote\_action).  
     _<Request>_   
      Тип: **Объект**. Параметры удаленного действия.

_Возвращаемое значение:_  
      Тип: **Объект**. Результат выполнения функции.

_Пример:_  
      `_oCreateResourceRes = tools_web.evaluate_remote_action( "create_resource", Request );_`

---

