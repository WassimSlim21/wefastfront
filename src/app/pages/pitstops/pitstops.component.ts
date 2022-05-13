import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-pitstops',
  templateUrl: './pitstops.component.html',
  styleUrls: ['./pitstops.component.scss']
})
export class PitstopsComponent implements OnInit {
  isShown: boolean = true ; // hidden by default

  constructor() { }

  ngOnInit(): void {
    setTimeout(()=>{
      this.isShown=false;    
    }, 
      3000);
  }

}
