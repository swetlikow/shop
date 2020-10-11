import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Product } from '../../products/product/product';
import { CartComponent } from './cart.component';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;
  let debugElement: DebugElement;
  let htmlElement: HTMLElement;
  const product: Product = new Product(1, 'TestName', 5, 10, false);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CartComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    component.product = product;

    debugElement = fixture.debugElement.query(By.css('.list-group-item'));
    htmlElement = debugElement.nativeElement;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create list-item content with product.name and product.count', () => {
    const listItemContent = `Product: ${product.name} Count: ${product.count}`;
    expect(htmlElement.innerText).toEqual(listItemContent);
  });
});
