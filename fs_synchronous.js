const {readFileSync,writeFileSync} = require('fs');
const first = readFileSync('./content/first.txt','utf8');
//console.log(first);
const second = readFileSync('./content/second.txt','utf8');
//console.log(second)

writeFileSync('./content/result.txt',`Here are te contents : ${first},${second}`,{flag:'a'});