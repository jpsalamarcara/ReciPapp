import { Injectable } from '@angular/core';
import { Material } from '../../models/mMaterial';
import { C_LIST_MATERIAL, C_LIST_OFFERS } from './dataConfiguration';
import { ReqBid } from '../../models/mGenerator';

@Injectable()
export class ConfigurationProvider {

  private ListPanding: Array<ReqBid> = [
    {
        idGenerator: 123,
        idProduct: 1,
        quantity: 23,
        collectionDate: new Date(2018, 8, 6),
        rangeHours: '08:00 - 09:00',
        latitude: 4.683557,
        longitude: -74.04885
    },
    {
        idGenerator: 65,
        idProduct: 2,
        quantity: 12,
        collectionDate: new Date(2018, 8, 7),
        rangeHours: '16:00 - 18:00',
        latitude: 4.707193,
        longitude: -74.061942
    }];

  constructor() {}

  public get listMaterials(): Array<Material>{
    return C_LIST_MATERIAL;
  }

  public get listOffers(): Array<ReqBid>{
    return C_LIST_OFFERS;
  }

  public getNameMaterial(_id: number): string{
    return this.listMaterials.find(m => m.id == _id).description;
  }

  public getMaterial(_id: number): Material{
    return this.listMaterials.find(m => m.id == _id);
  }

  public getUnit(_id: number): string{
    return this.listMaterials.find(m => m.id == _id).unit;
  }

  public get listPending(): Array<ReqBid>{
    return  this.ListPanding;
  }

  public confirmPendient(_confirm: ReqBid){
    this.ListPanding = this.ListPanding.filter(p => p != _confirm);
  }
  
}
