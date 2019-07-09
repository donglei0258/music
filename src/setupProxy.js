const proxy = require('http-proxy-middleware')

module.exports=function(app){
     app.use(proxy('/music',{
         target:'https://c.y.qq.com',
         changeOrigin:true,
         pathRewrite:{
             '^/music':''
         }
     }))
}