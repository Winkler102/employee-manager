const { registerPrompt } = require('inquirer');
const inquirer = require('inquirer');
const { departmentList, roleList, employeeList } = require('./viewDatabase');
const { deleteDepartmentdb, deleteRoledb, deleteEmployeedb } = require('./deleteDatabase');

const deleteDepartment = function () {
    return departmentList()
        .then(array => {
            return inquirer.prompt({
                type: 'list',
                name: 'department',
                message: 'Which department do you want to delete?',
                choices: array
            });
        })
        .then(answers => {
            deleteDepartmentdb(answers);
        });
};

const deleteRole = function () {
    return roleList()
        .then(array => {
            return inquirer.prompt({
                type: 'list',
                name: 'role',
                message: 'Which role do you want to delete?',
                choices: array
            });
        })
        .then(answers => {
            deleteRoledb(answers);
        });
};

const deleteEmployee = function () {
    return employeeList()
        .then(array => {
            return inquirer.prompt({
                type: 'list',
                name: 'employee',
                message: 'Which employee do you want to delete?',
                choices: array
            });
        })
        .then(answers => {
            deleteEmployeedb(answers);
        });
};

module.exports = { deleteDepartment, deleteRole, deleteEmployee };