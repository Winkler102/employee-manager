INSERT INTO department (id, name)
VALUES
    (5, 'marketing'),
    (6, 'farting');

INSERT INTO role (id, title, salary, department_id)
VALUES
    (1, 'Manager', 1.01, 6),
    (2, 'Tacolord', 112365.02, 5);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES
    (321, 'John', 'Doe', 1, NULL),
    (123, 'Lawn', 'Joe', 2, 321),
    (456, 'Mawn', 'Moe', 1, 123);
