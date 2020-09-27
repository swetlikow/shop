import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { User } from '../../shared/models/user';
import { LocalStorageService } from '../../shared/services/local-storage.service';

@Component({
  selector: 'app-process-order',
  templateUrl: './process-order.component.html',
  styleUrls: ['./process-order.component.css'],
})
export class ProcessOrderComponent implements OnInit {
  userForm: FormGroup;
  user: User;

  constructor(
    private formBuilder: FormBuilder,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.user = this.localStorageService.getCurrentUser();
    this.buildForm();
  }

  private buildForm(): void {
    this.userForm = this.formBuilder.group({
      firstName: new FormControl('', {
        validators: [Validators.required, Validators.minLength(3)],
      }),
      lastName: new FormControl('', {
        validators: [Validators.required, Validators.minLength(3)],
      }),
      email: new FormControl(this.user.email, {
        validators: [Validators.required, Validators.minLength(3)],
      }),
      country: new FormControl('', {
        validators: [Validators.required, Validators.minLength(3)],
      }),
      city: new FormControl('', {
        validators: [Validators.required, Validators.minLength(3)],
      }),
      street: new FormControl('', {
        validators: [Validators.required, Validators.minLength(3)],
      }),
      zip: new FormControl('', {
        validators: [Validators.required, Validators.minLength(3)],
      }),
    });
  }

  onSave(): void {
    console.log(JSON.stringify(this.userForm.value));
  }
}
