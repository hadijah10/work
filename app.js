/*const amount = 12;
if(amount <10){
    console.log(`small`);
}
else{
    console.log(`big`);
}
console.log(`first node app`);*/
//check heroko
//__dirname = current path
//__filename = file name
//require = functon to use module
//module = info about current module
//process = info about the env where the program is executed
console.log(__dirname); 
console.log(__filename);
//Modules
const names = require("./module_names.js");
const hi = require("./module_function");
//console.log(names);
const data = require("./alternative");
console.log(data);

hi("Muna");
hi(names.sibil);
hi(names.regi);
hi(names.mavis);
require("./mind-grenade");