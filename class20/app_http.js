// const http = require('http')
// const fs = require('fs')

// fs.writeFileSync('index.txt','hello bro this is from write index file')
// const fileData = fs.readFileSync('index.txt','utf-8')
// console.log(fileData);
// console.log(fileData);

// const server = http.createServer((req,res)=>{
//     res.writeHead(200);
//     res.write("hello world my server is working fine")
//     res.write(fileData)
//     res.end();
// })

// server.listen(5050);

//############## Practice Again #############

//Synchronous way
// const fs = require('fs')

// fs.writeFileSync('style.txt', '"from 1st Sync Write"')
// console.log(`Server is running

// `);

// var readFile = fs.readFileSync('style.txt', 'utf-8');
// console.log(readFile);

// //Asynchronous way

// // fs.writeFile('style.css','this is async file',()=>{})
// // console.log('async file is done');

// // fs.writeFileSync('style.css','after async')
// // console.log(`I am done`);

// fs.appendFile('style.txt', ' "this is sync append from 1st append"', (error) => {
//     if (error) {
//         console.log(`something error happends`);
//     }
//     var readFile = fs.readFile('style.txt', 'utf-8',(error,data)=>{
//         if(error){
//             console.log(`something went wrong`);
//         }
//         else
//             if(data){
//                 console.log(data);
//             }
//     });
//     console.log(readFile);
// })
// var readFile = fs.readFileSync('style.txt', 'utf-8');
// console.log(readFile);


//########### Practice HTTP #################

const http = require('http');
const fs = require('fs');

fs.writeFileSync('style.txt','this is from server can you see me');

const insideStyleTxt = fs.readFileSync('style.txt','utf-8');

const httpServer = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-type':'text/plane'})
    res.write("hey server is running well")
    res.write(` ok then i am going to make some fun`);
    res.write(insideStyleTxt);
    res.end()
})

httpServer.listen(5050)
