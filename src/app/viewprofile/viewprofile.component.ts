import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { LoginService } from '../login.service';
import { signup } from '../signup/signup';

@Component({
  selector: 'app-viewprofile',
  templateUrl: './viewprofile.component.html',
  styleUrls: ['./viewprofile.component.css']
})
export class ViewprofileComponent implements OnInit {

  id:string;
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

  constructor(private _actroute:ActivatedRoute,private _getdata:LoginService,private _route:Router) { }

  ngOnInit() {
    this.id=this._actroute.snapshot.params['email_id'];
    // console.log(this.id);

    this._getdata.viewProfileById(this.id).subscribe(
      (data:signup[])=>{
        this.email_id=data[0].email_id;
        this.u_name=data[0].u_name;
        this.password=data[0].password;
        this.mobile_no=data[0].mobile_no;
        this.city=data[0].city;
        this.gender=data[0].gender;
        this.address=data[0].address;
      }
    );
  }

  onEdit(){
    this._route.navigate(['/editprofile',this.email_id]);
  }

}
