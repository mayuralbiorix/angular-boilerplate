import { AbstractControl, ValidationErrors } from "@angular/forms";
export class PasswordValidator {

  // password strength validator
  static PasswordStrengthValidator = function (control: AbstractControl): ValidationErrors | null {

    const value: string = control.value || '';

    if (!value) {
      return null;
    }

    const upperCaseCharacters = /[A-Z]+/g;
    if (upperCaseCharacters.test(value) === false) {
      return { passwordStrength: `Upper case required` };
    }

    const lowerCaseCharacters = /[a-z]+/g
    if (lowerCaseCharacters.test(value) === false) {
      return { passwordStrength: `Lower case required` };
    }


    const numberCharacters = /[0-9]+/g
    if (numberCharacters.test(value) === false) {
      return { passwordStrength: `Number required` };
    }

    const specialCharacters = /[!@#$%^&*()_+\-=\]{};':"\\|,.<>?]+/
    if (specialCharacters.test(value) === false) {
      return { passwordStrength: `Special character required` };
    }
    return null;
  }
}

