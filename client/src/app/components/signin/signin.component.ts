import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from "../../services/auth.service";

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.css']
})
export class SigninComponent {
    credentials = {
        email: '',
        password: ''
    };

    constructor(private router: Router,
                private authService: AuthService) {
    }

    signIn() {
        this.authService.logIn();
        this.router.navigate(['dashboard']);
    }
}
