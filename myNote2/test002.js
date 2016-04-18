var http=require('http');
var server=http.createServer(function(req,res){
console.log('-------');
console.log(req.method);
console.log('-------');
console.log(req.url);
console.log('-------');
console.log(req.headers);
console.log('-------');
res.end('hello ');
});

server.listen(3001,function(){
console.log('监听3001端口');
});