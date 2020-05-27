import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.css']
})
export class UserHeaderComponent implements OnInit {
 
  isopen: boolean = false
  
  constructor() { }

  ngOnInit(): void {
  }

   token = null;
 
  toggleNavbar(){ 
    this.isopen = !this.isopen 
  }

}

