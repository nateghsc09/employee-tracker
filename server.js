// Dependencies
const mysql = require("mysql");
const inquirer = require("inquirer");
const consoleTable = require("console.table");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "mySQLPassword9",
    database: "tracker_DB"
});

connection.connect(function (err) {
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
            choices: [
                "Add Department",
                "Add Role",
                "Add Employee",
                "View Department",
                "View Role",
                "View Employee",
                "Update Employee Roles",

            ]
        })
        .then(function (result) {
            console.log("You entered: " + result.option);
            switch (result.option) {
                case "Add Department":
                    addDepartment();
                    break;
                case "Add Role":
                    addRole();
                    break;
                case "Add Employee":
                    addEmployee();
                    break;
                case "View Department":
                    viewDepartment();
                    break;
                case "View Role":
                    viewRole();
                    break;
                case "View Employee":
                    viewEmployee();
                    break;
                case "Update Employee Role":
                    updateRole();
                    break;
            }
        });
}

//create a table for a chosen department
function addDepartment() {
    inquirer
        .prompt({
            type: "input",
            message: "Please choose the department you want to add?",
            name: "department"
        })
        .then(function (res) {
            const department = res.department;
            const query = `INSERT INTO department (name) VALUES("${department}")`;
            connection.query(query, function (err, res) {
                if (err) throw err;
                console.table(res);
                start();
            });
        });
}

// adding roles
function addRole() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "Enter the job title you want to add?",
                name: "title"
            },
            {
                type: "input",
                message: "What is the salary for this position?",
                name: "salary"
            },
            {
                type: "input",
                message: "Choose the department ID for this position?",
                name: "departmentID"
            }
        ])
        .then(function (res) {
            const title = res.title;
            const salary = res.salary;
            const departmentID = res.departmentID;
            const query = `INSERT INTO role (title, salary, department_id) VALUE("${title}", "${salary}", "${departmentID}")`;
            connection.query(query, function (err, res) {
                if (err) throw err;
                console.table(res);
                start();
            });
        });
}

// add employees
function addEmployee() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "Type  the employee's first name?",
                name: "firstName"
            },

            {
                type: "input",
                message: "Type the employee's last name?",
                name: "lastName"
            },

            {
                type: "input",
                message: "Type the employee's manager ID?",
                name: "managerID"
            },

            {
                type: "input",
                message: "Type the employee's role ID?",
                name: "roleID"
            }

        ])
        .then(function (res) {
            const firstName = res.firstName;
            const lastName = res.lastName;
            const roleID = res.roleID;
            const managerID = res.managerID;
            const query = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUE("${firstName}", "${lastName}", "${roleID}", "${managerID}")`;
            connection.query(query, function (err, res) {
                if (err) throw err;
                console.table(res);
                start();
            });
        });
}
//view  all departments
function viewDepartment() {
    const query = "SELECT * FROM department";
    connection.query(query, function (err, res) {
        if (err) throw err;
        console.table(res);
        start();
    });
}
// view all roles
function viewRole() {
    const query = "SELECT * FROM role";
    connection.query(query, function (err, res) {
        if (err) throw err;
        console.table(res);
        start();
    });
}
// view all employees
function viewEmployee() {
    const query = "SELECT * FROM employee";
    connection.query(query, function (err, res) {
        if (err) throw err;
        console.table(res);
        start();
    });
};
