import {Car, CarBMW, CarMercedes} from "./Car";

abstract class Creator extends Car{
  protected constructor() {
    super();
  }
  public create(): any {};

  public copy(): Car {
    return this.copy();
  }

}

export class CreatorBMW extends Creator{
  public prototypeCar: Car;
  constructor() {
    super();
    this.prototypeCar =  new CarBMW("M3", 4230000);
  }

  // @ts-ignore
  public create(model: string): any {
    if (model === "M3") {
      return this.prototypeCar.copy();
    }
  }
}

export class CreatorMercedes extends Creator{
  public prototypeCar: Car;
  constructor() {
    super();
    this.prototypeCar = new CarMercedes("Benz S Class", 3180000);
  }
  // @ts-ignore
  public create(model: string): any {
    if (model === "Benz S Class") {
      return this.prototypeCar;
    }
  }
}


