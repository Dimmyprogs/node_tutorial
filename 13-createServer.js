const http = require("http")

const server = http.createServer((req, res) =>{
    if(req.url === "/"){
        res.end('Hello Home')
    }
    else if(req.url === '/about'){
        res.end('Welcome to About Page')
    }else{
        res.end('Page does not exist')
    }
    
}).listen(419)