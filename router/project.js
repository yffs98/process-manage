/*
 * @Description: Have A Nice Day! 项目相关API
 * @Author: Jacky
 * @LastEditors: Jacky
 * @Date: 2019-05-13 10:41:13
 * @LastEditTime: 2019-05-15 19:38:49
 */

/**
 * @description: 创建项目
 * @param {type} 
 */
const {handleAsync,handleSql,generateId} = require('../utils')
let createProject = async (req,res)=>{
    let {cid=123,class_name="1610A",project_name,project_discription=''} = req.body;
    let now = Date.now()
    let id = generateId('project')
    cid = '1610A'
    let [err,results] = await handleSql(`insert into projects (cid,class_name,project_name,project_discription,create_time,project_id) values 
    ('${cid}','${class_name}','${project_name}','${project_discription}','${now}','${id}')`)

    res.json({
        code:err?0:1,
        results:err||results
    })
}
let deleteProject = async (req,res)=>{
    let {project_id} = req.query;

    let [err,results] =await handleSql(`delete from projects where project_id='${project_id}'`)
    
    res.json({
        code:err?0:1,
        results:err||(results&&results.affectedRows==1?'success':"failed")
    })
}
let projectList = async (req,res)=>{
    let {cid='1610A'} = req.query
    let [err,results] = await handleSql(`select * from projects where cid='${cid}'`)
    res.json({
        code:err?0:1,
        results:err||results
    })
}

module.exports = {
    "POST /createProject": createProject,
    "GET /projectList": projectList,
    "GET /deleteProject": deleteProject,
}