import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {User}  from '../models/User'
import {UserSignIn}  from '../models/UserSignIn'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  api:string = "http://localhost:8888/AUTH-SERVICE/api/auth";
  constructor(private _http:HttpClient) { }

   signUp(data:User):Observable<any>{
       return this._http.post(`${this.api}/register`,data);
   }

   signIn(data:UserSignIn):Observable<any>{
    return this._http.post(`${this.api}/authenticate`,data);
}
  logOut():Observable<any>{
    return this._http.get(`${this.api}/signout`);
  }
}
