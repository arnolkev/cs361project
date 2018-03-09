// import {async, ComponentFixture, TestBed} from '@angular/core/testing';
//
// import {DashboardComponent} from './dashboard.component';
// import {
//     MatSelectModule, MatInputModule, MatFormFieldModule, MatDatepickerModule,
//     MatNativeDateModule, MatRadioModule
// } from "@angular/material";
// import {AuthService} from "../../services/auth.service";
// import {HUserDashComponent} from "../h-user-dash/h-user-dash.component";
// import {SUserDashComponent} from "../s-user-dash/s-user-dash.component";
// import {PUserDashComponent} from "../p-user-dash/p-user-dash.component";
// import {FormsModule, ReactiveFormsModule} from "@angular/forms";
// import {DatabaseService} from "../../services/database.service";
// import {HttpClientModule} from "@angular/common/http";
// import {ErrorHandlerService} from "../../services/error-handler.service";
// import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
//
// describe('DashboardComponent', () => {
//     let component: DashboardComponent;
//     let fixture: ComponentFixture<DashboardComponent>;
//
//     beforeEach(async(() => {
//         TestBed.configureTestingModule({
//             declarations: [
//                 DashboardComponent,
//                 HUserDashComponent,
//                 SUserDashComponent,
//                 PUserDashComponent
//             ],
//             imports: [
//                 MatInputModule,
//                 MatDatepickerModule,
//                 MatNativeDateModule,
//                 MatSelectModule,
//                 MatRadioModule,
//                 FormsModule,
//                 ReactiveFormsModule,
//                 HttpClientModule,
//                 BrowserAnimationsModule
//             ],
//             providers: [
//                 AuthService,
//                 DatabaseService,
//                 ErrorHandlerService
//             ]
//         })
//             .compileComponents();
//     }));
//
//     beforeEach(() => {
//         fixture = TestBed.createComponent(DashboardComponent);
//         component = fixture.componentInstance;
//         fixture.detectChanges();
//     });
//
//     it('should create', () => {
//         expect(component).toBeTruthy();
//     });
// });
