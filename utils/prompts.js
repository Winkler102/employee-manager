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
            'Delete an employee',
            'EXIT'
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

module.exports = { mainMenu, searchEmployee };