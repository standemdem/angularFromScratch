import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";

const AppRoutes: Routes = [
  {
    path: '',
    loadChildren: './home/home.module#HomeModule'

  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListModule'

  },
  {
    path: 'about',
    loadChildren: './about/about.module#AboutModule'

  },
  {
    path:'details',
    loadChildren: './details/details.module#DetailsModule'
  },
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(AppRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
