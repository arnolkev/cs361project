import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {SigninComponent} from "./signin.component";
import {DatabaseService} from "../../services/database.service";
import {MatInputModule} from "@angular/material";
import {FormsModule} from "@angular/forms";
import {RouterTestingModule} from "@angular/router/testing";
import {AuthService} from "../../services/auth.service";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {DebugElement} from "@angular/core";
import {By} from "@angular/platform-browser";
import {tick} from "@angular/core/testing";
import {fakeAsync} from "@angular/core/testing";

describe('SigninComponent', () => {
    let component: SigninComponent;
    let fixture: ComponentFixture<SigninComponent>;
    let de: DebugElement;
    let formEl;
    let emailEl;
    let passwordEl;
    let submitEl;
    let testEmail = 'test@test.com';
    let testPassword = 'qwerty';
    let authService;

    function setInputValue(input: HTMLInputElement, value: string) {
        fixture.detectChanges();
        input.value = value;
        input.dispatchEvent(new Event('input'));
        fixture.detectChanges();
    }

    beforeEach(async(() => {
        authService = new AuthService();
        TestBed.configureTestingModule({
            declarations: [SigninComponent],
            providers: [
                DatabaseService,
                {provide: AuthService, useValue: authService}
            ],
            imports: [
                MatInputModule,
                FormsModule,
                RouterTestingModule,
                BrowserAnimationsModule
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SigninComponent);
        component = fixture.componentInstance;
        de = fixture.debugElement;
        formEl = de.query(By.css('form'));
        emailEl = de.query(By.css('#email')).nativeElement;
        passwordEl = de.query(By.css('#password')).nativeElement;
        submitEl = de.query(By.css('#submit'));
        component.ngOnInit();
        fixture.detectChanges();
        spyOn(authService, 'logIn');
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should attempt to sign in if email and password are entered', async() => {
        fixture.whenStable().then(() => {
            setInputValue(emailEl, testEmail);
            setInputValue(passwordEl, testPassword);
            formEl.triggerEventHandler('submit', {});
            expect(authService.logIn).toHaveBeenCalled();
        })
    });

    it('should not attempt to sign in if email is not provided', async() => {
        fixture.whenStable().then(() => {
            setInputValue(passwordEl, testPassword);
            console.log(component.signinForm.form.valid);
            formEl.triggerEventHandler('submit', {});
            expect(authService.logIn).not.toHaveBeenCalled();
        });
    });

    it('should not attempt to sign in if password is not provided', async() => {
        fixture.whenStable().then(() => {
            setInputValue(emailEl, testEmail);
            console.log(component.signinForm.form.valid);
            formEl.triggerEventHandler('submit', {});
            expect(authService.logIn).not.toHaveBeenCalled();
        });
    });
});
