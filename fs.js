var fs = require('fs');

fs.readFile('text.txt',function(err, data){
  if(err){
    console.log(err)
  }else{
    console.log("Async message reads:" + " " + data.toString())
  }
});
