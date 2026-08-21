## SafeEval

Выполняет код в окружении, где доступны только те объекты и переменные, которые описаны (являются свойствами) объекта _param\_object_. Другие переменные и объекты (системные или описанные в коде, внутри которого был вызван _SafeEval_) недоступны.  
См. также функцию eval.

_Синтаксис:_  
      **SafeEval(code\_string, param\_object)**

_Аргументы:_  
      _<code\_string> (обязательный)_  
      Тип: **Строка**. Исполняемый код.  
      _<param\_object> (необязательный)_  
      Тип: **Объект JavaScript**. Объект, содержащий набор свойств, определяющих окружение, в котором будет исполнятся код. Если данный аргумент не указан, то программный код исполняется в пустом окружении. Однако, обычно данный аргумент указывается.

_Возвращаемое значение:_  
      Тип: **Строка**. Результат выполнения кода (может также принимать значение _undefined_).

_Примеры:_  
     `_match2 = SafeEval ( fieldSpec.stat_qual, [record, dest] ); // выполнение кода fieldSpec.stat_qual, доступные параметры окружения: record, dest        se = SafeEval( tePoll.processing_code, [ { "docPollResult": docPollResult, "tePoll": tePoll } ] ); // tePoll.processing_code – код из поля; [ { "docPollResult": docPollResult, "tePoll": tePoll } ] – массив объектов, составляющих окружение, состоит из одного элемента-объекта с двумя свойствами (каждое из которых – тоже объект)  – docPollResult и tePoll        bValid = SafeEval(global_settings.settings.pass_validation_formula.Value, ([({"PASSWORD": passA, "curUser": curUser, "curUserID": curUserID})])); // доступные переменные окружения: PASSWORD – вводимый пароль; curUser – карточка текущего пользователя; curUserID – ID карточки текущего пользователя        sValue = SafeEval ( sValue, [ { 'ms_tools': ms_tools } ] ); // выполнение кода sValue, доступный параметр окружения: ms_tools        _res = SafeEval( FORMULA, ([{ "TOTAL": TOTAL, "SUM": SUM, "COUNT": COUNT, "MIN": MIN, "MAX": MAX, "NA_COUNT": NA_COUNT }])); // выполнение кода FORMULA, доступные параметры окружения: TOTAL, SUM, COUNT, MIN, MAX, NA_COUNT        sRez = SafeEval(" 'http://yandex.ru/search' "); вернет строку 'http://yandex.ru/search'_`

---

