## Операция открытия документа (OpenDoc)

  
Операция OpenDoc (http://docs.datex.ru/article.htm?id=5620276892448878691) это одна из самых затратных по ресурсам и долго работающая операций сервера. Чем больше данных в документе, тем дольше он будет открываться. Например, в карточке мероприятия хранятся массивы из всех участников мероприятия. Аналогично в процедуре оценки. Поэтому при написании кода, рекомендуется ее использовать только в том случае если открытия документа избежать нельзя.

Поэтому при написании кода необходимо избегать по возможности открытия документа (операции OpenDoc). Особенно при массовых операциях (например, вывода списка объектов). Например, нужно вывести актуальное название курса для объекта завершенный курс (learnings). В каталоге храниться название курса, которое было актуально на момент назначения курса в поле course\_name. Но оно могло измениться.

В этом случае неправильное решение это открытие карточки курса по  course\_id и затем вывод названия из поля name.

arrElems=XQuery('for $elem in learnings return $elem')

for (fldElem in arrElems)

{

            strName=''

            try

            {

                        strName= OpenDoc( UrlFromDocID(fldElem.course\_id ) ).TopElem.name;

            }

            catch(ex)

            {

                        continue;

            }

            alert('course name='+strName)

}

А правильный вариант — это использовать OptForeignElem или ForeignElem (http://docs.datex.ru/article.htm?id=5620250451197911798) для поля course\_id.

arrElems=XQuery('for $elem in learnings return $elem')

for (fldElem in arrElems)

{

            fldCourse=fldElem.course\_id.OptForeignElem

            if (fldCourse!=undefined)

            {

                        alert('course name='+fldCourse.name)

            }

}

---

