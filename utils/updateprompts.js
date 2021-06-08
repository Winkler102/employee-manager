const { registerPrompt } = require('inquirer');
const inquirer = require('inquirer');
const { updateEmployeeRoledb, updateEmployeeManagerdb } = require('./updateDatabase');
const { employeeList, roleList } = require('./viewDatabase');

const updateRole = function () {
    let employeeArray = [];
    let roleArray = [];
    return employeeList()
        .then(array => {
            array.forEach(element => {
                employeeArray.push(element);
            });
        })
        .then(roleList)
        .then(array => {
            array.forEach(element => {
                roleArray.push(element);
            })
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
        })
        .then(answers => {
            console.log(answers);
            updateEmployeeRoledb(answers)
        });
};

const updateManager = function () {
    return employeeList()
        .then(array => {
            return inquirer.prompt([
                {
                    type: 'list',
                    name: 'employee',
                    message: 'Which Employee do you want to change manager?',
                    choices: array
                },
                {
                    type: 'list',
                    name: 'manager',
                    message: 'Who is their new manager?',
                    choices: array
                }
            ]);
        })
        .then(answers => {
            updateEmployeeManagerdb(answers);
        });
};

module.exports = { updateRole, updateManager }