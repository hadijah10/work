const path = require('path');
//print platform specific opreator
//join joins sequence using the platform specific operator
console.log(path.sep);

const fpath = path.join('/content/','fold','zip.txt')
console.log(fpath) 
const mil = path.basename(fpath)
console.log(mil)
const abs = path.resolve(__dirname,'content','fold','zip.txt');
console.log(abs);  