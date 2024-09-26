const { response } = require('express');
const http = require('http');
const { request } = require('https');

const httpServer = http.createServer((request,response)=>{
    console.log("Received Request..");
    console.log(request);
    response.end("Response from the Server");  
    
});
httpServer.listen(8081,()=>{
    console.log('Server Started on the port:8081');   
});
