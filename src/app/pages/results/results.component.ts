import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  isShown: boolean = true ; // hidden by default



  constructor() { }

  ngOnInit(): void {
    setTimeout(()=>{
      this.isShown=false;    
    }, 
    5000);
  }

}
