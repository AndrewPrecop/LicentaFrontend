export class Component {
    public id: string;
    public name: string;
    public brand: string;
    public description : string;
    public imagePath: string;
    public price: number;
    public amount: number;

    constructor(name: string, brand: string, description: string,imagePath :string,price:number,amount:number) {
        this.name = name;
        this.brand=brand;
        this.description = description;
        this.imagePath = imagePath;
        this.price = price;
        this.amount =amount; }
}
