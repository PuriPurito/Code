## <formal>

Тег _<formal>_ приводит первые буквы слов к верхнему регистру.

Например, имеется следующий блок информации:

<category>  
     <pattern>Введено выражение \*</pattern>  
     <template>  
          В верхнем регистре – <uppercase><star /></uppercase> <br>  
          В нижнем регистре – <lowercase><star /></lowercase> <br>  
          С заглавной буквы – <sentence><star /></sentence> <br>  
          Каждое слово с заглавной буквы – <formal><star /></formal> <br>  
     </template>  
</category>

Если пользователь, например, пишет: «_Введено выражение программа webtutor_», то он получит ответ в четвертой строке: «_Программа Webtutor_».

---

