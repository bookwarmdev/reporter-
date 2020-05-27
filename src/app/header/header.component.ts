import { Component, OnInit } from '@angular/core';
import { AuthService } from '../users/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isopen: boolean = false
  
  constructor(private authServices: AuthService) { }

  ngOnInit(): void {
  }

   token = null;
 
  toggleNavbar(){ 
    this.isopen = !this.isopen 
  }

  logOut(){
    this.authServices.signout().then(() => console.log('out')) 
  }

}

