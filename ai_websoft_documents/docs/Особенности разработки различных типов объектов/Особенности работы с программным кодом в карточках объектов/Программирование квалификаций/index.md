## Программирование квалификаций

Система позволяет указать код отбора для автоматического назначения испытаний по квалификации для различных типов квалификаций. Сделать это можно в карточке квалификации на вкладке «**Общие сведения**» (вкладка «**Дополнительно**» в таблице требований к квалификации).

Пример программного кода дополнительного условия квалификации «**Сотрудник первым в своем подразделении успешно прошел N курсов (за указанный период)**»:

try  
{  
      //-------Параметры---------  
             dStartPeriod = DateNewTime(ParseDate("01.01.2014"),00,00,00);  
             dEndPeriod = DateNewTime(Date(),23,59,59);  
             iCntLearnings = 2;  
      //------------------------------

     function determine\_last\_date(arr\_person\_learnings)  
      {  
            arrCollaboratLearnings = ArraySort(ArrayRange(arr\_person\_learnings,0, iCntLearnings), "This.last\_usage\_date","-");  
            dLatestDate = ArrayOptFirstElem(arrCollaboratLearnings).last\_usage\_date;  
  
            return dLatestDate;  
      }

      //alert("leader\_course");  
      arrSubdivisions = new Array();       
      if ( iPersonIDParam != null)  
      {  
            xarrPersonActiveLearnings = XQuery("for $elem in active\_learnings where  $elem/person\_id=" + iPersonIDParam + "  and $elem/max\_end\_date != null() and  $elem/last\_usage\_date != null() and $elem/last\_usage\_date <  $elem/max\_end\_date and $elem/max\_end\_date >= date('" + dStartPeriod + "')  and $elem/max\_end\_date <= date('" + dEndPeriod + "') and ($elem/state\_id = 2 or $elem/state\_id = 4) return $elem");  
            xarrPersonLearnings = XQuery("for $elem in learnings where  $elem/person\_id=" + iPersonIDParam + " and $elem/max\_end\_date != null() and  $elem/last\_usage\_date != null() and $elem/last\_usage\_date <  $elem/max\_end\_date and $elem/max\_end\_date >= date('" + dStartPeriod + "')  and $elem/max\_end\_date <= date('" + dEndPeriod + "') and ($elem/state\_id = 2 or $elem/state\_id = 4) return $elem");    

            arrPersonLearnings = ArraySort(ArrayUnion(xarrPersonActiveLearnings,xarrPersonLearnings), "This.last\_usage\_date","+");

            if (ArrayCount(arrPersonLearnings) >=  iCntLearnings)  
            {  
                  dCurPersonLatestDate =determine\_last\_date(arrPersonLearnings);  
                  bPrLeader = true;  
                  //alert(iPersonIDParam + "  " + dCurPersonLatestDate);

                  tePerson = OpenDoc(UrlFromDocID(iPersonIDParam)).TopElem;  
                  if (tePerson.position\_parent\_id.HasValue)  
                  {  
                        iSubdivId = tePerson.position\_parent\_id;  
  
                        //Определение всех подчиненных подразделений для подразделения текущего сотрудника  
                        xarrSubElems = ArraySelect(XQuery("CatalogHierSubset('subs'," + iSubdivId + ")"), "This.type != 'position'");  
                        arrSubdivisions = ArrayUnion(xarrSubElems, XQuery("for $elem in subs where $elem/id=" + iSubdivId + " return $elem"));  
                        arrSubdivisionIds = ArrayExtract(arrSubdivisions, "id");

                        arrSubdivCollaborators = QueryCatalogByKeys( "collaborators", "position\_parent\_id", arrSubdivisionIds);                         

                        if (ArrayOptFirstElem(arrSubdivCollaborators) != undefined)  
                        {  
                              for (catCollab in arrSubdivCollaborators)  
                              {  
                                    xarrCollabActiveLearnings = XQuery("for $elem in active\_learnings where  $elem/person\_id=" + catCollab.id + " and $elem/max\_end\_date != null() and  $elem/last\_usage\_date != null() and $elem/last\_usage\_date <  $elem/max\_end\_date and $elem/max\_end\_date >= date('" + dStartPeriod + "')  and $elem/max\_end\_date <= date('" + dEndPeriod + "') and ($elem/state\_id = 2 or $elem/state\_id = 4) return $elem");  
                                    xarrCollabLearnings = XQuery("for $elem in learnings where  $elem/person\_id=" + catCollab.id + " and $elem/max\_end\_date != null() and  $elem/last\_usage\_date != null() and $elem/last\_usage\_date <  $elem/max\_end\_date and $elem/max\_end\_date >= date('" + dStartPeriod + "')  and $elem/max\_end\_date <= date('" + dEndPeriod + "') and ($elem/state\_id = 2 or $elem/state\_id = 4) return $elem");    

                                    arrCollabLearnings = ArraySort(ArrayUnion(xarrCollabActiveLearnings,xarrCollabLearnings), "This.last\_usage\_date","+");  
  
                                    dCollabLatestDate = determine\_last\_date(arrPersonLearnings);                                                                                                                                                                

                                   if (dCollabLatestDate < dCurPersonLatestDate)  
                                   {  
                                         bPrLeader = false;  
                                         break;  
                                   }  
                              }  
                        }   
                  }               

                  if (bPrLeader == true)  
                  {  
                        RESULT.Value = 1;  
                  }  
                  else  
                  {  
                       RESULT.Value = 0;  
                  }  
            }  
            else  
            {  
                  RESULT.Value = 0;  
            }            
      }  
}  
catch(err)  
{  
      alert(err);  
}

Дату начала и завершения периода можно изменить в соответствующих параметрах:  
_dStartPeriod_ - начало периода  
_dEndPeriod_ - конец периода

Значения результата выполнения кода:  
_1_ – да;  
_0_ - нет.

Пример кода предварительной выборки сотрудников для квалификации «**Первым в своем подразделении успешно прошел N курсов (за период)**»:

xarrActiveLearnings = XQuery("for $elem in active\_learnings where  $elem/max\_end\_date != null() and  $elem/last\_usage\_date != null() and ($elem/state\_id = 2 or $elem/state\_id = 4) return $elem");  
xarrLearnings = XQuery("for $elem in learnings where $elem/max\_end\_date != null() and  $elem/last\_usage\_date != null() and ($elem/state\_id = 2 or $elem/state\_id = 4) return $elem");  
arrAllLearnings = ArrayUnion(xarrActiveLearnings, xarrLearnings);  
RESULT.arrPersonIDs = ArraySelectDistinct(ArrayExtract(arrAllLearnings, "This.person\_id"));

Подробнее особенности формирования кода квалификации будут описаны позднее.

---

