## Передача команд в ToDo при помощи исполнения кода на сервере

C версии 2023.2.1012 в системе появилась возможность при выполнении любого кода на сервере передать команду в клиентский интерфейс Workspace. Например, в коде исполняемого агента или в процессе исполнения кода удаленного действия, или в процессе выполнение кода действия при нажатии кнопки документооборота.

Пример отправки действий в todo (серверный код):

`var oMessage = {"action" : "todo_soket_action", "data": {action: "reload_tasks"} };   CallServerMethod( "tools", "call_code_library_method", [ "libChat", "send_message_to_socket", [ [1105387902724063510], oMessage ] ] );`  
  
Где:

*   todo\_soket\_action – константа для всех действий, относящихся к todo;
*   reload\_tasks – действие в контексте todo, перезагружающее задачи на доске (также на данный момент поддерживается hide\_right\_panel для закрытия правой панели);
*   1105387902724063510 – id сотрудника, в сокеты которого будет отправлено сообщение.

Для вызова сообщения об ошибке:

`var oMessage = {"action" : "todo_soket_action", "data": {action: "show_error", message: "Текст ошибки сюда"} };   CallServerMethod( "tools", "call_code_library_method", [ "libChat", "send_message_to_socket", [ [1105387902724063510], oMessage ] ] );`

Для вызова сообщения об успешном событии:

`var oMessage = {"action" : "todo_soket_action", "data": {action: "show_success", message: "Текст успешного события "} };   CallServerMethod( "tools", "call_code_library_method", [ "libChat", "send_message_to_socket", [ [1105387902724063510], oMessage ] ] );`

---

