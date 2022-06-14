import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationsItemsComponent } from './locations-items/locations-items.component';
import {LocationsRoutingModule} from "./locations-routing.module";



@NgModule({
  declarations: [
    LocationsItemsComponent,

  ],
  imports: [
    CommonModule,
    LocationsRoutingModule,
  ]
})
export class LocationsModule { }
