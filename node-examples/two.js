// Node JS - Module System
// Common JS
const fs = require('fs');
// Async Task - LibUV
console.log('Code Start');
fs.readFile(__filename, (err, content)=>{
    if(err){
        console.log('Some Problem During File Read....');
    }
    else{
        console.log('File Data is ', content);
    }
});

console.log('Code Ends... ');