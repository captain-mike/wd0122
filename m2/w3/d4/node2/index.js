let http = require('http');

var server = http.createServer((req,res) => {

    res.writeHead(200,{'Content-type':'text/plain'})//mostra come contenuto testuale/html
    res.end('Hello World')

})

server.listen(3000, '127.0.0.1')//http://127.0.0.1:3000

console.log('Server running at http://127.0.0.1:3000')
