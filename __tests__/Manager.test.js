const Manager = require('../lib/Manager');

test('Employee Class Test', () => {
  // set up the data fro test
  const newManager = new Manager('Dog', '7', 'dog@dog.com', '5555');

  //make assertion
  expect(newManager.getName()).toBe('Dog');
  expect(newManager.getId()).toBe('7');
  expect(newManager.getEmail()).toBe('dog@dog.com');
  expect(newManager.getRole()).toBe('Manager');
  expect(newManager.getOfficeNumber()).toBe('5555');
  expect(newManager.getRoleHtml()).toBe(
    `<li>Office Number: ${newManager.getOfficeNumber()}</li>`
  );
});
