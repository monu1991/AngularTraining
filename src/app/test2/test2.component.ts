import { Component, OnInit } from '@angular/core';
import { ToggleParaDirective } from '../toggle-para.directive';
@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {
  Name1="Name1";
  Last1="LastName1";
  Name2="Name2";
  Last2="LastName2";
  Name3="Name3";
  Last3="LastName3";
  Name4="Name4";
  Last4="LastName4"
  Name5="Name5";
  Last5="LastName5";
  constructor() { 
    
  }

  ngOnInit() {
    
  }

}
