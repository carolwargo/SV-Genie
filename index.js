const CLI = require("./Assets/lib/cli");

new CLI().run();


//INSTALLATIONS
//npm install inquirer
//npm install chalk

const inquirer = require('inquirer');
const chalk = require('chalk');
const path = require('path');

console.log(chalk.green('Logo saved as ./output/logo.svg'));


//PROMPTS for User imput
const inquirer = require('inquirer');

inquirer.prompt([
  {
    type: 'list',
    name: 'color',
    message: 'Select a color:',
    choices: ['red', 'blue', 'green', 'yellow'],
  },
  {
    type: 'list',
    name: 'shape',
    message: 'Select a shape:',
    choices: ['circle', 'square', 'triangle', 'diamond'],
  },
  {
    type: 'input',
    name: 'text',
    message: 'Enter the text for the logo:',
  },
])
.then((answers) => {
  console.log(answers);
});

//template literal to GENERATE SVG
const fs = require('fs');

const logoTemplate = `
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="200" height="200" fill="${answers.color}" />
  <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle">${answers.text}</text>
</svg>
`;

fs.writeFile('./output/logo.svg', logoTemplate, (err) => {
  if (err) throw err;
  console.log('Logo saved as ./output/logo.svg');
});

