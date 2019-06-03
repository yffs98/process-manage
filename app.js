const express = require('express')
const app = express();
const fs = require('fs')
const bodyParser = require('body-parser')
const configRouter = require('./router')
/**
 * @description: ssr config
 */
const Vue = require('vue')
const vsr = require('vue-server-renderer')
const vrenderer = vsr.createRenderer()


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(__dirname + '/work'))
// app.all('*', function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     next();
// });
// app.use((req,res,next)=>{
//     //cors跨域资源共享
//     res.header("Access-Control-Allow-Origin", "*");
//     next()
// })

app.get('/', (req, res) => {
    // let html = fs.readFileSync('./work/index.html','utf-8')
    // res.type('html');
    // res.end(html)
    let app = new Vue({
        data: {
            url: req.url
        },
        template: fs.readFileSync('./work/index.html', 'utf-8'),
        methods: {
            testfunc() {
                alert('hello')
            }
        }
    })
    vrenderer.renderToString(app, (err, html) => {
        if (err) {
            res.status(500).end('Internal Server Error')
            return
        }
        res.type('html')
        res.end(`${html}`)
    })
})
/* 
app.get('/team',(req,res)=>{
    let html = fs.readFileSync('./views/team.html','utf-8')
    res.type="html/text"
    res.end(html)
})
app.get('/member',(req,res)=>{
    let html = fs.readFileSync('./views/member.html','utf-8')
    res.type="html/text"
    res.end(html)
}) */

configRouter(app)
app.listen(8088, () => {
    console.log('server started at 8088')
})