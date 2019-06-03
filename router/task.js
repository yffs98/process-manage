
const {handleSql} = require('../utils')
const createTask = async (req,res)=>{
    let {task_name,mid,team_id,pid} = req.body;

    let [err, results] = await handleSql(`insert into tasks (task_name,mid,team_id,pid)
     values ('${task_name}','${mid}','${team_id}','${pid}')`)
    res.json({
        code:err?0:1,
        results: err||results
    })
}
const changeTask = async (req,res)=>{
    let {task_name,tid} = req.body;

    let [err, results] = await handleSql(`update tasks set task_name='${task_name}' where tid='${tid}'`)
    res.json({
        code:err?0:1,
        results: err||results
    })
}
const deleteTask = async (req,res)=>{
    let {tid,mid} = req.query;

    let [err, results] = await handleSql(`delete from tasks where tid='${tid}' and mid='${mid}'`)
    res.json({
        code:err?0:1,
        results: err||(results&&results.affectedRows==1?'success':"数据不存在")
    })
}
const tasksList = async (req,res)=>{
    let {mid} = req.query;
    let [err,results] = await handleSql(`select * from tasks where mid='${mid}'`)
    res.json({
        code:err?0:1,
        results: err||results
    })
}
const teamTaskList = async (req,res)=>{
    let {team_id, mid} = req.query;

    let [err0,results0] = await handleSql(`select * from members where mid='${mid}'`)
    if(results0 && [0,1].includes(results0[0].identity*1)){
        let [err,results] = await handleSql(`select * from tasks where team_id='${team_id}'`)
        res.json({
            code:err?0:1,
            results: err||results
        })
    }else{
        res.json({
            code:err0?0:1,
            results: err0||'身份权限不足'
        })
    }
}
const taskStatus = async (req,res)=>{
    let {tid,status} = req.query;
    let arr = [0,1,2];
    if(!arr.includes(status*1)){
        res.json({
            code:0,
            results:'status should be one of [0,1,2]'
        })
        return
    }
    let [err,results] = await handleSql(`update tasks set task_status='${status}' where tid='${tid}'`)
    res.json({
        code:err?0:1,
        results: err||results
    })
}

const taskCheck = async (req,res)=>{
    let {tid,checkPerson} = req.query;
    let [error,[result]] = await handleSql(`select * from members where mid='${checkPerson}'`)
    if(!result){
        res.json({
            code:0,
            result:"数据不存在"
        })
        return
    }
    let arr=[0,1]
    if(!arr.includes(result.identity*1)){
        res.json({
            code:1,
            result:"权限不足"
        })
        return
    }
    let [err,results] = await handleSql(`update tasks set task_checked=1,check_person='${checkPerson}' where tid='${tid}'`)
    res.json({
        code:err?0:1,
        results: err||results
    })
}

module.exports = {
    'POST /createTask':createTask,
    'GET /tasksList':tasksList,
    'GET /teamTaskList':teamTaskList,
    'GET /taskStatus':taskStatus,
    'GET /taskCheck':taskCheck,
    'GET /deleteTask':deleteTask,
    'POST /changeTask':changeTask,
}