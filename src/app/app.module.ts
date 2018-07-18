import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from "./app.routing.module";
import {MenuModule} from "./components/menu/menu.module";
import {HttpClientModule} from "@angular/common/http";
import {CommentsDataService} from "./service/comments-data.service";
import {CommentsService} from "./service/comments.service";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenuModule,
    HttpClientModule
  ],
  providers: [CommentsDataService, CommentsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
