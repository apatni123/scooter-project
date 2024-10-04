const User = require('../src/User');
const ScooterApp = require('../src/ScooterApp');

let scooterApp;

beforeEach(() => {
  scooterApp = new ScooterApp();  // Reset the ScooterApp before each test
});

// ScooterApp tests here

// register user
describe('registerUser method tests', () => {
  test('Should return instance of User when registering a new user', () => {
    const response = scooterApp.registerUser('Aishah Patni', 'testing', 23);
    expect(response).toBeInstanceOf(User);
  });

  test('Should throw error if user already registered', () => {
    scooterApp.registerUser('Aishah Patni', 'testing', 23);
    expect(() => {
      scooterApp.registerUser('Aishah Patni', 'testing', 23);
    }).toThrow('user already registered');
  });

  test('Should throw error if user is too young', () => {
    expect(() => {
      scooterApp.registerUser('Jane Doe', 'password', 16);
    }).toThrow('too young');
  });
});

// log in
describe('loginUser method tests', () => {
  beforeEach(() => {
    scooterApp.registerUser('Aishah Patni', 'testing', 23);
  });

  test('Should successfully log in the user', () => {
    const user = scooterApp.registeredUsers['Aishah Patni'];
    scooterApp.loginUser('Aishah Patni', 'testing');
    expect(user.loggedIn).toBe(true);
  });

  test('Should throw error for incorrect username or password', () => {
    expect(() => {
      scooterApp.loginUser('Aishah Patni', 'wrongpassword');
    }).toThrow('Incorrect password');
  });

  test('Should throw error if user is not found', () => {
    expect(() => {
      scooterApp.loginUser('Jane Doe', 'password123');
    }).toThrow('Username or password not found');
  });
});

// log out
describe('logoutUser method tests', () => {
  beforeEach(() => {
    scooterApp.registerUser('Aishah Patni', 'testing', 23);
    scooterApp.loginUser('Aishah Patni', 'testing');
  });

  test('Should successfully log out the user', () => {
    const user = scooterApp.registeredUsers['Aishah Patni'];
    scooterApp.logoutUser('Aishah Patni');
    expect(user.loggedIn).toBe(false);
  });

  test('Should throw error if user is not logged in', () => {
    scooterApp.logoutUser('Aishah Patni');
    expect(() => {
      scooterApp.logoutUser('Aishah Patni');
    }).toThrow('no such user is logged in');
  });
});

// rent scooter
describe('rentScooter method tests', () => {
  let user, scooter;

  beforeEach(() => {
    scooterApp.registerUser('Aishah Patni', 'testing', 23);
    scooterApp.loginUser('Aishah Patni', 'testing');
    scooter = scooterApp.createScooter('Redbridge');
    user = scooterApp.registeredUsers['Aishah Patni'];
  });

  test('Should successfully rent a scooter', () => {
    scooterApp.rentScooter(scooter, user);
    expect(scooter.station).toBe(null);
    expect(scooter.user).toBe(user);
  });

  test('Should throw error if scooter is already rented', () => {
    scooterApp.rentScooter(scooter, user);
    expect(() => {
      scooterApp.rentScooter(scooter, user);
    }).toThrow('Scooter already rented');
  });
});

// dock scooter
describe('dockScooter method tests', () => {
  let user, scooter;

  beforeEach(() => {
    scooterApp.registerUser('Aishah Patni', 'testing', 23);
    scooterApp.loginUser('Aishah Patni', 'testing');
    scooter = scooterApp.createScooter('Redbridge');
    user = scooterApp.registeredUsers['Aishah Patni'];
  });

  test('Should successfully dock a scooter', () => {
    scooterApp.rentScooter(scooter, user);
    scooterApp.dockScooter(scooter, 'Redbridge');
    expect(scooter.station).toBe('Redbridge');
    expect(scooter.user).toBe(null);
  });

  test('Should throw error if scooter is already at this station', () => {
    expect(() => {
      scooterApp.dockScooter(scooter, 'Redbridge');
    }).toThrow('Scooter already at this station');
  });

  test('Should throw error if docking at a non-existent station', () => {
    expect(() => {
      scooterApp.dockScooter(scooter, 'UnknownStation');
    }).toThrow('No such station');
  });
});
