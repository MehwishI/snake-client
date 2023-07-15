const net = require("net");
const { IP, PORT, NAME } = require("./constants");

const connect = function () {
  //creating connection to server
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });
  //handling connect event
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    //sending message to server
    //setting name of snake
    conn.write(`Name: , ${NAME}`);
    //sending message to server
    conn.write("Say: Catch me!");
  });

  conn.setEncoding("utf-8");
  //receiving data from server and logging it
  conn.on("data", (data) => {
    console.log(`Server says: ${data}`);
  });

  return conn;
};
//exporting connect function
module.exports = connect;
