## <url>

Тег _<url>_ указывает URL для перехода по нажатию кнопки. Данный тег используется внутри тегов _<link>, <button>_ и _<reply>_.

Например, имеется следующий блок информации:

<category>  
    <pattern> START\_MESSAGE </pattern>  
    <template>  
        Привет!<br><br>Я бот поддержки, могу помочь тебе найти какую-либо информацию в Wiki, немного поговорить или подать заявку в поддержку.  
        <button>  
            <text>Искать в Wiki</text>  
            <postback>WEBTUTOR</postback>  
        </button>  
        <button>  
            <text>Стандартная поддержка</text>  
            <url\>/view\_doc.html?mode\=requests\_hd</url>  
        </button>  
        <button>  
            <text>Расширенная поддержка</text>  
            <url\>https://news.websoft.ru/view\_doc.html?mode\=requests\_sd</url>  
        </button>  
    </template>  
</category>

Если пользователь выбирает вторую или третью кнопку, то чат-бот перенаправляет пользователя в браузер на страницу, указанную в теге <url>:

---

