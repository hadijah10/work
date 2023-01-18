const {readFile,writeFile} = require('fs');
console.log("Start");
readFile('./content/first.txt','utf8',(err,result) => {
    if(err){
        console.log(err);
    return;
    }
   const first = result;
   readFile('./content/second.txt','utf8',(err,result)=> {
    if(err){
        console.log(err);
    return
    }
    console.log(result);
    const second = result
    writeFile('./content/async-result.txt/',
    `Async result : ${first},${second}`,
  
    (err,result) => {
       if(err){
        console.log(err);
        return;
       }
        console.log("Done with this task");
    }
    
    )
   })
})
console.log("Started")