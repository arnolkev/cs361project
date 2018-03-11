import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  loggedIn = false;

  constructor(public authService: AuthService,
              public router: Router) {
  }

  ngOnInit() {
      this.loggedIn = this.authService.isLoggedIn();

      this.authService.loggedIn.subscribe(() => {
          this.loggedIn = true;
      });

      this.authService.loggedOut.subscribe(() => {
          this.loggedIn = false;
      });
  }

  logOut() {
      this.loggedIn = false;
      this.authService.logOut();
      this.router.navigate(['']);
  }
}
