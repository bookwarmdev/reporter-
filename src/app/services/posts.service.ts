import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private db : AngularFirestore) { }

  getAllPost(){
    return this.db.collection('Post').valueChanges()
  }
}
