var mysql = require("mysql2");
var inquirer = require("inquirer");
var console = require("console.table");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password TODO Change database name
  password: "",
  database: "employee_DB",
});

figlet("Employee Manager", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});

//TODO
// 3 Functions create Department, Employee, and Role - CRUD Manipulation
//Differentiate b/w functions that are manipulating the DB and
//functions collecting data from inquirer

inquirer
  .prompt({
    name: "action",
    type: "list",
    message: "What would you like to review?",
    choices: [
      "View All Company Employees",
      "View Employees By Role",
      "View Employees By Department",
      "Add Company Employee",
      "Add Company Role",
      "Add Company Department",
      "Update Employees Role",
      "Exit Application",
    ],
  })
  .then(function (answer) {
    switch (answer.action) {
      case "View All Company Employees":
        viewAllEmployees();
        break;

      case "View Employees By Role":
        viewEmployeeRole();
        break;

      case "View Employees By Department":
        viewEmployeeDept();
        break;

      case "Add Company Employee":
        addEmployee();
        break;

      case "Add Company Role":
        addRole();
        break;

      case "Add Company Department":
        addDept();
        break;

      case "Update Employee Role":
        updateEmployeeRole();
        break;

      case "Exit":
        connection.end();
        break;
    }
  });
/*
// connect to the mysql server and sql database
connection.connect(function (err) {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
  createDepartment("Accounting");
  // start();
});
function start() {
  connection.query("SELECT * from department", function (
    error,
    results,
    fields
  ) {
    if (error) throw error;
    console.log(results);
  });
}
//TODO
// 3 Functions create Department, Employee, and Role - CRUD Manipulation
//Differentiate b/w functions that are manipulating the DB and
//functions collecting data from inquirer
function createDepartment(name) {
  connection.query(`INSERT into department(name) VALUES("${name}")`, function (
    error,
    results,
    fields
  ) {
    if (error) throw error;
    console.log(results);
    start();
  });
}
*/
