import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';


@Injectable()
export class CtrlStorageProvider {

  constructor(private proStorage: Storage) { }


  public getData(_key: string): Promise<any>{
    return new Promise((resolve) => {
      this.proStorage.ready()
      .then((_storage: LocalForage) => {
        _storage.getItem(_key)
        .then(_value => {
          console.log('getData ->', _key, _value);
          resolve((_value));
        })
        .catch(err => {
          console.error('getData Error-> ', _key, err);
          resolve(null);
        });
      })
      .catch(err => {
        console.error('getData Excepction->', _key, err);
        resolve(null);
      });
    });    
  }


  public saveData(_key: string, _value: any): Promise<boolean>{
    return new Promise((resolve) => {
      this.proStorage.ready()
      .then((_storage: LocalForage) => {
        _storage.setItem(_key, _value)
        .then(_result => {
          console.log('saveData ->', _key, _result);
          resolve((true));
        })
        .catch(err => {
          console.error('saveData Error ->' + _key, err);
          resolve(false);
        });
      })
      .catch(err => {
        console.error('saveData Exception ->' + _key, err);
        resolve(false);
      });
    });    
  }



}