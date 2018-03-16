import {Component, ChangeDetectorRef} from '@angular/core';
import {DatabaseService} from 'app/services/database.service';
import {MatTableDataSource} from "@angular/material";

@Component({
    selector: 'app-a-user-dash',
    templateUrl: './a-user-dash.component.html',
    styleUrls: ['./a-user-dash.component.css']
})

export class AUserDashComponent {
    count: number;
    pendingVerifications: MatTableDataSource<Verification>;
    columns = ['type', 'name', 'email', 'employer', 'action'];

    constructor(private database: DatabaseService) {
    }

    ngOnInit() {
        this.fetchData();
    }

    removeFromDb(index) {
        this.database.removeVerification(index);
        this.fetchData();
    }

    fetchData() {
        let verifications = this.database.getPendingVerifications();
        this.count = verifications && verifications.length;
        this.pendingVerifications = new MatTableDataSource<Verification>(verifications);
    }
}

export interface Verification {
    type: string;
    name: string;
    email: string;
    employer: any;
}