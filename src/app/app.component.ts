import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { AuthModule, User } from '@angular/fire/auth';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthService } from './services/auth.service';
import { Observable, of } from 'rxjs';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoginComponent, AuthModule, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  user$: Observable<User | null> = of(null);

  constructor(private auth: AuthService, private firestore: Firestore) {
    this.user$ = this.auth.user$;

    this.getItems('bills').subscribe((bills) => {
      console.log(bills);
    });
  }

  getItems(collectionName: string): Observable<any[]> {
    const colRef = collection(this.firestore, collectionName);
    return collectionData(colRef, { idField: 'id' }) as Observable<any[]>;
  }
}
