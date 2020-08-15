import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
    selector: '[appDivFontSize]'
})
export class DivFontSizeDirective {
    @Input('appDivFontSize') size: number;
    defaultSize = 14;

    constructor(private element: ElementRef, private renderer: Renderer2) { }

    @HostListener('mouseenter')
    onMouseEnter(): void {
        this.setFontSize(this.size);
    }
    @HostListener('mouseleave')
    onMouseLeave(): void {
        this.setFontSize(this.defaultSize);
    }
    private setFontSize(size: number): void {
        this.renderer.setStyle(this.element.nativeElement, 'font-size', `${size}px`);
    }
}
