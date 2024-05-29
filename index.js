// index.js for challenge 09

// loading nmp inquierer and file system
const inquirer = require("inquirer");
const licenseModule = require("./licenseMod.js")
const fs = require("fs");

// a function for the questions
const questions = [
  {
    type: "input",
    message: "Project Title:",
    name: "projectTitle",
  },
  {
    type: "list",
    message: "Select license:",
    name: "licenseOption",
    choices: ['MIT', 'Apache', 'BlueOak', 'Mozilla'],  
  },
  {
    type: "input",
    message: "Description:",
    name: "projectDescription",
  },
  {
    type: "input",
    message: "Installation instructions:",
    name: "installationInstructions",
  },
  {
    type: "input",
    message: "Usage information:",
    name: "usageInformation",
  },
  {
    type: "input",
    message: "Contribution guidelines:",
    name: "contributionGuidelines",
  },
  {
    type: "input",
    message: "Test instructions:",
    name: "testInstructions",
  },
  {
    type: "input",
    message: "GitHub user name:",
    name: "githubUsername",
  },
  {
    type: "input",
    message: "eMail address:",
    name: "emailAddress",
  },
];

// a function to generate the md file 
function generateMarkdown(data,text,label) {
  return `
#
# ${data.projectTitle}
######
![Static Badge]${label}
###
## Table of contents
* [Description of the project](#description-section)
* [Installation instructions](#installation-section)
* [Usage information](#usage-section)
* [Contribution guidelines](#contribution-section)
* [Test instructions](#test-section)
* [Questions](#questions-section)
* [License information](#license-section)
<a id="description-section"></a>
## Description of the project
${data.projectDescription}
<a id="installation-section"></a>
## Installation instructions
${data.installationInstructions}
<a id="usage-section"></a>
## Usage information
${data.usageInformation}
<a id="contribution-section"></a>
## Contribution guidelines
${data.contributionGuidelines}
<a id="test-section"></a>
## Test instructions
${data.testInstructions}
<a id="questions-section"></a>
## Questions
If you have any doubts, please contact me...
######
This is my GitHub profile
######
[GitHub](https://github.com/${data.githubUsername})
######
This is my email address
######
${data.emailAddress}
####
<a id="license-section"></a>
#### License information
${text}
`;
}

function init() {
    inquirer.prompt(questions)
        .then( (answers) => {
            var text = licenseModule.textofLicense(answers.licenseOption);
            var bagdeLabel = `(https://img.shields.io/badge/license_by-${answers.licenseOption}-blue.svg)`;
             fs.writeFile("README09.md", generateMarkdown(answers,text,bagdeLabel), (error) => {
             if (error) {
                 console.log(error);
                 };
             });  
        });
};

init();
