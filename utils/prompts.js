const { registerPrompt } = require('inquirer');
const inquirer = require('inquirer');

const mainMenu = function () {
    return inquirer.prompt({
        type: 'list',
        name: 'selection',
        message: 'What would you like to do?',
        choices: [
            'View all departments',
            'View all Roles',
            'View all employees',
            'View total utilized budget of a department',
            'Add a department',
            'Add a role',
            'Add an employee',
            'Update an employee role',
            'Update an employee manager',
            'Delete a department',
            'Delete a role',
            'Delete an employee'
        ]
    });
};

const searchEmployee = function () {
    return inquirer.prompt({
        type: 'list',
        name: 'employeeSearch',
        message: 'What employees do you want to view?',
        choices: [
            'View all employees',
            'Search all employees by department',
            'Search all employees by role',
            'Search all employees by manager',
        ]
    });
};

const addDepartment = function () {
    return inquirer.prompt({
        type: 'input',
        name: 'name',
        message: 'What is the name of the new department?'
    });
};

const addRole = function () {
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
            type: 'number',
            name: 'department',
            message: "Which department is the role a part of? (Enter deparment ID)"
        }
    ]);
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
            type: 'number',
            name: 'role',
            message: "What is the employee's role? (enter number from legend above)"
        },
        {
            type: 'number',
            name: 'manager',
            message: "Who is the employee's manager? (Enter manager's ID)"
        }
    ]);
};

module.exports = { mainMenu, searchEmployee, addDepartment, addRole, addEmployee };