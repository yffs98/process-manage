const {handleAsync,handleSql,generateId} = require('../utils')
/**
 * @description: 创建小组的逻辑
 */
let createTeam = async (req,res)=>{
    let {teamName,gitAddr,pid} = req.query;
    if(!/\.git$/.test(gitAddr)){
        res.json({
            code:0,
            results:"git address format error"
        })
        return
    }
    let now = Date.now()
    let team_id = generateId('team')
    try{
        let results =await handleAsync(`insert into teams (team_name,team_gitadress,create_time,pid,team_id) values ('${teamName}','${gitAddr}','${now}','${pid}','${team_id}');`)
        res.json({
            code:1,
            results
        })
    }catch(error){
        res.json({
            code:0,
            error
        })
    }
    
}
let updateTeam = async (req,res)=>{
    let {teamName,gitAddr,team_id} = req.body;
    let {type} = req.body
    if(!/\.git$/.test(gitAddr)){
        res.json({
            code:0,
            results:"git address format error"
        })
        return
    }
    
    let [err,results] =await handleSql(`update teams set team_name='${teamName}',team_gitadress='${gitAddr}' where team_id='${team_id}'`)
        res.json({
            code:err?0:1,
            results:err || results
        })
    
}
let deleteTeam = async (req,res)=>{
    let {team_id} = req.query;
    let [err,results] =await handleSql(`delete from teams where team_id='${team_id}'`)
    res.json({
        code:err?0:1,
        results:err || results&&results.affectedRows==1?'success':"failed"
    })
}

/**
 * @description: 获取小组列表
 */
let teamlist = async (req,res)=>{
    let {pid} = req.query
    
    pid = pid+''
    let [err,results] = await handleSql(`select * from teams where pid='${pid}'`)
    
    res.json({
        code:1,
        results:err?err:results
    })
}


module.exports = {
    'GET /createTeam': createTeam,
    'GET /teamlist': teamlist,
    'GET /deleteTeam': deleteTeam,
    'POST /updateTeam': updateTeam,
}