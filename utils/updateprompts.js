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
    inquirer.prompt([
        {
            type: 'list',
            name: 'employee',
            message: 'Which Employee do you want to change the role of?',
            choices: employeeArray
        }
    ]).then(selectedEmployee => {
        const managerArray = employeeArray.filter(employee => employee != selectedEmployee.employee)
        inquirer.prompt({
            type: 'list',
            name: 'employee',
            message: 'Who is their new manager?',
            choices: managerArray
        });
    })
};

module.exports = { updateRole, updateManager }