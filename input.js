const { stdin } = require("process");
const {
  MOVE_UP_KEY,
  MOVE_DOWN_KEY,
  MOVE_LEFT_KEY,
  MOVE_RIGHT_KEY,
  EXIT_KEY,
} = require("./constants");
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
    if (key === EXIT_KEY) {
      process.exit();
    }
    if (key === MOVE_UP_KEY) {
      //sending command to the server to move up
      connection.write("Move: up");
    }
    if (key === MOVE_LEFT_KEY) {
      //sending command to the server to move left
      connection.write("Move: left");
    }
    if (key === MOVE_DOWN_KEY) {
      //sending command to the server to move down
      connection.write("Move: down");
    }
    if (key === MOVE_RIGHT_KEY) {
      //sending command to the server to move right
      connection.write("Move: right");
    }
  });
};

module.exports = { setupInput };
//module.exports = handleUserInput;
