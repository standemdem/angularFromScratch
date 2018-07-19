import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {DetailsComponent} from "./details.component";

const DetailsRoutes: Routes = [
  {
    path: '',
    component: DetailsComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(DetailsRoutes)
  ],
  exports: [RouterModule]
})
export class DetailsRoutingModule {
}
