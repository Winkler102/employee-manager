INSERT INTO department (name)
VALUES
    ('Marketing'),
    ('R&D');

INSERT INTO role (title, salary, department_id)
VALUES
    ('Manager', 1.01, 1),
    ('Developer', 10.01, 2);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ('John', 'Doe', 1, NULL),
    ('Lawn', 'Joe', 2, 1),
    ('Mawn', 'Moe', 1, 1);

UPDATE employee SET manager_id =1 WHERE id=1;