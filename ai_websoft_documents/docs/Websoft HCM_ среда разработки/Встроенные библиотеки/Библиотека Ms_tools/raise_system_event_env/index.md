## raise_system_event_env

**Описание функции находится в стадии разработки.**

Функция **raise\_system\_event\_env** вызывает системное событие.

Функция определена в файле _..\\WebSoftServer\\wtv\\ms\_tools.xml_. 

Примеры:  
      ms\_tools.raise\_system\_event\_env("common\_finish\_test", { activeLearningDoc: x1, learningDoc: x2, assessmentDoc: x3, assessmentID: x4 })  
      ms\_tools.raise\_system\_event\_env( 'portal\_create\_request', { 'requestTypeID': requestTypeID, 'requestTypeDoc': requestTypeDoc, 'curUserID': curUserID, 'curUser': curUser, 'curDoc': null, 'curDocID': null, 'requestDoc': requestDoc } );  
      ms\_tools.raise\_system\_event\_env( 'portal\_change\_learning\_state', { 'iLearningID': learningDoc.DocID, 'docLearning': learningDoc, 'iLastState': iLastState } );

---

