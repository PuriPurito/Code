## workflow_action_process

Вызов действия документооборота.

Входные параметры:

\_source (Doc)  – документ (Doc) объекта, относительно которого вызывается действие.

\_action\_code (sting) – код действия документооборота.

\_workflow\_id (int) – ID документооборота, действие которого выполняется.

\_workflow\_doc (TopElem) необязательный –TopElem документооборота.

\_alterCurObjectID (int) необязательный. Если действие документооборота, это печать печатной формы, то можно передать в этот параметр ID объекта, который будет передаваться в печатную форму как object\_id.

Возвращаемый результат – структура со следующими полями

'result' – флаг да/нет (bool) успешное или неуспешное выполнение действия. 'workflow\_success\_action' – строка с XAML кодом, выполняющимся при успешном выполнении действия (обрабатывается в карточке заявки на портале)

 'workflow\_action\_message' - строка текстом сообщения при успешном выполнении действия, (обрабатывается в карточке заявки на портале)  

'workflow\_create\_break': флаг да/нет (bool). Прерывать или нет выполнения действия (обрабатывается в карточке заявки на портале).

Пример вызова.

**tools.workflow\_action\_process(docAssessmentPlan, curObject.fire\_wf\_action, curObject.workflow\_id, curWorkflow);**

**oWorkflowActionResult = tools.workflow\_action\_process( curObjectDoc, CONTEXT.action\_id, curObject.workflow\_id, curWorkflow );**

---

