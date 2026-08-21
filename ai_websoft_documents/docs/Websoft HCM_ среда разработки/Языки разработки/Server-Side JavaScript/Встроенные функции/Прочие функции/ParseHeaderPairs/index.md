## ParseHeaderPairs

**ParseHeaderPairs** – парсинг заголовков HTTP-запроса.

_Синтаксис:_  
      **ParseHeaderPairs (<arg1>)** 

_Аргументы:_  
      _<arg1> (обязательный)_  
      Тип: **Строка**. Исходная строка (обычно типа **Request.Header**, формируемая из текстового протокола заголовков HTTP-запроса), представляющая собой набор данных в формате «параметр - значение».  
  
Например, имеется следующий протокол заголовков HTTP-запроса:  
_Connection: keep-alive_  
_Pragma: no-cache_  
_Cache-Control: no-cache_  
_User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36_  
_Accept: image/avif,image/webp,image/apng,image/svg+xml,image/\*,\*/\*;q=0.8_  
_Referer: http://arm-admin.websoft.ru/spxml\_web/main.htm_  
_Accept-Encoding: gzip, deflate_  
_Accept-Language: ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7_  
_Cookie: \_ym\_uid=1591688992969643662; \_ym\_d=1624415671; \_ga\_M9F0MDZ1CD=GS1.1.1626796484.3.0.1626796484.0; \_ga\_7NT1K64F1M=GS1.1.1629897925.3.1.1629898189.0_  
  
Данный заголовок внутри платформы преобразуется в объект **Request.Header**:  
_{"Connection": "keep-alive", "Pragma": "no-cache", …… }_

_Возвращаемое значение:_  
      Тип: **Объект**. Результат выполнения функции. Объект включает в себя элементы в формате «параметр - значение».

_Пример 1 (для HTTP-запроса, приведенного выше):_  
      `_ParseHeaderPairs( Request.Header.GetOptProperty( 'Cookie' ) ) // возвращает объект: {"_ym_uid":"1591688992969643662", "_ym_d":"1624415671", "_ga_M9F0MDZ1CD": "GS1.1.1626796484.3.0.1626796484.0", …….. }_`

_Пример 2 (без обращения к реальному запросу):_  
      `__header_value = "a=1; b=2; c=3";         _obj = ParseHeaderPairs(_header_value);         alert(_obj.a) // возвращает 1_`

---

