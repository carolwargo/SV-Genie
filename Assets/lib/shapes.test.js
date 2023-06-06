const { Triangle, Circle, Square } = require('./shapes');

describe('Circle', () => {
  test('should render circle SVG', () => {
    const circle = new Circle();
    circle.setColor('blue');
    expect(circle.render()).toEqual('<circle cx="150" cy="100" r="80" fill="blue" />');
  });
});

describe('Triangle', () => {
  test('should render triangle SVG', () => {
    const triangle = new Triangle();
    triangle.setColor('blue');
    expect(triangle.render()).toEqual(
      '<polygon points="150, 18 244, 182 56, 182" fill="blue" />'
    );
  });
});

describe('Square', () => {
  test('should render square SVG', () => {
    const square = new Square();
    square.setColor('blue');
    expect(square.render()).toEqual(
      '<rect x="50" y="50" width="200" height="200" fill="blue" />'
    );
  });
});
