## get_notification_system

Возвращает TopElem системы отправки уведомлений.

Входные параметры:  
oParam (variant) – ID объекта системы отправки уведомлений, или его TopElem. Если передан ID или TopElem объекта отличного от notification\_system, то в объекте будет произведен поиск ID системы отправки уведомлений в поле notification\_system\_id, и возращен TopElem объекта, определяемый ID из этого поля.

Возвращаемый результат  - TopElem системы отправки уведомлений.

Пример вызова.  
**teNotificationSystem = tools.get\_notification\_system( oParam );**

---

