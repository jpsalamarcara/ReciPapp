export class InfoGenerator{
    id: number;
    name: string;
    phoneNumber: number;
    latitude: number;
    longitude: number;

    constructor(){
        this.id = 1
        this.latitude = 4.683709;
        this.longitude = -74.047758;
    }
}

export class ReqBid{
    idGenerator: number;
    idProduct: number;
    quantity: number; 
    collectionDate: Date;
    rangeHours: string;
    latitude: number;
    longitude: number;

}