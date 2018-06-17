import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { LoginService } from '../../login.service';
import { signup } from '../../signup/signup';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {

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
  constructor(private _edit:LoginService,private _actroute:ActivatedRoute,private _route:Router) { }

  ngOnInit() {
    this.id=this._actroute.snapshot.params['email_id'];

    this._edit.viewProfileById(this.id).subscribe(
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

onSave(){
  this._edit.editProfile(new signup(this.email_id,this.u_name,this.password,this.mobile_no,this.city,this.gender,this.address)).subscribe(
    (data:any)=>{

      this._route.navigate(['/viewprofile',this.email_id]);
    }
  );
}

}
