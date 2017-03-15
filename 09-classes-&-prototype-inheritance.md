# Classes & Prototype Inheritance

1. Create a class `Airplane` (or even `Aeroplane`).
   Add a constructor that initializes this plane's `make` (manufacturer)
  `model`, `speed` and `altitude`.

2. Add a method `showPlane()` to display these attributes.

3. Instantiate an object of this class, say a Boeing 747, and
   call its `showPlane()` method.

4. Create a base class, `FlyingVehicle`, and have your `Airplane`
   extend from it.
   1. Add a constructor.
   2. Refactor your classes to pull the `speed` and `altitude` properties up to the base class.
   3. Instantiate a new `Airplane`, ensuring that both its constructor and the superclass constructor get called.
   4. Add a method to the base class that returns `FlyingVehicle`s speed and altitude as a string. Modify `Airplane`'s '`showPlane()` method to use this string in its output.

5. Create a `Helicopter` class that extends `FlyingVehicle`.
   1. Instantiate a new Helicopter.
   2. Add a `static` method to `Helicopter` that returns an array of flight controls, namely (1) the cyclic, (2) the collective, (3) the anti-torque pedals, and (4) the throttle. Ensure you can return this list without instantiating an object of the class. Can you call it from an instance?
