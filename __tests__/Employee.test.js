const Employee = require('../lib/Employee');

test('Employee Class Test', () => {
  // set up the data fro test
  const newEmployee = new Employee('Dog', '7', 'dog@dog.com');

  //make assertion
  expect(newEmployee.getName()).toBe('Dog');
  expect(newEmployee.getId()).toBe('7');
  expect(newEmployee.getEmail()).toBe('dog@dog.com');
  expect(newEmployee.getRole()).toBe('Employee');
});
