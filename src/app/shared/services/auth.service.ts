import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

 /**
  *  Login user.
  * @param loginDetail - user details
  */
  login(loginDetail: { email: string, password: string }): void {
    localStorage.setItem('loginCred', JSON.stringify(loginDetail))
  }

  /**
   * Check if user is already logged in.
   * @returns boolean
   */
  isUserLoggedIn(): boolean{
  return !!localStorage.getItem('loginCred');
  }

  /**
   * Logout user.
   */
  logout() {
    localStorage.removeItem('loginCred');
    this.router.navigate(['/auth/login'])
  }
}
