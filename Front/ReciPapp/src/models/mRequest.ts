import { Contact } from "./mContact";
import { InfoAddress } from "./mAddress";
import { Material } from "./mMaterial";

export class RequestGenerator{
    material: Material;
    quantity: number;
    date: Date;
    time: string;
    timeEnd: string;
    location: InfoAddress;
    contact: Contact

    constructor(){
        this.material = new Material();
        this.quantity = 0;
        this.date= new Date;
        this.time = String();
        this.timeEnd = String();
        this.location = new InfoAddress(String());
        this.contact = new Contact();
    }

}