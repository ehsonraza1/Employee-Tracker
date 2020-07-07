DROP DATABASE IF EXISTS employee_DB;
CREATE database employee_DB;

USE employee_DB;

CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(100) NULL,
  last_name VARCHAR(100) NULL,
  role_id INT,
  manager_id INT,
  PRIMARY KEY (id)
);
CREATE TABLE role (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(30) NULL,
  salary DECIMAL,
  department_id INT,
  PRIMARY KEY (id)
);
CREATE TABLE department (
 id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(30) NULL,
  PRIMARY KEY (id)
);

INSERT into employee(first_name, last_name, role_id, manager_id) VALUES("Bob", "Smith", 1, 1);
INSERT into employee(first_name, last_name, role_id, manager_id) VALUES("Billy", "Schmith", 2, 2);
INSERT into role(title, salary, department_id ) VALUES("Intern", 20000, 1);
INSERT into role(title, salary, department_id ) VALUES("CEO", 150000, 2);
INSERT into department(name) VALUES("Product Development");
INSERT into department(name) VALUES("Managment");
SELECT * FROM employee;
SELECT * FROM role;
SELECT * FROM department;
-- **department**:

--   - **id** - INT PRIMARY KEY
--   - **name** - VARCHAR(30) to hold department name

-- - **role**:

--   - **id** - INT PRIMARY KEY
--   - **title** - VARCHAR(30) to hold role title
--   - **salary** - DECIMAL to hold role salary
--   - **department_id** - INT to hold reference to department role belongs to

-- - **employee**:

--   - **id** - INT PRIMARY KEY
--   - **first_name** - VARCHAR(30) to hold employee first name
--   - **last_name** - VARCHAR(30) to hold employee last name
--   - **role_id** - INT to hold reference to role employee has
--   - **manager_id** - INT to hold reference to another employee that manager of the 