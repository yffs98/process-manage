const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const validator = require('./utils/validator')
// const router = require('koa-router')()
let app = new Koa()
const mysqlConfig = require('./db/config');//应用config的mysql语句
mysqlConfig(app);//配置数据库  这样配置后就可以在后期直接ctx.db
// const jwt = require('jsonwebtoken')
const routerConfig = require('./router/config')
app.use(bodyParser())
// app.use(validator())  //验证规则   这个规则验证我先不做了
//必须要配置的两个  
// router.get('/',(ctx)=>{
//     //读取这个路径时 读取文件
//    let test = fs.readFileSync('./views/test.html','utf-8');
//    ctx.response.type='text/html';
//    ctx.response.body=test;
// })
// 用来做用户注册的接口
// router.post('/zc',async ctx=>{
//     console.log(ctx.request.body)//获取到前端发送过来的数据
//     ctx.body={
//         code:0,
//         msg:'算是成功'
//     }
// })

// router.post('/login',async ctx=>{
//     let {user_name,user_pwd} = ctx.request.body;
//     if(!user_name || !user_pwd){
//          ctx.response.body={
//             code:0,
//             message:'信息有误'
//         }
//         return
//     }
//     let token = jwt.sign({user_name,exp: Math.floor(Date.now() / 1000) + 10, },'jack');//这就直接得到了返回的token
//     ctx.cookies.set('token',token);//将token存在cookies中
//     // console.log(ctx.request.body)
//     ctx.response.body={
//         code:1,
//         token,
//         message:'post success'
//     }
// })
// router.post('/test',async ctx=>{
//     let token = ctx.cookies.get('token')
//     try{
//         let decoded = jwt.verify(token,'jack')//验证令牌是否对称
//         ctx.body={
//             code:1,
//             msg:'success'
//         }
//     }catch(err){
//         ctx.body={
//             code:0,
//             msg:err
//         }
//     }
   
// })
// app.use(router.routes())//挂载的位置影响post发送的请求数据

//配置程序路由
app.use(routerConfig('controller'))
app.listen(8888,()=>{console.log('localhost:8888')})