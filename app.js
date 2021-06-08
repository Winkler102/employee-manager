const cTable = require('console.table');
const { mainMenu, searchEmployee, searchDepartment, searchRole, searchManager, displayBudget } = require('./utils/prompts.js');
const { addDepartment, addRole, addEmployee } = require('./utils/addprompts');
const { updateRole, updateManager } = require('./utils/updateprompts');
const { deleteDepartment, deleteRole, deleteEmployee } = require('./utils/deleteprompts');
const { viewDepartments, viewRoles, viewEmployees, budget } = require('./utils/viewDatabase');

const handleSelection = function (menu) {
    switch (menu.selection) {
        case 'View all departments':
            viewDepartments().then(rows => {
                console.log('    ');
                console.table(rows);
                console.log('    ');
            })
                .then(startMenu);
            break;
        case 'View all Roles':
            viewRoles().then(rows => {
                console.log('    ');
                console.table(rows);
                console.log('    ');
            })
                .then(startMenu);
            break;
        case 'View all employees':
            searchEmployee()
                .then(employeeMenu => {
                    console.log(employeeMenu.employeeSearch);
                    switch (employeeMenu.employeeSearch) {
                        case 'View all employees':
                            viewEmployees().then(rows => {
                                console.log('    ');
                                console.table(rows);
                                console.log('    ');
                            })
                                .then(startMenu);
                            break;
                        case 'Search all employees by department':
                            searchDepartment().then(() => {
                                setTimeout(startMenu, 50);
                            });
                            break;
                        case 'Search all employees by role':
                            searchRole().then(() => {
                                setTimeout(startMenu, 50);
                            });
                            break;
                        case 'Search all employees by manager':
                            searchManager().then(() => {
                                setTimeout(startMenu, 50);
                            });
                            break;
                        default: break;
                    };
                });
            break;
        case 'View total utilized budget of a department':
            displayBudget().then(() => {
                setTimeout(startMenu, 50);
            });
            break;
        case 'Add a department':
            addDepartment().then(() => {
                setTimeout(startMenu, 50);
            });
            break;
        case 'Add a role':
            addRole().then(() => {
                setTimeout(startMenu, 50);
            });
            break;
        case 'Add an employee':
            addEmployee().then(() => {
                setTimeout(startMenu, 50);
            });
            break;
        case 'Update an employee role':
            console.log('8');
            break;
        case 'Update an employee manager':
            console.log('9');
            break;
        case 'Delete a department':
            console.log('10');
            break;
        case 'Delete a role':
            console.log('11');
            break;
        case 'Delete an employee':
            console.log('12');
            break;
        default:
            console.log('Goodnight');
            return;
    }
};

const startMenu = function () {
    mainMenu()
        .then(handleSelection);
};

startMenu();