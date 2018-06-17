import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { signup } from './signup/signup';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  private url:string='http://localhost:3000/user2/';

  constructor(private _http:HttpClient) { }

  addUser(item:signup){
    let body=JSON.stringify(item);
    let head=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.url,body,{headers:head});
  }
}
