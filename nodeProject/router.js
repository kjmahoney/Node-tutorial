function route(handle,pathname,response,reviewData) {
  console.log("Routing request recived for " + pathname);
  if (typeof handle[pathname] === 'function'){
    handle[pathname](response, reviewData);
  }else{
    console.log("no handler for this " + pathname);
    response.writeHead(404,{"Content-Type": "text/plain"});
    response.write("Error 404 page not found");
    response.end();
  }
}
exports.route = route;
