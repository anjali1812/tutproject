import { Component, OnInit } from '@angular/core';
import { SignupService } from '../signup.service';
import { signup } from './signup';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private _sign:SignupService,private _route:Router) { }

  ngOnInit() {
  }

  email_id:string;
  u_name:string;
  password:string;
  mobile_no:string;
  city:string;
  gender:string;
  address:string;

  cities:string[]=[
    'ahmedabad','surat'
  ];

  arr:signup[]=[];

  onAdd(){
    this._sign.addUser(new signup(this.email_id,this.u_name,this.password,this.mobile_no,this.city,this.gender,this.address)).subscribe(
      (data:any)=>{
        this.arr.push(new signup(this.email_id,this.u_name,this.password,this.mobile_no,this.city,this.gender,this.address));
        this._route.navigate(['/login']);
      }
    );
  }

}
