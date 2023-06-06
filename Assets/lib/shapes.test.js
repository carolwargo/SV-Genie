const { Triangle, Circle, Square } = require('./shapes'); // IMPORT the Triangle, Circle, and Square classes

describe('Circle', () => {
  // TEST CASE: should render circle SVG
  test('should render circle SVG', () => {
    const circle = new Circle(); // CREATE a new Circle object
    circle.setColor('blue'); // SET the color of the circle
    expect(circle.render()).toEqual('<circle cx="150" cy="100" r="80" fill="blue" />'); // Expect the rendered SVG to match the expected circle SVG
  });
});

describe('Triangle', () => {
  // TEST CASE: should render triangle SVG
  test('should render triangle SVG', () => {
    const triangle = new Triangle(); // CREATE a new Triangle object
    triangle.setColor('blue'); // Set the color of the triangle
    expect(triangle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />'); // Expect the rendered SVG to match the expected triangle SVG
  });
});

describe('Square', () => {
  // TEST CASE: should render square SVG
  test('should render square SVG', () => {
    const square = new Square(); // CREATE a new Square object
    square.setColor('blue'); // SET the color of the square
    expect(square.render()).toEqual('<rect x="50" y="50" width="200" height="200" fill="blue" />'); // Expect the rendered SVG to match the expected square SVG
  });
});
