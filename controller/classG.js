//选择班级
let checkClass = async (ctx)=>{
    let {sid,cid} = ctx.request.body
    console.log(ctx.request.body)
    console.log(sid,cid)
    let [err,results] = await ctx.mysql(`update students set cid='${cid}' where sid='${sid}'`);
    ctx.body = {
        code:err?0:1,
        message:err?err:results
    }

}
//获取班级列表
let  getClassList = async (ctx)=>{
    let [err,results]=await ctx.mysql(`select * from classes`)
    ctx.body={
        code:err?0:1,
        message:err?err:results
    }
}
module.exports = {
    'POST /checkClass':checkClass, 
    'GET /getClassList': getClassList
}