 /* tslint:disable:no-unused-variable */

 import {TestBed, async} from '@angular/core/testing';
 import {AppComponent} from './app.component';
 import {RouterModule} from "@angular/router";
import {AuthService} from "./services/auth.service";
 import {APP_BASE_HREF} from "@angular/common";
 import {ROUTES} from "./app.routes";
 import {SigninComponent} from "./components/signin/signin.component";
 import {SignupComponent} from "./components/signup/signup.component";
 import {DashboardComponent} from "./components/dashboard/dashboard.component";
 import {
     MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule,
     MatSelectModule, MatRadioModule
 } from "@angular/material";
 import {FormsModule, ReactiveFormsModule} from "@angular/forms";
 import {HttpClientModule} from "@angular/common/http";
 import {SUserDashComponent} from "./components/s-user-dash/s-user-dash.component";
 import {HUserDashComponent} from "./components/h-user-dash/h-user-dash.component";
 import {PUserDashComponent} from "./components/p-user-dash/p-user-dash.component";

 describe('AppComponent', () => {
     beforeEach(() => {
         TestBed.configureTestingModule({
             declarations: [
                 AppComponent,
                 SigninComponent,
                 SignupComponent,
                 DashboardComponent,
                 SUserDashComponent,
                 HUserDashComponent,
                 PUserDashComponent
             ],
             imports: [
                 RouterModule.forRoot(ROUTES),
                 MatFormFieldModule,
                 MatInputModule,
                 MatDatepickerModule,
                 MatNativeDateModule,
                 MatSelectModule,
                 MatRadioModule,
                 ReactiveFormsModule,
                FormsModule,
                 HttpClientModule
             ],
             providers: [
                 AuthService,
                 {provide: APP_BASE_HREF, useValue: '/'}
             ]
         });
         TestBed.compileComponents();
     });

     it('should create the app', async(() => {
         const fixture = TestBed.createComponent(AppComponent);
         const app = fixture.debugElement.componentInstance;
         expect(app).toBeTruthy();
     }));
});
