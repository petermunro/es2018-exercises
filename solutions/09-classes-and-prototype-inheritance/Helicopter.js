import FlyingVehicle from './FlyingVehicle';

class Helicopter extends FlyingVehicle {
  constructor(make, model, speed, altitude) {
    super(speed, altitude);
    this.make = make;
    this.model = model;
  }

  static getFlightControls() {
    return [
      'cyclic',
      'collective',
      'anti-torque pedals',
      'throttle'
    ];
  }

  showPlane() {
    return `A ${this.make} ${this.model} helicopter (${this.getSpeedAndAltitude()}) with flight controls: ${Helicopter.getFlightControls()}`;
  }
}

export default Helicopter;
