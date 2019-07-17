const http = require('http');

//create http object
http.createServer((req,res)=> {
    res.write("Hello from server");
    res.end();
}).listen(5000, () => {console.log('Server Running...')});