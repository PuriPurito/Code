## set_project_participant_type

Устанавливает тип руководителя для участника проекта.

Входные параметры:  
iProjectParticipantIDParam (int) необязательный, если передан docProjectParticipantParam – ID объекта участник проекта.  
docProjectParticipantParam (Doc) - Doc объекта участник проекта.  
iBossTypeIDParam (int) - ID типа руководителя для присвоения участнику проекта.

Возвращаемый результат –  флаг (bool) true – функция выполнена успешно, false в противном случае.

Пример вызова.  
**tools.set\_project\_participant\_type( iSelectedID, null, iElementID)**

---

