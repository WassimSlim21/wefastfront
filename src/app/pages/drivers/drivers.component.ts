import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.scss']
})
export class DriversComponent implements OnInit {
  isShown: boolean = true ; // hidden by default

  constructor() { }

  ngOnInit(): void {
    setTimeout(()=>{
      this.isShown=false;    
    }, 
    4000);
  }

}
