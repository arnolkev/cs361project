import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
    credentials = {
        email: '',
        password: ''
    };

    constructor(private router: Router,
                private authService: AuthService) {
    }

    ngOnInit() {
        if (this.router.url === '/' && this.authService.isLoggedIn()) {
            this.router.navigate(['/dashboard']);
        }
    }

    signIn() {
        this.authService.logIn();
        this.router.navigate(['dashboard']);
    }
}
