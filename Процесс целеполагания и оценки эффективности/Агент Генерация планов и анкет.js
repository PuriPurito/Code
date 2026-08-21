Log_name = 'evola_log_generate_pa';
EnableLog(Log_name,true);
LogEvent(Log_name,">>> Запуск агента по генерации планов и анкет ... ");

var assessment_appraise_id = 0; // id
var new_person_array = []; // массив сотрудников, для которых необходимо сгенерировать планы и анкеты
var ca_main_goals_boss_type = 7257124022869374130;
var ca_main_boss_type = 7257124022869374130;
var main_boss_type = 7257124022869374130;
var ca_mng_approve_boss_type = 7257123469329675299;
var competence_profile_id = 7255594739598708909;
var group_exclusion = 7267976327875570527;


if( !IsEmptyValue(OptInt(Param.sAssessmentAppraise,null)) ) assessment_appraise_id=OptInt(Param.sAssessmentAppraise);
//if( !IsEmptyValue(Param.new_person_id) ) new_person_array=tools.read_object(Param.new_person_id);
//if( !IsArray(new_person_array)) new_person_array = [({__value: Param.new_person_id})];
//if( !IsEmptyValue(OptInt(Param.ca_main_goals_boss_type,null)) ) ca_main_goals_boss_type=OptInt(Param.ca_main_goals_boss_type,0);
//if( !IsEmptyValue(OptInt(Param.ca_main_boss_type,null)) ) ca_main_boss_type=OptInt(Param.ca_main_boss_type,0);
//if( !IsEmptyValue(OptInt(Param.main_boss_type,null)) ) main_boss_type=OptInt(Param.main_boss_type,0);
//if( !IsEmptyValue(OptInt(Param.ca_mng_approve_boss_type,null)) ) ca_mng_approve_boss_type=OptInt(Param.ca_mng_approve_boss_type,0);
//if( !IsEmptyValue(OptInt(Param.competence_profile_id,null)) ) competence_profile_id=OptInt(Param.competence_profile_id,0);
if( !IsEmptyValue(OptInt(Param.sExceptionGroup,null)) ) group_exclusion=OptInt(Param.sExceptionGroup,0);

try {
    ass_arr = ArrayOptFirstElem(XQuery ( "for $elem in assessment_appraises where $elem/id = " +assessment_appraise_id+ " return $elem" )) ;
    if (ass_arr == undefined ) { 
        throw "required param not defined"
    } else {
        assTE = tools.open_doc(assessment_appraise_id).TopElem;
    }
}
catch (err) {
    LogEvent(Log_name,"Не найдена оценочная процедура с id="+assessment_appraise_id+"\n"+err);
}

function getBossForAssessment (person_id)
{
    var boss;

    all_bosses = ArraySelectAll(tools.xquery(tools.create_xquery("func_manager","$elem/catalog = 'collaborator' and $elem/object_id = "+person_id,null)));

    ca_main_goal_bosses = ArraySelect(all_bosses,"This.boss_type_id == "+ca_main_goals_boss_type);
    ca_main_bosses = ArraySelect(all_bosses,"This.boss_type_id == "+ca_main_boss_type);
    main_bosses = ArraySelect(all_bosses,"This.boss_type_id == "+main_boss_type);
    if (ArrayOptFirstElem(ca_main_goal_bosses) != undefined) 
    {
        boss = ArrayOptFirstElem(ca_main_goal_bosses);
        //LogEvent(Log_name,"Нашли руководителя с типом Функциональный руководитель в процессе целеполагания");
    }
    else if (ArrayOptFirstElem(ca_main_bosses) != undefined) 
    {
        boss = ArrayOptFirstElem(ca_main_bosses);
        //LogEvent(Log_name,"Нашли руководителя с типом Функциональный руководитель WebSoft HCM");
    }
    else if (ArrayOptFirstElem(main_bosses) != undefined) 
    {
        boss = ArrayOptFirstElem(main_bosses);
        //LogEvent(Log_name,"Нашли руководителя с типом Непосредственный руководитель");
    }

    return boss;
}

// функция добавления сотрудника в список участников процедуры
function add_user_to_ass_appr (p_id, assTE) {

    var res = false;

    var person_is_in_aa = ArrayOptFind(assTE.auditorys, "OptInt(This.person_id,0) == "+p_id);

    if (person_is_in_aa != undefined)
    {
        res = false;
    }    
    else if (p_id  != undefined) {    
        try{
            tools.add_person_to_assessment_appraise(p_id, assTE.id);
            res = true;
        } 
        catch(er) {
            LogEvent(Log_name,"Не удалось добавить сотрудника с id="+p_id+" в оценочную процедуру \n"+er);
            res = false;
        }
    }
    return res;
}

// запись в лог плана
function createLogEntry (workflow_log_entrys, action_name, begin_state, finish_state)
{
    log_entry = workflow_log_entrys.AddChild();
    log_entry.action_id = action_name;
    log_entry.create_date = Date();
    log_entry.begin_state = begin_state;
    log_entry.finish_state = finish_state;
    log_entry.person_fullname = 'Системный агент';
}

// функция создания плана оценки
function create_ass_plan (p_id, assTE , ap_code) {

    var res = false;
    
    if (p_id  != undefined) {

        try{

            ap_arr = XQuery ( "for $elem in assessment_plans where $elem/assessment_appraise_id = " +assTE.id+ " and $elem/person_id = " +p_id+ " return $elem" ) ;
            ap = ArrayOptFirstElem(ap_arr) ;
            
            if (ap != undefined) {

                LogEvent(Log_name,"План оценки для сотрудника с id="+p_id+"  для оценочной процедуры был добавлен ранее");
                old_doc=tools.open_doc(ap.id).TopElem;
                res = old_doc;

            } else {

                new_doc = OpenNewDoc('x-local://wtv/wtv_assessment_plan.xmd');
                new_doc.BindToDb(DefaultDb);
                
                new_doc.TopElem.assessment_appraise_id = assTE.id;
                new_doc.TopElem.person_id = p_id;
                new_doc.TopElem.code = ap_code;

                new_doc.TopElem.workflow_id = assTE.workflow_id;

                boss = getBossForAssessment (p_id)
                if ( boss != undefined ) { 
                    new_doc.TopElem.boss_id = boss.person_id; 
                } else {
                    LogEvent(Log_name,"Для сотрудника с id="+p_id+" не найден оценивающий руководитель");
                }

                createLogEntry (new_doc.TopElem.workflow_log_entrys, "generate_pa", '0_start', '0_start');

                new_doc.Save();

                res = new_doc.TopElem;
            }
        } 
        catch(er) {
            LogEvent(Log_name,"Не удалось создать план оценки для сотрудника с id="+p_id+" для оценочной процедуры \n"+er);
            res = false;
        }
    }
    return res;
}

// функция создания анкеты по целям целям деятельности
function create_pa_goals (p_id, a_id, apTE, assTE) {

    var res = false;

    if (p_id  != undefined) {

        try{
                        
            if (apTE.id != undefined && apTE.id != false) 
                dop = "and $elem/assessment_plan_id = " + apTE.id
            else
                dop = ""
            
            pa = ArrayOptFirstElem(XQuery ( "for $elem in pas where $elem/assessment_appraise_id = " +a_id+ " and $elem/person_id = " +p_id+ " and $elem/assessment_appraise_type = 'staffrating' "+ dop +" return $elem" )) ;
            if (pa != undefined ) {

                LogEvent(Log_name,"Анкета по целям деятельности для сотрудника с id="+p_id+" для оценочной процедуры была создана ранее");
                res = false;

            } else {

                new_doc = OpenNewDoc('x-local://wtv/wtv_pa.xmd');
                new_doc.BindToDb(DefaultDb);
                new_doc.TopElem.assessment_appraise_id = a_id;
                new_doc.TopElem.person_id = p_id;
                new_doc.TopElem.assessment_appraise_type = 'staffrating';				

                new_doc.TopElem.workflow_id = assTE.workflow_id;
                new_doc.TopElem.status = 'manager';

                if(apTE.boss_id != undefined)
                {
                    new_doc.TopElem.expert_person_id = apTE.boss_id; 
                }
                tools.assign_elems( new_doc.TopElem, apTE, ['custom_experts'] );
                
                new_doc.TopElem.assessment_plan_id = apTE.id;
                new_doc.TopElem.code = apTE.code + '_goals';
                new_doc.TopElem.index = 10;

                new_doc.Save();

                res = true;
            }
            
        } 
        catch(er) {
            LogEvent(Log_name,"Не удалось создать анкету по целям для сотрудника с id="+p_id+" \n"+er);
            res = false;
        }
    }
    return res;
}

// функция получения массива с компетенциями сотрудника из типовой должности сотрудника
function get_competence_array (competence_profile_id) {

    res = [];

    prof_doc = tools.open_doc(competence_profile_id);
    if (prof_doc!=undefined)
    {
        _comps_arr = ArraySelectAll(XQuery("for $obj in competences where MatchSome($obj/id,("+ArrayMerge(prof_doc.TopElem.competences,"This.competence_id",",")+")) order by $obj/code return $obj"));
        res=_comps_arr;
    } 
    return res;
}

// функция создания анкеты по компетенциям
function create_pa_competence (p_id, a_id, st, apTE, assTE) {

    var res = false;
    
    if (p_id  != undefined && st !=undefined) {

        try{
            
            if (apTE.id != undefined && apTE.id != false) 
                dop = " and $elem/assessment_plan_id = " + apTE.id
            else
                dop = ""
            
            pa = ArrayOptFirstElem(XQuery ( "for $elem in pas where $elem/assessment_appraise_id = " +a_id+ " and $elem/person_id = " +p_id+ " and $elem/assessment_appraise_type = 'competence_appraisal' and $elem/status = '" + st + "' "+ dop +" return $elem" )) ;
            if (pa != undefined ) {

                LogEvent(Log_name,"Анкета по компетенциям для сотрудника с id="+p_id+" со статусом '"+st+"' для оценочной процедуры была создана ранее");
                res = false;

            } else {

                new_doc = OpenNewDoc('x-local://wtv/wtv_pa.xmd');
                new_doc.BindToDb(DefaultDb);
                new_doc.TopElem.assessment_appraise_id = a_id;
                new_doc.TopElem.person_id = p_id;
                new_doc.TopElem.assessment_appraise_type = 'competence_appraisal';				

                new_doc.TopElem.workflow_id = assTE.workflow_id;
                new_doc.TopElem.status = st;
                
                if( st == 'self') {
                    new_doc.TopElem.expert_person_id = p_id;
                }
                if( st == 'manager') {
                    if(apTE.boss_id != undefined)
                    {
                        new_doc.TopElem.expert_person_id = apTE.boss_id; 
                    }
                }
                tools.assign_elems( new_doc.TopElem, apTE, ['custom_experts'] );

                new_doc.TopElem.assessment_plan_id = apTE.id;
                new_doc.TopElem.code = apTE.code + '_comp_' + st;
                new_doc.TopElem.index = 30;

                new_doc.TopElem.competence_profile_id = competence_profile_id;
                comps_arr = get_competence_array (competence_profile_id);

                if (comps_arr != undefined && comps_arr != false && ArrayOptFirstElem(comps_arr) != undefined ) { 
                    for (_c in comps_arr) {
                        new_doc.TopElem.competences.ObtainChildByKey(_c.id).competence_id = _c.id;
                    }
                }

                new_doc.Save();

                res = true;
            }
        } 
        catch(er) {
            LogEvent(Log_name,"Не удалось создать анкету по целям для сотрудника с id="+p_id+" \n"+er);
            res = false;
        }
    }
    return res;
}

function generatePlanAndPas(p_id, p_code, assTE)
{
    res = false;
    add_in_aa = add_user_to_ass_appr (p_id, assTE);
    if (tools_web.is_true(add_in_aa))
    {
        apTE = create_ass_plan (p_id, assTE , assTE.code+"_"+p_code);
        pa_goals = create_pa_goals (p_id, assTE.id, apTE, assTE); 
        pa_comp_man = create_pa_competence (p_id, assTE.id, 'manager', apTE, assTE); 
        pa_comp_self = create_pa_competence (p_id, assTE.id, 'self', apTE, assTE); 
        res = true;
    }
    else
    {
        LogEvent(Log_name,"Планы и анкеты на сотрудника с id="+p_id+" были сгенерированы ранее...");
    }
    return res;
}

///////////////////////////////
// Основная часть

if (ArrayOptFirstElem(new_person_array) != undefined)  // если генерим анкеты для конкретного сотрудника/сотрудников
{
    for (new_person in new_person_array) {
        docNewPerson = tools.open_doc(OptInt(new_person.__value));
        if (docNewPerson != undefined) {
            new_person_code = docNewPerson.TopElem.code;
        }
        LogEvent(Log_name,new_person.__value);
        generatePlanAndPas(OptInt(new_person.__value,0), new_person_code, assTE); 
    }    
}
else // если генерим анкеты всех потенциальных сотрудников
{
    gr_doc = tools.open_doc(group_exclusion);
    if (gr_doc != undefined) {
        exeption_collaborators = gr_doc.TopElem.collaborators;
    }

    new_collaborators_arr = tools.xquery(tools.create_xquery("collaborator","$elem/is_dismiss != true()",""));

    for (col in new_collaborators_arr)
    {
        // если сотрудник входит в группу исключений, то его пропускаем
        if (ArrayOptFindByKey(exeption_collaborators, col.id, 'collaborator_id') != undefined) continue;
        LogEvent(Log_name,col.fullname);
        generatePlanAndPas(col.id, col.code, assTE);
    }

}


LogEvent(Log_name,"Завершена работа агента по генерации планов и анкет ... \n");