import {Component, Input, OnInit} from '@angular/core';
import {PersonModel} from "./models/person.models";

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css', '../../app.component.css']
})
export class AvatarComponent implements OnInit {

  @Input() person: PersonModel;
  constructor() { }

  ngOnInit() {
  }

}
