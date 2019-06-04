
let checkStatus = async ctx =>{
    let {task_checked,team_id} = ctx.request.body;
    if(task_checked ==2 ){
        var [error,results] = await ctx.mysql(`select * from tasks where team_id = '${team_id}'`)
    }else{
        var [error,results] = await ctx.mysql(`select * from tasks where task_checked = '${task_checked}' and team_id = '${team_id}'`)
    }
    ctx.body = {
        code:error?0:1,
        message:error?error:results
    }
}

module.exports = {
    'POST /checkStatus':checkStatus
}