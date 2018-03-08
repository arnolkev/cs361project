import {Routes} from '@angular/router';
import {DashboardComponent} from 'app/components/dashboard/dashboard.component';
import {SignupComponent} from './components/signup/signup.component';
import {SigninComponent} from './components/signin/signin.component';

export const ROUTES: Routes = [
    {path: '', component: SigninComponent},
    {path: 'signup', component: SignupComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: '**', redirectTo: ''}
];
