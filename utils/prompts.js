const { registerPrompt } = require('inquirer');
const inquirer = require('inquirer');
const { employeeList, employeeManagerSearch, departmentList, employeeDeparmentSearch, roleList, employeeRoleSearch, budget } = require('./viewDatabase');
const cTable = require('console.table');

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

const searchDepartment = function () {
    return departmentList()
        .then(array => {
            return inquirer.prompt({
                type: 'list',
                name: 'searchDeparment',
                message: 'Select a department:',
                choices: array
            });
        }).then(answer => {
            employeeDeparmentSearch(answer.searchDeparment)
                .then(rows => {
                    console.log('   ');
                    console.table(rows)
                    console.log('   ');
                });
        });
};

const searchRole = function () {
    return roleList().then(array => {
        return inquirer.prompt({
            type: 'list',
            name: 'searchRole',
            message: 'Select a role:',
            choices: array
        });
    })
        .then(answer => {
            employeeRoleSearch(answer.searchRole)
                .then(rows => {
                    console.log('   ');
                    console.table(rows)
                    console.log('   ');
                });
        });
};

const searchManager = function () {
    return employeeList().then(array => {
        return inquirer.prompt({
            type: 'list',
            name: 'searchManager',
            message: 'Select a manager:',
            choices: array
        });
    })
        .then(answer => {
            employeeManagerSearch(answer.searchManager)
                .then(rows => {
                    console.log('   ');
                    console.table(rows)
                    console.log('   ');
                });
        });
};

const displayBudget = function () {
    return departmentList()
        .then(array => {
            return inquirer.prompt({
                type: 'list',
                name: 'searchDeparment',
                message: 'Select a department:',
                choices: array
            });
        }).then(answer => {
            budget(answer.searchDeparment)
                .then(rows => {
                    console.log('   ');
                    console.table(rows)
                    console.log('   ');
                });
        });
};

module.exports = { mainMenu, searchEmployee, searchDepartment, searchRole, searchManager, displayBudget };