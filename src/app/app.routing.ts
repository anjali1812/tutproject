import { Routes,RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ViewprofileComponent } from './viewprofile/viewprofile.component';
import { EditprofileComponent } from './viewprofile/editprofile/editprofile.component';

const arr:Routes=[
  {path:'',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'viewprofile/:email_id',component:ViewprofileComponent},
  {path:'editprofile/:email_id',component:EditprofileComponent}
];

export const routing=RouterModule.forRoot(arr);
