export class InfoAddress{
    address: string;
    latitude?: number;
    longitude?: number;

    constructor(_address: string, _latitude?: number, _longitude?: number){      
          this.address = _address;
          this.latitude = _latitude;
          this.longitude = _longitude;
    }
    
}