import { Injectable } from '@angular/core';

import {AngularFirestore} from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(public firestore: AngularFirestore) { }

  create_Newuser(Record){
    return this.firestore.collection('Member').add(Record);
  }

  crate_Newpost(Post){
    return this.firestore.collection('Post').add(Post);
  }

}
