## common_clear

Функция очищает поля в приемнике данных на основе указанного типа объекта источника данных. Приемником может быть элемент любого уровня в xml-структуре содержащий нужные поля. В зависимости от типа источника очищаются разные поля в приемнике.  
  
Для источника типа _event_ очищаются поля _event\_name, event\_start\_date_.  
Для источника типа _education\_org_ очищается поле _education\_org\_name_.  
Для источника типа _course_ очищаются поля _course\_name, course\_code_.  
Для источника типа _assessment_ очищаются поля _assessment\_name, assessment\_code_.  
Для источника типа _request\_type_ очищаются поля _request\_type\_id, type, workflow\_id, is\_group_.  
Для источника типа _response\_type_ очищаются поля _response\_type\_id, type_.  
Для источника типа _collaborator_ очищаются поля _person\_fullname, collaborator\_fullname, person\_name, person\_position\_name, position\_name, person\_org\_name, person\_instance\_id, person\_current\_state, person\_code_.  
Для источника типа _object_ очищаются поля _object\_type, object\_name, object\_code, object\_start\_date_.

_Синтаксис:_  
      **tools.common\_clear (<type>, <source>\[, <ps>\])**

_Аргументы:_  
     <type> (обязательный)  
     Тип: **Строка**. Строка, содержащая название типа источника объекта.  
     <source> (обязательный)  
     Тип: **Объект XmlElem**. Приемник данных.  
     <ps> (необязательный)  
     Тип: **Объект XmlElem**. Элемент XML, имеющий дочерний элемент _sd_ (если атрибут _ps_ указан, то его дочерний элемент _sd_ очищается).

_Возвращаемое значение:_  
      Тип: **Булево**. Возвращает значение _true_, если операция завершилась успешно, или _false_ - в противном случае.

_Пример:_  
      `_tools.common_clear ( _cur_catalog_name, TopElem, Ps );         tools.common_clear ( 'collaborator', Child(0).Parent, person_id );_`

---

