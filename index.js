// index.js for challenge 09

// loading nmp inquierer and file system
const inquirer = require("inquirer");
const fs = require("fs");

// a function for the questions
const questions = [
  {
    type: "input",
    message: "Project Title",
    name: "projectTitle",
  },
  {
    type: "input",
    message: "Description",
    name: "projectDescription",
  },
  {
    type: "input",
    message: "Installation instructions",
    name: "installationInstructions",
  },
  {
    type: "input",
    message: "Usage information",
    name: "usageInformation",
  },
  {
    type: "input",
    message: "Contribution guidelines",
    name: "contributionGuidelines",
  },
  {
    type: "input",
    message: "Test instructions",
    name: "testInstructions",
  },
];

// a function to generate the md file 
function generateMarkdown(data) {
  return `
# Title of the project
${data.projectTitle}
## Table of contents
* [Description of the project](#description-section)
* [Installation instructions](#installation-section)
* [Usage information](#usage-section)
* [Contribution guidelines](#contribution-section)
* [Test instructions](#test-section)
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
`;
}

// inquirer call
inquirer.prompt(questions)
    .then((answers) => {
            fs.writeFile("README09.md", generateMarkdown(answers), (error) => {
            if (error) {
                console.log(error);
                }
            });  
    });
    