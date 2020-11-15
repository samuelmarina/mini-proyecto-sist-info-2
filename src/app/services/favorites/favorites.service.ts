import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import firebase from "firebase/app"
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  constructor(
    private db: AngularFireDatabase
  ) { }

  like(user: firebase.User, characterId) {
    return this.db.list("/users/" + user.uid + "/favorites").push(characterId);
  }

  dislike(user: firebase.User, characterId) {
    this.getAll(user).snapshotChanges().pipe(take(1)).subscribe(x => {
      x.forEach(k => {
        this.getCharacter(user, k.key).valueChanges().pipe(take(1)).subscribe(m => {
          if(m === characterId){
            return this.db.object(("/users/" + user.uid + "/favorites/" + k.key)).remove();
          }
        })
      })
    })
  }

  getCharacter(user: firebase.User, id){
    return this.db.object("/users/" + user.uid + "/favorites/" + id);
  }

  getAll(user: firebase.User){
    return this.db.list("/users/" + user.uid + "/favorites");
  }


}
