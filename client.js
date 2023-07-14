const net = require("net");
const { IP, PORT, NAME } = require("./constants");

const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write(`Name: , ${NAME}`);
    conn.write("Say: Catch me!");
  });

  conn.setEncoding("utf-8");
  //receiving data from server
  conn.on("data", (data) => {
    console.log(`Server says: ${data}`);
  });

  return conn;
};

module.exports = connect;
