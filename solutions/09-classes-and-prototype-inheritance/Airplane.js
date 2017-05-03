import FlyingVehicle from './FlyingVehicle';

class Airplane extends FlyingVehicle {
  constructor(make, model, speed, altitude) {
    super(speed, altitude);
    this.make = make;
    this.model = model;
  }

  showPlane() {
    return `${this.make} ${this.model} ${super.getSpeedAndAltitude()}`;
  }
}

export default Airplane;
