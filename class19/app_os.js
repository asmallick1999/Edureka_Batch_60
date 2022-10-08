// const os = require('os');
// console.log(`platform on which this file is running ${os.platform}`);
// console.log(`platform on which this file is running ${os.arch}`);


// ############## File System ###########

const fs = require('fs')

fs.writeFileSync('index.html','<!--write your html code here!-->')
console.log("done");
fs.writeFileSync('index.html','here i am')