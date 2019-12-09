import {Car} from "./Car";

export class ParkCars {
  private park: Array<Car>;
  constructor() {
    this.park = [];
  }

  public addCar(car: Car): void {
    this.park.push(car);
  }

  public getInfoCars() {
    this.park.forEach(car=>{
      console.log(car.getInfo());
    })
  }

  public clone(): ParkCars {
    let copy = new ParkCars();
    this.park.forEach(car => {
      copy.addCar(car.copy());
    });

    return copy;
  }

  public getCar(model: string): Car {
    const id = this.park.findIndex(car => {
      return car.getModel() === model;
    });
    let car = this.park[id];
    this.driveOut(id);
    return car;
  }

  private driveOut(id: number): void {
    this.park.splice(id, 1);
  }
}