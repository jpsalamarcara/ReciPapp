import { Injectable } from '@angular/core';
import { Material } from '../../models/mMaterial';
import { C_LIST_MATERIAL } from './dataConfiguration';

@Injectable()
export class ConfigurationProvider {

  constructor() {}

  public get listMaterials(): Array<Material>{
    return C_LIST_MATERIAL;
  }

}
