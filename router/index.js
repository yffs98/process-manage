const teamsApi = require('./team')
const projectApi = require('./project')
const memberApi = require('./members')
const taskApi = require('./task')
let apis = {
    ...teamsApi,
    ...projectApi,
    ...memberApi,
    ...taskApi
}
function configRouter(app){
    let routes = Object.entries(apis)

    routes.forEach((route)=>{
        let [method, path] = route[0].split(' ');
        method=method.toLowerCase()
        app[method](path,route[1])
    })
}

module.exports = configRouter