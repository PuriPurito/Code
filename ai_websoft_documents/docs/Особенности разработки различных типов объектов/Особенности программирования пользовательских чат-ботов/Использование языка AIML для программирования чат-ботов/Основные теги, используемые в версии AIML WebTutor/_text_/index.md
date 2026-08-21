## <text>

Тег _<text>_ представляет собой текст, указанный на кнопке в окне чат-бота. Данный тег используется внутри тегов _<link>, <button>_ и _<reply>_.

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
            <url>/view\_doc.html?mode=requests\_hd</url>  
        </button>  
        <button>  
            <text>Расширенная поддержка</text>  
            <url>/view\_doc.html?mode=requests\_sd</url>  
        </button>  
    </template>  
</category>

В окне чат-бота отображаются три кнопки (на первой кнопке имеется надпись (тег _«text»_) «_Искать в Wiki_», на второй кнопке – «_Стандартная поддержка_», на третьей кнопке – «_Расширенная поддержка_»).

---

