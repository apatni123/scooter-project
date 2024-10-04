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
    if (!(user instanceof User)) {
      throw new Error('Invalid user instance');
    }
    
    if (this.charge > 20 && !this.isBroken) {
      this.station = null;  
      this.user = user;  
      console.log(`Scooter ${this.serial} has been rented by ${this.user.username}`);
    } 
    else if (this.isBroken) {
      throw new Error('Scooter needs repair');
    } 
    else if (this.charge <= 20) {
      throw new Error('Scooter needs to charge');
    }
  }

  dock (station){
    this.station=station
    this.user=null
    console.log(`This scooter has been docked at ${this.station} by ${this.user.username}`)
    
  }
}

module.exports = Scooter;
