const http = require('http');
const fs = require('fs');

const homepage = fs.readFileSync('./src/homepage.html', 'utf8');
// console.log(homepage);
const about = fs.readFileSync('./src/about.html', 'utf8');
const api = fs.readFileSync('./src/api.json', 'utf8');

const server = http.createServer((req, res) => {
   // console.log(req.method);
   console.log(req.url);

   if(req.url === '/'){
      // status code
      // There's two common types of content-type 
      // text/html and text/plain
      res.writeHead(200, { 'content-type': 'text/html' });
      res.write(homepage);
      res.end();
   }
   else if(req.url === '/about'){
      res.writeHead(200, { 'content-type': 'text/html' });
      res.write(about);
      res.end();
   }
   else if(req.url === '/api'){
      res.writeHead(200, { 'content-type': 'text/plain' });
      res.write(api);
      res.end();
   }
   else{
      res.writeHead(404, { 'content-type': 'text/html' });
      res.write('<h1>Page not found</h1>');
      res.end();
   }
});

server.listen(3000);