import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {

@Input() age: number;
@Input() height: number;

  constructor() { }

  ngOnInit() {
  }

}
