## pay_new_transaction_by_object

Создает транзакцию по списанию указной суммы в указанной валюте с указанного счета. Используется в модуле геймификация. Совершает оплату по выбранному объекту.

Входные параметры:

iAccountObjectIDParam (int) - ID объекта, к которому прикреплен счет, с которого будет происходить списание.

sAccountCurrencyParam (string) необязательный - строка валюты счета, содержащая id валюты из списка валют в системе.

rSumParam (real) – сумма.

sCommentParam (string) необязательный – комментарий к транзакции.

iObjectIDParam (int) необязательный-  ID объекта по которому происходит транзакция.

Возвращаемый результат – документ созданной новой транзакции  (Doc).

Пример вызова

**tools.pay\_new\_transaction\_by\_object( personID, fldBonusElem.currency\_type\_id, fldBonusElem.sum, 'Bonus by qualification &quot;' + teQualification.name + '&quot;.', qualificationID );**

---

