function review(response){
  console.log('executing review handler');
  response.write("review page");
  response.end();
}

function home(response){
  var fs = require('fs');
  console.log('executing home handler');

  fs.readFile('input.html',function(err, data){
    if(err){
      console.log(err)
    }else{
      response.writeHead(200,{"Content-Type":"text/html"});
      response.write(data);
      response.end();
    }
  });
}



exports.home = home;
exports.review = review;
