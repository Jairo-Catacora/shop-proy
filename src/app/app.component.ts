import { AsyncPipe, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import {
  Auth,
  AuthModule,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  User,
} from '@angular/fire/auth';
import { BehaviorSubject, Observable } from 'rxjs';
import { RouterOutlet } from '@angular/router';
import { MainComponent } from "./main/main.component";
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainComponent, LoginComponent,AuthModule, AsyncPipe, JsonPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'shop';
  private userSubject: BehaviorSubject<User | null> =
    new BehaviorSubject<User | null>(null);
  public user$: Observable<User | null> = this.userSubject.asObservable();

  constructor(private auth: Auth) {
    onAuthStateChanged(auth, (user) => {
      this.userSubject.next(user);
    });
  }

  async loginWithGoogle(): Promise<void> {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(this.auth, new GoogleAuthProvider());
  }

  async logout(): Promise<void> {
    await this.auth.signOut();
  }
}
