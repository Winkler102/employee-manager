const { mainMenu, searchEmployee } = require('./utils/prompts.js');
const { addDepartment, addRole, addEmployee } = require('./utils/addprompts');
const { updateRole, updateManager } = require('./utils/updateprompts');
const { deleteDepartment, deleteRole, deleteEmployee } = require('./utils/deleteprompts');

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