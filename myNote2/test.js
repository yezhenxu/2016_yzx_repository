var express = require('express');
var app=express();

app.use(function(req,res,next){
    console.log("1111");
    next();
});

app.get('/a',function(req,res){
    console.log('/a :路由终止');
    res.end('a hello');
});

app.get('/a',function(req,res){
    console.log('/a:永远不会调用');
});

app.get('/b',function(req,res,next){
    console.log('/b:路由未终止');
    next();
    console.log('/b:5555');
});

app.use(function(res,req,next){
    console.log('Sometimes');
    next();
});

app.get('/b',function(res,req,next){
    console.log('/b (part 2)：抛出错误');
    throw new Error('b 请求失败');
});

app.use('/b',function(err,req,res,next){
    console.log('/b 检测到错误并传递');
    next(err);
});

app.get('/c',function(err,req){
    console.log('/c :抛出错误');
    throw new Error('c 失败');
});

app.use('/c',function(err,req,res,next){

    console.log('/c : 检测到错误但不传递');
    next();
});

app.use(function(err,req,res,next){
    console.log('检测到未处理的错误 ：'+err.message);
    res.send('500 -服务器错误');
});

app.use(function(req,res){
    console.log('未处理的路由');
    res.send('404 -未找到');
});

app.listen(3000,function(){
    console.log('监听端口号为：3000');
});