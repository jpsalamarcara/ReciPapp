import { NgModule } from '@angular/core';
import { ListMaterialComponent } from './list-material/list-material';
import { AddressComponent } from './address/address';
@NgModule({
	declarations: [ListMaterialComponent,
    AddressComponent],
	imports: [],
	exports: [ListMaterialComponent,
    AddressComponent]
})
export class ComponentsModule {}
