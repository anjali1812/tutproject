import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { login } from './login/login';
import { signup } from './signup/signup';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url:string='http://localhost:3000/user1/';

  constructor(private _http:HttpClient) { }
  loginUser(item:login){
    let body=JSON.stringify(item);
    let head=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.url+item.email_id,body,{headers:head});
  }

  viewProfileById(email_id:string){
    return this._http.get(this.url+email_id);
  }

  editProfile(item:signup){
    let body=JSON.stringify(item);
    let head=new HttpHeaders().set('Content-Type','application/json');
    return this._http.put(this.url+item.email_id,body,{headers:head});
  }
}
