import {Component, OnInit, ViewChildren, AfterViewInit} from '@angular/core';
import {DatabaseService} from 'app/services/database.service';
import {FormControl, FormGroup} from "@angular/forms"
import {AuthService} from "../../services/auth.service";
import {MatOption} from "@angular/material"
@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, AfterViewInit {

    @ViewChildren(MatOption) options: MatOption;
    
    
    
    accountTypes = ['Homeless User', 'Shelter Employee', 'Public Employee'];
    
    
    payload;

    
    type: FormControl;
    formGroup: FormGroup;
    
    constructor(private authService: AuthService,
                private database: DatabaseService) {
    }

    ngOnInit() {
        
        
        this.type = new FormControl(null)
        
        this.formGroup = new FormGroup({
                    type: this.type
                })
        
        
       
       
    }

    ngAfterViewInit() {
        console.log(this.options[this.authService.getType()]);
    }
}
