class FlyingVehicle {
  constructor(speed, altitude) {
    this.speed = speed;
    this.altitude = altitude;
    console.log(`FlyingVehicle constructor`);
  }

  getAltitudeAndSpeed() {
    return `speed: ${this.speed}, altitude: ${this.altitude}`;
  }
}

class Airplane extends FlyingVehicle {
  constructor(make, model, speed, altitude) {
    super(speed, altitude);
    this.make = make;
    this.model = model;
    console.log(`Airplane constructor`);
  }

  showPlane() {
    console.log(`A ${this.make} ${this.model},`, super.getAltitudeAndSpeed());
  }
}

let b747 = new Airplane("Boeing", "747", "500mph", "33000 ft");
b747.showPlane();

class Helicopter extends FlyingVehicle {}

Helicopter.flightControls = [
  "cyclic",
  "collective",
  "anti-torque pedals",
  "throttle"
];

let heli = new Helicopter();
console.log(heli.flightControls);
console.log(Helicopter.flightControls);
