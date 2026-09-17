const { login } = require('./auth');

describe('Regression Test - Login', () => {
  test('valid credentials should return true', () => {
    expect(login('admin', '123')).toBe(true);
  });

  test('wrong password should return false', () => {
    expect(login('admin', 'wrong')).toBe(false);
  });

  test('empty username should return false', () => {
    expect(login('', '123')).toBe(false);
  });

  test('empty password should return false', () => {
    expect(login('admin', '')).toBe(false);
  });

  test('password containing special characters should not authenticate', () => {
    expect(login('admin', '123!@#')).toBe(false);
  });

  test('wrong username should return false', () => {
    expect(login('administrator', '123')).toBe(false);
  });

  test('locked-account style username should not authenticate', () => {
    expect(login('locked', '123')).toBe(false);
  });
});
