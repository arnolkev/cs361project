import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {SignupComponent} from "./signup.component";
import {DatabaseService} from "../../services/database.service";
import {
    MatInputModule, MatDatepickerModule, MatSelectModule, MatNativeDateModule,
    MatRadioModule
} from "@angular/material";
import {RouterTestingModule} from "@angular/router/testing";
import {AuthService} from "../../services/auth.service";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DebugElement} from "@angular/core";
import {By} from "@angular/platform-browser";

describe('SignupComponent', () => {
    let component: SignupComponent;
    let fixture: ComponentFixture<SignupComponent>;
    let de: DebugElement;
    let authService: AuthService;
    let email, password, fname, lname, dob, city, state, accountType, submitBtn;

    function setInputValue(input: HTMLInputElement, value: string, event: string = 'input') {
        fixture.detectChanges();
        input.value = value;
        input.dispatchEvent(new Event(event));
        fixture.detectChanges();
    }

    function setCommonInputFields() {
        setInputValue(email, 'test@test.com');
        setInputValue(password, 'qwerty');
        setInputValue(fname, 'Jane');
        setInputValue(lname, 'Doe');
        component.dob.setValue(new Date());
        setInputValue(city, 'Beaverton');
        component.state.setValue('Oregon');
        fixture.detectChanges();
    }

    beforeEach(async(() => {
        authService = new AuthService();
        TestBed.configureTestingModule({
            declarations: [SignupComponent],
            providers: [
                DatabaseService,
                {provide: AuthService, useValue: authService}
            ],
            imports: [
                MatInputModule,
                MatDatepickerModule,
                MatNativeDateModule,
                MatSelectModule,
                MatRadioModule,
                RouterTestingModule,
                BrowserAnimationsModule,
                FormsModule,
                ReactiveFormsModule
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SignupComponent);
        component = fixture.componentInstance;
        de = fixture.debugElement;
        email = de.query(By.css('[name="email"]')).nativeElement;
        password = de.query(By.css('[name="password"]')).nativeElement;
        fname = de.query(By.css('[name="fname"]')).nativeElement;
        lname = de.query(By.css('[name="lname"]')).nativeElement;
        dob = de.query(By.css('[formcontrolname="dob"]')).nativeElement;
        city = de.query(By.css('[formcontrolname="city"]')).nativeElement;
        state = de.query(By.css('[formcontrolname="state"]')).nativeElement;
        accountType = de.query(By.css('[formcontrolname="type"]')).nativeElement;
        submitBtn = de.query(By.css('#submit'));
        fixture.detectChanges();
        spyOn(authService, 'logIn');
        spyOn((<any>component).router, 'navigate');
    });

    it('should create component', () => {
        expect(component).toBeTruthy();
    });

    it('should create account and redirect to dashboard for homeless user', async() => {
        fixture.whenStable().then(() => {
            setCommonInputFields();
            component.type.setValue('Homeless User');
            component.gender.setValue('Female');
            component.veteran.setValue('Not Veteran');
            fixture.detectChanges();
            submitBtn.triggerEventHandler('click', {});
            expect(authService.logIn).toHaveBeenCalled();
        });
    });

    it('should create account and redirect to dashboard for shelter employee user', async() => {
        fixture.whenStable().then(() => {
            setCommonInputFields();
            component.type.setValue('Shelter Employee');
            component.shelter.setValue(component.shelters[0]);
            fixture.detectChanges();
            submitBtn.triggerEventHandler('click', {});
            expect(authService.logIn).toHaveBeenCalled();
        });
    });

    it('should create account and redirect to dashboard for public employee user', async() => {
        fixture.whenStable().then(() => {
            setCommonInputFields();
            component.type.setValue('Public Employee');
            component.employer.setValue(component.employers[0]);
            fixture.detectChanges();
            submitBtn.triggerEventHandler('click', {});
            expect(authService.logIn).toHaveBeenCalled();
        });
    });

    it('should not create account if some fields are not filled in', async() => {
        fixture.whenStable().then(() => {
            fixture.detectChanges();
            submitBtn.triggerEventHandler('click', {});
            expect(authService.logIn).not.toHaveBeenCalled();
        });
    });
});
