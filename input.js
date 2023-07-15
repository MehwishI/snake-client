const { stdin } = require("process");
const {
  MOVE_UP_KEY,
  MOVE_DOWN_KEY,
  MOVE_LEFT_KEY,
  MOVE_RIGHT_KEY,
  EXIT_KEY,
  KEY_T,
  KEY_U,
  KEY_Y,
} = require("./constants");

let connection;

const setupInput = function (conn) {
  //setting local connection variable to conn object returned after connection is established
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf-8");
  stdin.resume();

  //event handler is called when data is received
  stdin.on("data", handleUserInput);
  return stdin;
};
//event handler for input
const handleUserInput = function (key) {
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
  if (key === KEY_T) {
    connection.write("Say: Lets Play!");
  }
  if (key === KEY_Y) {
    connection.write("Say: Eat Fast!");
  }
  if (key === KEY_U) {
    connection.write("Say: Go along!");
  }
};

module.exports = { setupInput };
