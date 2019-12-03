export abstract class Car {
    protected name:   string;
    protected model:  string;
    protected cost:   number;

    protected constructor(name: string = "", model: string = "", cost: number = 0) {
        this.name = name;
        this.model = model;
        this.cost = cost;
    }

    public getName(): string {
        return this.name + " " + this.model;
    }

    public getCost(): number {
        return this.cost;
    }

    public getInfo() {
        return this.getName() + " " + this.cost;
    }
}

export class CarBMW extends Car{
    constructor(model: string, cost: number) {
        super("BMW", model, cost);
    }
}

export class CarMercedes extends Car{
    constructor(model: string, cost: number) {
        super("Mercedes", model, cost);
    }
}

