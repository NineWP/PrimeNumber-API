const { isPrime, server } = require('./index.js');

afterAll(done => {
  server.close(done);
});

test('true_when_x_is_17', () => {
  expect(isPrime(17)).toBe(true);
});

test('false_when_x_is_36', () => {
  expect(isPrime(36)).toBe(false);
});

test('true_when_x_is_13219', () => {
  expect(isPrime(13219)).toBe(true);
});