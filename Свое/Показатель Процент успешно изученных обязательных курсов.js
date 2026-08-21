strRequest = "for $elem in learnings where $elem/person_id = " + OBJECT_ID;
if (DATE_BEGIN != null && DATE_END != null)
{
    strRequest += " and $elem/last_usage_date >= date('" + DATE_BEGIN + "') and $elem/last_usage_date <= date('" + DATE_END + "') ";
}
else if (DATE_BEGIN != null)
{
    strRequest += " and $elem/last_usage_date >= date('" + DATE_BEGIN + "') ";
}
else if (DATE_END != null)
{
    strRequest += " and $elem/last_usage_date <= date('" + DATE_END + "') ";
}
strRequest += " return $elem/Fields('id')";
xarrAllActvLrng = ArraySelectAll(XQuery(strRequest));
xarrLrng = [];
xarrSuccessFinish = [];
for (_lrng in xarrAllActvLrng)
{
    idLrng = OptInt(_lrng.id, '');
    teLrng = tools.open_doc(idLrng).TopElem;
    if (teLrng == undefined)
        continue;
   if (!tools_web.is_true(teLrng.is_self_enrolled))
   {
        xarrLrng.push(idLrng);
        if (teLrng.state_id == 2 || teLrng.state_id == 4)
        {
            xarrSuccessFinish.push(idLrng);
        }
   }
}
iActvLrng = Real(ArrayCount(xarrSuccessFinish));
iAllActvLrng = Real(ArrayCount(xarrLrng));
VALUE = (iActvLrng != 0 && iAllActvLrng != 0) ? Real(Math.round((iActvLrng / iAllActvLrng) * 1000)) / 10 : 0;
VALUE_STR = (VALUE == 0) ? '---' : StrReal(VALUE, 1) + " %";