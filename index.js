

console.log('My first app');


console.log("================Built in module -OS=================");
const { log } = require('console');

 const OS = require('os');
 console.log(OS.arch());
 console.log(OS.cpus());
 console.log(OS.freemem());
 console.log(OS.totalmem());
 console.log(OS.hostname());
 console.log(OS.platform());
 console.log(OS.release()); 
 console.log(OS.type());
 console.log(OS.uptime());
console.log(OS.userInfo());
 
console.log("===================global object====================");
console.log(global);
console.log(console);
console.log(__filename);
console.log(__dirname);
console.log(module);
