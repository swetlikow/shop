import { AbstractControl, ValidationErrors } from '@angular/forms';

export class CustomValidators {
  static lastName(c: AbstractControl): ValidationErrors | null {
    if (c.value.length >= 3) {
      return null;
    }
    return { error: 'Last name length must be more than 3' };
  }
}
