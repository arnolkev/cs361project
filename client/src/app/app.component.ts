import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { DatabaseService } from 'app/services/database.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    public auth: AuthService,
    private router: Router
  ) {
    // Comment out this method call if using
    // hash-based routing
    auth.handleAuthentication();
  }

  dashboardRedirect() {
    this.router.navigate(['/dashboard']);
  }
}
