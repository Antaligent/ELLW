import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  get isLoggedIn(): boolean {
    return !!localStorage.getItem('authToken');
  }

  get userRole(): string {
    return localStorage.getItem('userRole') || '';
  }
}
