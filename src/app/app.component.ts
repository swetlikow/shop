import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './components/shared/services/auth.service';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    constructor(public authService: AuthService, private router: Router) { }

    onLogin() {
        this.authService.login();
    }

    onLogout() {
        this.authService.logout();
        this.router.navigate(['home']);
    }
}
