const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
// const inquirer = require('inquirer');
let manager = new Manager('f', 'g', 'e', '09');
console.log(manager.getName());
console.log(manager.getId());
console.log(manager.getEmail());
console.log(manager.getOfficeNumber());
