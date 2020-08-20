import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
    @ViewChild('appTitle') appTitle: ElementRef<HTMLHeadingElement>;

    ngAfterViewInit(): void {
        this.appTitle.nativeElement.innerText = 'PRODUCTS SHOP';
    }
}
