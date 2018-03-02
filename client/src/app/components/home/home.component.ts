import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/services/auth.service';
import { DatabaseService } from 'app/services/database.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    public auth: AuthService,
    private database: DatabaseService
  ) { }

  ngOnInit() {
  }

}

