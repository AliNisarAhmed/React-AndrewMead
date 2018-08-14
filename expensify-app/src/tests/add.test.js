const add = (a, b) => a + b;
const generateGreeting = (name) => `Hello ${name}!`;

test('should add two numbers', () => {
  const result = add(3, 4);

  // if (result !== 7) {
  //   throw new Error(`You added 4 and 3, the result was ${result}, expected 7`);
  // }

  expect(result).toBe(7);
})

test('should return greeting string', () => {
  const result = generateGreeting('Ali');

  expect(result).toBe('Hello Ali!');
})