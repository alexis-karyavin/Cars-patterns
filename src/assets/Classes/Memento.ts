//Мемемто создается для автомобильного парка
import {ParkCars} from "./ParkCars";

class Memento {
  private state: ParkCars;
  constructor(state: ParkCars) {
    this.state = state;
  }

  public getState(): ParkCars {
    return this.state;
  }
}

export class Originator {
  constructor() {
  }
  save(state: ParkCars) {
    return new Memento(state);
  }
  restore(memento: Memento) {
    return memento.getState();
  }
}

export class Caretaker {
  private states: any;
  constructor() {
    this.states = [];
  }

  public addMemento(memento: any) {
    this.states.push(memento);
  }

  getMemento(index: number): any {
    return this.states[index];
  }

}