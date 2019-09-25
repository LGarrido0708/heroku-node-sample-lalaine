var app = require('express')();
var http = require('http').createServer(app);
var port = process.env.port || 3000;

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

http.listen(port, '0.0.0.0,', function(){
  console.log('listening on *: ' + port);
});