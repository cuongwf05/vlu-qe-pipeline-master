// Feature branch test - Quality Gate 1
function login(username, password) {
  return username === 'admin' && password === '999';
}

module.exports = { login };
