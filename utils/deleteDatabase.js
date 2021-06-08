async function deleteDepartmentdb(departmentObj) {
    const mysql = require('mysql2/promise');
    const sql = `DELETE FROM department WHERE id=?`;
    const params = [departmentObj.department];
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'open',
        database: 'employeesManage'
    });

    [rows, fields] = await connection.execute(sql, params);
    connection.end()
    return;
};

async function deleteRoledb(roleObj) {
    const mysql = require('mysql2/promise');
    const sql = `DELETE FROM role WHERE id=?`;
    const params = [roleObj.role];
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'open',
        database: 'employeesManage'
    });

    [rows, fields] = await connection.execute(sql, params);
    connection.end()
    return;
};

async function deleteEmployeedb(employeeObj) {
    const mysql = require('mysql2/promise');
    const sql = `DELETE FROM employee WHERE id=?`;
    const params = [employeeObj.employee];
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'open',
        database: 'employeesManage'
    });

    [rows, fields] = await connection.execute(sql, params);
    connection.end()
    return;
};

module.exports = { deleteDepartmentdb, deleteRoledb, deleteEmployeedb };