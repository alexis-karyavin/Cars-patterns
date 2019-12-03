import {Car} from "./Car";

abstract class DecoratorCar extends Car{
  protected car: Car;
  protected constructor(car: Car) {
    super();
    this.car = car;
  }
}

export class Autopilot extends DecoratorCar {
  constructor(car: Car) {
    super(car);
  }

  getCost(): number {
    return super.getCost() + 1000000;
  }

  getName(): string {
    return super.getName() + "с автопилотом";
  }
}

export class Parktronic extends DecoratorCar{
  constructor(car: Car) {
    super(car);
  }

  getCost(): number {
    return super.getCost() + 300000;
  }

  getName(): string {
    return super.getName() + "с парктроником";
  }
}