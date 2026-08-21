selected_position = ArrayOptFirstElem(XQuery ("for $elem in positions where id = 0x57D17C203665626D return $elem"));
collaborator_id = OptInt(selected_position.basic_collaborator_id);

flag = tools.create_notification("kd_060723", collaborator_id);

if (flag = false) {
   alert(Ошибка!!!);
}