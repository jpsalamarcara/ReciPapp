import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PeticionService, ResposeService } from '../../models/mPeticionService';

@Injectable()
export class ConexionServiceProvider {

  constructor(private apiHttp: HttpClient) { }

  public ejecutarPeticionGET(_objPeticion: PeticionService): Promise<ResposeService> {

    let Response: ResposeService = new ResposeService();

    return new Promise((resolve) => {

      console.log('ejecutarPeticionGET', _objPeticion);      

      this.apiHttp.get(_objPeticion.endPoint, { headers: { 'Content-Type': 'application/json;' }, observe: "body", responseType: 'json' })
        .subscribe((_result) => {
          Response = new ResposeService(true, _result);
          console.log('Result service GET', _result);
          
          resolve(Response);
        }, (err: HttpErrorResponse) => {
          Response.message = this.controlError(err);
          resolve(Response);
        })
    });
  }


  public ejecutarPeticionPOST(_objPeticion: PeticionService): Promise<ResposeService> {

    let Response: ResposeService = new ResposeService();

    return new Promise((resolve) => {
      console.log('ejecutarPeticionPOST', _objPeticion);      
      this.apiHttp.post(_objPeticion.endPoint, _objPeticion.body, { headers: { 'Content-Type': 'application/json;' }, observe: "body", responseType: 'json' })
        .subscribe((_result) => {
          Response = new ResposeService(true, _result);
          console.log('Result service POST', _result);
          resolve(Response);
        }, (err: HttpErrorResponse) => {
          Response.message = this.controlError(err);
          resolve(Response);
        })
    });
  }


  private controlError(error: HttpErrorResponse): string {
    if (error.name) {
      if (error.name == "TimeoutError")
        return 'Error procesando la solicitud. No se obtuvo una respuesta del servicio. Por favor intente más tarde. ';
      if (error.statusText == "Unknown Error")
        return 'Valide que tenga conexión a la red.';
    }
    else {
      if (error.statusText == "")
        return 'Error procesando la solicitud. Valide que tenga conexión a la red.';
    }

    return 'Error procesando la solicitud. Por favor intenta más tarde.';
  }

}


