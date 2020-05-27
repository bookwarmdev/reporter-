import { Component, OnInit } from '@angular/core'; 

import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public authService : AuthService) { }

  ngOnInit(): void {}

  // fullname: string;
  // email: string;
  // password: string;
  // message: string;

  //local sign up for angular to firebase
  // signUp(){
  //   let Record = {};
  //   Record['fullname'] = this.fullname;
  //   Record['email'] = this.email;
  //   Record['password'] = this.password

  //   this.crudservice.create_Newuser(Record).then(  res => {
  //     this.fullname = "";
  //     this.email = "";
  //     this.password = "";
  //     console.log(res);
  //     // this.message = "User successfully added"
  //     alert("User successfully added");
  //   }).catch(error => {
  //     console.log(error);
  //   })
  // }

}
