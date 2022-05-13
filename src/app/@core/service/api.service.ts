import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  user: any;
  users: any;
  jwtToken = null;
  private apiUrl: string = "http://localhost:3000/";

  constructor(private http: HttpClient, public jwtHelper: JwtHelperService) { }
}
