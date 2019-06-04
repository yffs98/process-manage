/**
 * @description: 创建小组的逻辑
 */
let uuid = require('uuid/v4');
let createTeam = async ctx=>{
    let data = new Date().toLocaleDateString()
    let {teamName,gitAddr,pid} = ctx.request.body;
    if(!/\.git$/.test(gitAddr)){
       ctx.body = {
            code:0,
            results:"git address format error"
        }
        return
    }
    let now = Date.now()
    let team_id = uuid()
    try{
        let results =await ctx.mysql(`insert into teams (team_name,team_gitadress,create_time,project_id,team_id) values ('${teamName}','${gitAddr}','${data}','${pid}','${team_id}');`)
       ctx.body = {
            code:1,
            results
        }
    }catch(error){
       ctx.body = {
            code:0,
            error
        }
    }
    
}
/**
 * @description: 获取小组列表
 */
let teamlist = async ctx=>{
    let {pid} = ctx.request.query;
    pid = pid+''
    let [err,results] = await ctx.mysql(`select * from teams where project_id='${pid}'`)
    
    ctx.body={
        code:err?0:1,
        results:err?err:results
    }
}

let deleteTeam = async ctx=>{
    let {team_id} = ctx.request.query;
    let [err,results] =await ctx.mysql(`delete from teams where team_id='${team_id}'`)
    ctx.body={
            code:err?0:1,
            results:err || results&&results.affectedRows==1?'success':"failed"
        }
}

module.exports = {
    'POST /createTeam': createTeam,
    'GET /teamlist': teamlist,
    'GET /deleteTeam': deleteTeam,
    // 'POST /updateTeam': updateTeam,
}