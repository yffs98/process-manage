const Parameter = require('parameter')
let parameter = new Parameter()
module.exports = function(app){
    //把一个普通函数变成promise，只需要在该函数内部return一个promise
    app.context.validate = (valid,data)=>{
        return new Promise((resolve,reject)=>{
            let error = parameter.validate(valid,data)
            if(!error){
                resolve([])
            }else{
                resolve(error)
            }
        })
    }
    // return (ctx,next)=>{
    //      //验证规则   这个规则验证我先不做了
    //  }
}