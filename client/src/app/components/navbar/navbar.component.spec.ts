import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NavbarComponent} from './navbar.component';
import {AuthService} from "../../services/auth.service";
import {RouterTestingModule} from "@angular/router/testing";
import {Router} from "@angular/router";
import {DebugElement} from "@angular/core";
import {By} from "@angular/platform-browser";
import {DashboardComponent} from "../dashboard/dashboard.component";

describe('NavbarComponent', () => {
    let component: NavbarComponent;
    let fixture: ComponentFixture<NavbarComponent>;
    let authService: AuthService;
    let logOutBtn: DebugElement;

    beforeEach(async(() => {
        authService = new AuthService();
        spyOn(authService, 'logOut');
        TestBed.configureTestingModule({
            declarations: [
                NavbarComponent
            ],
            imports: [
                RouterTestingModule
            ],
            providers: [
                {provide: AuthService, useValue: authService}
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NavbarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        component.loggedIn = true;
        fixture.detectChanges();
        logOutBtn = fixture.debugElement.query(By.css('#logout'));
        spyOn((<any>component).router, 'navigate');
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should clear user session in local storage when Log Out button is clicked', () => {
        logOutBtn.triggerEventHandler('click', {});
        expect(authService.logOut).toHaveBeenCalled();
    });
});
