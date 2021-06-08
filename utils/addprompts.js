const { registerPrompt } = require('inquirer');
const inquirer = require('inquirer');
const { addDepartmentdb, addRoledb, addEmployeedb } = require('./addDatabase')
const { employeeList, roleList, departmentList } = require('./viewDatabase')

const addDepartment = function () {
    return inquirer.prompt({
        type: 'input',
        name: 'name',
        message: 'What is the name of the new department?'
    }).then(answers => {
        addDepartmentdb(answers);
    });
};

const addRole = function () {
    return departmentList()
        .then(array => {
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
                    choices: array
                }
            ]);
        })
        .then(answers => {
            addRoledb(answers)
        });
};

const addEmployee = function () {
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