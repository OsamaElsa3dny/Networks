const net = require("net");
const socket = net.createConnection({host:"127.0.0.1",port:8080},()=>{
    const buff = Buffer.alloc(2);
    buff[0]=112;
    buff[1]=121;
    socket.write(buff);
});