export class Confirmation{
    idOffert: number;
    idRecolector: number;
    quantity: number;
    price: number;

    constructor(){
        this.idOffert =0;
        this.idRecolector = 0;
        this.quantity = 0;
        this.price = 0;
    }

    public get total(){
        try{
            return (this.quantity *  this.price);
        }
        catch(_exc){
            return 0;
        }
       
    }

}