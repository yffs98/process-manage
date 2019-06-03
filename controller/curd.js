//查询 所有的数据

let chaxun = async (ctx)=>{
    let [ error , results ] = await ctx.mysql(`select * from users`);    
    
    if(results.length>0){
        ctx.response.body = {
            code: 1,
            data: results
        }
    }else{
        ctx.response.body = {
            code:0,
            data:error
        }
    }
}

//按条件查询
module.exports = {
    'GET /chaxun':chaxun
}