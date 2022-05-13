import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isShown: boolean = true ; // hidden by default

  constructor() {

   }

  ngOnInit(): void {
    setTimeout(()=>{
      this.isShown=false;    
    }, 
      3000);
  }

}
