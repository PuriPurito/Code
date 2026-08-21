## XMD файлы для объектов

XMD файлы, описывающие структуру типов объектов, хранятся в папке сервера системы по адресу: \\wtv\\wtv\_<тип объекта>.xmd

**Пример XMD файла:**

<?xml version="1.0" encoding="utf-8"?>  
<SPXML-FORM>

<USE FORM="//wtv/ms\_general.xmd"/>

<lector>  
    <id TYPE="integer" TITLE="ID"/>  
    <code TYPE="string" TITLE="const=c\_code"/>  
    <type TYPE="string" NOT-NULL="1" DEFAULT="invitee" FOREIGN-ARRAY="common.lector\_types" TITLE="const=c\_type"/><!-- invitee, collaborator -->  
    <desc TYPE="string" TITLE="const=c\_desc"/>

    <person\_id TYPE="integer" FOREIGN-ARRAY="collaborators" TITLE="const=c\_coll"/>  
    <person\_fullname TYPE="string" TITLE="const=lhbyv18qkm"/>  
    <person\_position\_name TYPE="string" TITLE="const=c\_position"/>  
    <person\_subdivision\_name TYPE="string" TITLE="const=c\_subd"/>

    <INHERIT TYPE="person\_base"/>  
    <INHERIT TYPE="passport\_data\_base"/>

    <allow\_publication TYPE="bool" NOT-NULL="1" DEFAULT="false" TITLE="const=vleb\_can\_public"/>  
    <is\_dismiss TYPE="bool" NOT-NULL="1" DEFAULT="false" TITLE="const=3i9j58qey7"/>

    <doc\_info TYPE="doc\_info\_base" TITLE="const=dseglc23jx"/>

    <INHERIT TYPE="custom\_elems\_base"/>

    <access TITLE="const=bmlkskx7us">  
        <INHERIT TYPE="access\_doc\_base"/>  
    </access>

    <INHERIT TYPE="admin\_access\_base"/>

    <INHERIT TYPE="path\_subs\_base"/>

    <view TEMP="1">  
        <filter TEMP="1">  
            <INHERIT TYPE="au\_ft\_filter" TEMP="1"/>  
        </filter>  
        <INHERIT TYPE="desc\_base"/>  
    </view>

    <lector\_fullname PROPERTY="1" EXPR="  
            return ( type == 'collaborator' ? person\_fullname : fullname );  
    "/>  
</lector>

<OnBeforeSave PROPERTY="1" EXPR="  
        teCollab = null;  
        if( TopElem.person\_id.HasValue )  
            try  
            {  
                teCollab = OpenDoc( UrlFromDocID( TopElem.person\_id ) ).TopElem;  
            }  
            catch( ex ){}  
        tools.common\_filling( 'collaborator', TopElem, TopElem.person\_id, teCollab );

        TopElem.path\_subs.Clear();  
        if ( TopElem.type ==  'collaborator')  
        {  
            //Удаление полей с инфой о внешнем преподавателе  
            TopElem.lastname.Clear();  
            TopElem.firstname.Clear();  
            TopElem.middlename.Clear();  
            TopElem.sex.Clear();  
            TopElem.birth\_date.Clear();  
              
            if( teCollab != null )  
                TopElem.email = teCollab.email;

            //Заполнение массива штатного расписания  
            if ( global\_settings.settings.fill\_path\_subs &amp;&amp; TopElem.person\_id.HasValue )  
                tools.path\_subs\_filling( TopElem.path\_subs, TopElem.person\_id, null );  
        }  
        else  
        {  
            //Удаление полей с инфой о внутреннем преподавателе - сотруднике компании  
            TopElem.person\_id.Clear();  
            TopElem.person\_fullname.Clear();  
            TopElem.person\_position\_name.Clear();  
            TopElem.person\_subdivision\_name.Clear();  
        }  
"/>

<DocDesc PROPERTY="1" EXPR="  
        ms\_tools.get\_const('c\_lector') + ': ' + ( lector.person\_fullname == '' ? lector.fullname : lector.person\_fullname )  
"/>

</SPXML-FORM>

---

