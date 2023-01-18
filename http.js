const http = require('http');
 const server = http.createServer((req,res) => {
    if(req.url ===  '/'){
        res.end('Welcome to our homepage')
    }
if(req.url === '/about'){
    res.end('Story begins')
}
res.end(`
<h1>Oopss!!</h1>
<p>We can find your page</p>
<a href="/">Home</a>
`)
 })

 server.listen(5050)