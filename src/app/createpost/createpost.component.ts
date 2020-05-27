import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { AngularFireStorage } from '@angular/fire/storage';
// import { AngularFirestore } from '@angular/fire/firestore';

import { CrudService } from '../users/service/crud.service'
import { AuthService } from '../users/auth/auth.service';


import { map, finalize } from "rxjs/operators";
import { from, Observable } from 'rxjs'; 

@Component({
  selector: 'app-createpost',
  templateUrl: './createpost.component.html',
  styleUrls: ['./createpost.component.css']
})
export class CreatepostComponent implements OnInit {

  posts;
  images;
  image = null;
  @ViewChild('myImage') myImage; 
  uploadError = "";

  selectedFile: File = null;
  fb;
  downloadURL: Observable<string>;

  // private db: AngularFirestore,
  constructor(
    private storage: AngularFireStorage,
    public crudService: CrudService, 
    private authService: AuthService) {}

  ngOnInit(): void {
  }


  //data for adding new post
  titles: string;
  description: string;
  imageUrl: any;

  createNewPost(){

    let Post  = {};
    Post ['titles'] = this.titles;
    Post ['description'] = this.description;
    Post ['imageUrl'] = this.fb;

    // this.imageUrl = this.onFileSelected;
    
    this.crudService.crate_Newpost(Post).then( res => {
      this.titles = "";
      this.description = "";
      this.imageUrl = "";
      this.fb = null;
      console.log(res);
      alert("You just add a new post");
    }).catch(error => {
      console.log(error);
    })  
  }
  
  onFileSelected(event) {
    let n = Date.now();
    console.log(event);
    const file = event.target.files[0];
    console.log(file);
    const filePath = `${n}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(`${n}`, file);
    console.log(task);
    task.snapshotChanges().pipe(
        finalize(() => {
          this.downloadURL = fileRef.getDownloadURL();
          this.downloadURL.subscribe(url => {
            if (url) {
              this.fb = url;
            }
            console.log(this.fb);
          });
        })
      )
      .subscribe(url => {
        if (url) {
          console.log(url);
        }
      });
  }



}
