import { Contact } from "./mContact";
import { Location } from "./mLocation";
import { Material } from "./mMaterial";

export class Request{
    material: Material;
    quantity: number;
    date: Date;
    time: string;
    timeEnd: string;
    location: Location;
    contact: Contact

}