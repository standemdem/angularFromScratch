import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {

  @Input () firstName: string;
  @Input () lastName: string;
  constructor() { }

  ngOnInit() {
  }

}
