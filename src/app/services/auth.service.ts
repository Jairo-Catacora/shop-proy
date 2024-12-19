import { Injectable } from '@angular/core';
import {
  Auth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  User,
} from '@angular/fire/auth';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private userSubject: BehaviorSubject<User | null> =
    new BehaviorSubject<User | null>(null);
  public user$: Observable<User | null> = this.userSubject.asObservable();

  constructor(private auth: Auth) {
    onAuthStateChanged(auth, (user) => {
      this.userSubject.next(user);
    });
  }

  async loginWithCredentials(email: string, password: string): Promise<void> {
    await signInWithEmailAndPassword(this.auth, email, password);
  }

  async loginWithGoogle(): Promise<void> {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(this.auth, new GoogleAuthProvider());
  }

  async logout(): Promise<void> {
    await this.auth.signOut();
  }
}
