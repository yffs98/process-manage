//创建项目

// tid          随机生成的任务id

// task_name    项目名字        前端传过来的

// sid          对应学生的id   前端传过来的

// task_status  任务状态（todo  doing done）

// task_checked  

// check_person  检查项目的人
// member_id      成员id    哪里来的？？？？？ 
// team_id       小组id    前端传过来的
// project_id    项目id    前端传过来的           ----

let uuid = require('uuid/v4')
let createTask = async ctx=>{
    let {task_name,member_id,team_id,project_id} = ctx.request.body;
    let uuid1 = uuid()
    let [err, results] = await ctx.mysql(`insert into tasks (task_name,member_id,team_id,project_id,sid)
     values ('${task_name}','${member_id}','${team_id}','${project_id}','${uuid1}')`)
    ctx.body={
        code:err?0:1,
        results: err||results
    }
    
}

const tasksList = async ctx=>{
    let {member_id} = ctx.request.query;
    let [err,results] = await ctx.mysql(`select * from tasks where member_id='${member_id}'`)
    ctx.body={
        code:err?0:1,
        results: err||results
    }
}
//x小组任务列表
const teamTaskList = async ctx=>{
    let {team_id, member_id} = ctx.request.query;
    let [err0,results0] = await ctx.mysql(`select * from members where member_id='${member_id}'`)
    if(results0 && [0,1].includes(results0[0].identity*1)){
        let [err,results] = await ctx.mysql(`select * from tasks where team_id='${team_id}'`)
        ctx.body={
            code:err?0:1,
            results: err||results
        }
    }else{
        ctx.body = {
            code:err0?0:1,
            results: err0||'身份权限不足'
        }
    }
}
//更改状态
const taskStatus = async ctx=>{
    let {tid,status} = ctx.request.query;
    let arr = [0,1,2];
    if(!arr.includes(status*1)){
        res.json({
            code:0,
            results:'status should be one of [0,1,2]'
        })
        return
    }
    let [err,results] = await ctx.mysql(`update tasks set task_status='${status}' where tid='${tid}'`)
    ctx.body = {
        code:err?0:1,
        results: err||results
    }
}
//确认
const taskCheck = async ctx=>{
    let {tid,checkPerson} = ctx.request.query;
    let [error,[result]] = await ctx.mysql(`select * from members where mid='${checkPerson}'`)
    if(!result){
        ctx.body = {
            code:0,
            result:"数据不存在"
        }
        return
    }
    let arr=[0,1]
    if(!arr.includes(result.identity*1)){
        ctx.body = {
            code:1,
            result:"权限不足"
        }
        return
    }
    let [err,results] = await ctx.mysql(`update tasks set task_checked=1,check_person='${checkPerson}' where tid='${tid}'`)
    ctx.body = {
        code:err?0:1,
        results: err||results
    }
}
//删除任务
const deleteTask = async ctx=>{
    let {tid,member_id} = ctx.request.query;
    let [err, results] = await ctx.mysql(`delete from tasks where tid='${tid}' and member_id='${member_id}'`)
    ctx.body = {
        code:err?0:1,
        results: err||(results && results.affectedRows==1?'success':"数据不存在")
    }
}
//编辑任务
const changeTask = async ctx=>{
    let {task_name,tid} = ctx.request.body;
    let [err, results] = await ctx.mysql(`update tasks set task_name='${task_name}' where tid='${tid}'`)
    ctx.body = {
        code:err?0:1,
        results: err||results
    }
}
module.exports = {
    'POST /createTask':createTask, //创建任务
    'GET /tasksList':tasksList, //任务列表
    'GET /teamTaskList':teamTaskList,
    'GET /taskStatus':taskStatus,
    'GET /taskCheck':taskCheck,
    'GET /deleteTask':deleteTask,
    'POST /changeTask':changeTask
}