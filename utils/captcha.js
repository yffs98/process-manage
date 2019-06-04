// 我是想吧他给分离出来，没事再自己试试
const svgCaptcha = require('svg-captcha')
function captchas(){
   return svgCaptcha.create({
                size:4,
                ignoreChars:'0oli1',
                noise:4,
                background:'#cc9966'
            })
}
module.exports = {
    captchas
}