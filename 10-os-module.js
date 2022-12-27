const os = require('os')

//info about current user
const user = os.userInfo()

// Get system uptime 

const upTime = os.uptime()

console.log(`The system uptime is ${upTime}`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOS)

