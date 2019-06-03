const router = require('koa-router')()
// let userApi = require('../controller/user');//将分装出来的插件引入  { 'POST /register': [AsyncFunction: register] }


const fs = require('fs');
const path = require('path');

function configRouter(filepath){
    let dir = fs.readdirSync(path.join(process.cwd(),filepath));//这可以让他自动读取文件夹下的所有文件
    dir.forEach(filename=>{
        let api = require(path.join(process.cwd(),filepath,filename))
        addRoute(api)//读取的是文件夹中的每个文件
    })
}
//每个文件中的外抛的方法，函数 
function addRoute(userApi){
    let apis = Object.entries(userApi) //[ [ 'POST /register', [AsyncFunction: register] ] ]
    apis.forEach(item=>{
        // console.log(item)  item[0]是 'POST /register'  item[1]是自己定义的那个函数
        let [method,path] = item[0].split(' ')
        if(method=='POST'){
            router.post(path,item[1])
        }
        if(method=='GET'){
            router.get(path,item[1])
        }
    })
}

module.exports = function (filepath){
    configRouter(filepath)
    return router.routes()
}


