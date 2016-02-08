var server = require('./server')();

server.listen(3000, function(){
  console.log("The server is listening on this port!");
});