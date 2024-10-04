const User = require('../src/User');

describe('User property tests', () => {
  let user;

  beforeEach(() => {
    user = new User('Aishah Patni', 'testing', 23); // Use Aishah Patni for tests
  });

  test('username should be a string', () => {
    expect(typeof user.username).toBe('string');
  });

  test('password should be a string', () => {
    expect(typeof user.password).toBe('string');
  });

  test('age should be a number', () => {
    expect(typeof user.age).toBe('number');
  });
});

describe('User property assignment tests', () => {
  let user;

  beforeEach(() => {
    user = new User('Aishah Patni', 'testing', 23); // Use Aishah Patni for tests
  });

  test('username should be assigned correctly', () => {
    expect(user.username).toBe('Aishah Patni');
  });

  test('password should be assigned correctly', () => {
    expect(user.password).toBe('testing');
  });

  test('age should be assigned correctly', () => {
    expect(user.age).toBe(23);
  });

  test('loggedIn should be initialized to false', () => {
    expect(user.loggedIn).toBe(false);
  });
});

describe('User method tests', () => {
  let user;

  beforeEach(() => {
    user = new User('Aishah Patni', 'testing', 23); // Use Aishah Patni for tests
  });

  test('login should set loggedIn to true with correct password', () => {
    user.login('testing'); // Correct password
    expect(user.loggedIn).toBe(true);
  });

  test('login should throw an error with incorrect password', () => {
    expect(() => user.login('wrongpassword')).toThrow('Incorrect password');
  });

  test('logout should set loggedIn to false', () => {
    user.login('testing'); // Log in first
    user.logout();
    expect(user.loggedIn).toBe(false);
  });
});
