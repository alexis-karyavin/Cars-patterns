import {Car} from "./Car";

abstract class DecoratorCar extends Car{
  protected car: Car;
  protected constructor(car: Car) {
    super();
    this.car = car;
  }
  getInfo(): string {
    return this.getName() + " " + this.getCost();
  }
}

export class Autopilot extends DecoratorCar {
  constructor(car: Car) {
    super(car);
  }

  getCost(): number {
    return this.car.getCost() + 1000000;
  }

  getName(): string {
    return this.car.getName() + " с автопилотом";
  }
}

export class Parktronic extends DecoratorCar{
  constructor(car: Car) {
    super(car);
  }

  getCost(): number {
    return this.car.getCost() + 300000;
  }

  getName(): string {
    return this.car.getName() + " с парктроником";
  }
}