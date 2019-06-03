const fs = require('fs')
let test = async (ctx)=>{
    //读取这个路径时 读取文件
   let test = fs.readFileSync('./views/test.html','utf-8');
   ctx.response.type='text/html';
   ctx.response.body=test;
}
//将一个普通函数转换为promise的方法是在该函数中return一个promise

let zc=async ctx=>{
    console.log(ctx.request.body)//获取到前端发送过来的数据
    ctx.body={
        code:0,
        msg:'算是成功'
    }
}

module.exports = {
    'GET /':test,
    'POST /zc':zc
}