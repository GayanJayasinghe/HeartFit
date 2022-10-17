import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    public auth: AngularFireAuth
  ) {}

  public async createUserWithEmailAndPassword(userEmail, userPassword): Promise<firebase.User> {
    return new Promise((resolve, reject)=>{
      this.auth.createUserWithEmailAndPassword(userEmail,userPassword).then((result)=>{
        resolve(result.user);
      }).catch(error=>{
        reject(error);
      });
    });
  };
  public async signInWithEmailAndPassword(userEmail, userPassword): Promise<firebase.User> {
    return new Promise((resolve, reject)=>{
      this.auth.signInWithEmailAndPassword(userEmail,userPassword).then((result)=>{
        resolve(result.user);
      }).catch(error=>{
        reject(error);
      });
    });
  };

  public async getCurrentUser(): Promise<firebase.User> {
    const result = await this.auth.currentUser;
    return result;
  };

  public getIdToken(): Observable<string | null> {
    const currentUser = this.getCurrentUser();
    if (!currentUser) {
      return;
    }
    const result = this.auth.idToken;
    return result;
  }

  public async sendPasswordResetEmail(userEmail): Promise<void> {
    await this.auth.sendPasswordResetEmail(userEmail);
  };

  public async signOut(): Promise<void> {
    await this.auth.signOut();
  };

}
