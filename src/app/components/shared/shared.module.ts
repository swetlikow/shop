import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DivFontSizeDirective } from './directives/div-font-size.directive';
import { EmailValidationDirective } from './directives/email-validation.directive';
import { HighlightDirective } from './directives/highlight.directive';
import { OrderProductsPipe } from './pipes/order-products.pipe';

const shared = [
  HighlightDirective,
  DivFontSizeDirective,
  OrderProductsPipe,
  EmailValidationDirective,
];

@NgModule({
  declarations: [...shared],
  imports: [CommonModule],
  exports: [...shared],
})
export class SharedModule {}
