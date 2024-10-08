import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() { }

  isLoggedIn(): boolean {
    const token = localStorage.getItem('authToken');
    return token != null; // También puedes validar su expiración si es necesario
  }

  logout(): void {
    localStorage.removeItem('authToken');
  }
}
