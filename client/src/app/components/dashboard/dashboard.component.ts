import {Component, OnInit} from '@angular/core';
import {DatabaseService} from 'app/services/database.service';
import {FormControl, FormGroup} from '@angular/forms'
import {AuthService} from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    accountTypes;
    userType;

    payload;

    constructor(private authService: AuthService,
        private database: DatabaseService,
        private router: Router
    ) {}

    ngOnInit() {

        this.accountTypes = this.database.getAccountTypes();
        this.userType = this.accountTypes[0];

        if (this.router.url === '/dashboard' && !this.authService.isLoggedIn()) {
            this.router.navigate(['/']);
        }

        this.userType = this.accountTypes[this.authService.getType()];
    }
}
