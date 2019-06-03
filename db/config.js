const mysql = require('mysql');
let client = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'1314',
    database:'three_data'
})
client.connect();//简单的几步希望铭记于心
// console.log(client)
module.exports = function(app){
    // app.context.mysql = client;//将client弄到了 app.context;相当于添加了一个方法吧
    app.context.mysql = (sql)=>{
        //pending fullfilled reject then catch finally    all
        return new Promise((resolve,reject)=>{
            client.query(sql,(err,results)=>{
                if(err){
                    resolve([err,null])
                }else{
                    resolve([null,results])
                }
            })
        })
    };
}