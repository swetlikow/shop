import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DivFontSizeDirective } from './directives/div-font-size.directive';
import { HighlightDirective } from './directives/highlight.directive';
import { OrderProductsPipe } from './pipes/order-products.pipe';



@NgModule({
    declarations: [HighlightDirective, DivFontSizeDirective, OrderProductsPipe],
    imports: [CommonModule],
    exports: [HighlightDirective, DivFontSizeDirective, OrderProductsPipe]
})
export class SharedModule { }
