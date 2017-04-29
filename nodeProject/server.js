var http = require('http');

function startServer(){
  function onRequest(request,response){
    response.writeHead(200,{'Content-Type': 'text/plain'})
    response.write('I used to be like you');
    response.end();
  }

  http.createServer(onRequest).listen(8888);
}



exports.startServer=startServer;
