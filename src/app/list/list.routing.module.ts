import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ListComponent} from "./list.component";

const ListRoutes: Routes = [
  {
    path: '',
    component: ListComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ListRoutes)
  ],
  exports: [RouterModule]
})
export class ListRoutingModule {
}
