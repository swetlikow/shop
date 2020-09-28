import { AbstractControl, ValidationErrors } from '@angular/forms';

export class CustomValidators {
  static lastNameLength(control: AbstractControl): ValidationErrors | null {
    if (control.value.length >= 3) {
      return null;
    }
    return { error: 'Last name length must be more than 3 characters' };
  }

  static lastNameLetters(control: AbstractControl): ValidationErrors | null {
    if (control.value.match(/\d+/g) !== null) {
      return { error: "Last name can't contain numbers" };
    }
    return null;
  }
}
