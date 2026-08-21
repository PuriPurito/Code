## recommend_library_material_to_person

Назначает сотруднику материал библиотеки для изучения. При этом создается объект просмотра материала library\_material\_viewing. Если материал уже назначен, возвращается id назначенного ранее объекта просмотра материла.

Входные параметры:

iPersonIDParam (int) – ID сотрудника для назначения.

iMaterialIDParam (int) – ID материала библиотеки.

tePersonParam (TopElem) необязательный –TopElem сотрудника.

teMaterialParam (TopElem) необязательный – ID материала библиотеки.

bSendNotification (bool) – true- отправляется стандартное уведомление о назначении материала библиотеки, false – не отправляется.

Возвращаемый результат – Doc объект просмотра материала library\_material\_viewing.

Пример вызова.

**fldResult = tools.recommend\_library\_material\_to\_person( eval( '\_env' + Ps.row\_list\_field + Ps.row\_key\_field ), fldValue.key, null, null, true);**

---

