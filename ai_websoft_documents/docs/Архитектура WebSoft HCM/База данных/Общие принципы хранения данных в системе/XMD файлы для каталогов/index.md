## XMD файлы для каталогов

XMD файлы, описывающие структуру каталогов для объектов, хранятся в папке сервера системы по адресу: \\wtv\\wtv\_<тип объекта>s.xmd

Важное значение имеет признак INDEXED = "1" - наличие этого признака означает наличие индекса для этого атрибута и возможность быстрой сортировки и поиска по этому полю.

**Пример XMD файла:**

<?xml version="1.0" encoding="utf-8"?>  
<SPXML-FORM CATALOG="1" OBJECT-NAME="lector">

<USE FORM="//wtv/wtv\_general.xmd"/>

<lectors>  
    <lector MULTIPLE="1" PRIMARY-KEY="id">  
        <id TYPE="integer"/>  
        <code TYPE="string" TITLE="const=c\_code"/>  
        <type TYPE="string" NOT-NULL="1" DEFAULT="invitee" FOREIGN-ARRAY="common.lector\_types" TITLE="const=4a5fodcns2"/><!-- invitee, collaborator -->  
        <lector\_fullname TYPE="string" INDEXED="1" TITLE="const=bgjgk81nh4"/>  
        <person\_id TYPE="integer" FOREIGN-ARRAY="collaborators" INDEXED="1" TITLE="const=e3xxyvf1ed"/>  
        <person\_fullname TYPE="string" INDEXED="1" TITLE="const=bgjgk81nh4"/>  
        <person\_position\_name TYPE="string" INDEXED="1" TITLE="const=c\_position"/>  
        <person\_subdivision\_name TYPE="string" INDEXED="1" TITLE="const=c\_subd"/>  
        <email TYPE="string" TITLE="E-mail"/>  
        <is\_dismiss TYPE="bool" NOT-NULL="1" DEFAULT="false" TITLE="const=3i9j58qey7"/>  
          
        <INHERIT TYPE="admin\_access\_base"/>  
          
        <modification\_date TYPE="date" TITLE="const=n6k2nxsxx4"/>  
        <app\_instance\_id TYPE="string" TITLE="const=8qorpy64yd"/>

        <OnBuild PROPERTY="1" EXPR="  
                id.Parent.AssignElem( SrcDoc.TopElem );  
                lector\_fullname = ( type == 'collaborator' ? person\_fullname : SrcDoc.TopElem.fullname );  
                if( type != 'collaborator' )  
                {  
                    person\_id.Clear();  
                    person\_fullname.Clear();  
                    person\_position\_name.Clear();  
                    person\_subdivision\_name.Clear();  
                }  
                modification\_date = SrcDoc.TopElem.doc\_info.modification.date;  
                app\_instance\_id = SrcDoc.TopElem.doc\_info.creation.app\_instance\_id;  
        "/>  
    </lector>  
</lectors>

</SPXML-FORM>

---

