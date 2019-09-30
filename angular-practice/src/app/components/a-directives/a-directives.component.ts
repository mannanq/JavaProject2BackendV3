import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-a-directives',
  templateUrl: './a-directives.component.html',
  styleUrls: ['./a-directives.component.css']
})
export class ADirectivesComponent implements OnInit {


  colors: string[] = ['blue', 'red', 'green'];
  formats: string[] = ['bold','italic', 'highlight'];
  selectedFormats: string[] = [];
  isChecked: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  updateFormat(e) {
    this.selectedFormats = [];
    let opts = e.target.options;
    console.log(opts);
    
    for (let o of opts) {
      if (o.selected) {
        this.selectedFormats.push(o.value);
      }
    }
    
    console.log(this.selectedFormats);
  }

}
