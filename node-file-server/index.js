const homedir = require("os").homedir();
const path = require("path");
const express = require("express");
const directory = require("serve-index");
const { networkInterfaces } = require('os');
const app = express();

const hostDir = path.join(homedir);

const interfaces = networkInterfaces();
const results = Object.create(null);
let ip = '';

for (const name of Object.keys(interfaces)) {
    for (const net of interfaces[name]) {
        // Skip over non-IPv4 and internal (i.e. 127.0.0.1) addresses
        if (net.family === 'IPv4' && !net.internal) {
            if (!results[name]) {
                results[name] = [];
            }
            results[name].push(net.address);
			ip = net.address;
        }
    }
}

app.use("/public", directory(hostDir));
app.use("/public", express.static(hostDir));

const server = app.listen(3000, () => {
  console.log("Server is running on port 3000");
  console.log(`You can access files on LAN @ ${ip}:3000/public`);
});