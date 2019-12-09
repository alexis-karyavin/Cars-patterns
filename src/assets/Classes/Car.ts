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

    public getModel() {
        return this.model;
    }

    public getCost(): number {
        return this.cost;
    }

    public getInfo() {
        return this.getName() + " " + this.cost;
    }

    public abstract copy(): Car;
}

export class CarBMW extends Car{
    constructor(model: string, cost: number) {
        super("BMW", model, cost);
    }

    public copy(): Car {
        let copy = new CarBMW(this.model, this.cost);
        return copy;
    }
}

export class CarMercedes extends Car{
    constructor(model: string, cost: number) {
        super("Mercedes", model, cost);
    }
    public copy(): Car {
        let copy = new CarMercedes(this.model, this.cost);
        return copy;
    }
}

