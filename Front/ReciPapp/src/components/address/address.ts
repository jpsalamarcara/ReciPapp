import { Component, Output, EventEmitter } from '@angular/core';
import { InfoAddress } from '../../models/mAddress';
import { Geolocation, GeolocationOptions, Geoposition, PositionError } from '@ionic-native/geolocation';
import { ConexionServiceProvider } from '../../providers/conexion-service/conexion-service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'address',
  templateUrl: 'address.html'
})
export class AddressComponent {

  private objFormAddress: FormGroup;
  @Output('OAddressRequest') OAddressRequest: EventEmitter<InfoAddress>;
  private AddressRequest: InfoAddress = new InfoAddress(String());

  constructor(private apiFormBuilder: FormBuilder,
    private geolocation: Geolocation,
    private proServices: ConexionServiceProvider) {

    this.objFormAddress = this.apiFormBuilder.group({
      fcAddress: new FormControl(['', Validators.required])
    });

    this.objFormAddress.controls.fcAddress.valueChanges.subscribe((value) => {
      this.AddressRequest.address = value;
      this.OAddressRequest.emit(this.AddressRequest);
    });

  }


  private getMyPosition() {

    let AddressRequest: InfoAddress;

    this.geolocation.getCurrentPosition({ timeout: 5000 })
      .then((_myLocation: Geoposition) => {
        try {
          AddressRequest = new InfoAddress(String(), _myLocation.coords.latitude, _myLocation.coords.longitude);
          this.getDireccionApi(AddressRequest)
            .then((_address) => {
              AddressRequest = _address;
              this.OAddressRequest.emit(AddressRequest);
            });
        }
        catch (_Err) {
          console.log('No fue posible obtener su ubicación, por favor digítela.', _Err);
        }
      })
      .catch((_Err: PositionError) => {
        console.log('No fue posible obtener su ubicación, por favor digítela.', _Err);
      });

  }



  public getDireccionApi(_coordenadas: InfoAddress): Promise<InfoAddress> {

    return new Promise((resolve) => {

      this.proServices.ejecutarPeticionGET(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${_coordenadas.latitude},${_coordenadas.longitude}&result_type=street_address&key=AIzaSyBI0rUuOcIEOsG-u_qhko6uVzgk4gzrtsE`)
        .then((_result) => {

          if (_result.Ejecutado && _result.Resultado.status == "OK") {
            //Se procesa los datos indicados en el campo formatted_address
            let address: Array<string> = _result.Resultado.results[0].formatted_address.toString().split(',');

            if (address[0].split('-').length > 2) {
              resolve(new InfoAddress(address[0].substring(0, (address[0].indexOf('-') + 1)), _coordenadas.latitude, _coordenadas.longitude));
            }
            else {
              resolve(new InfoAddress(address[0], _coordenadas.latitude, _coordenadas.longitude));
            }

          }
          resolve(_coordenadas);
        });
    });
  }


}
