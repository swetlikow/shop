import { Directive } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
  Validators,
} from '@angular/forms';

@Directive({
  selector: '[appEmailValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: EmailValidationDirective,
      multi: true,
    },
  ],
})
export class EmailValidationDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    if (Validators.required(control) != null) {
      return { error: 'Please enter your email.' };
    }
    if (control.value.match(/\d+/g) !== null) {
      return { error: 'Email can not contain numbers.' };
    }
    if (Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+')(control) != null) {
      return { error: 'Please enter valid email.' };
    }
    return null;
  }
}
