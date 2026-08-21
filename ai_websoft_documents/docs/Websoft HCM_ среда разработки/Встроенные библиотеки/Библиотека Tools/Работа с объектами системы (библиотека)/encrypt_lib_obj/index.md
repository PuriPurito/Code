## encrypt_lib_obj

Свойство. Возвращает объект библиотеки, инициализированный функцией **tools.init\_encrypt\_lib**. Результат соответствует значению **tools.encrypt\_lib.Object**.

_Синтаксис:_  
      **tools.encrypt\_lib\_obj**

_Возвращаемое значение:_  
      Тип: **Объект**. Объект библиотеки.

_Пример:_  
      `_ok=tools.encrypt_lib_obj.Encrypt_Init();         ok=tools.encrypt_lib_obj.Encrypt_CheckContent ( sEnryptedFilePath,teLicense.decryption_key, 0 );         tools.encrypt_lib_obj.Encrypt_GetLastErrorMessage ( OutBuf, 2048 );         ok = tools.encrypt_lib_obj.Encrypt_Finish();_`

---

