const { registerPrompt } = require('inquirer');
const inquirer = require('inquirer');

const addDepartment = function () {
    return inquirer.prompt({
        type: 'input',
        name: 'name',
        message: 'What is the name of the new department?'
    });
};

const addRole = function (departmentArray) {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the new role?'
        },
        {
            type: 'number',
            name: 'salary',
            message: "What is the role's salary?"
        },
        {
            type: 'list',
            name: 'department',
            message: "Which department is the role a part of?",
            choices: departmentArray
        }
    ]);
};

const addEmployee = function (roleArray, employeeArray) {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'firstName',
            message: 'What is the first name of the new employee?'
        },
        {
            type: 'input',
            name: 'lastName',
            message: 'What is the last name of the new employee?'
        },
        {
            type: 'list',
            name: 'role',
            message: "What is the employee's role?",
            choices: roleArray
        },
        {
            type: 'number',
            name: 'manager',
            message: "Who is the employee's manager?",
            choices: employeeArray
        }
    ]);
};

module.exports = { addDepartment, addRole, addEmployee };