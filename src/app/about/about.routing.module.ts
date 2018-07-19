import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {AboutComponent} from "./about.component";

const AboutRoutes: Routes = [
  {
    path: '',
    component: AboutComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AboutRoutes)
  ],
  exports: [RouterModule]
})
export class AboutRoutingModule {
}
