const { login } = require('./auth');

describe('Smoke Test - Login', () => {
  test('valid admin credentials should return true', () => {
    expect(login('admin', '123')).toBe(true);
  });
});
