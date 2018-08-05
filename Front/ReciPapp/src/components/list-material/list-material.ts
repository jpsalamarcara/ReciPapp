import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ConfigurationProvider } from '../../providers/configuration/configuration';
import { Material } from '../../models/mMaterial';

@Component({
  selector: 'list-material',
  templateUrl: 'list-material.html'
})
export class ListMaterialComponent {

  @Output('TypeMaterial') TypeMaterial = new EventEmitter<Material>();
  private objFormMaterial: FormGroup;

  constructor(private apiFormBuilder: FormBuilder, private proConfiguration: ConfigurationProvider) {

    this.objFormMaterial = this.apiFormBuilder.group({
      fcMaterial: new FormControl(['', Validators.required])
    });

    this.objFormMaterial.controls.fcMaterial.valueChanges.subscribe((value) => {
      console.log('Material selected', value);      
      this.TypeMaterial.emit(value);
    });
  }


}
