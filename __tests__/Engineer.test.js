const Engineer = require('../lib/Engineer');

test('Engineer Class Test', () => {
  // set up the data fro test
  const newEngineer = new Engineer('Dog', '7', 'dog@dog.com', 'githubDog');

  //make assertion
  expect(newEngineer.getName()).toBe('Dog');
  expect(newEngineer.getId()).toBe('7');
  expect(newEngineer.getEmail()).toBe('dog@dog.com');
  expect(newEngineer.getGithub()).toBe('githubDog');
  expect(newEngineer.getRole()).toBe('Engineer');
  expect(newEngineer.getRoleHtml()).toBe(
    ` <li> Github: <a href="https://github.com/${newEngineer.getGithub()}">${newEngineer.getGithub()}</a></li>`
  );
});
