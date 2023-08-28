import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

 /**
  * Login user.
  * @param loginDetail - user details
  */
  login(loginDetail: { email: string, password: string }): void {
    console.log('loginDetail', loginDetail);
    // check for login here then update the user response in local storage
    const user: User = {
      id: 1,
      firstName: 'Test',
      fullName: 'Test Testing',
      avatar: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50.jpg',
      accountType: 'admin',
    }
    localStorage.setItem('loginCred', JSON.stringify(user));
  }

  /**
   * Check if user is already logged in.
   * @returns boolean
   */
  isUserLoggedIn(): boolean{
  return !!localStorage.getItem('loginCred');
  }

  /**
   * Get user details 
   * @returns user details
   */
  getUser(): User{
    return JSON.parse(localStorage.getItem('loginCred') ?? '[]');
  }

  /**
   * Logout user.
   */
  logout(): void {
    localStorage.removeItem('loginCred');
    this.router.navigate(['/auth/login']);
  }
}
