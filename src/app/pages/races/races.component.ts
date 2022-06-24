import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-races',
  templateUrl: './races.component.html',
  styleUrls: ['./races.component.scss']
})
export class RacesComponent implements OnInit {
  isShown: boolean = true ; // hidden by default

  constructor() { }

  ngOnInit(): void {
    setTimeout(()=>{
      this.isShown=false;    
    }, 
    4000);
  }

}
