var http = require('http');
var url = require('url');

function startServer(route, handle){
  function onRequest(request,response){
    var reviewData = "";
    var pathname = url.parse(request.url).pathname;
    console.log("request recieved for " + pathname)
    request.setEncoding("utf8");

    request.addListener("data",function(chunk){
      reviewData += chunk;
    })
    route(handle, pathname, response);
  }

  http.createServer(onRequest).listen(8888);
}



exports.startServer=startServer;
