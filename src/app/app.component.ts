import { Component } from '@angular/core';

import {FormsModule} from '@angular/forms';
import {CrudService} from './users/service/crud.service'; 
import { AngularFireStorage } from '@angular/fire/storage/storage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'reporter';

  // data for sign up page
  fullname: string;
  email: string;
  password: string;

  constructor(crudservice: CrudService){}

  //data for add new post
  titles: string;
  description: string;
  imageUrl: string;
}
