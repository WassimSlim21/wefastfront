import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-wins',
  templateUrl: './wins.component.html',
  styleUrls: ['./wins.component.scss']
})
export class WinsComponent implements OnInit {
  isShown: boolean = true ; // hidden by default

  constructor() { }

  ngOnInit(): void {
    setTimeout(()=>{
      this.isShown=false;    
    }, 
    8000);
  }

}
