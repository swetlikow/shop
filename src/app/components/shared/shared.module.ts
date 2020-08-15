import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DivFontSizeDirective } from './directives/div-font-size.directive';
import { HighlightDirective } from './directives/highlight.directive';



@NgModule({
    declarations: [HighlightDirective, DivFontSizeDirective],
    imports: [CommonModule],
    exports: [HighlightDirective, DivFontSizeDirective]
})
export class SharedModule { }
