export class Cart {
    public name: string;
    public price: number;
    public amount: number;

    constructor(name: string, price: number, amount: number){
        this.name = name;
        this.price = price;
        this.amount = amount;
    }
}