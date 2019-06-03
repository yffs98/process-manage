//把appjs中的内容都拆分出来就是模块化的过程了
const jwt = require('jsonwebtoken')
const uuid = require('uuid/v4')
const utils = require('../utils')
const svgCaptcha = require('svg-captcha')
let count = 0
let sessionCache = {}
//验证码
let captcha = async (ctx)=>{
   let {data,text} = svgCaptcha.create({
        size:4,
        ignoreChars:'0oli1',
        noise:4,
        background:'#cc9966'
    })
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
    let { user_name, user_pwd } = ctx.request.body;
    let cipheredPwd = utils.cipher(user_pwd);//将密码进行加密 
    let uid = uuid();
        let [error,results] = await ctx.mysql(`insert into users ( user_name , user_pwd , mid ) values ('${user_name}','${cipheredPwd}','${uid}')`)
        ctx.body = {
            code: error?0:1,
            results:error || results
        }
}
//登录
let login = async ctx => {
    let { user_name, user_pwd, captcha ,count} = ctx.request.body;
    // console.log(captcha)
    let token = jwt.sign(user_name,'jack');//生成一个token
    ctx.cookies.set('token', token);//将token存在cookies中
    let cipheredPwd = utils.cipher(user_pwd);//将密码进行加密 
    // console.log(sessionCache[captcha],count)
    //判断前端传过来的验证码是否正确
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
    let  [error,results]  = await ctx.mysql(`select * from users where user_name='${user_name}' and user_pwd='${cipheredPwd}'`)
    console.log(results)
    if(results.length>0){
        ctx.response.body = {
            code: 1,
            token,
            message: 'success'
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
    'POST /register': register,
    'POST /login': login,
    'GET /captcha': captcha
}