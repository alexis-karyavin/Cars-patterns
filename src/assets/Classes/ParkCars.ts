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

  public getCar(model: string) {
    
  }
}