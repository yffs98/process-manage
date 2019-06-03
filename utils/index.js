const connection = require('./sql')
function handleAsync(sql){
    return new Promise((resolve,reject)=>{
        connection.query(sql,(error,results,fields)=>{
            if(error){
                reject(error)
            }else{
                resolve(results)
            }
        })
    })
}
const handleError=(promise)=> {
    if (!promise || !Promise.prototype.isPrototypeOf(promise)) {
        return new Promise((resolve, reject) => {
            reject(new Error("requires promises as the param"));
        }).catch(err => {
            return [err, null];
        })
    }
    return promise
        .then(function () {
            return [null, ...arguments]
        })
        .catch(err => {
            return [err, null];
        })
}
const handleSql=async (sql)=>{

    return handleError(handleAsync(sql))
}
const generateId = (prefix='',randomLength=9)=>{
    return prefix+'_'+Number(Math.random().toString().substr(3,randomLength) + Date.now()).toString(36)
}

module.exports = {
    handleAsync,
    handleError,
    handleSql,
    generateId
}