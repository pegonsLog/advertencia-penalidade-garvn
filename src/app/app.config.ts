import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimationsAsync(), provideFirebaseApp(() => initializeApp({"projectId":"ni-garvn","appId":"1:685474518147:web:3fce911cf7170227a7f7b6","storageBucket":"ni-garvn.firebasestorage.app","apiKey":"AIzaSyB6brV7k7nGFczHNi4Te54XsYiuRzP06ck","authDomain":"ni-garvn.firebaseapp.com","messagingSenderId":"685474518147","measurementId":"G-Y23E3PFPEN"})), provideFirestore(() => getFirestore())]
};
