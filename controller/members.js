//创建组员  z暂且停着吧
let uuid = require('uuid/v4')
let createMember= async ctx=>{
    let {member_name, member_gender=0,identity=0, member_age=0,potriat='在这里写个人的简介',team_id} = ctx.request.body;
    let mid = uuid();
    //在数据表中查找 team_id='${team_id}' and identity='1' 如果存在则证明组长已经存在  反之
    let [err0,results0] =await ctx.mysql(`select * from members where team_id='${team_id}' and identity='1';`)
    if(identity==1 && results0.length>0){
        ctx.body = {
            code:0,
            msg:"组长已存在，不可重复设置",
            results: results0
        }
        return;
    }

    if(identity==0){
        ctx.body = {
            code:err0?0:1,
            msg:"teacher不可设置，identity：0-techer,1-组长,2-组员。"
        }
        return;
    }

    let [err,results] =await ctx.mysql(`insert into members (member_id,member_name, member_gender,member_age,team_id,identity,potriat) 
    values ('${mid}','${member_name}','${member_gender}','${member_age}','${team_id}','${identity}','${potriat}')`)
   
    ctx.body = {
        code:err?0:1,
        results: err||results
    }
}

/**
 * @description: 获取小组成员
 */
let teamMembers= async ctx=>{
    let {team_id} = ctx.request.query
    // let teams = await handleAsync(`select * from teams as t, members as m where t.team_id=m.team_id and m.team_id='${team_id}'`)
    let [err,members] = await ctx.mysql(`select * from members where team_id='${team_id}'`)
    ctx.body={
        code:1,
        result:err||members
    }
}

let deleteMember= async ctx=>{
    let {mid} = ctx.request.query;
    let [err,results] =await ctx.mysql(`delete from members where member_id='${mid}'`)
    ctx.body={
        code:err?0:1,
        results: err||(results&&results.affectedRows==1?'success':'failed')
    }
}

module.exports = {
    'POST /createMember':createMember,
    'GET /teamMembers': teamMembers,
    'GET /deleteMember': deleteMember,
}