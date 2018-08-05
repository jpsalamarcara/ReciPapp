import { Injectable } from '@angular/core';
import { ConexionServiceProvider } from '../conexion-service/conexion-service';
import { ReqBid } from '../../models/mGenerator';
import { PeticionService, ResposeService } from '../../models/mPeticionService';


@Injectable()
export class GenBusinessProvider {

  constructor(private proServices: ConexionServiceProvider) {
  }

  public sendOffer(_DataOffer: ReqBid): Promise<ResposeService>{

    return new Promise((resolve) => {
      this.proServices.ejecutarPeticionPOST(new PeticionService('/PUBLISH', _DataOffer))
      .then((_Response) => {
        resolve(_Response);
      })
      .catch((_Error) => {
        resolve(new ResposeService(false, null, "La petición no pudo ser procesada. Por favor intente nuevamente."));
      });
    });

  }

}
