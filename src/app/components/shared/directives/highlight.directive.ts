import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
    selector: '[appHighlight]'
})
export class HighlightDirective {

    @HostBinding('class')
    attrClass: string;

    @HostListener('mouseenter', ['$event'])
    enter(event: Event): void {
        this.attrClass = 'headingClass';
    }

    @HostListener('mouseleave', ['$event'])
    leave(event: Event): void {
        this.attrClass = '';
    }

}
