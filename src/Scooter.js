const User = require('./User');

class Scooter {

  constructor(station) {
    this.station = station;
    this.user = null;
    this.serial = Scooter.nextSerial++;  
    this.charge = 100;  // Scooters fully charged
    this.isBroken = false;  // Scooters  in good condition
  }


  static nextSerial = 1;


  rent(user) {
    // Check if scooter has enough charge and is not broken
    if (user instanceof User){
    if (this.charge > 20 && this.isBroken === false) {
      this.station = null;  
      this.user = user;  
      console.log(`Scooter ${this.serial} has been rented by ${this.user.username}`);
    } 
    // Check if the scooter is broken
    else if (this.isBroken === true) {
      throw new Error('Scooter needs repair');
    } 
    // Check if the scooter has low charge
    else if (this.charge <= 20) {
      throw new Error('Scooter needs to charge');
    }
  }
}

  dock (station){
    this.station=station
    this.user=null
    console.log(`This scooter has been docked at ${this.station} by ${this.user.username}`)
  }
}

module.exports = Scooter;
