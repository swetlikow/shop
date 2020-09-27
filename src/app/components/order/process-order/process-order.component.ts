import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { CartListService } from '../../carts/cart-list.service';
import { Product } from '../../products/product/product';
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
  sentOrder = false;
  products: Product[];

  constructor(
    private formBuilder: FormBuilder,
    private localStorageService: LocalStorageService,
    private cartListService: CartListService
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
      lastName: new FormControl(''),
      email: new FormControl(this.user.email, {
        validators: [
          Validators.required,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+'),
        ],
      }),
      isAddress: new FormControl(false),
      country: new FormControl(''),
      city: new FormControl(''),
      street: new FormControl(''),
      zip: new FormControl(''),
    });
  }

  onSave(): void {
    this.products = this.cartListService.getBoughtProduct();
    this.sentOrder = true;
  }
}
