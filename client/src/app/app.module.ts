import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, Http, RequestOptions } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatDatepickerModule, MatNativeDateModule, MatSelectModule, MatRadioModule } from '@angular/material';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ROUTES } from './app.routes';
import { CallbackComponent } from './components/callback/callback.component';
import { DatabaseService } from 'app/services/database.service';
import { ErrorHandlerService } from 'app/services/error-handler.service';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AccountDetailsFormComponent } from './components/account-details-form/account-details-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CallbackComponent,
    DashboardComponent,
    AccountDetailsFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES),
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatRadioModule,
    BrowserAnimationsModule
  ],
  providers: [

    ErrorHandlerService,
    DatabaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
