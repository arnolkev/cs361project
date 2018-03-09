 import {async, ComponentFixture, TestBed} from '@angular/core/testing';
 import {SigninComponent} from "./signin.component";
 import {DatabaseService} from "../../services/database.service";
 import {MatInputModule} from "@angular/material";
 import {FormsModule} from "@angular/forms";
 import {RouterTestingModule} from "@angular/router/testing";
 import {AuthService} from "../../services/auth.service";
 import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

 describe('SigninComponent', () => {
     let component: SigninComponent;
     let fixture: ComponentFixture<SigninComponent>;

     beforeEach(async(() => {
         TestBed.configureTestingModule({
             declarations: [SigninComponent],
             providers: [
                 DatabaseService,
                 AuthService
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
         fixture.detectChanges();
     });

     it('should create', () => {
         expect(component).toBeTruthy();
     });
 });
