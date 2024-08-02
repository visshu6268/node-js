const h = require('http')
//console.log(h)
h.createServer((req,res)=> {
    res.write('welcome node js 2345 ram 12345 yash raju free google yash raju')
    res.end()
}) .listen(3000,()=>console.log("start server localhost:3000"))

