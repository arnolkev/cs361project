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

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

    // List of states for select dropdown
    states = [
        'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
        'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
        'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
        'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',
        'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania',
        'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
        'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
    ];

    // List of account types for accountType dropdown
    accountTypes = ['Homeless User', 'Shelter Employee', 'Public Employee'];

    // List of genders for gender dropdown
    genders = ['Male', 'Female', 'Other', 'Decline to Identify'];

    // Once server shelter endpoint is set up, delete hardcoded shelter list
    shelters = ['Shelter 1', 'Shelter 2', 'Shelter 3'];
    // Once server employer endpoint is set up, delete hardcoded employer list
    employers = ['Employer 1', 'Employer 2', 'Employer 3'];

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

    constructor(private authService: AuthService,
                private router: Router) {
    }

    ngOnInit() {

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
        }
        ;

        return false;
    }
}
