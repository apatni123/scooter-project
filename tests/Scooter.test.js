const Scooter = require('../src/Scooter')
const User = require('../src/User')

// typeof scooter === object
describe('scooter object', () => {
  test('Scooter class should create Scooter instance', () => {
    const scooter = new Scooter('Redbridge')
    expect(scooter).toBeInstanceOf(Scooter)
  })
})

describe('scooter methods', () => {
  let scooter;
  let user;

  beforeEach(() => {
    scooter = new Scooter('Redbridge');
    user = new User('alice', 'password123', 25);
  });

  test('should rent scooter to a user', () => {
    scooter.rent(user);
    expect(scooter.user).toBe(user);
    expect(scooter.station).toBe(null);
  });

  test('should throw error if scooter is broken', () => {
    scooter.isBroken = true;
    expect(() => {
      scooter.rent(user);
    }).toThrow('Scooter needs repair');
  });

  test('should throw error if scooter charge is low', () => {
    scooter.charge = 10;
    expect(() => {
      scooter.rent(user);
    }).toThrow('Scooter needs to charge');
  });

  test('should dock scooter at a station', () => {
    scooter.rent(user);
    scooter.dock('Redbridge');
    expect(scooter.station).toBe('Redbridge');
    expect(scooter.user).toBe(null);
  });

  test('should dock scooter and log user info', () => {
    scooter.rent(user);
    console.log = jest.fn();
    scooter.dock('Redbridge');
    expect(console.log).toHaveBeenCalledWith(`This scooter has been docked at Redbridge by ${user.username}`);
  });
});
