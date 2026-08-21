## Каталоги-связки

С целью минимизации запросов к базе и/или для того чтобы избежать лишних операция OpenDoc нужно использовать каталоги-связки. Например, если необходимо проверить вхождения сотрудника в состав группы, участников мероприятия или преподавателей в мероприятии, нужно использовать каталоги-связки, а не открывать документы.

Каталог group\_collaborators связывает группу и входящих в нее сотрудников.

Каталог event\_collaborators связывает ответственных за проведение и ответственных за подготовку мероприятия, сотрудников и мероприятие.

Каталог event\_lectors связывает преподавателей и мероприятие.

Поэтому, если нужно проверить, что сотрудник с ID=2004214574397263166  входит в группу с кодом WebTutor, то неправильно будет открывать документ и искать в участниках.

iPersonID=2004214574397263166

bFound=false

fldGroup=ArrayOptFirstElem(XQuery("for $elem in groups where $elem/code='WebTutor' return $elem"))

if (fldGroup!=undefined)

{

            teGroup=OpenDoc(UrlFromDocID(fldGroup.id)).TopElem

            bFound=(ArrayOptFind(teGroup.collaborators,"This.collaborator\_id=="+iPersonID)!=undefined)

}

Правильнее будет выполнить запрос XQuery(“for $elem in group\_collaborators where $elem/collaborator\_id=2004214574397263166 and $elem/code='WebTutor' return $elem”).  
  
См. также раздел.

---

