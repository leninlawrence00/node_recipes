// A tcp server application server

var net = require('net'); // require nodejs net module for tcp

// create tcp server using function createServer
var server = net.createServer(function(connectionListener){
    console.log("connected");
    console.log(this.address());
    this.getConnections(function(err,count){
       if(err)
       {
           console.error(err);

       }
        else{
           console.log("The no of connections in this server is "+count);
       }
        connectionListener.on('end',function(){
            console.log("connection ended");
        })
        connectionListener.write("Hello world");
    });
});

server.listen(8181,function(){
    console.log("server is listening on the port"+8181);
});

/* server.listen(8181,127.0.0.1,12,function(){}) // optional parameters 12 is limiting no of connections

  server.setMaxConnections=12
 */
