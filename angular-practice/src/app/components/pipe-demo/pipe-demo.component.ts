import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.css']
})
export class PipeDemoComponent implements OnInit {

str: string = 'hello world';
num: number = 5;
day: Date = new Date();

strArr: string[] = ['cAt','DoG','oCtuPuS','SpoNgeBOb'];
products: string[] = ['fuji-apple', 'poppy-seed-bagel', 'marinara-sauce'];

  constructor() { }

  ngOnInit() {
  }

}
