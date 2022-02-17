const net = require("net");
const { IP, PORT } = require("./constants");
const connect = function () {
  const conn = net.createConnection({
    host: '192.168.1.66',// IP address here,
    port: 50541// PORT number here,
  });
  conn.on("connect", () => {
    conn.write("Name: sa")
    setInterval(function () {
      conn.write('Move: up');
      console.log('sent')
    }, 1000);
    
    console.log('welcome to this game')// code that does something when the connection is first established
  });
  // conn.on("data", () => {
  //   conn.write("Move: up")
  // })
  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = connect