import {Component, OnInit} from '@angular/core';
import {DatabaseService} from 'app/services/database.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    payload;

    constructor(private database: DatabaseService) {
    }

    ngOnInit() {
    }

}
