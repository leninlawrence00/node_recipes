//retrieving nodejs directory structure
var fs = require('fs');

var out;
console.log(__dirname);
fs.realpath(__dirname,function(error,path){
    if(error)
    {
        console.log(error);
        return;
    }
    console.log("real path async :" + path);
});

out = fs.realpathSync(__dirname);
console.log("real path sync"+out);

fs.stat(__dirname,function(err,stat){
    if(err)
    {
        console.log(error);
        return;
    }
    console.log("The status is "+ stat.toString());
    fs.readdir(__dirname,function(err,contents){
        if(err)
        {
            console.log(err);
            return;
        }
        contents.forEach(function (f){
            console.log("The content"+f);
        });
    });
});