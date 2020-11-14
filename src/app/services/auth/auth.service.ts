import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from "firebase/app"
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<firebase.User>

  constructor(private afAuth: AngularFireAuth) { 
    this.user$ = afAuth.authState;
  }

  login() {
    this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout() { 
    this.afAuth.signOut();
  }
}
