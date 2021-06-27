const Intern = require('../lib/Intern');

test('Employee Class Test', () => {
  // set up the data fro test
  const newIntern = new Intern('Dog', '7', 'dog@dog.com', 'some');

  //make assertion
  expect(newIntern.getName()).toBe('Dog');
  expect(newIntern.getId()).toBe('7');
  expect(newIntern.getEmail()).toBe('dog@dog.com');
  expect(newIntern.getRole()).toBe('Intern');
  expect(newIntern.getSchool()).toBe('some');
  expect(newIntern.getRoleHtml()).toBe(
    ` <li> School: ${newIntern.getSchool()}</li>`
  );
});
