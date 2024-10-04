const User = require('../src/User')

const user = new User('Joe Bloggs', 'test123', 21)

describe('User property tests', () => {
  test('username should be a string', () => {
    expect(typeof user.username).toBe('string')
  })

  const User = require('../src/User')

describe('User property assignment tests', () => {
  let user;

  beforeEach(() => {
    user = new User('Joe Bloggs', 'test123', 21)
  })

  test('username should be assigned correctly', () => {
    expect(user.username).toBe('Joe Bloggs')
  })

  test('password should be assigned correctly', () => {
    expect(user.password).toBe('test123')
  })

  test('age should be assigned correctly', () => {
    expect(user.age).toBe(21)
  })

  test('loggedIn should be initialized to false', () => {
    expect(user.loggedIn).toBe(false)
  })
})


  test('password should be a string', () => {
    expect(typeof user.password).toBe('string')
  })

  test('age should be a number', () => {
    expect(typeof user.age).toBe('number')
  })
})

describe('User method tests', () => {
  test('login should set loggedIn to true with correct password', () => {
    user.login('test123')
    expect(user.loggedIn).toBe(true)
  })

  test('login should throw an error with incorrect password', () => {
    expect(() => user.login('wrongpassword')).toThrow('Incorrect password')
  })

  test('logout should set loggedIn to false', () => {
    user.logout()
    expect(user.loggedIn).toBe(false)
  })
})
