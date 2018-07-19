import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DetailsComponent} from './details.component';
import {DetailsRoutingModule} from "./details.routing.module";
import {AvatarModule} from "../components/avatar/avatar.module";
import {CommentModule} from "../components/comment/comment.module";

@NgModule({
  imports: [
    CommonModule,
    DetailsRoutingModule,
    AvatarModule,
    CommentModule
  ],
  declarations: [DetailsComponent]
})
export class DetailsModule {
}

