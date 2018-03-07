import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from 'app/services/database.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  loggedIn = false;

  constructor(
    private router: Router
  ) {}

  dashboardRedirect() {
    this.router.navigate(['/dashboard']);
  }
}
