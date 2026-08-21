## <sentence>

Тег _<sentence>_ приводит первую букву первого слова к верхнему регистру.

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

Если пользователь, например, пишет: «_Введено выражение программа webtutor_», то он получит ответ в третьей строке: «_Программа webtutor_».

---

