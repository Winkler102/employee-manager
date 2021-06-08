async function updateEmployeeRoledb(roleChange) {
    const mysql = require('mysql2/promise');
    const params = [roleChange.newrole, roleChange.employee];
    const sql = `UPDATE employee SET role_id =? WHERE id=?`;
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

async function updateEmployeeManagerdb(managerChange) {
    const mysql = require('mysql2/promise');
    const params = [managerChange.manager, managerChange.employee];
    const sql = `UPDATE employee SET manager_id =? WHERE id=?`;
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

module.exports = { updateEmployeeRoledb, updateEmployeeManagerdb };