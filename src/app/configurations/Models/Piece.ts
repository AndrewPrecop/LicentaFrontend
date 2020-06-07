export class Piece {
    public id: string;
    public name: string;
    public brand: string;
    public description : string;
    public imagePath: string;
    public price: number;
    public amount: number;
    public type: number;

    constructor(name: string, brand: string, description: string,imagePath :string,price:number,amount:number,type:number) {
        this.name = name;
        this.brand=brand;
        this.description = description;
        this.imagePath = imagePath;
        this.price = price;
        this.amount =amount; 
        this.type = type;
    }

}
