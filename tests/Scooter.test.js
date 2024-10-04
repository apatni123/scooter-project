const Scooter = require('../src/Scooter')

// typeof scooter === object
describe('scooter object', () => {
  test('Scooter class should create Scooter instance', () => {
    const scooter = new Scooter()
    expect(scooter).toBeInstanceOf(Scooter)
  })
})

describe('scooter methods', () => {
  let scooter;
  let user;

  beforeEach(() => {
    scooter = new Scooter('Gants Hill');
    user = new User('alice', 'password123', 25);
  });

  test('should rent scooter to a user', () => {
    scooter.rent(user);
    expect(scooter.user).toBe(user);
    expect(scooter.station).toBe(null);
  });

  test('should throw error if scooter is already rented', () => {
    scooter.rent(user);
    const newUser = new User('bob', 'password456', 30);
    expect(() => {
      scooter.rent(newUser);
    }).toThrow('Scooter already rented');
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
    scooter.dock('Gants Hill');
    expect(scooter.station).toBe('Gants Hill');
    expect(scooter.user).toBe(null);
  });

  test('should dock scooter and log user info', () => {
    scooter.rent(user);
    console.log = jest.fn();
    scooter.dock('Gants Hill');
    expect(console.log).toHaveBeenCalledWith(`This scooter has been docked at Gants Hill by ${user.username}`);
  });

  test('should mark scooter as broken for repair', () => {
    scooter.requestRepair();
    expect(scooter.isBroken).toBe(true);
  });

  test('should charge scooter', () => {
   


// Method tests
describe('scooter methods', () => {
  // tests here!

  // rent method

  // dock method

  // requestRepair method

  // charge method

})



