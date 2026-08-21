## Пример программирования

Создадим функцию создания и изменения сотрудника.

Входные данные:

\- уникальный код во внешней системе

\- имя, фамилия, отчество

\- пол, дата рождения

\- логин, email

\- должность, уникальный код подразделения

Функция должна находить объект сотрудника по коду.

Если объекта нет – создать новый, если уже есть – обновить существующий.

Пишем код функций, включая служебную для поиска сотрудника.

Текст функций помещаем в файл библиотеки dbo\_import\_person.js.

Файл размещаем в директории wtv\\oapi\\libs на сервере WebTutor:

function \_get\_collaborator(code) {

            var docCollaborator, iID = OptInt(code);

            if (iID != undefined)  {

                        docCollaborator = ArrayOptFirstElem(tools.xquery("for $elem in collaborators where $elem/id = " +

                                iID + " return $elem/id,$elem/\_\_data"));

                        if (docCollaborator != undefined)   {

                                    iID = docCollaborator.PrimaryKey.Value;

                                    docCollaborator = OpenDoc(UrlFromDocID(iID));

                        }

                        else

                                    iID = undefined;

            }

           if (iID == undefined)  {

                        docCollaborator = ArrayOptFirstElem(tools.xquery("for $elem in collaborators where $elem/code = " +

                                   XQueryLiteral(code) + " return $elem/id,$elem/\_\_data"));

                        if (docCollaborator != undefined)   {

                                    iID = docCollaborator.PrimaryKey.Value;

                                    docCollaborator = OpenDoc(UrlFromDocID(iID));

                        }

                        else   {

                                    docCollaborator = undefined;

                        }

            }

           return docCollaborator;

}

function Set\_info(code, lastname, firstname, middlename, sex, birth\_date, login, email, position\_name, department\_code)   {

            if (tools\_library.string\_is\_null\_or\_empty(lastname))

                        throw "Empty lastname";

           if (tools\_library.string\_is\_null\_or\_empty(login))

                        throw "Empty login";

           var iResType, docCollaborator = \_get\_collaborator(code);

            if (docCollaborator != undefined)

                        iResType = 0;

            else   {

                        docCollaborator = tools.new\_doc\_by\_name("collaborator");

                        docCollaborator.BindToDb(DefaultDb);

                        docCollaborator.TopElem.code = code;

                        iResType = 1;

            }

            docCollaborator.TopElem.lastname = lastname;

            if (firstname != null && firstname != undefined && Trim(firstname) != "")

                        docCollaborator.TopElem.firstname = firstname;

            if (middlename != null && middlename != undefined && Trim(middlename) != "")

                        docCollaborator.TopElem.middlename = middlename;

            if (sex != null && sex != undefined && Trim(sex) != "")

                        docCollaborator.TopElem.sex = (sex == "w" || sex == "W" ? "w" : "m");

            birth\_date = tools.opt\_date(birth\_date);

            if (birth\_date != undefined)

                        docCollaborator.TopElem.birth\_date = birth\_date;

            docCollaborator.TopElem.login = login;

            if (email != null && email != undefined && Trim(email) != "")

                        docCollaborator.TopElem.email = email;

            var docPosition = undefined;

            if (position\_name != null && position\_name != undefined && Trim(position\_name) != "")   {

                        if (docCollaborator.TopElem.position\_id.HasValue)  {

                                    docPosition = tools.open\_doc(docCollaborator.TopElem.position\_id);

                        }

                       if (docPosition == undefined)   {

                                    docPosition = tools.new\_doc\_by\_name("position");

                                    docPosition.BindToDb(DefaultDb);

                        }

                       docPosition.TopElem.name = UnifySpaces(position\_name);

                        docPosition.TopElem.basic\_collaborator\_id = docCollaborator.DocID;

                        docPosition.TopElem.basic\_collaborator\_id.sd.fullname = docCollaborator.TopElem.fullname;

            }

            var catSubdivisionParam = undefined;

            if (department\_code != null && department\_code != undefined)   {

                        department\_code = Trim(department\_code);

                        if (department\_code != "" && docPosition != undefined)   {

                                    catSubdivisionParam = OptInt(department\_code, undefined);

                                    if (catSubdivisionParam != undefined)   {

                                                catSubdivisionParam = ArrayOptFirstElem(XQuery('for $elem in subdivisions where $elem/id = ' +

                                                           catSubdivisionParam + ' return $elem/Fields(\\'id\\',\\'name\\',\\'org\_id\\')'));

                                    }

                                    if (catSubdivisionParam == undefined)   {

                                                catSubdivisionParam = ArrayOptFirstElem(XQuery('for $elem in subdivisions where $elem/code = ' +

                                                            XQueryLiteral(department\_code) + ' return $elem/Fields(\\'id\\',\\'name\\',\\'org\_id\\')'));

                                    }

                                    if (catSubdivisionParam != undefined)    {

                                                docPosition.TopElem.parent\_object\_id = catSubdivisionParam.PrimaryKey;

                                                docPosition.TopElem.org\_id = catSubdivisionParam.org\_id;

                                                docCollaborator.TopElem.position\_parent\_id = catSubdivisionParam.PrimaryKey;

                                                docCollaborator.TopElem.position\_parent\_name = catSubdivisionParam.name.Value;

                                    }

                                    else

                                                throw "Invalid department\_code";

                        }

            }

            if (docPosition != undefined)  {

                        docCollaborator.TopElem.position\_id = docPosition.DocID;

                        docPosition.Save();

            }

           docCollaborator.Save();

            return (iResType == 1 ? "User created" : "User updated");

} 

Создаем файл настроек профиля (схемы). Описание содержит:

\- путь до функции в адресе (Person)

\- имя функции (Set\_info)

\- описание самой функции, а также всех параметров

\- тип HTTP-метода, который надо применить для вызова функции

\- имя библиотеки (lib) из которой необходимо вызвать код исполнения функции

\- имя модуля (tag), в рамках которого будет определена функция

Сохраняем настройки в файле dbo\_import\_schema.xml в директории wtv\\oapi\\profiles 

<profile>

      <functions>

                  <Set\_info desc="Create/Update user" method="post" path="Person">

                              <param name="code" type="string" required="true" source="body" desc="ID/Code"/>

                              <param name="lastname" type="string" required="true" source="body" desc="Last name"/>

                              <param name="firstname" type="string" source="body" desc="First name"/>

                              <param name="middlename" type="string" source="body" desc="Middle name"/>

                              <param name="sex" type="string" source="body" desc="Sex"/>

                              <param name="birth\_date" type="string" source="body" desc="Birth date"/>

                              <param name="login" type="string" required="true" source="body" desc="Birth date"/>

                              <param name="email" type="string" source="body" desc="E-mail"/>

                              <param name="position\_name" type="string" source="body" desc="Position name"/>

                              <param name="department\_code" type="string" source="body" desc="Department ID/Code"/>

                              <result type="text"/>

                              <lib>x-local://wtv/oapi/libs/dbo\_import\_person.js</lib>

                              <tag name="pers"/>

                  </Set\_info>

      </functions>

</profile> 

Создаем документ профиля безопасности, в котором выбираем нужный модуль (pers) и профиль (dbo\_import\_schema).  
Привязываем профиль к удостоверению безопасности, а удостоверение – к карточке приложения. 

Наше API с нужной функцией готово

---

