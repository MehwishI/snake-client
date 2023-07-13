const net = require("net");

//establish connection

const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541,
  });

  conn.setEncoding("utf-8");
  conn.on("data", (data) => {
    console.log(`Server says: ${data}`);
  });
  return conn;
};
console.log("Connecting ...");
connect();
