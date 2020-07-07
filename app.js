var mysql = require("mysql2");
var inquirer = require("inquirer");

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
