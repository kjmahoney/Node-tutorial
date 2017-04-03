
//example of exporting modules
function relay(){
  console.log("this is a relay race")
}

function longjump(){
  console.log("this is a longjump event")
}

module.exports = {
  relay: relay,
  longjump:longjump,
}
