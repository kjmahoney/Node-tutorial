var events=require('events');
var eventEmitter = new events.EventEmitter

var ringbell=()=>{
  console.log("ding dong")
  eventEmitter.emit('bellrings','Welcome')
}

eventEmitter.on('doorOpen',ringbell)
eventEmitter.on('bellrings', ()=>{
  console.log("hello!");
})

eventEmitter.emit('doorOpen')
