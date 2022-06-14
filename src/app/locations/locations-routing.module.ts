import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {LocationsItemsComponent} from "./locations-items/locations-items.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'locations',
    pathMatch: 'full'
  },
  {
    path: 'locations',
    component: LocationsItemsComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocationsRoutingModule {}
