const fs = require('fs');
const inquirer = require('inquirer');
const chalk = require('chalk');
const { Triangle, Circle, Square } = require('./lib/shapes');

// Prompt user for input
function promptUser() {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters:',
      validate: (input) => input.length <= 3,
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter the text color:',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape:',
      choices: ['circle', 'triangle', 'square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter the shape color:',
    },
  ]);
}

// Create SVG file
function createSVGFile(content) {
  fs.writeFileSync('logo.svg', content);
  console.log(chalk.green('Generated logo.svg'));
}

// Generate logo
async function generateLogo() {
  const userInput = await promptUser();

  const shape = createShape(userInput.shape);
  shape.setColor(userInput.shapeColor);

  const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
    ${shape.render()}
    <text x="150" y="100" text-anchor="middle" fill="${userInput.textColor}">${userInput.text}</text>
  </svg>`;

  createSVGFile(svgContent);
}

// Create shape object based on user input
function createShape(shapeType) {
  switch (shapeType) {
    case 'circle':
      return new Circle();
    case 'triangle':
      return new Triangle();
    case 'square':
      return new Square();
    default:
      throw new Error('Invalid shape type.');
  }
}

// Run the logo generation process
generateLogo();
