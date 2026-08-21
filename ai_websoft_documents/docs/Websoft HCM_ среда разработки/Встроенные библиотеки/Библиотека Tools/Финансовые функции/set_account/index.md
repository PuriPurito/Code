## set_account

Создает документ об оплате (invoice).

Входные параметры:

\_org\_id (int) - ID организации.

\_amount (real) – сумма списания.

Возвращаемый результат – id оплаты (int).

Пример вызова

**\_invoce\_id = tools.set\_account( Int( Request.Form.org\_id ), Real( Request.Form.sum ) );**

---

