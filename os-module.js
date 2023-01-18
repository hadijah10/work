const os = require('os');

//info about current user. 
const info = os.userInfo();
console.log(info);

//display the system uptime
console.log(`You have run for ${os.uptime()} seconds`);

const mode = {
    name : os.type(),
    release : os.release(),
    totalMem : os.totalmem(),
    freeMem : os.freemem()
}
console.log(mode);