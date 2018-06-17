import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { login } from './login';
import { signup } from '../signup/signup';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
email_id:string;
password:string;
  constructor(private _abc:LoginService,private _route:Router,private _actroute:ActivatedRoute) { }
onlogin()
{
this._abc.loginUser(new login(this.email_id,this.password)).subscribe(
  (data:signup[])=>{
  if(data.length>0)
  {
    this._route.navigate(['/viewprofile',this.email_id]);
  }
  else
  {
    alert('email or pass is incorrect');
  }
  }
);
}
signup(){
  this._route.navigate(['/signup']);
}
  ngOnInit() {
  }

}
