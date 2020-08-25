// De string a buffer, de buffer a JSON, voltando para buffer e, por fim, para string 
"use strict"; 

let buf = Buffer.from('This is my pretty example'); 
//let buf = new Buffer('This is my pretty example'); 

let json = JSON.stringify(buf); 

let buf2 = Buffer.from(JSON.parse(json).data); 
//let buf2 = new Buffer(JSON.parse(json).data); 

console.log(buf2.toString()); // meu exemplo bonitinho

