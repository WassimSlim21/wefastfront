import { of as observableOf,  Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Contacts, RecentUsers, UserData } from '../data/users';

@Injectable()
export class UserService {

  private time: Date = new Date;
  firstname;
  lastname;
  userName; 
  picture; 

  private users;
  private types = {
    mobile: 'mobile',
    home: 'home',
    work: 'work',
  };
  
  // private contacts: Contacts[] = [
  //   { user: this.users.connected, type: this.types.mobile }
  // ];
  // private recentUsers: RecentUsers[]  = [
  //   { user: this.users.connected, type: this.types.mobile, time: this.time.setHours(5, 29)},

  // ];

  getUsers(): Observable<any> {
    this.firstname=  JSON.parse(localStorage.getItem('account')).firstname;
   this.lastname=  JSON.parse(localStorage.getItem('account')).lastname;
   this.userName=  JSON.parse(localStorage.getItem('account')).userName;
   this.picture=  JSON.parse(localStorage.getItem('account')).picture;
   this.users = {
    connected: { name: this.firstname + " " + this.lastname, picture: 'assets/images/wassim.jpg' }
  };
    return observableOf(this.users);
  }
}
