  
USE employee_tracker_db;

INSERT INTO department(name)
VALUES ("Sales");

INSERT INTO department(name)
VALUES ("Engineering");

INSERT INTO department(name)
VALUES ("Finance");

INSERT INTO department(name)
VALUES ("Legal");


INSERT INTO role (title, salary, department_id)
VALUES ('Salesperson', 80000, 1);

INSERT INTO role (title, salary, department_id)
VALUES ('Sales Lead', 100000, 1);

INSERT INTO role (title, salary, department_id)
VALUES ('Software Engineer', 150000, 2);

INSERT INTO role (title, salary, department_id)
VALUES ('Lead Software Engineer', 180000, 2);

INSERT INTO role (title, salary, department_id)
VALUES ('Accountant', 125000, 3);

INSERT INTO role (title, salary, department_id)
VALUES ('Finance Manager', 150000, 3);

INSERT INTO role (title, salary, department_id)
VALUES ('Legal', 200000, 4);

INSERT INTO role (title, salary, department_id)
VALUES ('Legal Manager', 250000, 4);


INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES ('Dirk', 'Nowitzki', 2, null);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES ('Jason', 'Kidd', 4, null);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES ('Jason', 'Terry', 6, null);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES ('Shawn', 'Marion', 8, null);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Tyson', 'Chandler', 1, 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('J.J.', 'Barea', 3, 2);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Peja', 'Stojakovic', 5, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Caron', 'Butler', 7, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Brendan', 'Haywood', 9, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Rodrigue', 'Beaubois', 10, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('DeShawn', 'Stevenson', 11, 2);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Corey', 'Brewer', 12, 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Brian', 'Cardinal', 13, 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Ian', 'Mahinmi', 14, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Dominique', 'Jones', 15, 4);



