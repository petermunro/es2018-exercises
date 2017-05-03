
class FlyingVehicle {
  constructor(speed, altitude) {
    this.speed = speed;
    this.altitude = altitude;
  }

  getSpeedAndAltitude() {
    return `${this.speed} ${this.altitude}`;
  }
}

export default FlyingVehicle;
