import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  isShown: boolean = true ; // hidden by default

  constructor() { }

  ngOnInit(): void {
    setTimeout(()=>{
      this.isShown=false;    
    }, 
    4000);
  }

}
