async function viewDepartments() {
    const mysql = require('mysql2/promise');
    const sql = `SELECT department.id AS ID, department.name AS Deparment FROM department`;
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'open',
        database: 'employeesManage'
    });

    [rows, fields] = await connection.execute(sql);

    connection.end()
    return rows;
};

async function viewRoles() {
    const mysql = require('mysql2/promise');
    const sql = `SELECT role.id AS ID, role.title AS Role, role.salary AS Salary, department.name AS Department FROM role JOIN department ON role.department_id=department.id ORDER BY id ASC;`;
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'open',
        database: 'employeesManage'
    });

    [rows, fields] = await connection.execute(sql);

    connection.end()
    return rows;
};

async function viewEmployees() {
    const mysql = require('mysql2/promise');
    const sql = `SELECT e.id AS ID, CONCAT(e.last_name, ', ', e.first_name) AS Name, department.name AS Deparment, role.title AS Role, role.salary AS Salary, CONCAT(m.last_name, ', ', m.first_name) AS Manager FROM employee e JOIN role ON e.role_id=role.id JOIN department ON role.department_id=department.id JOIN employee m on e.manager_id=m.id`;
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'open',
        database: 'employeesManage'
    });

    [rows, fields] = await connection.execute(sql);

    connection.end()
    return rows;
};

async function employeeList() {
    const mysql = require('mysql2/promise');
    const sql = `SELECT CONCAT(employee.last_name, ', ', employee.first_name) AS Name, employee.id as ID FROM employee`;
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'open',
        database: 'employeesManage'
    });

    [rows, fields] = await connection.execute(sql);

    connection.end()
    let array = [];
    rows.forEach(element => {
        const name = element.Name;
        const id = element.ID;
        array.push({ name: name, value: id })
    });

    return array;
};

async function employeeManagerSearch(manager) {
    const mysql = require('mysql2/promise');
    const sql = `SELECT e.id AS ID, CONCAT(e.last_name, ', ', e.first_name) AS Name, department.name AS Deparment, role.title AS Role, role.salary AS Salary, CONCAT(m.last_name, ', ', m.first_name) AS Manager FROM employee e JOIN role ON e.role_id=role.id JOIN department ON role.department_id=department.id JOIN employee m on e.manager_id=m.id WHERE CONCAT(m.last_name, ', ', m.first_name)=?`;
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'open',
        database: 'employeesManage'
    });

    [rows, fields] = await connection.execute(sql, [manager]);

    connection.end()
    return rows;
};

async function departmentList() {
    const mysql = require('mysql2/promise');
    const sql = `SELECT department.name AS Department, department.id AS ID FROM department`;
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'open',
        database: 'employeesManage'
    });

    [rows, fields] = await connection.execute(sql);

    connection.end()
    let array = [];
    rows.forEach(element => {
        const department = element.Department;
        const id = element.ID;
        array.push({ name: department, value: id })
    });

    return array;
}

async function employeeDeparmentSearch(department) {
    const mysql = require('mysql2/promise');
    const sql = `SELECT e.id AS ID, CONCAT(e.last_name, ', ', e.first_name) AS Name, department.name AS Deparment, role.title AS Role, role.salary AS Salary, CONCAT(m.last_name, ', ', m.first_name) AS Manager FROM employee e JOIN role ON e.role_id=role.id JOIN department ON role.department_id=department.id JOIN employee m on e.manager_id=m.id WHERE department.name=?`;
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'open',
        database: 'employeesManage'
    });

    [rows, fields] = await connection.execute(sql, [department]);

    connection.end()
    return rows;
};

async function roleList() {
    const mysql = require('mysql2/promise');
    const sql = `SELECT role.title AS Role, role.id AS ID FROM role`;
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'open',
        database: 'employeesManage'
    });

    [rows, fields] = await connection.execute(sql);

    connection.end()
    let array = [];
    rows.forEach(element => {
        const role = element.Role;
        const id = element.ID;
        array.push({ name: role, value: id })
    });

    return array;
}

async function employeeRoleSearch(role) {
    const mysql = require('mysql2/promise');
    const sql = `SELECT e.id AS ID, CONCAT(e.last_name, ', ', e.first_name) AS Name, department.name AS Deparment, role.title AS Role, role.salary AS Salary, CONCAT(m.last_name, ', ', m.first_name) AS Manager FROM employee e JOIN role ON e.role_id=role.id JOIN department ON role.department_id=department.id JOIN employee m on e.manager_id=m.id WHERE role.title=?`;
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'open',
        database: 'employeesManage'
    });

    [rows, fields] = await connection.execute(sql, [role]);

    connection.end()
    return rows;
};

async function budget(department) {
    const mysql = require('mysql2/promise');
    const sql = `SELECT SUM(role.salary) AS Budget from employee JOIN role ON employee.role_id=role.id JOIN department ON role.department_id=department.id WHERE department.name=?`;
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'open',
        database: 'employeesManage'
    });

    [rows, fields] = await connection.execute(sql, [department]);

    connection.end()
    return rows;
};

module.exports = { viewDepartments, viewRoles, viewEmployees, employeeList, employeeManagerSearch, departmentList, employeeDeparmentSearch, roleList, employeeRoleSearch, budget }