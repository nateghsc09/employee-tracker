// Dependencies
const mysql = require("mysql");
const inquirer = require("inguirer");
const consoleTable = require("console.table");

//Server Concections

const concection = mysql.creatConnection({
    host: "localhost",
    port: 8080,
    user: "root",
    password: "mySQLPassword9",
    datebase: "tracker_DB"
});

Connection.connect(function (err) {
    if (err) throw err;
    start();
});

//setting up inquirer

function start() {
    inquirer
    .prompt({
        type: "list",
        name: "option",
        message: "What would you like to do?",
        choices:[
            "Add Department",
            "Add Role",
            "Add Employee",
            "View Department",
            "View Role",
            "View Employee",
            "Update Employee Roles",
            "Update Employee Manager",
            "Remove Employee",
            "Remove Role",
            "Remove Department",
            




        ]
    })
}


