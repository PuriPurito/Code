## Открытие документа по сокращенной форме

Если избежать открытия документа невозможно (например, данных нет в каталоге), то можно воспользоваться открытием документа по сокращенной форме, с заполнением только части полей. Эта операция будет работать быстрее, чем открытие документа по полной форме.

Например, как это делается для проверки доступа к объекту.  
\_source\_doc = OpenDoc( UrlFromDocID( iSourceDocID ), 'form=x-local://wtv/wtv\_form\_doc\_access.xmd;ignore-top-elem-name=1' ).TopElem;  
Или для процедур оценки, для построения списка доступных процедур.

for (\_assessment\_appraise in \_assessment\_appraises)

{           
teAssessmentAppraiseAbridged = OpenDoc(UrlFromDocID(\_assessment\_appraise.PrimaryKey), "form=x-local://wtv/wtv\_assessment\_appraise\_abridged.xmd").TopElem;  
}

Если нет подходящей стандартной формы, то можно открывать по собственной.

strResultForm = '

<?xml version=&quot;1.0&quot; encoding=&quot;utf-8&quot;?>

<SPXML-FORM>

<assessment\_appraise>

            <code TYPE="string" TITLE="const=c\_code"/>

            <participants>

                        <participant MULTIPLE="1" PRIMARY-KEY="participant\_id">

                                   <participant\_id TYPE="string" FOREIGN-ARRAY="common.assessment\_appraise\_participants"/>

                                   <customize>

                                               <is\_custom\_experts TYPE="bool" DEFAULT="false" NOT-NULL="1"/>

                                   </customize>

                        </participant>

            </participants>

</assessment\_appraise>

</SPXML-FORM>

';

strForm='assessment\_appraise\_form'

if (GetOptCachedForm (strForm) != undefined)

{

            DropFormsCache('\*'+strForm+'\*');

}

RegisterFormFromStr(strForm, strResultForm);

try

{

            teProcDoc= OpenDoc(UrlFromDocID(iID), "form="+strForm).TopElem;

            alert(ArrayCount(teProcDoc.participants))

}

catch(ex)

{

            alert('Error2: '+ex)

}

---

