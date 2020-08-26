import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DivFontSizeDirective } from './directives/div-font-size.directive';
import { HighlightDirective } from './directives/highlight.directive';
import { OrderProductsPipe } from './pipes/order-products.pipe';


const declar = [HighlightDirective, DivFontSizeDirective, OrderProductsPipe];

@NgModule({
  declarations: [...declar],
  imports: [CommonModule],
  exports: [...declar]
})
export class SharedModule { }
