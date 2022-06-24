import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-constructors',
  templateUrl: './constructors.component.html',
  styleUrls: ['./constructors.component.scss']
})
export class ConstructorsComponent implements OnInit {
  isShown: boolean = true ; // hidden by default

  constructor() { }

  ngOnInit(): void {
    setTimeout(()=>{
      this.isShown=false;    
    }, 
    8000);
  }

}
