const Color = require('./color');

describe('Color', () => {
  test('should initialize with empty value', () => {
    const color = new Color();
    expect(color.getColorValue()).toBe('');
  });

  test('should set color value correctly', () => {
    const color = new Color();
    color.setValue('blue');
    expect(color.getColorValue()).toBe('blue');
  });
});
