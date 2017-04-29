var http = require('http');
var url = require('url');

function startServer(route){
  function onRequest(request,response){
    var pathname = url.parse(request.url).pathname;
    console.log("request recieved for " + pathname)
    route(pathname);
    response.writeHead(200,{'Content-Type': 'text/plain'})
    response.write('I used to be like you');
    response.end();
  }

  http.createServer(onRequest).listen(8888);
}



exports.startServer=startServer;
