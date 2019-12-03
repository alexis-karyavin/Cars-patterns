// interface Composite {
//   getCost(): number;
//   getName(): string;
//   setName(name: string): void;
//   setCost(price: number): void;
// }

abstract class Composite {
  protected cost: number;
  protected name: string;

  constructor(name: string = "", cost: number = 0) {
    this.cost = cost;
    this.name = name;
  }

  public getCost(): number {
    return this.cost;
  }

  public getName(): string {
    return this.name;
  }
}

export class Build extends Composite {
  private equipments: Array<Composite>;
  constructor() {
    super("", 0);
    this.equipments = [];
  }

  add(equipment: Composite) {
    this.equipments.push(equipment);
  }

  getCost(): number {
    return this.equipments
      .map(item => item.getCost())
      .reduce((a: number, b: number) => a + b)
  }
}

export class Engine extends Composite{
  constructor() {
    super('engine', 800);
  }
}

export class Body extends Composite{
  constructor() {
    super('body', 3000);
  }
}

export class Tools extends Composite{
  constructor(name: string = "", cost: number = 0) {
    super('tools', 4000);
  }
}