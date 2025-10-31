import fs from 'fs';
const filePath ='/Users/amitsrivastava/Documents/code-video/sample.mov';
console.log('Start...');
const stream = fs.createReadStream(filePath, {highWaterMark: 10000});
stream.on('data', chunk=>{
    console.log('Chunk ', chunk);
});
stream.on('end', ()=>{
    console.log('File Data Ends');
})
// fs.readFile(filePath, (err,content)=>{
//     if(err){
//         console.log('Error is ', err);
//     }
//     else{
//         console.log('Data is ',  content);
//     }
// })
console.log('Ends');

// fs.readFile('/Users/amitsrivastava/Documents/node-examples/one.js', (err,content)=>{
//     if(err){
//         console.log('Error is ', err);
//     }
//     else{
//         console.log('Data 2 is ',  content.toString());
//     }
// })