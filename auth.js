function login(username, password) {
  return username === 'admin' && password === '123';
}

module.exports = { login };
