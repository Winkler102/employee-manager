async function addDepartmentdb(departmentObj) {
    const mysql = require('mysql2/promise');
    const sql = `INSERT INTO department (name) VALUES ('${departmentObj.name}')`;
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'open',
        database: 'employeesManage'
    });

    [rows, fields] = await connection.execute(sql);

    connection.end()
    return;
};

async function addRoledb(roleObj) {
    console.log(roleObj);
    const mysql = require('mysql2/promise');
    const sql = `INSERT INTO role (title, salary, department_id) VALUES ('${roleObj.name}', ${roleObj.salary}, ${roleObj.department})`;
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'open',
        database: 'employeesManage'
    });

    [rows, fields] = await connection.execute(sql);

    connection.end()
    return;
};

async function addEmployeedb(roleObj) {
    console.log(roleObj);
    const mysql = require('mysql2/promise');
    const sql = `INSERT INTO role (title, salary, department_id) VALUES ('${roleObj.name}', ${roleObj.salary}, ${roleObj.department})`;
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'open',
        database: 'employeesManage'
    });

    [rows, fields] = await connection.execute(sql);

    connection.end()
    return;
};

module.exports = { addDepartmentdb, addRoledb, addEmployeedb };