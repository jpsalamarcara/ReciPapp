import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ConexionServiceProvider {

  constructor(private apiHttp: HttpClient) { }
  

   public ejecutarPeticionGET(_objPeticion: any): Promise<any> {
 
    let Result: any;

     return new Promise((resolve) => {
       this.apiHttp.get(_objPeticion.endpoint, { headers: { 'Content-Type': 'application/json;'}, observe: "body", responseType: 'json' })
         .subscribe((_result) => {
          Result = _result;
           resolve(_result);
         }, (err: HttpErrorResponse) => {
          Result.Mensaje = this.controlError(err);
           resolve(Result);
         }) 
     });
    }
 

   private ejecutarPeticionPOST(_objPeticion: any): Promise<any> {
 
    let Result: any;
 
     return new Promise((resolve) => {
       this.apiHttp.post(_objPeticion.endpoint, _objPeticion.body, { headers: { 'Content-Type': 'application/json;'}, observe: "body", responseType: 'json' })
         .subscribe((_result) => {
          Result = _result;
         }, (err: HttpErrorResponse) => {
          Result.Mensaje = this.controlError(err);
          resolve(Result);
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


