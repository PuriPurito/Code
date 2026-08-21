## <button>

Тег _<button>_ конвертирует содержимое в кнопку.

Например, следующий код формирует три кнопки с надписями **Искать в Wiki**, **Стандартная поддержка** и **Расширенная поддержка**:

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
            <url>/view\_doc.html?mode=requests\_hd</url>  
        </button>  
        <button>  
            <text>Расширенная поддержка</text>  
            <url>/view\_doc.html?mode=requests\_sd</url>  
        </button>  
    </template>  
</category>

Внутри этого тега могут быть вложены теги _<text>__,_ _<postback>__,_ _<url>_.

---

