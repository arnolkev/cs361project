import {Component, OnInit} from '@angular/core';
import {DatabaseService} from 'app/services/database.service';
import {FormControl, FormGroup} from '@angular/forms'
import {AuthService} from '../../services/auth.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    accountTypes = ['Homeless User', 'Shelter Employee', 'Public Employee'];
    userType = this.accountTypes[0];

    payload;

    constructor(private authService: AuthService,
        private database: DatabaseService) {
    }

    ngOnInit() {
        this.userType = this.accountTypes[this.authService.getType()];
    }
}
