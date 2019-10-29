import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  api = 'http://social.myonekey.com'
  constructor(private http: HttpClient) { }

  login(authData){
    return this.http.post(`${this.api}/api/users/login/`,{
      "username":authData.email,
      "password":authData.password



     },
     {
       headers: new HttpHeaders({'Content-Type': 'application/json'})
     })
   };
   logout(){
     return this.http.delete(`${this.api}/api/users/logout/`)

    };


}
