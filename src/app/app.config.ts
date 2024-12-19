import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getMessaging, provideMessaging } from '@angular/fire/messaging';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'abancay-shop-pos',
        appId: '1:415867153722:web:439241a0c037043e0ff403',
        storageBucket: 'abancay-shop-pos.firebasestorage.app',
        // locationId: 'us-central',
        apiKey: 'AIzaSyCblIE6uLJiHO0B4Eb82G9JrSCUu7bS8-Y',
        authDomain: 'abancay-shop-pos.firebaseapp.com',
        messagingSenderId: '415867153722',
        measurementId: 'G-485XKZZTE2',
      })
    ),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideMessaging(() => getMessaging()),
  ],
};
