import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn = false;

  login(email: string, password: string) {
    // TODO: implement authentication logic here
    this.isLoggedIn = true;
  }

  logout() {
    this.isLoggedIn = false;
  }
}
