import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../@core/service/api.service';
import { MDCSnackbar } from "@material/snackbar";

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isShown: boolean = true ; // hidden by default
  private credential = {userName: '', password : ''};
  userName: string;
  password: string;
  constructor(private authService: ApiService,private router: Router,   private snackBar: MDCSnackbar) { }

  ngOnInit(): void {
    setTimeout(()=>{
      this.isShown=false;    
    }, 
      3000);
  }

  // login(): void {

  //   this.authService.sendCredential(this.userName, this.password).subscribe(
  //     data => {
  //      // this.token.saveToken(data.token);
  //       localStorage.setItem('account', JSON.stringify(data.account));
  //       localStorage.setItem('token', data.token);
  //       this.snackBar.open('Connected Sucessfully ');
  //         this.router.navigate(['/dashboard']);
  //     },
  //     error => {
  //       console.log(error);
  //       this.snackBar.open('Failed to connect');
  //     },



  //   );


  // }



}
