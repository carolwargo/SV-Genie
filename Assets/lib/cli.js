// IMPORT required modules in  proper order
const fs = require('fs'); // File system module for reading and writing files
const inquirer = require('inquirer'); // Library for prompting user input
const chalk = require('chalk'); // Library for styling command-line output
const { Triangle, Circle, Square } = require('./shapes'); // IMPORT shape classes
const Text = require('./text'); // IMPORT Text class
const Color = require('./color'); // IMPORT Color class

// DEFINE CLI class
class CLI {
  constructor() {}

  // RUN the logo generation process
  async run() {
    // PROMPT user for input
    const userInput = await this.promptUser();

    // CREATE the appropriate shape object based on user input
    const shape = this.createShape(userInput.shape);
    shape.setColor(userInput.shapeColor);

    // CREATE Text and Color objects based on user input
    const text = new Text(userInput.text);
    const textColor = new Color(userInput.textColor);

    // GENERATE SVG content
    const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
      ${shape.render()}
      <text x="150" y="100" text-anchor="middle" fill="${textColor.getColorValue()}">${text.render()}</text>
    </svg>`;

    // CREATE SVG file
    this.createSVGFile(svgContent);
  }

  // PROMPT user for input using inquirer
  async promptUser() {
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

  // CREATE SVG file using fs module
  createSVGFile(content) {
    fs.writeFileSync('logo.svg', content); // WRITE SVG content to 'logo.svg' file
    console.log(chalk.green('Generated logo.svg')); // DISPLAY success message in green color
  }

  // CREATE shape object based on user input
  createShape(shapeType) {
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
}

module.exports = CLI; // EXPORT the CLI class
