//OS gives us info about our environment/operating system
const os = require('os'); 

// Platform
console.log(os.platform()); // => darwin (os for mac)

// CPU Arch
console.log(os.arch());

// CPU Core Info
console.log(os.cpus()); // returns an object with info for every core of the cpu

// Free memory
console.log(os.freemem());

// Total memory
console.log(os.totalmem());

// Home dir
console.log(os.homedir());

// Uptime
console.log(os.uptime()); //in seconds
