import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http, RequestOptions } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AuthHttp, AuthConfig } from 'angular2-jwt';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ROUTES } from './app.routes';
import { AuthService } from './services/auth.service';
import { CallbackComponent } from './components/callback/callback.component';
import { DatabaseService } from 'app/services/database.service';
import { ErrorHandlerService } from 'app/services/error-handler.service';
import { DashboardComponent } from './components/dashboard/dashboard.component';


export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig({
    tokenGetter: (() => localStorage.getItem('access_token'))
  }), http, options);
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CallbackComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    AuthService,
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions]
    },
    ErrorHandlerService,
    DatabaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
