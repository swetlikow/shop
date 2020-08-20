import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    constructor(private router: Router) { }

    onHome(): void {
        this.router.navigate(['home']);
    }

    onAbout(): void {
        this.router.navigate(['about']);
    }

    onProducts(): void {
        this.router.navigate(['products']);
    }
}
