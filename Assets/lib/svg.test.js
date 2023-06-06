const { Triangle, Circle, Square } = require('./shapes');

describe('SVG', () => {
  test('should render triangle SVG', () => {
    const triangle = new Triangle(); //CREATE a new Triangle object
    triangle.setColor('blue');
    expect(triangle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
  });

  test('should render circle SVG', () => {
    const circle = new Circle(); //CREATE a new circle object
    circle.setColor('red');
    expect(circle.render()).toEqual('<circle cx="150" cy="100" r="80" fill="red" />');
  });

  test('should render square SVG', () => {
    const square = new Square(); //CREATE a new square object
    square.setColor('green');
    expect(square.render()).toEqual('<rect x="50" y="50" width="200" height="200" fill="green" />');
  });
});
