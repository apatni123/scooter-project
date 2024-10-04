// require the User and Scooter classes - see where they can be used in ScooterApp.js
const User = require('./User');
const Scooter = require('./Scooter');

class ScooterApp {
  // ScooterApp code here
  constructor(){
   this.stations = {
    Gants Hill: [],
    Redbridge: [],
    Wanstead: [],
    Leytonstone: [],
    Leyton: [],
  }

  this.registeredUsers = {}
}

registerUser(username,password,age){
  if (this.registeredUsers[username]){
    throw new Error ('user already registered')
  } else if (age<18){
    throw new Error ('too young')
  } else {
    const newUser = new User (username,password,age)
    this.registeredUsers[username] = newUser
    console.log('registeration done')
  }
}

loginUser (username,password){
const user = this.registeredUsers[username]
if (!user){
  throw new Error ('Username or password not found')
}
 user.login(password)
 console.log(`${user.username} is now logged in`)
}

logoutUser(username){
  const user = this.registeredUsers[username]
  if (!user){
    throw new Error ('no such user is logged in')
  }
  user.logout()
  console.log(`${user.username} is now logged out`)
}

  createScooter(station) {
   
    if (!this.stations[station]) {
      throw new Error('No such station');
    }
  const newScooter = new Scooter(station)
  this.stations[station].push(newScooter)
  newScooter.station=station
  console.log('created new scooter')
  return newScooter
}

dockScooter(scooter,station){
  if (!this.stations[station]) {
    throw new Error('No such station');
  }

  if (scooter.station === station) {
    throw new Error('Scooter already at this station');
  }

  this.stations[station].push(scooter)
  Scooter.user = null
  console.log('scooter is docked')
}


rentScooter(scooter, user) {
  if (!scooter.station) {
    throw new Error('Scooter already rented');
  }
  //Scooter.station is the station its docked at and we're saying the index of this gets taken out
  const station = this.stations[scooter.station];
  const index = station.indexOf(scooter);
  
  station.splice(index, 1);
  scooter.rent(user);
  console.log(`Scooter is rented`);
}

print(){
    console.log("Registered Users:");
    for (const username in this.registeredUsers) {
      console.log(`- ${username}`);
    }

    console.log("\nStations and Scooters:");
    for (const station in this.stations) {
      console.log(`${station}: ${this.stations[station].length} scooters`);
    }
  }
}





module.exports = ScooterApp
