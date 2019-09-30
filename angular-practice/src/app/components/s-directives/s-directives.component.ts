import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-s-directives',
  templateUrl: './s-directives.component.html',
  styleUrls: ['./s-directives.component.css']
})
export class SDirectivesComponent implements OnInit {

  cats = [{
    id: 34,
    name: 'Fluffy'
  },{
    id: 76,
    name: 'Marco'
  }]

  constructor() { }

  ngOnInit() {
  }

  condition:boolean = true;
  time: string = 'day';

  changeCondition() {
    this.condition = !this.condition;
  }

}
