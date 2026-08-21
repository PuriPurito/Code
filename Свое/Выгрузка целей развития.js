1 counter++;

if (Trim('{[1]}')=="" ) { continueFlag=true; }
else {

if (Trim("{[4]}")==""  || Trim("{[3]}")=="") {
 alert("Этап 1 Строка "+counter+": Одно из обязательных полей пусто.");
 continueFlag=true; 
}

elem_Array = ArrayOptFirstElem ( XQuery ( "for $elem in collaborators where $elem/code = '"+ Trim("{[3]}") +"' return $elem" ) )
if ( elem_Array == undefined ) {
 alert("Этап 1 Строка "+counter+": Не найден сотрудник с кодом " + Trim("{[3]}"));
 continueFlag=true; 
}

elem_Array = ArrayOptFirstElem ( XQuery ( "for $elem in assessment_appraises where $elem/code = '"+ Trim("{[4]}") +"' return $elem" ) )
if ( elem_Array == undefined ) {
 alert("Этап 1 Строка "+counter+": Не найдена процедура с кодом " + Trim("{[4]}"));
 continueFlag=true; 
}

elem_Array = ArrayOptFirstElem ( XQuery ( "for $elem in assessment_plans where $elem/code = '"+ Trim('{[5]}') +"' return $elem" ) )
if ( elem_Array != undefined ) {
 continueFlag=true; 
}

}



2 counter++;

if (Trim('{[1]}')=="" ) { continueFlag=true; }
else {

if (Trim("{[4]}")==""  || Trim("{[3]}")=="") {
 alert("Этап 2 Строка "+counter+": Одно из обязательных полей пусто.");
 continueFlag=true; 
}

elem_Array = ArrayOptFirstElem ( XQuery ( "for $elem in collaborators where $elem/code = '"+ Trim("{[3]}") +"' return $elem" ) )
if ( elem_Array == undefined ) {
 alert("Этап 2 Строка "+counter+": Не найден сотрудник с кодом " + Trim("{[3]}"));
 continueFlag=true; 
}

elem_Array = ArrayOptFirstElem ( XQuery ( "for $elem in assessment_appraises where $elem/code = '"+ Trim("{[4]}") +"' return $elem" ) )
if ( elem_Array == undefined ) {
 alert("Этап 2 Строка "+counter+": Не найдена процедура с кодом " + Trim("{[4]}"));
 continueFlag=true; 
}

oBoss = ArrayOptFirstElem(XQuery("for $elem in collaborators where $elem/code = '" + Trim("{[7]}") + "' and $elem/code != '' return $elem"))
if (oBoss != undefined) { 
 curObject.boss_id = oBoss.id;
 alert("Этап 2 Строка "+counter+": Не найден руководитель для сотрудника с кодом" + Trim("{[3]}"));
}

oExpert = ArrayOptFirstElem(XQuery("for $elem in collaborators where $elem/code = '" + Trim("{[9]}") + "' and $elem/code != '' return $elem"))
if (oExpert != undefined) { 
 curObject.custom_experts.ObtainChildByKey(oExpert.id, "person_id");
}
}



3 counter++;

if (Trim('{[1]}')=="" ) { continueFlag=true; }
else {

if (Trim("{[4]}")==""  || Trim("{[3]}")=="") {
 alert("Этап 3 Строка "+counter+": Одно из обязательных полей пусто.");
 continueFlag=true; 
}

elem_Array = ArrayOptFirstElem ( XQuery ( "for $elem in assessment_appraises where $elem/code = '"+ Trim("{[4]}") +"' return $elem" ) )
if ( elem_Array == undefined ) {
 alert("Этап 3 Строка "+counter+": Не найдена процедура с кодом " + Trim("{[4]}"));
 continueFlag=true; 
}

elem_Array = ArrayOptFirstElem ( XQuery ( "for $elem in collaborators where $elem/code = '"+ Trim("{[3]}") +"' return $elem" ) )
if ( elem_Array == undefined ) {
 alert("Этап 3 Строка "+counter+": Не найден сотрудник с кодом " + Trim("{[3]}"));
 continueFlag=true; 
}
else {
  _person_id = elem_Array.id;
  aPerson = ArrayOptFindByKey ( curObject.auditorys, _person_id , 'person_id' );
  if ( aPerson != undefined  ) { continueFlag=true; }
}

}



4 counter++;

if (Trim('{[1]}')=="" ) { continueFlag=true; }
else {

if (Trim("{[4]}")==""  || Trim("{[3]}")=="") {
 alert("Этап 4 Строка "+counter+": Одно из обязательных полей пусто.");
 continueFlag=true; 
}

elem_Array = ArrayOptFirstElem ( XQuery ( "for $elem in collaborators where $elem/code = '"+ Trim("{[3]}") +"' return $elem" ) )
if ( elem_Array == undefined ) {
 alert("Этап 4 Строка "+counter+": Не найден сотрудник с кодом " + Trim("{[3]}"));
 continueFlag=true; 
}

elem_Array = ArrayOptFirstElem ( XQuery ( "for $elem in assessment_appraises where $elem/code = '"+ Trim("{[4]}") +"' return $elem" ) )
if ( elem_Array == undefined ) {
 alert("Этап 4 Строка "+counter+": Не найдена процедура с кодом " + Trim("{[4]}"));
 continueFlag=true; 
}

elem_Array = ArrayOptFirstElem ( XQuery ( "for $elem in pas where $elem/code = '"+ Trim('{[5]}')+"_development" +"' return $elem" ) )
if ( elem_Array != undefined ) {
 continueFlag=true; 
}

}

5 counter++;

if (Trim('{[1]}')=="" ) { continueFlag=true; }
else {

if (Trim("{[4]}")==""  || Trim("{[3]}")=="") {
 alert("Этап 5 Строка "+counter+": Одно из обязательных полей пусто.");
 continueFlag=true; 
}

elem_Array = ArrayOptFirstElem ( XQuery ( "for $elem in collaborators where $elem/code = '"+ Trim("{[3]}") +"' return $elem" ) )
if ( elem_Array == undefined ) {
 alert("Этап 5 Строка "+counter+": Не найден сотрудник с кодом " + Trim("{[3]}"));
 continueFlag=true; 
}

elem_Array = ArrayOptFirstElem ( XQuery ( "for $elem in assessment_appraises where $elem/code = '"+ Trim("{[4]}") +"' return $elem" ) )
if ( elem_Array == undefined ) {
 alert("Этап 5 Строка "+counter+": Не найдена процедура с кодом " + Trim("{[4]}"));
 continueFlag=true; 
}

oBoss = ArrayOptFirstElem(XQuery("for $elem in collaborators where $elem/code = '" + Trim("{[7]}") + "' and $elem/code != ''  return $elem"))
if (oBoss != undefined) { 
  curObject.expert_person_id = oBoss.id;
  alert("Этап 5 Строка "+counter+": Не найден руководитель для сотрудника с кодом" + Trim("{[3]}"));
} 

oExpert = ArrayOptFirstElem(XQuery("for $elem in collaborators where $elem/code = '" + Trim("{[9]}") + "' and $elem/code != ''  return $elem"))
if (oExpert != undefined) { 
 curObject.custom_experts.ObtainChildByKey(oExpert.id, "person_id");
}

}



6 counter++;

if (Trim('{[1]}')=="" ) { continueFlag=true; }
else {

if (Trim("{[3]}")=="" || Trim("{[4]}")=="" || Trim("{[5]}")=="") {
 alert("Этап 6 Строка "+counter+": Одно из обязательных полей пусто.");
 continueFlag=true; 
}

elem_Array = ArrayOptFirstElem ( XQuery ( "for $elem in collaborators where $elem/code = '"+ Trim("{[3]}") +"' return $elem" ) )
if ( elem_Array == undefined ) {
 alert("Этап 6 Строка "+counter+": Не найден сотрудник с кодом " + Trim("{[3]}"));
 continueFlag=true; 
}

elem_Array = ArrayOptFirstElem ( XQuery ( "for $elem in assessment_appraises where $elem/code = '"+ Trim("{[4]}") +"' return $elem" ) )
if ( elem_Array == undefined ) {
 alert("Этап 6 Строка "+counter+": Не найдена процедура с кодом " + Trim("{[4]}"));
 continueFlag=true; 
}

elem_Array = ArrayOptFirstElem ( XQuery ( "for $elem in pas where $elem/code = '"+ Trim('{[5]}')+"_development" +"' return $elem" ) )
if ( elem_Array == undefined ) {
 alert("Этап 6 Строка "+counter+": Не найдена анкета с кодом " + Trim('{[5]}') +"_development");
 continueFlag=true; 
}

elem_Array = ArrayOptFirstElem ( XQuery ( "for $elem in tasks where $elem/code = '"+ Trim('{[1]}') +"' return $elem" ) )
if ( elem_Array != undefined ) {
 continueFlag=true; 
}

}



7 counter++;

if (Trim('{[1]}')=="" ) { continueFlag=true; }
else {

if (Trim("{[3]}")=="" || Trim("{[4]}")=="" || Trim("{[5]}")=="") {
 alert("Этап 7 Строка "+counter+": Одно из обязательных полей пусто.");
 continueFlag=true; 
}

elem_Array = ArrayOptFirstElem ( XQuery ( "for $elem in collaborators where $elem/code = '"+ Trim("{[3]}") +"' return $elem" ) )
if ( elem_Array == undefined ) {
 alert("Этап 7 Строка "+counter+": Не найден сотрудник с кодом " + Trim("{[3]}"));
 continueFlag=true; 
}

elem_Array = ArrayOptFirstElem ( XQuery ( "for $elem in assessment_appraises where $elem/code = '"+ Trim("{[4]}") +"' return $elem" ) )
if ( elem_Array == undefined ) {
 alert("Этап 7 Строка "+counter+": Не найдена процедура с кодом " + Trim("{[4]}"));
 continueFlag=true; 
}

elem_Array = ArrayOptFirstElem ( XQuery ( "for $elem in pas where $elem/code = '"+ Trim('{[5]}')+"_development" +"' return $elem" ) )
if ( elem_Array == undefined ) {
 alert("Этап 7 Строка "+counter+": Не найдена анкета с кодом " + Trim('{[5]}') +"_development");
 continueFlag=true; 
}

if( Trim("{[10]}")!="" ) {
  curObject.custom_fields.ObtainChildByKey("competence_id").value = Trim("{[10]}");
}

if( Trim("{[12]}")!="" ) {
  curObject.custom_fields.ObtainChildByKey("learning_by_work").value = Trim("{[12]}");
}

if( Trim("{[13]}")!="" ) {
  curObject.custom_fields.ObtainChildByKey("learning_by_colleagues").value = Trim("{[13]}");
}

if( Trim("{[14]}")!="" ) {
  curObject.custom_fields.ObtainChildByKey("program_id1").value = Trim("{[14]}");
}

if( Trim("{[15]}")!="" ) {
  curObject.custom_fields.ObtainChildByKey("program_id2").value = Trim("{[15]}");
}

if( Trim("{[16]}")!="" ) {
  curObject.custom_fields.ObtainChildByKey("task_comment").value = Trim("{[16]}");
}
}



8 counter++;

if (Trim('{[1]}')=="") { continueFlag=true; } 
else {

if (Trim("{[5]}")=="") { alert("Этап 8 Строка "+counter+": Одно из обязательных полей пусто.");
 continueFlag=true; 
} 

elem_Array = ArrayOptFirstElem ( XQuery ( "for $elem in pas where $elem/code = '"+ Trim('{[5]}')+"_development" +"' return $elem" ) )
if ( elem_Array == undefined ) {
 alert("Этап 8 Строка "+counter+": Не найдена анкета с кодом " + Trim('{[5]}') +"_development");
 continueFlag=true; 
} else {
  _t = ArrayOptFirstElem ( XQuery ( "for $elem in tasks where $elem/code = '"+ Trim('{[1]}')+"' return $elem" ) );
  if (_t != undefined ) {
    if (ArrayOptFindByKey(curObject.tasks, _t.id, 'task_id') == undefined ) {
      curObject.tasks.ObtainChildByKey(_t.id).position = ArrayCount(curObject.tasks) + 1;
    }
  }
}

}