const { mainMenu, searchEmployee, addDepartment, addRole, addEmployee } = require('./utils/prompts.js');

const handleSelection = function (menu) {
    console.log(menu.selection);
    if (menu.selection === 'View all employees') {
        searchEmployee()
            .then(employeeMenu => {
                console.log(employeeMenu.employeeSearch);
            });
    };
};

mainMenu()
    .then(handleSelection);