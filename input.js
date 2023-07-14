const { stdin } = require("process");
let connection;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf-8");
  stdin.resume();

  stdin.on("data", handleUserInput);

  return stdin;
};

const handleUserInput = function () {
  stdin.on("data", (key) => {
    if (key === "\u0003") {
      process.exit();
    }
    if (key === "w") {
      //sending command to the server to move up
      connection.write("Move: up");
    }
    if (key === "a") {
      //sending command to the server to move left
      connection.write("Move: left");
    }
    if (key === "s") {
      //sending command to the server to move down
      connection.write("Move: down");
    }
    if (key === "d") {
      //sending command to the server to move right
      connection.write("Move: right");
    }
  });
};

module.exports = { setupInput };
//module.exports = handleUserInput;
