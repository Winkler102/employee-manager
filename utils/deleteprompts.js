const { registerPrompt } = require('inquirer');
const inquirer = require('inquirer');

const deleteDepartment = function (departmentArray) {
    return inquirer.prompt({
        type: 'list',
        name: 'department',
        message: 'Which department do you want to delete?',
        choices: departmentArray
    });
};

const deleteRole = function (roleArray) {
    return inquirer.prompt({
        type: 'list',
        name: 'role',
        message: 'Which role do you want to delete?',
        choices: roleArray
    });
};

const deleteEmployee = function (employeeArray) {
    return inquirer.prompt({
        type: 'list',
        name: 'employee',
        message: 'Which employee do you want to delete?',
        choices: employeeArray
    });
};

module.exports = { deleteDepartment, deleteRole, deleteEmployee };