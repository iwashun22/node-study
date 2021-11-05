const {readFileSync} = require('fs');
const http = require('http');

const home = {
   html: readFileSync('./homepage/index.html'),
   css: readFileSync('./homepage/style.css'),
   svg: readFileSync('./homepage/icon.svg')
}

const server = http.createServer((req, res) => {
   const url = req.url;
   console.log(url);

   if(url === '/'){
      res.writeHead(200, {'content-type': 'text/html'});
      res.write(home.html);
      res.end();
   }
   else if(url === '/style.css'){
      res.writeHead(200, {'content-type': 'text/css'});
      res.write(home.css);
      res.end();
   }
   else if(url === '/icon.svg'){
      res.writeHead(200, {'content-type': 'image/svg+xml'});
      res.write(home.svg);
      res.end();
   }
   else{
      res.writeHead(404, {'content-type': 'text/html'});
      res.write('<h1>Page not found</h1>');
      res.end();
   }
})

server.listen(8000);