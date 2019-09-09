const net = require('net');
const PORT = 25;
const TIMEOUT = 2000;

class Client {
 constructor(port, address, timeout) {
  this.socket = null;
  this.address = address;
  this.port = port || PORT;
  this.timeout = timeout || TIMEOUT;
  this.isActive = false;
  this.isErred = false;
  this.init();
 }
 
 init() {
    var client = this
    
    this.socket = net.createConnection(client.port, client.address, () => {
        this.isActive = true;
        this.isErred = false;
    })

    client.socket.setTimeout(this.timeout);

    client.socket.on('timeout', () => {
        this.isActive = false;
    })

    client.socket.on('end', () => {
        this.isActive = false;
    })

    client.socket.on('error', (data) => {
        this.isErred = true;
    })

    client.socket.on('close', () => {
    this.isActive = false;
    });
 }

 close() {
     var client = this
     return new Promise((resolve, _reject) => {
         client.socket.on("end", () => {
             this.isActive = false;
             resolve()
         })
     })
 }

  send(message) {
    var client = this;
    return new Promise((resolve, reject) => {
    client.socket.write(message);
 
    client.socket.on('data', (data) => {
        console.log(data.toString('utf8'))
        resolve(data);
    });
 
    client.socket.on('error', (err) => {
        reject(err);
    });
 
  });
 }
}
module.exports = Client;