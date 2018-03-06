import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CallbackComponent } from './components/callback/callback.component';
import { DashboardComponent } from 'app/components/dashboard/dashboard.component';
import { AccountDetailsFormComponent } from 'app/components/account-details-form/account-details-form.component';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'callback', component: CallbackComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'account-details', component: AccountDetailsFormComponent},
  { path: '**', redirectTo: '' }
];
