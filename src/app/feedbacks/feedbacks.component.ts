import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-feedbacks',
  templateUrl: './feedbacks.component.html',
  styleUrls: ['./feedbacks.component.scss']
})
export class FeedbacksComponent implements OnInit {

  currentUser;
  constructor() { }

  ngOnInit(): void {
    this.currentUser=JSON.parse(localStorage.getItem('account'));
    console.log(this.currentUser);
    
  }

}
