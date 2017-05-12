var querystring = require('querystring');

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

function review(response, reviewData){
  console.log('executing review handler');
  response.writeHead(200,{"Content-Type":"text/plain"});
  response.write('Your review is ' + querystring.parse(reviewData).text);
  response.end();
}



exports.home = home;
exports.review = review;
