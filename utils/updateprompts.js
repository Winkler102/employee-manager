const { registerPrompt } = require('inquirer');
const inquirer = require('inquirer');

const updateRole = function (employeeArray, roleArray) {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'employee',
            message: 'Which Employee do you want to change the role of?',
            choices: employeeArray
        },
        {
            type: 'list',
            name: 'newrole',
            message: 'What is their new role?',
            choices: roleArray
        }
    ]);
};

const updateManager = function (employeeArray) {
    let employee = '';
    let manager = '';
    inquirer.prompt([
        {
            type: 'list',
            name: 'employee',
            message: 'Which Employee do you want to change the role of?',
            choices: employeeArray
        }
    ]).then(selectedEmployee => {
        employee = selectedEmployee.employee;
        const managerArray = employeeArray.filter(employee => employee != selectedEmployee.employee)
        manager = inquirer.prompt({
            type: 'list',
            name: 'manager',
            message: 'Who is their new manager?',
            choices: managerArray
        }).then(selectedManager => {
            manager = selectedManager.manager;
        })
    });
};

module.exports = { updateRole, updateManager }