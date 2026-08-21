## crypto_obj_init

Функция **tools.****crypto\_obj\_init** предназначена для активации компонента шифрования и создания нового объекта шифрования. Если компонент шифрования был ранее активирован, функция формирует новый объект шифрования без повторной активации.

_Синтаксис:_  
      **tools.crypto\_obj\_init()**

_Аргументы:_  
Функция вызывается без аргументов.

_Возвращаемое значение:_  
      Тип: **Объект**. Объект шифрования. Результат действия функции.

**Список методов объекта Crypto:**

     <member name="M:Websoft.Utils.Crypto.GetError">  
            <summary>  
            Используется для получения последней произошедшей ошибки.  
            </summary>  
            <returns>Текст последней произошедшей ошибки.</returns>  
        </member>  
        <member name="M:Websoft.Utils.Crypto.HMAC\_SHA256(System.String,System.String)">  
            <summary>  
            Вычисляет хэш-проверки подлинности сообщения код (HMAC) с помощью SHA256 хеш-функции.  
            </summary>  
            <param name="message">Текст.</param>  
            <param name="secret">Ключ.</param>  
            <returns>Возвращает вычисленное значение в формате Base64.</returns>  
        </member>  
        <member name="M:Websoft.Utils.Crypto.HMAC\_SHA1(System.String,System.String)">  
            <summary>  
            Вычисляет хеш основанный код проверки подлинности сообщения (HMAC) с помощью SHA1 хеш-функции.  
            </summary>  
            <param name="message">Текст.</param>  
            <param name="secret">Ключ.</param>  
            <returns>Возвращает вычисленное значение в формате Base64.</returns>  
        </member>

_Пример:_  
     `_oCrypto = tools.crypto_obj_init();        sUnsignedToken = encode(Base64Encode(tools.object_to_text(oHeader,"json")) + "." + Base64Encode(tools.object_to_text(oPayload,"json")));        sSignature = encode(oCrypto.HMAC_SHA256(sUnsignedToken, sSecretKey));        sResult = sUnsignedToken + "." + sSignature;_`

---

