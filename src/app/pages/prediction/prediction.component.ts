import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-prediction',
  templateUrl: './prediction.component.html',
  styleUrls: ['./prediction.component.scss']
})
export class PredictionComponent implements OnInit {
  isShown: boolean = true ; // hidden by default

  constructor() { }

  ngOnInit(): void {
     setTimeout(()=>{
      this.isShown=false;    
    }, 
    4000);
  }

}
