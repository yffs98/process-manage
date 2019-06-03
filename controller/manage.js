const jwt = require('jsonwebtoken')
let create = async ctx=>{
        let token = ctx.cookies.get('token')
        try{
            let decoded = jwt.verify(token,'jack')//验证令牌是否对称
            ctx.body={
                code:1,
                msg:'success'
            }
        }catch(err){
            ctx.body={
                code:0,
                msg:err
            }
        }
}
module.exports = {
    'POST /create':create
}