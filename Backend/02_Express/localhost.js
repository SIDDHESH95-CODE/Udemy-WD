// const dns = require('dns');
import dns from 'dns';

dns.lookup('localhost', (err, address, family) => {
    console.log("Localhost ip:", address);
    console.log("Address family:", family === 4 ? "IPv4" : "IPv6");
})