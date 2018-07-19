import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AvatarComponent} from './avatar.component';
import {HeadComponent} from './head/head.component';
import {ResumeComponent} from './resume/resume.component';
import {DescriptionComponent} from './description/description.component';
import {MainTitleModule} from "../main-title/main-title.module";

@NgModule({
  imports: [
    CommonModule,
    MainTitleModule
  ],
  declarations: [AvatarComponent, HeadComponent, ResumeComponent, DescriptionComponent],
  exports: [AvatarComponent]
})
export class AvatarModule {
}
