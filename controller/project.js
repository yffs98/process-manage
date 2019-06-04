//获取班级项目

let projectList = async ctx=>{
    let {cid='14'} = ctx.request.query;
    let [err,results] = await ctx.mysql(`select * from projects where cid='${cid}'`)
    ctx.body = {
        code:err?0:1,
        results:err||results
    }
}
//删除项目
let deleteProject = async ctx=>{
    let {project_id} = ctx.request.query;
    let [err,results] =await ctx.mysql(`delete from projects where project_id='${project_id}'`)
    
    ctx.body={
        code:err?0:1,
        results:err||(results&&results.affectedRows==1?'success':"failed")
    }
}
//创建项目
let createProject = async ctx=>{
    let {cid='13',class_name="1610A",project_name,project_description='莉莉很优秀'} = ctx.request.body;
    let now = Date.now()
    let uuid = require('uuid/v4')()
    let [err,results] = await ctx.mysql(`insert into projects (cid,class_name,project_name,project_description,create_time,project_id) values 
    ('${cid}','${class_name}','${project_name}','${project_description}','2019-06-04 09:18:41','${uuid}')`)

    ctx.body={
        code:err?0:1,
        results:err||results
    }
}
module.exports = {
    "GET /projectList": projectList,
    'POST /createProject':createProject,
    "GET /deleteProject": deleteProject
}