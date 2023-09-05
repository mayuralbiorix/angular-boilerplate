import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { LoaderService } from 'src/app/shared/services/loader.service';
import { PasswordValidator } from 'src/app/shared/validators/password-strength.validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
   // reactive form group
   form!: FormGroup;

   // to hide/show the entered password
   hidePassword = true;
 
   constructor(
     private fb: FormBuilder,
     private auth: AuthService, 
     private router: Router,
     private titleService: Title,
     private loaderService: LoaderService,
   ) { 
    this.titleService.setTitle('Login');
   }
 
   ngOnInit() {
     // reactive form intialize
     this.form = this.fb.group({
       email: ['test@gmail.com', [Validators.required, Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],
       password: ['Test@123', [Validators.required, Validators.minLength(8), PasswordValidator.PasswordStrengthValidator]],
     });
   }
 
   // getter to get the form controls
   get f() {
     return this.form.controls;
   }
 
   /**
    * Submit the user login details
    * @returns 
    */
   async login(): Promise<void> {
     if (this.form.invalid) {
       this.form.markAllAsTouched();
       return;
     }
     this.loaderService.show();
     try {
    setTimeout(()=>{
      this.auth.login({ ...this.form.value, userType: 'employee' });
      this.loaderService.hide();
      this.router.navigate(['/']);
    }, 2000)
     } catch (error) {
      console.log('error');
      this.loaderService.hide();
     } 
   }
}
