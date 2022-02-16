const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '192.168.1.66',// IP address here,
    port: 50541// PORT number here,
  });
  conn.on("connect", () => {
    console.log('welcome to this game')// code that does something when the connection is first established
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

console.log("Connecting ...");
connect();