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

// export class CreatorMercedes extends CreatorCar{
//   private car: any;
//   constructor(model: string) {
//     super(model);
//     if (model === "Benz S Class") {
//       this.car = new CarMercedes("Benz S Class", 3180000);
//     }
//   }
//   public create(): Car {
//     return this.car;
//   }
// }

// export class CreatorBMW_M3 implements CreatorCar {
//   public init(): Car {
//     return new CarBMW("M3", 4230000);
//   }
// }
//
// export class CreatorMercedes_Benz_S implements CreatorCar {
//   public init(): Car {
//     return new CarMercedes("Benz S Class", 3180000);
//   }
// }

