import {Car, CarBMW, CarMercedes} from "./Car";

abstract class CreatorCar extends Car{
  protected constructor() {
    super();
  }

  public create(): any {};
}

export class CreatorBMW extends CreatorCar{
  constructor() {
    super();
  }
  // @ts-ignore
  public create(model: string): any {
    if (model === "M3") {
     return new CarBMW("M3", 4230000);
    }
  }
}

export class CreatorMercedes extends CreatorCar{
  constructor() {
    super();
  }
  // @ts-ignore
  public create(model: string): any {
    if (model === "Benz S Class") {
      return new CarMercedes("Benz S Class", 3180000);
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

