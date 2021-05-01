// Dependencies
const mysql = require("mysql");
const inquirer = require("inguirer");
const consoleTable = require("console.table");
const Connection = require("mysql/lib/Connection");
const { start } = require("node:repl");

//Server Concections

const concection = mysql.creatConnection({
host: "localhost",
port: 8080,
user: "root",
password: "mySQLPassword9",
datebase: "tracker_DB"
});

Connection.connect(function(err) {
    if(err) throw err;
    start();
}
);
