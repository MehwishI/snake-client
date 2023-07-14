const net = require("net");

const connect = require("./client");
const { stdin } = require("process");
const { setupInput } = require("./input");

//establish connection
console.log("Connecting ...");

const conn = connect();

//passing conn object to setupInput()
setupInput(conn);
