## Лишние запросы к базе

Лишних запросов к базе лучше по возможности избегать. Особенно при массовых операциях (например, вывода списка объектов). Например, нужно вывести актуальное название и код курса для объекта завершенный курс (learnings). В этом случае неправильное решение — это поиск курса по course\_id и затем вывод названия из поля name и кода из поля code.

arrElems=XQuery('for $elem in learnings return $elem')

for (fldElem in arrElems)

{

            fldCourse= ArrayOptFirstElem(XQuery("for $elem in courses where $elem/id = " + fldElem.course\_id + " return $elem"));

            if (fldCourse!=undefined)

            {

                       alert('course name='+fldCourse.name+' course code='+fldCourse.code)

            }

}

А правильный вариант — это запрос к каталогу courses по выбранным course\_id. Например, так.

xarrLearnings=XQuery('for $elem in learnings return $elem')

xarrCourses=XQuery("for $elem in courses where MatchSome($elem/id,("+ArrayMerge(xarrLearnings,"This.course\_id",", ")+"))return $elem")

for (fldCourse in xarrCourses)

{

            alert('course name='+fldCourse.name+' course code='+fldCourse.code)

}

Однако, нужно помнить, что на не XML базе запрос MatchSome (http://docs.datex.ru/article.htm?id=5620276905286592537), как и любой другой запрос, может обработать только ограниченное количество параметров (примерно 500 параметров в запросе). Поэтому, возможно, массив xarrLearnings из примера нужно будет разделить на часть. В любом случае нужно стремиться к тому, чтобы минимизировать количество запросов к базе.

Менее предпочтительный, но более эффективный вариант, чем использование OpenDoc, это использовать OptForeignElem или ForeignElem для поля course\_id.

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

