//把appjs中的内容都拆分出来就是模块化的过程了
const jwt = require('jsonwebtoken')
const uuid = require('uuid/v4')
const utils = require('../utils')
const captchas = require('../utils/captcha.js')
const svgCaptcha = require('svg-captcha')
let count = 0
let sessionCache = {}
//验证码
let captcha = async (ctx)=>{
    let {data,text} = captchas.captchas()
    //    let {data,text} = svgCaptcha.create({
//         size:4,
//         ignoreChars:'0oli1',
//         noise:4,
//         background:'#cc9966'
//     })
    
console.log(text)    
    text = text.toLocaleLowerCase()

    sessionCache[text] = ++count; 
    ctx.body={
        code:1,
        data,
        count
    }
}

//注册
let register = async ctx => {
    let { user_name, user_pwd,phone='1008611',nickname='小白',gender='男',role='组员' } = ctx.request.body;
    let data = new Date().toLocaleDateString()
    let cipheredPwd = utils.cipher(user_pwd);//将密码进行加密 
    let genders= gender=='男'?1:2;
    let roles = role=='组员'?2:1;
    let uid = uuid();
        let [error,results] = await ctx.mysql(`insert into students ( user_name , user_pwd , sid ,phone,nickname,gender,role,create_time) values ('${user_name}','${cipheredPwd}','${uid}','${phone}','${nickname}','${genders}','${roles}','${data}')`)
        // console.log(error,results)
        ctx.body = {
            code: error?0:1,
            results:error || results
        }
    //判断组长是否已经存在
}
//登录
let login = async ctx => {
    let { user_name, user_pwd, captcha ,count} = ctx.request.body;
    // console.log(user_name,user_pwd ,count,captcha)
    let token = jwt.sign(user_name,'jack');//生成一个token
    ctx.cookies.set('token', token,{
        path:'/login',   //cookie写入的路径
        httpOnly:true,
        overwrite:false
    });//将token存在cookies中
    let cipheredPwd = utils.cipher(user_pwd);//将密码进行加密 
    // console.log(sessionCache[captcha],count)
    //判断前端传过来的验证码是否正确
    console.log(count,captcha)
    if(sessionCache[captcha] != count){
         ctx.response.body={
            code:0,
            message:'验证码错误'
        }
        return
    };
    if(!user_name || !cipheredPwd){
        ctx.response.body={
            code:0,
            message:'用户名或密码不能为空！'
        }
        return
    }
    let  [error,results]  = await ctx.mysql(`select * from students where user_name='${user_name}' and user_pwd='${cipheredPwd}'`)
    if(results.length>0){
        ctx.response.body = {
            code: 1,
            token,
            message: results
        }
        return
    }else{
        ctx.response.body = {
            code: 0,
            message: '密码错误，或者未注册'
        }
        return
    }
    // let token = jwt.sign({ user_name, exp: Math.floor(Date.now() / 1000) + 10, }, 'jack');//这就直接得到了返回的token
    // console.log(ctx.request.body)
    // ctx.response.body = {
    //     code: 1,
    //     token,
    //     message: 'post success'
    // }
}

module.exports = {
    'POST /register': register,//注册
    'POST /login': login,   //登录
    'GET /captcha': captcha  //验证码
}