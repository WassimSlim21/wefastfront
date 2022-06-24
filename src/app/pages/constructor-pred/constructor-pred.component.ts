import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-constructor-pred',
  templateUrl: './constructor-pred.component.html',
  styleUrls: ['./constructor-pred.component.scss']
})
export class ConstructorPredComponent implements OnInit {
  isShown: boolean = true ; // hidden by default

  constructor() { }

  ngOnInit(): void {
    setTimeout(()=>{
      this.isShown=false;    
    }, 
    4000);
  }

}
