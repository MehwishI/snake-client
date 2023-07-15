const net = require("net");

const connect = require("./client");

const { setupInput } = require("./input");

//establish connection
console.log("Connecting ...");

//calling connect function
const conn = connect();

//passing conn object to setupInput()
setupInput(conn);
