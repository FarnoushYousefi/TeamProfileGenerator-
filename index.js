const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
var inquirer = require('inquirer');
// require file system to generate the HTMl
const fs = require('fs');
//generate the HTML file path

// global Object to hold the team members
let teamMember = [];

const gernerateHtmlFilePath = './dist/teamprofile.html';
inquirer
  .prompt([
    {
      name: 'managerName',
      type: 'input',
      message: "Enter team manager's name",
    },
    {
      name: 'managerId',
      type: 'input',
      message: "Enter team manager's ID",
    },
    {
      name: 'managerEmail',
      type: 'input',
      message: "Enter team manager's Email",
    },
    {
      name: 'managerOfficeNumber',
      type: 'input',
      message: "Enter team manager's Office Number",
    },
    {
      name: 'additionalTeamMember',
      type: 'list',
      message: 'select team members to add',
      choices: ['Engineer', 'Intern'],
    },
  ])
  .then((answer) => {
    let manager = new Manager(
      answer.managerName,
      answer.managerId,
      answer.managerEmail,
      answer.managerOfficeNumber
    );
    teamMember.push(manager);
    evaluteAdditionalTeamMemberResult(answer.additionalTeamMember);
  })
  .catch((error) => {});
// call this as many times as members Intern need to bed added
function addIntern() {
  inquirer
    .prompt([
      {
        name: 'InternName',
        type: 'input',
        message: "Enter team Intern's name",
      },
      {
        name: 'InternId',
        type: 'input',
        message: "Enter team Intern's ID",
      },
      {
        name: 'InternEmail',
        type: 'input',
        message: "Enter Intern's Email",
      },
      {
        name: 'internSchool',
        type: 'input',
        message: "Enter Intern's school",
      },
      {
        name: 'additionalTeamMember',
        type: 'list',
        message: 'select team members to add',
        choices: ['Engineer', 'Intern', 'Exit'],
      },
    ])
    .then((answer) => {
      let intern = new Intern(
        answer.InternName,
        answer.InternId,
        answer.InternEmail,
        answer.internSchool
      );
      evaluteAdditionalTeamMemberResult(answer.additionalTeamMember);
    })
    .catch((error) => {});
}

// call it as many engineer need to add
function addEngineer() {
  inquirer
    .prompt([
      {
        name: 'enginerName',
        type: 'input',
        message: "Enter engineer 's name",
      },
      {
        name: 'enginerId',
        type: 'input',
        message: "Enter team enginer's ID",
      },
      {
        name: 'enginerEmail',
        type: 'input',
        message: "Enter enginer's Email",
      },
      {
        name: 'enginerSchool',
        type: 'input',
        message: "Enter engineer's school",
      },
      {
        name: 'additionalTeamMember',
        type: 'list',
        message: 'select team members to add',
        choices: ['Engineer', 'Intern', 'Exit'],
      },
    ])
    .then((answer) => {
      let intern = new Engineer(
        answer.enginerName,
        answer.enginerId,
        answer.enginerEmail,
        answer.enginerSchool
      );
      teamMember.push(intern);
      evaluteAdditionalTeamMemberResult(answer.additionalTeamMember);
    })
    .catch((error) => {});
}
function evaluteAdditionalTeamMemberResult(result) {
  if (answer.additionalTeamMember == 'Engineer') {
    addEngineer();
  } else if (answer.additionalTeamMember == 'Intern') {
    addIntern();
  } else {
    generateHTML();
  }
}
function generateHTML() {
  fs.writeFileSync(gernerateHtmlFilePath, '');
}
