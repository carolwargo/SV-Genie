describe('Text', () => {
  // TEST CASE: should render empty text
  test('should render empty text', () => {
    const text = new Text(); // CREATE a new Text object with no initial content
    expect(text.render()).toBe(''); // EXPECT the rendered text to be an empty string
  });

  // TEST CASE: should render provided text
  test('should render provided text', () => {
    const text = new Text('Hello, world!'); // CREATE a new Text object with provided content
    expect(text.render()).toBe('Hello, world!'); // EXPECT the rendered text to be the same as the provided content
  });

  // TEST CASE: should set content correctly
  test('should set content correctly', () => {
    const text = new Text(); // CREATE new Text object with no initial content
    text.setContent('Hello, world!'); // SET content of the Text object
    expect(text.render()).toBe('Hello, world!'); // EXPECT the rendered text to be the same as the set content
  });
});
