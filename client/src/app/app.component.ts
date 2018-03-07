import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from "./services/auth.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
    loggedIn = false;

    constructor(private authService: AuthService,
                private router: Router) {
    }

    ngOnInit() {
        this.loggedIn = this.authService.isLoggedIn();

        this.authService.loggedIn.subscribe(() => {
            this.loggedIn = true;
        });

        this.authService.loggedOut.subscribe(() => {
            this.loggedIn = false;
        });
    }

    logOut() {
        this.loggedIn = false;
        this.authService.logOut();
        this.router.navigate(['']);
    }
}
