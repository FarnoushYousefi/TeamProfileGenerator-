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
      teamMember.push(intern);
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
      let engineer = new Engineer(
        answer.enginerName,
        answer.enginerId,
        answer.enginerEmail,
        answer.enginerSchool
      );
      teamMember.push(engineer);
      evaluteAdditionalTeamMemberResult(answer.additionalTeamMember);
    })
    .catch((error) => {});
}
function evaluteAdditionalTeamMemberResult(result) {
  console.log('farnoush');
  if (result == 'Engineer') {
    addEngineer();
  } else if (result == 'Intern') {
    addIntern();
  } else {
    generateHTML();
  }
}
function initialHTML() {
  return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="./teamProfile.css" />
        <title>Team profile</title>
      </head>
      <body>
        <div class="teamNavBar">
          <h2 class="navBarTitle">My Team</h2>
        </div>
        <div class="cardBody">`;
}
function generateTeamMember(teamMember) {
  return ` <div class="teamMemberCard">
    <div class="teamMmberTitle">
      <h3>${teamMember.getName()} - ${teamMember.getRole()}</h3>
    </div>
    <div class="teamMemberBody">
      <ul>
        <li>ID:${teamMember.getId()}</li>
        <li>Name: ${teamMember.getName()}</li>
        <li>
              Email: <a href="mailto:${teamMember.getEmail()}">${teamMember.getEmail()}</a>
            </li>
            ${teamMember.getRoleHtml()}
      </ul>
    </div>
  </div>`;
}
//${teamMember.getRoleHtml()}//
function generateFinalhtml() {
  return ` </div>
  </body>
</html>`;
}
function generateHTML() {
  //   console.log(teamMember);
  //   let HTML = ` <head>
  //   <meta charset="UTF-8" />
  //   <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  //   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  //   <link
  //     href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
  //     rel="stylesheet"
  //     integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
  //     crossorigin="anonymous"
  //   />
  //   <title>teamprofile</title>
  // </head>
  // `;
  //   teamMember.forEach(
  //     (member) =>
  //       (HTML += ` <div class="card w-75">
  //   <div class="card-body">
  //     <h5 class="card-title">${member.name}</h5>
  //     <p class="card-text">
  //       With supporting text below as a natural lead-in to additional content.
  //     </p>
  //     <a href="#" class="btn btn-primary">Button</a>
  //   </div>
  // </div>`)
  //   );
  //   console.log(HTML);
  //fs.writeFileSync(gernerateHtmlFilePath, '');
  let htmlData = initialHTML();
  teamMember.forEach((member) => {
    htmlData += generateTeamMember(member);
  });
  htmlData += generateFinalhtml();
  console.log(htmlData);
  fs.writeFileSync(gernerateHtmlFilePath, htmlData);
}
