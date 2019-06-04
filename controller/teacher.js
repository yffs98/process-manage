/*
 * @Author: 楚凤沛 
 * @Date: 2019-06-03 20:29:45 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2019-06-04 14:40:57
 */
const jwt = require('jsonwebtoken')
const uuid = require('uuid/v4')
const utils = require('../utils')
const svgCaptcha = require('svg-captcha')
let count = 0
let sessionCaches = {}
const captchas = require('../utils/captcha.js')
//验证码
let captcha1 = async (ctx)=>{
    let {data,text} = captchas.captchas()
     text = text.toLocaleLowerCase()
     sessionCaches[text] = ++count; 
     ctx.body={
         code:1,
         data,
         count
     }
 }

//老师的操作

let teacheLogin = async ctx =>{
    let { user_name, user_pwd, captcha=null ,count=null} = ctx.request.body;
    console.log(user_name,user_pwd ,count,captcha)
    let token = jwt.sign(user_name,'jack');//生成一个token
    ctx.cookies.set('token', token);//将token存在cookies中
    let cipheredPwd = utils.cipher(user_pwd);//将密码进行加密 
    // console.log(sessionCaches[captcha],count)
    //判断前端传过来的验证码是否正确
    if(sessionCaches[captcha] != count){
         ctx.body={
            code:0,
            message:'验证码错误'
        }
        return
    };
    if(!user_name || !cipheredPwd){
        ctx.body={
            code:0,
            message:'用户名或密码不能为空！'
        }
        return
    }
    let  [error,results]  = await ctx.mysql(`select * from teachers where teacher_name='${user_name}' and teacher_pwd='${user_pwd}'`)
    console.log(error,results)
    if(results.length>0){
        ctx.body = {
            code: 1,
            token,
            message: results    //通过返回的tid来判断老师登录
        }
        return
    }else{
        ctx.body = {
            code: 0,
            message: '密码错误，或者未注册'
        }
        return
    }
}
//添加班级
let addClass = async ctx=>{
    let {class_info='just so easy',class_name} = ctx.request.body;
    let data = new Date().toLocaleDateString();
    let cid = uuid();
    let tid = uuid();
    let [err,results] = await ctx.mysql(`insert into classes ( cid , class_name , class_info , create_time , tid ) values ('${cid}','${class_name}','${class_info}','${data}','${tid}')`)
    ctx.body={
        code:err?0:1,
        message:err?err:results
    }
}
//删除班级
let deleteClass = async ctx =>{
    let {cid} = ctx.request.body;
    let [err,results] = await ctx.mysql(`delete from classes where cid='${cid}'`)
    ctx.body={
        code:err?0:1,
        message:err?err:results
    }
}
// let updataClass = async ctx =>{
//     let {} = ctx.request.body;
// }
module.exports = {
    'POST /teacheLogin':teacheLogin,
    'GET /captcha1': captcha1,
    'POST /addClass':addClass,
    'POST /deleteClass':deleteClass
}