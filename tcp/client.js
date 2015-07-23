var net = require('net');

var connection = net.createConnection({port:8181,host:'127.0.0.1'},function(){
    console.log("connceted");
    this.write("Hello ");
});

connection.on("data",function(data){
   console.log(data.toString())
});

connection.on("end",function(){
    console.log("connected ended");
});

connection.on("error",function(error){
    console.log(error);
});

