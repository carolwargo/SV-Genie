const Text = require('../lib/text');

describe('Text', () => {
  test('should render empty text', () => {
    const text = new Text();
    expect(text.render()).toBe('');
  });

  test('should render provided text', () => {
    const text = new Text('Hello, world!');
    expect(text.render()).toBe('Hello, world!');
  });

  test('should set content correctly', () => {
    const text = new Text();
    text.setContent('Hello, world!');
    expect(text.render()).toBe('Hello, world!');
  });
});
