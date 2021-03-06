import {
    Component,
    OnInit
} from '@angular/core';

import {
    FormControl,
    FormGroup,
    Validators
} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from "../../services/auth.service";
import { DatabaseService } from 'app/services/database.service';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

    // List of states for select dropdown
    states;
    // List of account types for accountType dropdown
    accountTypes;
    // List of genders for gender dropdown
    genders;
    // Once server shelter endpoint is set up, delete hardcoded shelter list
    shelters;
    // Once server employer endpoint is set up, delete hardcoded employer list
    employers;

    // Form control variables
    email: FormControl;
    password: FormControl;
    fname: FormControl;
    lname: FormControl;
    dob: FormControl;
    city: FormControl;
    state: FormControl;
    type: FormControl;
    gender: FormControl;
    veteran: FormControl;
    shelter: FormControl;
    employer: FormControl;
    // Form group variables
    formGroup: FormGroup;

    constructor(
        private authService: AuthService,
        private router: Router,
        private database: DatabaseService
    ) {
    }

    ngOnInit() {

        this.states = this.database.getStates();
        this.accountTypes = this.database.getAccountTypes();
        this.genders = this.database.getGenders();
        this.shelters = this.database.getShelters();
        this.employers = this.database.getEmployers();

        if (this.router.url === '/signup' && this.authService.isLoggedIn()) {
            this.router.navigate(['/dashboard']);
        }

        // Once routes are updated in service, remove comment below
        /*this.databaseService.getSheltersFromDatabase().subscribe(res => {
         this.shelters = res;
         });

         this.databaseService.getEmployersFromDatabase().subscribe(res => {
         this.employers = res;
         });*/

        // Declare form controls, declare form group, link to template
        this.email = new FormControl(null, [Validators.required]);
        this.password = new FormControl(null, [Validators.required]);
        this.fname = new FormControl(null, [Validators.required]);
        this.lname = new FormControl(null, [Validators.required]);
        this.dob = new FormControl(null, [Validators.required]);
        this.city = new FormControl(null, [Validators.required]);
        this.state = new FormControl(null, [Validators.required]);
        this.type = new FormControl(null, [Validators.required]);
        this.gender = new FormControl(null, [Validators.required]);
        this.veteran = new FormControl(null, [Validators.required]);
        this.shelter = new FormControl(null, [Validators.required]);
        this.employer = new FormControl(null, [Validators.required]);
        this.formGroup = new FormGroup({
            email: this.email,
            password: this.password,
            fname: this.fname,
            lname: this.lname,
            dob: this.dob,
            city: this.city,
            state: this.state,
            type: this.type,
            gender: this.gender,
            veteran: this.veteran,
            shelter: this.shelter,
            employer: this.employer
        });
    }

    onSubmit() {
        // Create payload to submit to server
        const payload = {
            email: this.email.value,
            password: this.password.value,
            fname: this.fname.value,
            lname: this.lname.value,
            dob: this.dob.value,
            city: this.city.value,
            state: this.state.value,
            type: this.type.value,
        };

        // Add payload fields based on account type
        if (this.type.value === this.accountTypes[0]) {
            this.authService.setType(0);
            payload['gender'] = this.gender.value;
            payload['veteran'] = this.veteran.value;
        } else if (this.type.value === this.accountTypes[1]) {
            this.authService.setType(1);
            this.authService.setShelter(this.shelter.value);
            payload['shelter'] = this.shelter.value;
        } else {
            this.authService.setType(2);
            payload['employer'] = this.employer.value;
        }

        // Post payload to server to update user account
        // this.databaseService.postUser(payload).subscribe();

        // Redirect to appropriate page
        this.router.navigate(['dashboard']);
        this.authService.logIn();
    }

    // Check if form is valid to submit
    isValid(): boolean {

        // If all generic fields are valid
        // tslint:disable-next-line:max-line-length
        if (this.email.valid && this.password.valid && this.fname.valid && this.lname.valid && this.dob.valid && this.city.valid && this.state.valid && this.type.valid) {
            // If fields specific to account type are valid
            if (this.type.value === this.accountTypes[0]) {
                if (this.gender.valid && this.veteran.valid) {
                    return true;
                } else {
                    return false;
                }
            } else if (this.type.value === this.accountTypes[1]) {
                if (this.shelter.valid) {
                    return true;
                } else {
                    return false;
                }
            } else if (this.type.value === this.accountTypes[2]) {
                if (this.employer.valid) {
                    return true;
                } else {
                    return false;
                }
            }
        };

        return false;
    }
}
