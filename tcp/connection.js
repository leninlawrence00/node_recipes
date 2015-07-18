//creating connection to the server

var net = require('net');

var connection = net.createConnection({port : 8181, host:'127.0.0.1'},function(){
      console.log('coneected successfully');
});
