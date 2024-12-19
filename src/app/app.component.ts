import { AsyncPipe, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import {
  Auth,
  AuthModule,
  onAuthStateChanged,
  User,
} from '@angular/fire/auth';
import { BehaviorSubject, Observable } from 'rxjs';
import { RouterOutlet } from '@angular/router';
import { MainComponent } from "./main/main.component";
import { LoginComponent } from './login/login.component';

@Component({
<<<<<<< HEAD
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainComponent, LoginComponent, AuthModule, AsyncPipe, JsonPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
=======
    selector: 'app-root',
    imports: [RouterOutlet, MainComponent, LoginComponent, AuthModule, AsyncPipe, JsonPipe],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
>>>>>>> ba0fc33adc2d328fafc542ecb21dd9e3e2e7c2b8
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
}